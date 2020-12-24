<template>
  <div>
    <!---------------------------------------导航栏----------------------------------->
    <headTop></headTop>
    <!---------------------------------------个人主页----------------------------------->
    <el-row style="margin-top: 5px">
      <el-col class="hidden-md-and-down" :lg="4">&nbsp;</el-col>
      <el-col  :xs="24" :sm="24"  :lg="16">
        <div style="background-color: white;margin: 30px 0 20px;width: 130px;text-align: center;padding-top: 5px">
          <img :src="headSrc" style="width: 120px"/>
        </div>
        <el-collapse accordion v-model="activeNames">
          <el-collapse-item name="发布">
            <template slot="title">
              <span style="padding-left: 20px;font-size: 20px;color: rgba(0,0,0,0.6)">发布</span>
            </template>
            <div >
            </div>
          </el-collapse-item>
          <el-collapse-item  name="消息">
            <template slot="title">
              <span style="padding-left: 20px;font-size: 20px;color: rgba(0,0,0,0.6)">消息</span>
            </template>
            <div></div>
          </el-collapse-item>
          <el-collapse-item  name="采集板">
            <template slot="title">
              <span style="padding-left: 20px;font-size: 20px;color: rgba(0,0,0,0.6)">采集板</span>
            </template>
            <div></div>
          </el-collapse-item>
          <el-collapse-item  name="设置">
            <template slot="title">
              <span style="padding-left: 20px;font-size: 20px;color: rgba(0,0,0,0.6)">设置</span>
            </template>
            <div></div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import HeadTop from '@/components/middle/HeadTop'
export default {
  name: 'PersonalCenter',
  components: {HeadTop},
  data () {
    return {
      activeNames: this.$route.query.activeNames,
      headSrc: 'https://img.erp.ctrl.com.cn/group1/M00/01/9C/PNAg4F_JnxiAb8nIAAE5fHZhYlo865.jpg'
    }
  },
  watch: {
    $route (to, from) {
      this.$router.go(0)
    }
  }
}
</script>
<style scoped>
  /deep/ .el-collapse-item__header{
    background-color: rgba(102,191,191,0.5);
    height: 70px;
  }
</style>
