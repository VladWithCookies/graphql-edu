<template>
  <div class='article-layout'>
    <div class='content'>
      <navbar />
      <slot />
    </div>
    <main-footer />
  </div>
</template>

<script>
import Navbar from './Navbar'
import MainFooter from './MainFooter'

export default {
  name: 'article-layout',
  components: {
    Navbar,
    MainFooter,
  }
}
</script>

<style>
.article-layout {
  margin: 0% 20%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.content {
  flex: 1;
}
</style>
