<template>
  <div id="vuMain">{{msg}}
    <div>
      <img id="vuHeadImg" src="@/assets/bokiboki.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: ''
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
    z-index: 999;
    background-color: #438a5e;
  }
  #vuHeadImg {
    margin: 10px 50px;
    height: 40px;
  }
</style>
