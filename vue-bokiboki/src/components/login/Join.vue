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
            <el-form-item label="用户名" prop="userName">
              <el-input v-model="signUpForm.userName" clearable></el-input>
            </el-form-item>
            <el-form-item label="邮箱（用于找回密码）" prop="email">
              <el-input v-model="signUpForm.email" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
              <el-input v-model="signUpForm.passWord"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="el-button" type="primary" @click="submitForm">创建用户</el-button>
            </el-form-item>
            <el-row>
              <el-col :span="24"><p style="color: rgba(67,138,94,0.9)" align="left" @click="goLogin">登录</p></el-col>
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
      if (value.trim() === '') {
        callback(new Error('请输入用户名'))
      } else if (!this.regular.name.test(value.trim())) {
        callback(new Error('格式：汉字 字母 数字'))
      } else {
        callback()
      }
    }
    var validateEmail = (rule, value, callback) => {
      if (!this.regular.email.test(value.trim())) {
        callback(new Error('邮箱格式错误'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value.trim() === '') {
        callback(new Error('请输入密码'))
      } else if (!this.regular.pass.test(value.trim())) {
        callback(new Error('密码限定数字字母'))
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
        name: /^[a-zA-Z0-9\u4e00-\u9fa5\s]{1,20}$/,
        pass: /^[a-zA-Z0-9]{4,10}$/,
        email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
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
    submitForm () {
      this.$refs['signUpForm'].validate((valid) => {
        if (valid) {
          const loading = this.$loading({lock: true, background: 'rgba(255, 255, 255, 0.1)'})
          this.$axios({
            method: 'post',
            url: '/api/login/create',
            data: this.$qs.stringify(this.signUpForm),
            timeout: 60000
          }).then((response) => {
            var resposeData = response.data
            if (resposeData.code === '1') {
              this.$message({message: resposeData.message, type: 'success', duration: 1000})
              localStorage.removeItem('token')
              localStorage.setItem('token', resposeData.resource.token)
              var user = {}
              user = resposeData.resource.user
              this.$store.commit('user', user)
              return this.$router.push('/')
            } else {
              this.$message({message: resposeData.message, type: 'error', duration: 1000})
            }
          }).catch((error) =>
            this.$message({message: error, type: 'error', duration: 1000})
          )
          loading.close()
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
