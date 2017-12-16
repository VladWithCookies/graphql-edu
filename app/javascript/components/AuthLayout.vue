<template>
  <div class='ui container'>
    <div class='auth-layout'>
      <div class='content'>
        <main-header />
        <slot />
      </div>
      <main-footer />
    </div>
  </div>
</template>

<script>
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'

export default {
  components: {
    MainHeader,
    MainFooter,
  }
}
</script>

<style>
.auth-layout {
  display: flex !important;
  min-height: 100vh !important;
  flex-direction: column !important;
}
.content {
  flex: 1;
}
</style>
