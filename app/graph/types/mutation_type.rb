MutationType = GraphQL::ObjectType.define do
  name 'Mutation'

  field :createArticle, function: Resolvers::CreateArticle.new
  field :updateArticle, function: Resolvers::UpdateArticle.new
  field :destroyArticle, function: Resolvers::DestroyArticle.new

  field :createLike, function: Resolvers::CreateLike.new
  field :destroyLike, function: Resolvers::DestroyLike.new

  field :createComment, function: Resolvers::CreateComment.new
  field :destroyComment, function: Resolvers::DestroyComment.new
end
