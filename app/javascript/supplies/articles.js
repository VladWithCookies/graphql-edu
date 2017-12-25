import Base from './base'
import gql from 'graphql-tag'

export default {
	extends: Base,
	data () {
		return {
			articles: [],
			article: {},
		}
	},
	apollo: {
		articles: {
			query: gql`
				{
	        articles {
						id
	          title
	          content
						created_at
	        }
				}
      `,
			loadingKey: 'articlesLoading',
		},
		article: {
			query: gql`
				{
					article(id: $id) {
						title
						content
					}
				}
			`
		}
	}
}
