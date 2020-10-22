<template>
  <div>
    <headTop></headTop>
    <el-row>
      <el-col :span="12" offset="6">
        <el-row class="el-row">
          <el-form class="el-form" :label-position="labelPosition" :model="signInForm" status-icon :rules="rules" ref="signInForm" label-width="0px">
            <div style="text-align: center;margin-bottom: 20px">
              <img src="@/assets/bokiboki.png" style="height: 60px">
            </div>
            <el-form-item label="Username or email address" prop="userName">
              <el-input v-model="signInForm.userName" clearable></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="passWord">
              <el-input type="password" v-model="signInForm.passWord" clearable></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="el-button" type="primary" @click="submitForm('signInForm')">登录</el-button>
            </el-form-item>
            <el-row>
              <el-col :span="12"><p style="color: rgba(67,138,94,0.9)" align="left">Sign up</p></el-col>
              <el-col :span="12"><p style="color: rgba(67,138,94,0.9)" align="right">Forget password?</p></el-col>
            </el-row>
          </el-form>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HeadTop from '@/components/middle/HeadTop'
export default {
  name: 'Login',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }
    }
    return {
      labelPosition: 'top',
      signInForm: {
        userName: '',
        passWord: ''
      },
      rules: {
        passWord: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  components: {HeadTop},
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({message: '登录成功', type: 'success'})
        } else {
          this.$message.error('账户或密码错误,登录失败')
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .el-form {
    width: 100%;
    max-width: 400px;
    background-color: white;
    border-radius: 5px;
    margin-top: 100px;
    padding: 20px
  }
  .el-button {
    width: 100%;
    background-color: #438a5e
  }
</style>
