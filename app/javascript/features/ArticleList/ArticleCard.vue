<template>
  <div class='ui fluid card'>
    <div class='content'>
      <div class='author'>
        <div class="right floated meta">{{timeSinceCreation}}</div>
        <img class='avatar' src='https://picsum.photos/200' />
        <span class='ml-10 meta'>
          {{article.author.first_name}} {{article.author.last_name}}
        </span>
      </div>
    </div>
    <router-link :to="{ name: 'article', params: { id: article.id } }" class='fluid image'>
      <img src='https://picsum.photos/g/900/600' />
    </router-link>
    <div class='content'>
      <router-link :to="{ name: 'article', params: { id: article.id } }" class='header'>
        {{article.title}}
      </router-link>
      <div class='description'>{{articleDescription}}</div>
    </div>
    <div class='extra content'>
      <span class='left floated'>
        <i class='like icon'></i>
        {{article.likesCount}}
      </span>
      <span class='ml-10'>
        <i class='comment icon' />
        {{article.commentsCount}}
      </span>
      <span @click='deleteArticle(article)' class='right floated cursor-pointer'>
        <i class='trash icon' />
      </span>
      <router-link :to="{ name: 'articleEdit', params: { id: article.id } }" class='right floated cursor-pointer'>
        <i class='pencil icon' />
      </router-link>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import { truncate } from 'utils'

  export default {
    props: ['article', 'deleteArticle'],
    computed: {
      timeSinceCreation () {
        return moment(this.article.created_at).fromNow()
      },
      articleDescription () {
        return truncate(this.article.content, { length: 400 })
      }
    }
  }
</script>
