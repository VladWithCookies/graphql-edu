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
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters(['newComment']),
  methods: {
    ...mapActions(['createComment']),
    createComment () {
      const newComment = this.newComment

      if (!newComment.content) return

      this.$store.dispatch('createComment')
    },
    resetNewComment () {
      this.$store.dispatch('resetNewComment')
    }
  }
}
</script>
