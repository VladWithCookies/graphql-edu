class Resolvers::UpdateArticle < GraphQL::Function
  argument :id, !types.ID
  argument :title, !types.String
  argument :content, !types.String

  type ArticleType

  def call(obj, args, ctx)
    article = Article.find(args[:id])
    article.update!(title: args[:title], content: args[:content])
    article
  end
end
