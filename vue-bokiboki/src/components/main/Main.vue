<template>
  <div>
    <!--导航栏-->
    <headTop></headTop>
    <el-row style="margin-top: 5px">
      <el-col class="hidden-md-and-down" :lg="1">&nbsp;</el-col>
      <!--左侧展示栏-->
      <leftVue ref="leftVue"></leftVue>
      <!--右侧展示栏-->
      <rightVue ref="rightVue"></rightVue>
      <el-col class="hidden-md-and-down" :lg="1">&nbsp;</el-col>
    </el-row>
      <!--<div style="height: 200px;width: 200px">
        <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
      </div>-->
    <!--发布上传栏-->
    <div id="vu-add" class="vu-fixed" @click="uploadClick"><i class="el-icon el-icon-cherry"></i></div>
    <upload-vue  ref="uploadVue"></upload-vue>
  </div>
</template>

<script>
import HeadTop from '@/components/middle/HeadTop'
import LeftVue from '@/components/main/Left'
import RightVue from '@/components/main/Right'
import UploadVue from '@/components/main/Upload'
export default {
  name: 'Main',
  components: {HeadTop, LeftVue, RightVue, UploadVue},
  data () {
    return {
      // 搜索条件headTop
      search: '',
      // 发布弹出层状态uploadVue
      addMainCard: false,
      // 错误图片
      errorHandler: '',
      // 富文本内容
      content: '',
      // 富文本工具栏
      editorOption: {
        placeholder: '编辑文章内容'
      }
    }
  },
  methods: {
    // 提交搜索
    searchMethods (search) {
      this.search = search
      this.$refs.leftVue.mainList = []
      this.$refs.leftVue.getList(1, 28, search)
    },
    // 上传按钮
    uploadClick () {
      this.$refs.uploadVue.addMainCard = true
    }
  },
  watch: {
    $route (to, from) {
      this.$router.go(0)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /deep/ .el-image-viewer__close > .el-icon-circle-close {
    color: rgba(5,102,116,1);
  }
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
    background-color: rgba(5,102,116,1);
  }
  #vu-add {
    bottom: 50px;
  }
</style>
