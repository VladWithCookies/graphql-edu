ArticleType = GraphQL::ObjectType.define do
  name 'Article'

  field :id, !types.ID
  field :title, !types.String
  field :content, !types.String
  field :created_at, !types.String
end
