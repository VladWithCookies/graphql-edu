LikeType = GraphQL::ObjectType.define do
  name  'Like'

  field :user, UserType do
    resolve -> (like, args, ctx) { like.user }
  end
end
