<template>
  <auth-layout>
    <div class='text container'>
      <h1 class='ui header'>Sign up</h1>
      <div class='ui form'>
        <div class='field'>
          <label>Email</label>
          <input type='email' placeholder='Email'>
        </div>
        <div class='field'>
          <label>Password</label>
          <input type='password' placeholder='Password'>
        </div>
        <button class='ui button' type='submit'>Submit</button>
      </div>
    </div>
  </auth-layout>
</template>

<script>
import AuthLayout from 'components/AuthLayout'

export default {
  components: {
    AuthLayout,
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
