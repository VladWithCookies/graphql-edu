<template>
  <article-layout>
    <loader v-if='loading' />
    <div v-else class='ui'>
      <!--<div class='ui fluid image'>
        <img :src='article.imageSrc' />
      </div>-->
      <div class='ui divider' />
      <div class='ui grid'>
        <statistic label='Views' :value='"N/A"' />
        <statistic label='Likes' :value='article.likes.length' />
        <statistic label='Comments' :value='"N/A"' />
      </div>
      <div class='ui divider' />
      <div class='ui header'>{{article.title}}</div>
      <div class='ui content mb-60'>{{article.content}}</div>
      <h4 class='ui horizontal divider header'>Comments</h4>
      <comment-form />
      <div class='ui comments'>
        <comment
          v-for='comment in article.comments'
          :key='comment.id'
          :comment='comment'
        />
      </div>
    </div>
  </article-layout>
</template>

<script>
import { article } from 'graphql/articles'
import ArticleLayout from 'components/ArticleLayout'
import CommentForm from './CommentForm'
import Statistic from './Statistic'
import Comment from './Comment'
import Loader from 'components/Loader'

export default {
  data () {
    return {
      loading: 0
    }
  },
  apollo: {
    article: {
      query: article,
      variables () {
        return { id: this.id }
      }
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  components: {
    ArticleLayout,
    CommentForm,
    Statistic,
    Comment,
    Loader,
  }
}
</script>
