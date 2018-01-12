import gql from 'graphql-tag'

export const CREATE_COMMENT = gql`
  mutation createComment($content: String!, $articleId: ID!) {
    createComment(content: $content, article_id: $articleId) {
      article_id
      content
      created_at
      user {
        first_name
        last_name
      }
    }
  }
`
