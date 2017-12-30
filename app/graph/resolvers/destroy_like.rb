class Resolvers::DestroyLike < GraphQL::Function
  argument :id, !types.ID

  type LikeType

  def call(obj, args, ctx)
    Like.destroy(args[:id])
  end
end
