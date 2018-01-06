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
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['comment'],
  computed: {
    timeSinceCreation () {
      return moment(this.comment.created_at).fromNow()
    }
  }
}
</script>
