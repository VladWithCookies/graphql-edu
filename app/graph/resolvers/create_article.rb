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
