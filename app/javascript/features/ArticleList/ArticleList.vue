<template>
  <article-layout>
    <loader v-if='loading' />
    <article-card
      v-else
      v-for='article in articles'
      :key='article.id'
      :article='article'
      :deleteArticle='deleteArticle'
    />
    <empty-list v-if='showEmptyList' />
  </article-layout>
</template>

<script>
import { ALL_ARTICLES, DESTROY_ARTICLE } from 'graphql/articles'
import { isEmpty, remove } from 'lodash'
import { destroyArticle } from 'graphql/articles'
import ArticleLayout from 'components/ArticleLayout'
import ArticleCard from './ArticleCard'
import EmptyList from 'components/EmptyList'
import Loader from 'components/Loader'

export default {
  data: () => ({
    loading: 0
  }),
  apollo: {
    articles: {
      query: ALL_ARTICLES,
    }
  },
  components: {
    ArticleLayout,
    ArticleCard,
    EmptyList,
    Loader,
  },
  computed: {
    showEmptyList () {
      return isEmpty(this.articles) && !this.loading
    }
  },
  methods: {
    deleteArticle (article) {
      this.$apollo.mutate({
        mutation: DESTROY_ARTICLE,
        variables: {
          id: article.id
        },
        update: (store) => {
          const query = { query: ALL_ARTICLES }
          const data = store.readQuery(query)

          remove(data.articles, ({ id }) => id === article.id)
          store.writeQuery({ ...query, data })
        }
      })
    }
  }
}
</script>
