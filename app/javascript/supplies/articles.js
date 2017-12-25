import Base from './base'
import gql from 'graphql-tag'

export default {
	extends: Base,
	data () {
		return {
			articles: [],
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
	        }
				}
      `,
			loadingKey: 'loading',
		}
	}
}
