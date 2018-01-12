<template>
  <div class='comment'>
    <a class='avatar'>
      <img src='https://picsum.photos/200'>
    </a>
    <div class='content'>
      <a class='author'>
        {{comment.user.first_name}} {{comment.user.last_name}}
      </a>
      <div class='metadata'>
        <span class='date'>{{timeSinceCreation}}</span>
      </div>
      <div class='text'>{{comment.content}}</div>
      <div class='actions'>
        <a @click='deleteComment'>Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { remove } from 'utils'
import { ARTICLE, DESTROY_COMMENT } from 'graphql'

export default {
  props: ['comment'],
  computed: {
    timeSinceCreation () {
      return moment(this.comment.created_at).fromNow()
    },
    articleId () {
      return this.$route.params.id
    }
  },
  methods: {
    deleteComment () {
      this.$apollo.mutate({
        mutation: DESTROY_COMMENT,
        variables: { id: this.comment.id },
        update: (store, { data: { destroyComment: { id } } }) => {
          const query = { query: ARTICLE, variables: { id: this.articleId } }
          const data = store.readQuery(query)

          remove(data.article.comments, (comment) => comment.id === id)
          store.writeQuery({ ...query, data })
        }
      })
    }
  }
}
</script>
