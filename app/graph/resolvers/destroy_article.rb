class Resolvers::DestroyArticle < GraphQL::Function
  argument :id, !types.ID

  type ArticleType

  def call(obj, args, ctx)
    Article.destroy(args[:id])
  end
end
