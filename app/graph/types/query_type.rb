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
