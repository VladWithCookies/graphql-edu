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
import { mapActions, mapGetters } from 'vuex'
import ArticleLayout from 'components/ArticleLayout'
import ArticleForm from 'components/ArticleForm'

export default {
  components: {
    ArticleLayout,
    ArticleForm,
  },
  computed: mapGetters(['newArticle']),
  methods: {
    ...mapActions(['createArticle']),
    createArticle () {
      const newArticle = this.newArticle

      if (!newArticle.content || !newArticle.title) return

      this.$store.dispatch('createArticle')
      this.$router.push('/')
    },
    resetNewArticle() {
      this.$store.dispatch('resetNewArticle')
    }
  }
}
</script>
