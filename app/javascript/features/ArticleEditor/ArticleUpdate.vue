<template>
  <article-layout>
    <loader v-if='loading' />
    <article-form
      v-else
      :article='article'
      :onSubmit='updateArticle'
      :onCancel='() => 42'
    />
  </article-layout>
</template>

<script>
import { editArticle } from 'graphql/articles'
import ArticleLayout from 'components/ArticleLayout'
import ArticleForm from 'components/ArticleForm'
import Loader from 'components/Loader'

export default {
  data: () => ({
    loading: 0
  }),
  apollo: {
    article: {
      query: editArticle,
      variables () {
        return { id: this.$route.params.id }
      }
    }
  },
  methods: {
    updateArticle () {
      if (!this.article.content || !this.article.title) return
    }
  },
  components: {
    ArticleLayout,
    ArticleForm,
    Loader,
  }
}
</script>
