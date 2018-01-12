<template>
  <article-layout>
    <loader v-if='loading' />
    <article-form
      v-else
      :article='editedArticle'
      :onSubmit='updateArticle'
      :onCancel='cancelEditing'
    />
  </article-layout>
</template>

<script>
import { EDIT_ARTICLE, UPDATE_ARTICLE, ARTICLE } from 'graphql'
import ArticleLayout from 'components/ArticleLayout'
import ArticleForm from 'components/ArticleForm'
import Loader from 'components/Loader'

export default {
  data: () => ({
    loading: 0,
    editedArticle: { title: '', content: ''}
  }),
  apollo: {
    article: {
      query: EDIT_ARTICLE,
      variables () {
        return { id: this.$route.params.id }
      },
      update ({ article: { title, content, id } }) {
        this.editedArticle = {
          id,
          title,
          content
        }
      }
    }
  },
  methods: {
    updateArticle () {
      const { id, title, content } = this.editedArticle

      if (!content || !title) return

      this.$apollo.mutate({
        mutation: UPDATE_ARTICLE,
        variables: {
          id,
          title,
          content,
        },
        update: (store, { data: { updateArticle } }) => {
          const query = { query: ARTICLE, variables: { id: updateArticle.id } }
          const data = store.readQuery(query)
          data.article = updateArticle
          store.writeQuery({ ...query, data })
        }
      }).then(({ data: { updateArticle } }) =>
        this.$router.push({ path: `/articles/${updateArticle.id}` })
      )
    },
    cancelEditing () {
      this.$router.push({ path: '/articles' })
    }
  },
  components: {
    ArticleLayout,
    ArticleForm,
    Loader,
  }
}
</script>
