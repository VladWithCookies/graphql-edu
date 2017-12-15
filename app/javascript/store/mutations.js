import moment from 'moment'

export default {
  createArticle (state, newArticle) {
    state.newArticle = {
      date: '',
      title: '',
      author: 'Author Name',
      content: '',
      imageSrc: '',
      comments: []
    }
    state.articles.push({
      ...newArticle,
      date: moment(),
      id: `${state.articles.length + 1}`
    })
  },
  createComment (state, { newComment, article }) {
    state.newComment = {
      content: '',
      author: 'Author Name'
    }
    article.comments.push({ ...newComment, date: moment() }) // FIXME: temp solution
  },
  resetNewComment (state) {
    state.newComment = {
      content: '',
      author: 'Author Name'
    }
  },
  resetNewArticle (state) {
    state.newArticle = {
      date: '',
      title: '',
      author: 'Author Name',
      content: '',
      imageSrc: '',
      comments: []
    }
  },
  deleteArticle (state, article) {
    const index = state.articles.indexOf(article)
    state.articles.splice(index, 1)
  }
}
