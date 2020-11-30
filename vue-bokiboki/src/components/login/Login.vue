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
            <el-form-item label="用户名或邮箱" prop="userName">
              <el-input v-model="signInForm.userName" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
              <el-input v-model="signInForm.passWord" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="el-button" type="primary" @click="submitForm('signInForm')">登录</el-button>
            </el-form-item>
            <el-row>
              <el-col :span="16"><p style="color: rgba(67,138,94,0.9)" align="left" @click="goResetPass">忘记密码?</p></el-col>
              <el-col :span="8"><p style="color: rgba(67,138,94,0.9)" align="right" @click="goJoin">注册</p></el-col>
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
    var validateName = (rule, value, callback) => {
      if (value.trim() === '') {
        callback(new Error('请输入用户名'))
      } else if (!this.regular.name.test(value.trim())) {
        callback(new Error('格式：汉字 字母 数字'))
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
      regular: {
        name: /^[a-zA-Z0-9\u4e00-\u9fa5\s]{1,20}$/,
        pass: /^[a-zA-Z0-9]{4,10}$/
      },
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
    goResetPass () {
      return this.$router.push('/resetPass')
    },
    goJoin () {
      return this.$router.push('/join')
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios({
            method: 'post',
            url: '/api/login/login',
            data: this.$qs.stringify(this.signInForm),
            timeout: 30000
          }).then((response) => {
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
    /*background-color: #438a5e*/
    background-color: #056674;
  }
</style>
