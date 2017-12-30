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
