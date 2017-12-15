<template>
  <div class='empty-list'>
    There are currently no articles. Do you want to
    <router-link to='/editor'> create </router-link>
    the first one?
  </div>
</template>

<style>
  .empty-list {
    text-align: center;
    color: rgba(0,0,0,.4);
    font-size: 1.5rem;
  }
</style>
