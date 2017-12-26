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
import ArticleLayout from 'components/ArticleLayout'
import ArticleForm from 'components/ArticleForm'

export default {
  methods: {
    updateArticle () {
      const article = this.article

      if (!article.content || !article.title) return
    }
  },
  components: {
    ArticleLayout,
    ArticleForm,
  }
}
</script>
