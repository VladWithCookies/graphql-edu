export default {
	supply: {
		use: ['Articles'],
		inject ({ Articles }) {
			return {
				getters: {
					allArticles: () => Articles.articles,
					articlesLoading: () => !Articles.ready,
				},
			}
		},
	},
	getters: {
		articlesCount: (state, getters) => getters['allArticles'].length,
	},
}
