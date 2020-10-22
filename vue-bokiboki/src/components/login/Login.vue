<template>
  <div>
    <headTop></headTop>
    <el-row>
      <el-col :span="24">
        <el-row class="el-row">
          <el-form class="el-form" :label-position="labelPosition" :model="signInForm" status-icon :rules="rules" ref="signInForm" label-width="0px">
            <div style="text-align: center">
              <img src="@/assets/bokiboki.png" style="height: 60px">
            </div>
            <el-form-item label="Username or email address" prop="userName">
              <el-input v-model="signInForm.userName" clearable></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="passWord">
              <el-input v-model="signInForm.passWord" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="el-button" type="primary" @click="submitForm('signInForm')">Sign in</el-button>
            </el-form-item>
            <el-row>
              <el-col :span="16"><p style="color: rgba(67,138,94,0.9)" align="left">Forget password?</p></el-col>
              <el-col :span="8"><p style="color: rgba(67,138,94,0.9)" align="right">Sign up</p></el-col>
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
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'top',
      signInForm: {
        userName: '',
        passWord: ''
      },
      rules: {
        userName: [
          { validator: validateName, trigger: 'blur' }
        ],
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
          this.$message({message: '错了哦，用户名或密码', type: 'error'})
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-form {
    width: 100%;
    max-width: 270px;
    background-color: white;
    border-radius: 5px;
    margin: 40px auto;
    padding: 20px
  }
  .el-button {
    width: 100%;
    background-color: #438a5e
  }
</style>
