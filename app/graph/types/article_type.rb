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
