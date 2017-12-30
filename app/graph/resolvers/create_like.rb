class Resolvers::CreateLike < GraphQL::Function
  argument :article_id, !types.ID

  type LikeType

  def call(obj, args, ctx)
    Like.create!(
      article_id: args[:article_id],
      user: ctx[:current_user]
    )
  end
end
