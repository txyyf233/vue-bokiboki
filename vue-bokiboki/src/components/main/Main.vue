<template>
  <div id="vu-main">
    <el-row>
      <el-col :span="4"><div class="vu-label-div"></div></el-col>
      <el-col :span="4"><div class="vu-label-div"></div></el-col>
      <el-col :span="4"><div class="vu-label-div"></div></el-col>
      <el-col :span="4"><div class="vu-label-div"></div></el-col>
      <el-col :span="8"><div class="vu-label-div"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="vu-label-div"></div></el-col>
      <el-col :span="4"><div class="vu-label-div"></div></el-col>
      <el-col :span="4"><div class="vu-label-div"></div></el-col>
      <el-col :span="4"><div class="vu-label-div"></div></el-col>
      <el-col :span="8"><div class="vu-label-div"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }
  #vu-main {
  }
  .vu-label-div {
    height: 500px;
    margin: 10px 10px 10px 10px;
    border-radius: 3px;
    box-shadow: rgba(0,0,0,0.5);
    background-color: #438a5e;
  }
</style>
