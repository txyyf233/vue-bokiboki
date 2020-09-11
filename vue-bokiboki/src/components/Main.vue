<template>
  <div id="vuMain">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: '123'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #vuMain {
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0px;
    z-index: 4396;
    background-color: rgba(67,138,94,1);
  }
</style>
