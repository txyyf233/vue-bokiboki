<template>
  <div>
    <headTop></headTop>
    <el-row>
      <el-col :span="24">
        <el-row class="el-row">
          <el-form class="el-form" :label-position="labelPosition" :model="resetPassForm" status-icon :rules="rules" ref="resetPassForm" label-width="0px">
            <div style="text-align: center">
              <img src="@/assets/bokiboki.png" style="height: 60px">
            </div>
            <el-form-item label="Username or email address" prop="userName">
              <el-input v-model="resetPassForm.userName" ></el-input>
            </el-form-item>
            <el-form-item label="Check code" prop="checkCode">
              <el-row>
                <el-col :span="13">
                  <el-input v-model="resetPassForm.checkCode"></el-input>
                </el-col>
                <el-col :span="10" offset="1">
                  <el-button  class="el-button" type="primary" @click="sendCode">发送验证码</el-button>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="Password" prop="passWord">
              <el-input v-model="resetPassForm.passWord" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="el-button" type="primary" @click="submitForm('resetPassForm')">Save</el-button>
            </el-form-item>
            <el-row>
              <el-col :span="12"><p style="color: rgba(67,138,94,0.9)" align="left" @click="goLogin">Sign in</p></el-col>
              <el-col :span="12"><p style="color: rgba(67,138,94,0.9)" align="right" @click="goJoin">Sign up</p></el-col>
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
  name: 'ResetPass',
  data () {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请检查验证码'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'top',
      resetPassForm: {
        userName: '',
        checkCode: '',
        passWord: ''
      },
      rules: {
        userName: [
          { validator: validateName, trigger: 'blur' }
        ],
        checkCode: [
          { validator: validateCode, trigger: 'blur' }
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
    goJoin () {
      return this.$router.push('/join')
    },
    sendCode () {
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({message: '登录成功', type: 'success'})
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
    background-color: #438a5e
  }
</style>
