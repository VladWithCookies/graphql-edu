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
