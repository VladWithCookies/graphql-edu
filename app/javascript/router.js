import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleList from 'features/ArticleList/ArticleList'
import ArticleCreate from 'features/ArticleEditor/ArticleCreate'
import ArticleUpdate from 'features/ArticleEditor/ArticleUpdate'
import Article from 'features/Article/Article'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: ArticleList
    },
    {
      path: '/editor',
      component: ArticleCreate
    },
    {
      path: '/articles/:id',
      name: 'article',
      component: Article
    },
    {
      path: '/articles/:id/edit',
      name: 'articleEdit',
      component: ArticleUpdate
    }
  ]
})
