<template>
  <div class='ui form mb-20'>
    <div class='ui field'>
      <textarea-autosize
        v-model.trim='newComment.content'
        placeholder='Leave a comment...'
        rows='1'
      />
    </div>
    <button @click='createComment' class='ui inverted purple button'>
      Submit
    </button>

    <button @click='resetNewComment' class='ui secondary button'>
      Cancel
    </button>
  </div>
</template>

<script>
import { CREATE_COMMENT } from 'graphql/comments'
import { ARTICLE } from 'graphql/articles'

export default {
  data: () => ({
    newComment: {
      content: ''
    }
  }),
  computed: {
    articleId () {
      return this.$route.params.id
    }
  },
  methods: {
    createComment () {
      const { content } = this.newComment

      if (!content) return

      this.$apollo.mutate({
        mutation: CREATE_COMMENT,
        variables: {
          articleId: this.articleId,
          content,
        },
        update: (store, { data: { createComment } }) => {
          const query = { query: ARTICLE, variables: { id: this.articleId } }
          const data = store.readQuery(query)

          data.article.comments.push(createComment)
          store.writeQuery({ ...query, data })
          this.newComment.content = ''
        }
      })
    },
    resetNewComment () {
      this.newComment.content = ''
    }
  }
}
</script>
