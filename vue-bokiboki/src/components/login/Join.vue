<template>
  <div>
    <headTop></headTop>
    <el-row>
      <el-col :span="24">
        <el-row class="el-row">
          <el-form class="el-form" :label-position="labelPosition" :model="signUpForm" status-icon :rules="rules" ref="signUpForm" label-width="0px">
            <div style="text-align: center">
              <img src="@/assets/bokiboki.png" style="height: 60px">
            </div>
            <el-form-item label="Username" prop="userName">
              <el-input v-model="signUpForm.userName" clearable></el-input>
            </el-form-item>
            <el-form-item label="Email address" prop="email">
              <el-input v-model="signUpForm.email" clearable></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="passWord">
              <el-input v-model="signUpForm.passWord"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="el-button" type="primary" @click="submitForm('signUpForm')">Create accout</el-button>
            </el-form-item>
            <el-row>
              <el-col :span="24"><p style="color: rgba(67,138,94,0.9)" align="left" @click="goLogin">Sign in</p></el-col>
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
  name: 'Join',
  data () {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('邮箱格式错误'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'top',
      signUpForm: {
        userName: '',
        email: '',
        passWord: ''
      },
      regular: {
        user: /^[a-zA-Z0-9\u4e00-\u9fa5\s]{1,20}$/,
        pass: /^[a-zA-Z0-9]{4,10}$/,
        email: /^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$/
      },
      rules: {
        userName: [
          { validator: validateName, trigger: 'blur' }
        ],
        email: [
          { validator: validateEmail, trigger: 'blur' }
        ],
        passWord: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  components: {HeadTop},
  methods: {
    goLogin () {
      return this.$router.push('/login')
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios({
            method: 'post',
            url: '/api/login/create',
            data: this.signUpForm,
            timeout: 10000
          }).then((response) => {
            console.log(response)
            var resposeData = response.data
            if (resposeData.code === '1') {
              this.$message({message: resposeData.message, type: 'success'})
              localStorage.removeItem('token')
              localStorage.setItem('token', resposeData.resource.token)
              return this.$router.push('/')
            } else {
              this.$message({message: resposeData.message, type: 'error'})
            }
          }).catch((error) =>
            this.$message({message: error, type: 'error'})
          )
        } else {
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
    background-color: #056674;
  }
</style>
