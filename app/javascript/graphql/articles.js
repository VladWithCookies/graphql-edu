import gql from 'graphql-tag'

export const ALL_ARTICLES = gql`
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

export const ARTICLE = gql`
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

export const EDIT_ARTICLE = gql`
  query article ($id: ID!) {
    article(id: $id) {
      id
      title
      content
    }
  }
`

export const CREATE_ARTICLE = gql`
  mutation createArticle ($title: String!, $content: String!) {
    createArticle(title: $title, content: $content) {
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

export const UPDATE_ARTICLE = gql`
  mutation updateArticle ($id: ID!, $title: String!, $content: String!) {
    updateArticle(id: $id, title: $title, content: $content) {
      id
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
export const DESTROY_ARTICLE = gql`
  mutation destroyArticle($id: ID!) {
    destroyArticle(id: $id) {
      id
    }
  }
`
