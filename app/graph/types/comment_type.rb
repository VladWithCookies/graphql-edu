CommentType = GraphQL::ObjectType.define do
  name 'Comment'

  field :content, !types.String
  field :created_at, !types.String

  field :user, UserType do
    resolve -> (comment, args, ctx) { comment.user }
  end
end
