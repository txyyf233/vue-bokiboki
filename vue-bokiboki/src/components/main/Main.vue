<template>
  <div>
    <headTop></headTop>
    <el-row>
      <el-col :xs="12" :sm="6" :lg="4">1</el-col>
      <el-col :xs="12" :sm="6" :lg="4">2</el-col>
      <el-col class="hidden-xs-only" :sm="6" :lg="4">3</el-col>
      <el-col class="hidden-xs-only" :sm="6" :lg="4">4</el-col>
      <el-col class="hidden-xs-only hidden-lg-and-down" :lg="4">5</el-col>
      <el-col class="hidden-xs-only hidden-lg-and-down" :lg="4">6</el-col>
    </el-row>
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
  .vu-menu {
    height: 40px;
    margin: 5px 0;
    text-align: center;
    line-height:40px;
    background-color: white;
  }
  .el-tag {
    background-color: #438a5e;
    color: rgba(0,0,0,0.8);
  }
</style>
