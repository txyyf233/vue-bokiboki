<template>
  <div id="vu-main" :style="{width: mainWidth}" >
    <el-row>
      <el-col :xs="12" :sm="6" :md="6" :lg="4"><div class="vu-label-div"></div></el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="4"><div class="vu-label-div"></div></el-col>
      <el-col :sm="6" :md="6" :lg="4" :style="{display: mainHidden}"><div class="vu-label-div"></div></el-col>
      <el-col :sm="6" :md="6" :lg="4" :style="{display: mainHidden}"><div class="vu-label-div"></div></el-col>
      <el-col :span="4" :style="{display: mainHiddenA}"><div class="vu-label-div"></div></el-col>
      <el-col :span="4" :style="{display: mainHiddenA}"><div class="vu-label-div"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      mainWidth: this.store.state.appWidth,
      mainHidden: '',
      mainHiddenA: ''
    }
  },
  watch: {
    mainWidth (value) {
      alert(value)
      if (value < 768) {
        this.mainWidth = 'none'
        this.mainHiddenA = 'none'
      } else if (this.value > 768 && this.value < 1220) {
        this.mainWidth = ''
        this.mainHiddenA = 'none'
      } else {
        this.mainWidth = ''
        this.mainHiddenA = ''
      }
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
  .vu-label-div {
    height: 300px;
    margin: 10px 10px 10px 10px;
    border-radius: 3px;
    box-shadow: rgba(0,0,0,0.5);
    background-color: #438a5e;
  }
</style>
