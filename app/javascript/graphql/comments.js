import gql from 'graphql-tag'

export const CREATE_COMMENT = gql`
  mutation createComment($content: String!, $articleId: ID!) {
    createComment(content: $content, article_id: $articleId) {
      id
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
export const DESTROY_COMMENT = gql`
  mutation destroyComment($id: ID!) {
    destroyComment(id: $id) {
      id
    }
  }
`
