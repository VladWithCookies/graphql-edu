import gql from 'graphql-tag'

export const articles = gql`
  {
    articles {
      id
      title
      content
      created_at
      author {
        first_name
        last_name
      }
      commentsCount
      likesCount
    }
  }
`

export const article = gql`
  query article ($id: ID!) {
    article(id: $id) {
      title
      content
      likes {
        user {
          first_name
          last_name
        }
      }
      comments {
        content
        created_at
        user {
          first_name
          last_name
        }
      }
    }
  }
`
export const editArticle = gql`
  query article ($id: ID!) {
    article(id: $id) {
      title
      content
    }
  }
`
