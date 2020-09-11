<head>
  <link rel="icon" href="head_logo.png" type="image/x-icon">
</head>
<template>
  <div id="app" :style="{width:appWidth + 'px'}">
    <router-view/>
  </div>
</template>

<script>
var oldWidth = document.documentElement.clientWidth
oldWidth = oldWidth > 600 ? oldWidth : 600
export default {
  name: 'App',
  data () {
    return {
      appWidth: oldWidth
    }
  },
  mounted () {
    var newWidth = document.documentElement.clientWidth
    window.onresize = () => {
      if (newWidth > 600) {
        oldWidth = newWidth
        this.appWidth = newWidth
      }
    }
  }
}
</script>

<style>
  #app {
    height: 800px;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.2);
  }
</style>
