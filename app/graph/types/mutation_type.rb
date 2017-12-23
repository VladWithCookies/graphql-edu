MutationType = GraphQL::ObjectType.define do
  name 'Mutation'

  field :createArticle, function: Resolvers::CreateArticle.new
  field :updateArticle, function: Resolvers::UpdateArticle.new
  field :destroyArticle, function: Resolvers::DestroyArticle.new
end
