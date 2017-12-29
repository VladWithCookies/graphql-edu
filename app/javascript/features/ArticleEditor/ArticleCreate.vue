<template>
  <article-layout class='mb-60'>
    <article-form
      :article='newArticle'
      :onSubmit='createArticle'
      :onCancel='resetNewArticle'
    />
  </article-layout>
</template>

<script>
import moment from 'moment'
import ArticleLayout from 'components/ArticleLayout'
import ArticleForm from 'components/ArticleForm'

export default {
  data: () => ({
    newArticle: {
      content: '',
      title: ''
    }
  }),
  components: {
    ArticleLayout,
    ArticleForm,
  },
  methods: {
    createArticle () {
      const newArticle = this.newArticle

      if (!newArticle.content || !newArticle.title) return
    },
    resetNewArticle() {
      this.newArticle = { content: '', title: '' }
    }
  }
}
</script>
