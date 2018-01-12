CommentType = GraphQL::ObjectType.define do
  name 'Comment'

  field :id, !types.ID
  field :article_id, !types.ID
  field :content, !types.String
  field :created_at, !types.String

  field :user, UserType do
    resolve -> (comment, args, ctx) { comment.user }
  end
end
