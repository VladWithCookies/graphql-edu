<template>
  <article-layout>
    <article-form
      :article='article'
      :onSubmit='updateArticle'
      :onCancel='() => 42'
    />
  </article-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleLayout from 'components/ArticleLayout'
import ArticleForm from 'components/ArticleForm'

export default {
  computed: mapGetters(['article']),
  methods: {
    updateArticle () {
      const article = this.article

      if (!article.content || !article.title) return

      this.$router.push(`/articles/${article.id}`)
    }
  },
  components: {
    ArticleLayout,
    ArticleForm,
  }
}
</script>
