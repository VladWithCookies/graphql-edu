import { find } from 'lodash'

export default {
  articles: (state) => state.articles,
  newArticle: (state) => state.newArticle,
  article: (state) => find(
    state.articles,
    ({ id }) => id === state.route.params.id
  ),
  comments: (state, getters) => getters.article && getters.article.comments,
  newComment: (state) => state.newComment
}
