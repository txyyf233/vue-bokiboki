<template>
    <div>
      <el-container class="vu-head">
        <el-header class="el-header">
          <el-row>
            <el-col :span="4" style="padding-top: 10px">
              <img src="@/assets/bokiboki.png" style="height: 40px">
            </el-col>
            <el-col :span="8" style="padding-top: 10px">
              <el-input id="vu-search" placeholder="请输入搜索内容" v-model="vuSearch">
                <i @click="searchMethods" class="el-icon-search el-input__icon" slot="suffix" style="font-size: 20px;margin-right: 10px"></i>
              </el-input>
            </el-col>
            <el-col :span="12">
              <el-menu class="el-menu" mode="horizontal" text-color="#222222" active-text-color="#000000" background-color="#438a5e">
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
                  <el-menu-item index="2-1"><i class="el-icon el-icon-s-custom"></i>&nbsp;个人中心</el-menu-item>
                  <el-menu-item index="2-2"><i class="el-icon el-icon-s-shop"></i>&nbsp;采集板</el-menu-item>
                  <el-menu-item index="2-3"><i class="el-icon el-icon-s-tools"></i>&nbsp;设置</el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-header>
      </el-container>
      <el-row><el-col :span="24"><div style="height: 60px"></div></el-col></el-row>
      <div id="vu-goTop" class="vu-fixed" :style="{display: goTopHidden}"><i class="el-icon el-icon-arrow-up"></i></div>
      <div id="vu-add" class="vu-fixed"><i class="el-icon el-icon-cherry"></i></div>
      <div id="vu-massage" class="vu-fixed"><i class="el-icon el-icon-chat-dot-square"></i></div>
    </div>
</template>

<script scoped>
export default {
  name: 'HeadTop',
  data () {
    return {
      vuSearch: '',
      headSrc: '',
      goTopHidden: 'none'
    }
  },
  methods: {
    searchMethods () {
      if (this.vuSearch) {
        this.result = this.vuSearch
      }
    },
    errorHandler () {
      return true
    },
    getScroll () {
      this.appTop = document.documentElement.scrollTop || document.body.scrollTop
      if (this.appTop > 300) {
        this.goTopHidden = ''
      } else {
        this.goTopHidden = 'none'
      }
    }
  },
  mounted () {
    window.onresize = () => {
    }
    window.addEventListener('scroll', this.getScroll, true)
  },
  destroyed () {
    window.removeEventListener('scroll', this.getScroll)
  }
}
</script>

<style scoped>
  .el-icon {
    color: #222222;
    font-size: 20px;
  }
  .el-header {
    height: 60px;
    background-color:#438a5e;
  }
  .el-menu {
    height: 60px;
    float: right
  }
  .vu-head {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 999;
  }
  .vu-fixed {
    width: 40px;
    height: 40px;
    position: fixed;
    right: 22px;
    color: rgba(0,0,0,0.8);
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    background-color: rgba(67,138,94,0);
    border-radius: 30px;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
    z-index: 999;
  }
  .vu-fixed:hover {
    background-color: rgba(67,138,94,1);
  }
  #vu-massage {
    bottom: 20px;
  }
  #vu-add {
    bottom: 80px;
  }
  #vu-goTop {
    bottom: 140px;
  }
</style>
