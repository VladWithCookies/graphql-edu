<template>
  <div class='navbar mb-60 mt-60'>
    <router-link to='/'>Home</router-link>
    <router-link to='/editor'>Editor</router-link>
  </div>
</template>

<style>
.navbar a {
  color: #000;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-weight: bold;
  padding: 20px;
  cursor: pointer;
  font-size: 24px;
}
.navbar a:hover {
  background-color: #1B1C1D;
  color: #fff;
}
</style>
