<template>
  <div>
    <headTop></headTop>
    <el-row>
      <el-col :xs="12" :sm="6" :lg="4">1</el-col>
      <el-col :xs="12" :sm="6" :lg="4">2</el-col>
      <el-col class="hidden-xs-only" :sm="6" :lg="4">3</el-col>
      <el-col class="hidden-xs-only" :sm="6" :lg="4">4</el-col>
      <el-col class="hidden-xs-only hidden-md-and-down" :lg="4">5</el-col>
      <el-col class="hidden-xs-only hidden-md-and-down" :lg="4">6</el-col>
    </el-row>
    <div id="vu-add" class="vu-fixed"><i class="el-icon el-icon-cherry"></i></div>
    <div id="vu-massage" class="vu-fixed"><i class="el-icon el-icon-chat-dot-square"></i></div>
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
  .vu-fixed {
    width: 40px;
    height: 40px;
    position: fixed;
    right: 22px;
    color: rgba(0,0,0,0.8);
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: rgba(67,138,94,0);
    border-radius: 30px;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
    z-index: 999;
  }
  .vu-fixed:hover {
    background-color: rgba(67,138,94,1);
  }
  #vu-massage {
    bottom: 20px;
  }
  #vu-add {
    bottom: 80px;
  }
</style>
