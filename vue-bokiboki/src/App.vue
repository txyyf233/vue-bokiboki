<template>
  <div id="app" :style="{width : appWidth + 'px'}">
    <router-view/>
  </div>
</template>

<script>
var oldWidth = window.innerWidth
var newWidth
oldWidth = oldWidth > 600 ? oldWidth : 600
export default {
  name: 'App',
  data () {
    return {
      appWidth: oldWidth
    }
  },
  mounted () {
    window.onresize = () => {
      newWidth = window.innerWidth
      if (newWidth > 600) {
        oldWidth = newWidth
        this.appWidth = oldWidth
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
