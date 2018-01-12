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
import { CREATE_ARTICLE, ALL_ARTICLES } from 'graphql'
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
      const { title, content } = this.newArticle

      if (!content || !title) return
      this.$apollo.mutate({
        mutation: CREATE_ARTICLE,
        variables: {
          title,
          content
        },
        update: (store, { data: { createArticle } }) => {
          const query = { query: ALL_ARTICLES }
          const data = store.readQuery(query)

          data.articles.push(createArticle)
          store.writeQuery({ ...query, data })
        }
      }).then(({ data }) =>
        this.$router.push({ path: `/articles/${data.createArticle.id}` })
      )
    },
    resetNewArticle() {
      this.newArticle = { content: '', title: '' }
    }
  }
}
</script>
