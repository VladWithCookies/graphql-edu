<template>
  <div class='ui container'>
    <div class='article-layout'>
      <div class='content'>
        <main-header />
        <navbar />
        <slot />
      </div>
      <main-footer />
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'

export default {
  name: 'article-layout',
  components: {
    Navbar,
    MainFooter,
    MainHeader,
  }
}
</script>

<style>
.article-layout {
  display: flex !important;
  min-height: 100vh !important;
  flex-direction: column !important;
}
.content {
  flex: 1;
}
</style>
