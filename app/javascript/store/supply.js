export default {
  use: ['Articles'],
  inject ({ Articles }) {
    return {
      getters: {
        allArticles: () => Articles.articles,
        articlesLoading: () => !Articles.ready,
      }
    }
  }
}
