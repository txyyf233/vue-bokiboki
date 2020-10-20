<template>
  <div>
    <headTop></headTop>
    <div style="height: 2000px;width: 100px;background-color: lightcoral;float: right"></div>
  </div>
</template>

<script>
import HeadTop from '@/components/middle/HeadTop'
export default {
  name: 'Main',
  data () {
    return {
    }
  },
  components: { HeadTop }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
