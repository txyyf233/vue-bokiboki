<template>
  <div>
    <el-dialog title="动态发布" :visible.sync="addMainCard" @open="openDialog">
      <el-form class="el-form" :label-position="labelPosition" :model="addCardForm" status-icon :rules="rules" ref="addCardForm" label-width="0px">
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
            <el-button size="small" type="primary" style="background-color: rgba(5,102,116,1)">选取封面</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="采集板（不存在可新建）" prop="cardType">
          <el-select
            style="width: 100%"
            v-model="addCardForm.cardType"
            filterable
            allow-create
            default-first-option
            placeholder="请选择采集板">
            <el-option
              v-for="item in cardTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标题或简介" prop="cardContext">
          <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 6}" v-model="addCardForm.cardContext" clearable  prop="cardContext"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitCard" style="float: right;margin-left: 10px;background-color: rgba(5,102,116,1)">发布</el-button>
          <el-button type="primary" @click="submitCardReset" style="float: right;background-color: rgba(5,102,116,1)">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data () {
    var validateCardContext = (rule, value, callback) => {
      if (value.trim() === '') {
        callback(new Error('请填写标题/简介'))
      } else {
        callback()
      }
    }
    var validateCardFile = (rule, value, callback) => {
      if (this.addCardForm.cardImageUrl === '') {
        callback(new Error('请上传封面'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'top',
      // 发布弹出层状态uploadVue
      addMainCard: false,
      // 错误图片
      errorHandler: '',
      rules: {
        cardContext: [
          { validator: validateCardContext, trigger: 'blur' }
        ],
        cardFile: [
          { validator: validateCardFile, trigger: 'blur' }
        ]
      },
      // 采集板下拉框展示值
      cardTypeOptions: [{
        value: '表情',
        label: '表情'
      }],
      cardTypeValue: [],
      // 文件预览？？
      dialogImageUrl: '',
      dialogVisible: false,
      addCardForm: {
        // 发布表单标题
        cardContext: '',
        // 下拉框选中值
        cardType: '',
        // 上传图片
        cardImageUrl: ''
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
      this.addCardForm.dialogImageUrl = file.url
      this.addMainCard.dialogVisible = true
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
          this.addCardForm.cardImageUrl = resposeData.resource
          // 表单提交
          this.$refs['addCardForm'].validate((valid) => {
            if (valid) {
              this.$axios({
                method: 'post',
                url: '/api/addCard/addCard',
                data: this.$qs.stringify(this.addCardForm),
                timeout: 60000
              }).then((response) => {
                var resposeData = response.data
                if (resposeData.code === '1') {
                  this.$message({message: resposeData.message, type: 'success', duration: 1000})
                  this.addMainCard = false
                  this.submitCardReset()
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
    // 卡片表单提交
    submitCard () {
      // 文件上传
      this.$refs.upload.submit()
    },
    // 重置表单
    submitCardReset () {
      this.$refs['addCardForm'].resetFields()
      this.$refs.upload.clearFiles()
    },
    // 打开上传弹窗回调
    openDialog () {
      if (JSON.stringify(this.$store.state.user) === '{}') {
        return this.$router.push('/login')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /deep/ .el-image-viewer__close > .el-icon-circle-close {
    color: rgba(5,102,116,1);
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
</style>
