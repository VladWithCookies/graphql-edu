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
import { articles } from 'graphql/articles'
import { isEmpty } from 'lodash'
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
      query: articles,
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

    }
  }
}
</script>
