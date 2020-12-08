<template>
    <div>
      <!-------------------------------------------------顶部------------------------------------------->
      <el-container class="el-container">
        <el-header class="el-header">
          <el-row>
            <el-col :xs="8" class="hidden-sm-and-up">
              <img src="@/assets/bokiboki.png" @click="drawer = true" style="height: 40px;margin-top: 10px">
            </el-col>
            <el-col :sm="4" class="hidden-xs-only">
              <img src="@/assets/bokiboki.png" @click="goMain" style="height: 40px;margin-top: 10px">
            </el-col>
            <el-col :sm="12" :xs="16">
              <el-input placeholder="请输入搜索内容" v-model="vuSearch" @keyup.enter.native="searchMethods" style="height: 40px;margin-top: 10px">
                <i @click="searchMethods" class="el-icon-search el-input__icon" slot="suffix" style="font-size: 20px;margin-right: 10px"></i>
              </el-input>
            </el-col>
            <el-col :sm="8" class="hidden-xs-only">
              <el-menu class="el-menu" mode="horizontal" text-color="#333333" background-color="#056674">
                <el-menu-item index="1">
                  <i class="el-icon el-icon-menu"></i>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon el-icon-message-solid"></i>
                </el-menu-item>
                <el-submenu index="3">
                  <template slot="title">
                    <el-avatar :size="40" :src="headSrc" @error="errorHandler" fit="scale-down">
                      <img src="@/assets/errorImg.png"/>
                    </el-avatar>
                  </template>
                  <el-menu-item index="2-1" @click="goLogin"><i class="el-icon el-icon-s-custom"></i>&nbsp;个人中心</el-menu-item>
                  <el-menu-item index="2-2"><i class="el-icon el-icon-s-shop"></i>&nbsp;采集板</el-menu-item>
                  <el-menu-item index="2-3"><i class="el-icon el-icon-s-tools"></i>&nbsp;设置</el-menu-item>
                  <el-menu-item index="2-4" @click="goLoginOut"><i class="el-icon el-icon-remove"></i>&nbsp;注销</el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-header>
      </el-container>
      <el-row><el-col :span="24"><div style="height: 60px"></div></el-col></el-row>
      <el-backtop  :right="22" :bottom="110" style="background-color: rgba(0,0,0,0)">
        <div class="vu-fixed"><i class="el-icon el-icon-arrow-up"></i></div>
      </el-backtop>
<!-------------------------------------------------抽屉------------------------------------------->
      <el-drawer class="el-drawer" size="40px"
        :visible.sync="drawer"
        :direction="direction"
        ref="drawerClose"
        :with-header="false">
        <el-tag class="el-tag" @click="goMain">首页</el-tag>
        <el-tag class="el-tag" @click="goLogin">个人中心</el-tag>
        <el-tag class="el-tag">消息</el-tag>
        <el-tag class="el-tag">采集板</el-tag>
        <el-tag class="el-tag">设置</el-tag>
      </el-drawer>
    </div>
</template>

<script>
export default {
  name: 'HeadTop',
  data () {
    return {
      drawer: false,
      direction: 'ttb',
      // 搜索内容
      vuSearch: '',
      // 搜索结果
      result: '',
      // 头像
      headSrc: this.$store.state.user.userImgUrl,
    }
  },
  methods: {
    // 跳转主页面
    goMain () {
      this.$refs.drawerClose.closeDrawer()
      return this.$router.push('/')
    },
    // 跳转登录面
    goLogin () {
      this.$refs.drawerClose.closeDrawer()
      return this.$router.push('/login')
    },
    // 跳转登出
    goLoginOut () {
      localStorage.removeItem('token')
      this.headSrc = ''
      this.$store.commit('user', {})
      return this.$router.go(0)
    },
    // 提交搜索
    searchMethods () {
      if (this.vuSearch) {
        this.result = this.vuSearch
      }
    },
    errorHandler () {
      return true
    }
    // 页面离顶部距离
    /* getScroll () {
       this.appTop = document.documentElement.scrollTop || document.body.scrollTop
    } */
  },
  mounted () {
    // 窗口大小监听
    window.onresize = () => {
      var windowWidth = window.innerWidth
      this.$store.commit('windowWidth', windowWidth)
      if (windowWidth < 1200) {
        this.$store.commit('mainLine', 2)
      } else {
        this.$store.commit('mainLine', 4)
      }
    }
    // window.addEventListener('scroll', this.getScroll, true)
  },
  destroyed () {
    // window.removeEventListener('scroll', this.getScroll)
  }
}
</script>

<style scoped>
  .el-icon {
    color: #333333;
    font-size: 20px;
  }
  .el-header {
    height: 60px;
    /*background-color:#438a5e;*/
    background-color:#056674;
  }
  .el-menu {
    height: 60px;
    float: right;
  }
  .el-drawer {
    margin-top: 60px;
    line-height: 37px;
    text-align: center;
    white-space: nowrap;
  }
  /deep/ .el-drawer {
    overflow-x: scroll;
  }
  /deep/ .el-drawer::-webkit-scrollbar {
    display: none;
  }
  /deep/ .el-drawer:focus {
    outline:none;
  }
  .el-tag {
    /*background-color: #438a5e;*/
    /*e0ece4 ff4b5c 056674 66bfbf*/
    background-color: #056674;
    color: rgba(0,0,0,0.8);
  }
  .el-container {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 999;
  }
  .vu-fixed {
    width: 40px;
    height: 40px;
    color: rgba(0,0,0,0.8);
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: rgba(67,138,94,0);
    border-radius: 30px;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
  }
  .vu-fixed:hover {
    background-color: rgba(5,102,116,1);
  }
</style>
