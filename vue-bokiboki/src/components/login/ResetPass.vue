<template>
  <div>
    <headTop></headTop>
    <el-row>
      <el-col :span="24">
        <el-row class="el-row">
          <el-form class="el-form" :label-position="labelPosition" :model="resetPassForm" status-icon :rules="rules"
                   ref="resetPassForm" label-width="0px">
            <div style="text-align: center">
              <img src="@/assets/bokiboki.png" style="height: 60px">
            </div>
            <el-form-item label="用户名" prop="userName">
              <el-input v-model="resetPassForm.userName" ></el-input>
            </el-form-item>
            <el-form-item label="邮箱验证码" prop="checkCode">
              <el-row>
                <el-col :span="13">
                  <el-input v-model="resetPassForm.checkCode"></el-input>
                </el-col>
                <el-col :span="10" offset="1">
                  <el-button  class="el-button" type="primary" @click="sendCode('resetPassForm')">{{checkCodeVal}}</el-button>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="新密码" prop="passWord" :style="{display:passwordisHidden}">
              <el-input v-model="resetPassForm.passWord" ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="el-button" type="primary" @click="submitForm('resetPassForm')">更换密码并登录</el-button>
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
  components: {HeadTop},
  data () {
    // 校验验证码
    var validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请检查验证码'))
      } else if (!this.regular.code.test(value)) {
        callback(new Error('格式：数字|小写字母 4字符'))
      } else {
        callback()
      }
    }
    // 校验新密码
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (!this.regular.pass.test(value)) {
        callback(new Error('格式：字母|数字 4-10字符'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'top',
      // 初始隐藏密码字段
      passwordisHidden: 'none',
      // 验证码按钮内容
      checkCodeVal: '发送验证码',
      // 验证码时间
      checkCodeTimeOut: true,
      // 表单
      resetPassForm: {
        userName: '',
        checkCode: '',
        passWord: ''
      },
      regular: {
        name: /^[a-zA-Z0-9\u4e00-\u9fa5\s]{1,20}$/,
        code: /^[a-z0-9]{4}$/,
        pass: /^[a-zA-Z0-9\s]{4,10}$/
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9\u4e00-\u9fa5\s]{1,20}$/, message: '格式', trigger: 'blur' }
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
  computed: {
    // watch监听验证码位数
    checkCodeLength () {
      return this.resetPassForm.checkCode
    },
    // 表单数据数据优化
    resetPassFormComputed: {
      userName: function () {
        return this.resetPassForm.userName.trim()
      },
      checkCode: function () {
        return this.resetPassForm.checkCode
      },
      passWord: function () {
        return this.resetPassForm.passWord.trim()
      }
    }
  },
  watch: {
    // 验证码输入四位显示password
    checkCodeLength (val) {
      if (val.length === 4) {
        this.passwordisHidden = ''
      } else if (val.length > 4) {
        this.resetPassForm.checkCode = val.substring(0, 4)
      } else {
        this.passwordisHidden = 'none'
      }
    }
  },
  methods: {
    // 跳转登录页
    goLogin () {
      return this.$router.push('/login')
    },
    // 跳转注册页
    goJoin () {
      return this.$router.push('/join')
    },
    // 发送验证码
    sendCode (formName) {
      if (this.checkCodeTimeOut === false) {
        this.$message({message: '请稍后再试', type: 'error'})
        return false
      }
      this.$refs[formName].validateField(['userName'], (errorMessage) => {
        if (!errorMessage) {
          this.checkCodeTimeOut = false
          const loading = this.$loading({lock: true})
          this.$axios({
            method: 'post',
            url: '/api/login/checkCode',
            data: this.resetPassForm,
            timeout: 10000
          }).then((response) => {
            setTimeout(this.checkCodeTimeOut = false, 3 * 60 * 1000)
            var resposeData = response.data
            if (resposeData.code === '1') {
              this.$message({message: resposeData.message, type: 'success'})
            } else {
              this.$message({message: resposeData.message, type: 'error'})
            }
          }).catch((error) => {
            this.checkCodeTimeOut = true
            this.$message({message: error, type: 'error'})
          })
          loading.close()
        }
      })
    },
    // 更换密码
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const loading = this.$loading({lock: true})
          this.$axios({
            method: 'post',
            url: '/api/login/forget',
            data: this.resetPassFormComputed,
            timeout: 10000
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
          }).catch((error) => {
            this.$message({message: error, type: 'error'})
          })
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
