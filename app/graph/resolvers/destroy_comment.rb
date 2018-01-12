class Resolvers::DestroyComment < GraphQL::Function
  argument :id, !types.ID

  type CommentType

  def call(obj, args, ctx)
    Comment.destroy(args[:id])
  end
end
