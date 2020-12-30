<template>
  <div>
    <!---------------------------------------导航栏----------------------------------->
    <headTop></headTop>
    <!---------------------------------------个人主页----------------------------------->
    <el-row style="margin-top: 5px">
      <el-col class="hidden-md-and-down" :lg="4">&nbsp;</el-col>
      <el-col  :xs="24" :sm="24"  :lg="16">
        <el-row>
          <el-col :span="24">
            <div>
              <div @click="updateHeadImgVisit = true" style="background-color: white;margin: 30px 10px 20px;padding: 5px;float: left">
                <img class="image" :src="headSrc" style="width: 120px;height: 120px"/>
              </div>
              <div style="float: left">
                今天的风儿
              </div>
            </div>
          </el-col>
          <el-col :span="24">
            <el-collapse accordion v-model="activeNames">
              <el-collapse-item name="发布">
                <template slot="title">
                  <span style="padding-left: 20px;font-size: 20px;color: rgba(0,0,0,0.6)">发布</span>
                </template>
                <div>
                </div>
              </el-collapse-item>
              <el-collapse-item  name="消息">
                <template slot="title">
                  <span style="padding-left: 20px;font-size: 20px;color: rgba(0,0,0,0.6)">消息</span>
                </template>
                <div>
                </div>
              </el-collapse-item>
              <el-collapse-item  name="采集板">
                <template slot="title">
                  <span style="padding-left: 20px;font-size: 20px;color: rgba(0,0,0,0.6)">采集板</span>
                </template>
                <div>
                </div>
              </el-collapse-item>
              <el-collapse-item  name="设置">
                <template slot="title">
                  <span style="padding-left: 20px;font-size: 20px;color: rgba(0,0,0,0.6)">设置</span>
                </template>
                <div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!------------------------------------修改头像------------------------------------>
    <el-dialog title="上传封面" :visible.sync="updateHeadImgVisit">
      <el-form class="el-form" :label-position="labelPosition" :model="updateHeadImgForm" status-icon :rules="rules" ref="updateHeadImgForm" label-width="0px">
        <el-form-item label="上传封面" prop="cardFile">
          <el-upload
            ref="upload"
            action="/api/file/upload"
            list-type="picture"
            :before-upload="handleBefore"
            :on-success="handleSuccess"
            :on-preview="handlePreview"
            :on-exceed="handleExceed"
            :http-request="httpUpLoad"
            :limit="1"
            :auto-upload="false">
            <el-button size="small" type="primary" style="background-color: rgba(5,102,116,1)">选取头像</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitCard" style="float: right;margin-left: 10px;background-color: rgba(5,102,116,1)">修改头像</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import HeadTop from '@/components/middle/HeadTop'
export default {
  name: 'PersonalCenter',
  components: {HeadTop},
  data () {
    var validateCardFile = (rule, value, callback) => {
      if (this.updateHeadImgForm.userImgUrl === '') {
        callback(new Error('请上传封面'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'top',
      activeNames: this.$route.query.activeNames,
      headSrc: this.$store.state.user.userImgUrl,
      updateHeadImgVisit: false,
      rules: {
        cardFile: [
          { validator: validateCardFile, trigger: 'blur' }
        ]
      },
      updateHeadImgForm: {
        // 上传图片
        userImgUrl: ''
      }
    }
  },
  methods: {
    // 文件上传达到上限
    handleExceed (files, fileList) {
      this.$message({message: '已达到上传上限', type: 'warning', duration: 1000})
    },
    // 上传文件之前的钩子
    handleBefore (file) {
      const picType = file.name.substring(file.name.lastIndexOf('.') + 1)
      const checkType = ['jpg', 'png', 'img', 'bmp', 'webp', 'jpeg', 'tif', 'gif']
      const isPic = checkType.indexOf(picType)
      const isLt2M = file.size / 1024 / 1024 < 10

      if (isPic < 0) {
        this.$message({message: '上传头像图片只能是 JPG 格式!', type: 'warning', duration: 1000})
      }
      if (!isLt2M) {
        this.$message({message: '上传头像图片大小不能超过 10MB!', type: 'warning', duration: 1000})
      }
      return isPic && isLt2M
    },
    // 文件上传成功
    handleSuccess (response, file, fileList) {
    },
    // 点击已上传文件钩子
    handlePreview (file) {
      this.updateHeadImgForm.dialogImageUrl = file.url
      this.updateHeadImgVisit.dialogVisible = true
    },
    httpUpLoad (params) {
      var file = params.file
      let formData = new window.FormData()
      formData.append('multipartFile', file)
      const loading = this.$loading({lock: true, background: 'rgba(255, 255, 255, 0.1)'})
      this.$axios({
        method: 'post',
        url: '/api/file/upload',
        data: formData,
        async: false,
        timeout: 60000
      }).then((response) => {
        var resposeData = response.data
        if (resposeData.code === '1') {
          this.$message({message: resposeData.message, type: 'success', duration: 1000})
          this.updateHeadImgForm.userImgUrl = resposeData.resource
          // 表单提交
          this.$refs['updateHeadImgForm'].validate((valid) => {
            if (valid) {
              this.$axios({
                method: 'post',
                url: '/api/user/updateHeadImg',
                data: this.$qs.stringify(this.updateHeadImgForm),
                timeout: 60000
              }).then((response) => {
                var resposeData = response.data
                if (resposeData.code === '1') {
                  this.$message({message: resposeData.message, type: 'success', duration: 1000})
                  this.updateHeadImgVisit = false
                  this.headSrc = this.updateHeadImgForm.userImgUrl
                  var user = this.$store.state.user
                  user.userImgUrl = this.headSrc
                  this.$store.commit('user', user)
                } else {
                  this.$message({message: resposeData.message, type: 'error', duration: 1000})
                }
              }).catch((error) =>
                this.$message({message: error, type: 'error', duration: 1000})
              )
            } else {
              return false
            }
          })
        } else {
          this.$message({message: resposeData.message, type: 'error', duration: 1000})
        }
      }).catch((error) => {
        this.$message({message: error, type: 'error', duration: 1000})
      }).finally(() => {
        loading.close()
      })
    },
    // 修改头像表单提交
    submitCard () {
      // 文件上传
      this.$refs.upload.submit()
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
  /deep/ .el-dialog {
    padding: 5px;
    min-width: 300px;
  }
  /deep/ .el-dialog__body {
    padding: 5px;
  }
  /deep/ .el-dialog__header {
    padding: 5px;
  }

  .image {
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    max-height: 1000px;
  }
</style>
