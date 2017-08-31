<template>
  <div >
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import "assets/scss/markdown.scss";
  .markdown img{
    display: block !important;
    margin: auto !important;
    max-width: 100% !important;
    height: auto !important;
  }
  body {
        overflow-y: scroll;
    }
</style>
