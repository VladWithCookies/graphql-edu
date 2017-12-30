# Graphql/REST comparison

## Controllers
### REST
REST in rails has sepparate controller for each resource and ```index```, ```show```, ```create```, ```update```, ```destroy``` actions.
```ruby
class ArticlesController < ApplicationController
  before_action :find_article, except: %I(index create)

  def index
    @articles = Article.all
    render json: @articles.includes(:user, :comments)
  end

  def show
    render json: @article.includes(:user, :comments)
  end

  def create
    article = Article.create!(article_params)
    render json: article
  end

  def update
    @article.update!(article_params)
    render json: article
  end

  def destory
    @article.destroy
  end

  private

  def find_article
    @article = Article.find(params[:id])
  end

  def articles_params
    params.permit(:title, :content)
  end
end
```

```ruby
class CommentsController < ApplicationController
  def create
    comment = Comment.create!(comment_params)
    render json: comment
  end

  private

  def comment_params
    params.permit(:content).to_h.merge(
      user: current_user,
      article_id: params[:article_id]
    )
  end
end
```

```ruby
class LikesController < ApplicationController
  def create
    Like.create(user: current_user, article: params[:article_id])
  end

  def destroy
    Like.find(params[:like_id])
  end
end

```

### Graphql
Graphq in rails has single controller for all api requests and single action.
```ruby
class Api::V1::GraphqlsController < ApplicationController
  before_action :authenticate_user!

  def create
    query_string = params[:query]
    query_variables = params[:variables] || {}
    context = { current_user: current_user }
    result = Schema.execute(query_string, variables: query_variables, context: context)
    render json: result
  end
end
```

## Routes

### REST
```ruby
Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  root to: 'home#index'

  resources :articles, except: :edit do
    resources :comments, only: %i(create)
    resources :likes, only: %i(crete destroy)
  end
end

```

### Graphql
```ruby
Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  
  root to: 'home#index'

  namespace :api do
    namespace :v1 do
      post "graphql" => "graphqls#create"
    end
  end
end
```

## Serializers
### REST
```ruby
class ArticleSerializer < ApplicationSerializer
  attributes :title, :content

  belongs_to :user
  has_many :comments
  has_many :likes
end
```

```ruby
class CommentSerializer < ApplicationSerializer
  attributes :content

  belongs_to :user
  belongs_to :article
end

```

### Graphql
Graphql api doesn't need serializers.

##  Schema

### REST 
REST api doesn't need that.

### Grapgql
```ruby
# app/graph/schema.rb

Schema = GraphQL::Schema.define do
  query QueryType
  mutation MutationType
end
```

## Types
### REST 
REST api doesn't need that.

### Grapgql
```ruby
# app/graph/types/article_type.rb

ArticleType = GraphQL::ObjectType.define do
  name 'Article'

  field :id, !types.ID
  field :title, !types.String
  field :content, !types.String
  field :created_at, !types.String

  field :author, UserType do
    resolve -> (article, args, ctx) { article.user }
  end

  field :likes, !types[LikeType] do
    resolve -> (article, args, ctx) { article.likes }
  end

  field :comments, !types[CommentType] do
    resolve -> (article, args, ctx) { article.comments }
  end
end
```

```ruby
# app/graph/types/comment_type.rb

CommentType = GraphQL::ObjectType.define do
  name 'Comment'

  field :content, !types.String
  field :created_at, !types.String

  field :user, UserType do
    resolve -> (comment, args, ctx) { comment.user }
  end
end
```

```ruby
# app/graph/types/like_types.rb

LikeType = GraphQL::ObjectType.define do
  name  'Like'

  field :user, UserType do
    resolve -> (like, args, ctx) { like.user }
  end
end
```

```ruby
# app/graph/types/mutation_types.rb

MutationType = GraphQL::ObjectType.define do
  name 'Mutation'

  field :createArticle, function: Resolvers::CreateArticle.new
  field :updateArticle, function: Resolvers::UpdateArticle.new
  field :destroyArticle, function: Resolvers::DestroyArticle.new

  field :createLike, function: Resolvers::CreateLike.new
  field :destroyLike, function: Resolvers::DestroyLike.new

  field :createComment, function: Resolvers::CreateComment.new
end
```

```ruby
# app/graph/types/query_types.rb

QueryType = GraphQL::ObjectType.define do
  name 'Query'

  field :viewer, UserType do
    resolve -> (obj, args, ctx) { ctx[:current_user] }
  end

  field :articles, types[ArticleType] do
    resolve -> (obj, args, ctx) { Article.all }
  end

  field :article, ArticleType do
    argument :id, !types.ID

    resolve -> (obj, args, ctx) { Article.find(args[:id]) }
  end
end
```

```ruby
# app/graph/types/user_types.rb

UserType = GraphQL::ObjectType.define do
  name  'User'

  field :id, !types.ID
  field :email, !types.String
  field :first_name, !types.String
  field :last_name, !types.String
end
```

## Resolvers
### REST 
REST api doesn't need that.

### Graphql
```ruby
# app/graph/resolvers/create_article.rb

class Resolvers::CreateArticle < GraphQL::Function
  argument :title, !types.String
  argument :content, !types.String

  type ArticleType

  def call(obj, args, ctx)
    Article.create!(
      title: args[:title],
      content: args[:content],
      user: ctx[:current_user]
    )
  end
end
```

```ruby
# app/graph/resolvers/create_comment.rb

class Resolvers::CreateComment < GraphQL::Function
  argument :article_id, !types.ID
  argument :content, !types.String

  type CommentType

  def call(obj, args, ctx)
    Comment.create!(
      article_id: args[:article_id],
      content: args[:content],
      user: ctx[:current_user]
    )
  end
end
```

```ruby
# app/graph/resolvers/create_like.rb

class Resolvers::CreateLike < GraphQL::Function
  argument :article_id, !types.ID

  type LikeType

  def call(obj, args, ctx)
    Like.create!(
      article_id: args[:article_id],
      user: ctx[:current_user]
    )
  end
end
```

```ruby
# app/graph/resolvers/destroy_article.rb

class Resolvers::DestroyArticle < GraphQL::Function
  argument :id, !types.ID

  type ArticleType

  def call(obj, args, ctx)
    Article.destroy(args[:id])
  end
end
```

```ruby
# app/graph/resolvers/destroy_like.rb

class Resolvers::DestroyLike < GraphQL::Function
  argument :id, !types.ID

  type LikeType

  def call(obj, args, ctx)
    Like.destroy(args[:id])
  end
end
```

```ruby
# app/graph/resolvers/update_article.rb

class Resolvers::UpdateArticle < GraphQL::Function
  argument :id, !types.ID
  argument :title, !types.String
  argument :content, !types.String

  type ArticleType

  def call(obj, args, ctx)
    Article
      .find(args[:id])
      .update!(
        title: args[:title],
        content: args[:content]
      )
  end
end
```
