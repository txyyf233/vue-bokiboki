<template>
  <div id="app">
    <div id="vu-main" :style="{width : mainWidth + 'px',backgroundColor: colorTheme}">
      <ul id="vu-head">
        <li id="vu-img-li">
          <a><img id="vu-img" src="@/assets/bokiboki.png"></a>
        </li>
        <li id="vu-search-li">
          <el-input id="vu-search" placeholder="请输入搜索内容" v-model="vuSearch">
            <i id="vu-search-icon" @click="searchMethods" class="el-icon-search el-input__icon" slot="suffix"></i>
          </el-input>
        </li>
        <li id="vu-menu-li">
          <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-caret-bottom el-icon--right"
                   style="position: relative;left: -15px"></i>
              </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>采集板</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div>
            <el-avatar :size="40" :src="headSrc" @error="errorHandler" fit="scale-down">
              <img src="@/assets/errorImg.png"/>
            </el-avatar>
          </div>
          <div><i class="el-icon-message-solid"></i></div>
          <div><i class="el-icon-menu"></i></div>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
var oldWidth = window.innerWidth
var newWidth
var minWindow = 720
oldWidth = oldWidth > minWindow ? oldWidth : minWindow
export default {
  name: 'App',
  data () {
    return {
      colorTheme: '#438a5e',
      mainWidth: oldWidth,
      vuSearch: '',
      result: '',
      headSrc: 'http://hbimg.huabanimg.com/8603d73dfe2117e717f21dfcdeffd06a5bbd3a4a225ed3-9OdaSK_fw658/format/webp',
    }
  },
  methods: {
    searchMethods: function () {
      if(this.vuSearch){
        this.result = this.vuSearch
      }
    },
    errorHandler: function () {
      return true
    }
  },
  mounted () {
    window.onresize = () => {
      newWidth = window.innerWidth
      console.log('当前浏览器窗口宽度' + newWidth + 'px')
      if (newWidth > minWindow) {
        oldWidth = newWidth
        this.mainWidth = oldWidth
      }
    }
  }
}
</script>

<style>
  #app {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.2);
  }
  #vu-main {
    width: 100%;
    height: 60px;
    position: absolute;
    top: 0px;
    left: 0px;
    margin: 0px 0px;
    padding: 0px 0px;
    z-index: 999;
  }
  #vu-head {
    width: 100%;
    height: 60px;
    margin: 0px 0px;
    padding: 0px 0px;
  }
  li {
    list-style: none;
  }
  #vu-img-li {
    width: 20%;
    height: 100%;
    left: 0px;
    float: left;
  }
  #vu-img {
    margin: 10px 0px;
    height: 40px;
    margin-left: 10%;
  }
  #vu-search-li {
    width: 40%;
    height: 100%;
    float: left;
  }
  #vu-search {
    height: 40px;
    margin: 10px 0px;
    border-radius: 30px;
    font-size: 15px;
  }
  #vu-search-icon {
    height: 40px;
    margin: 10px 0px;
    border-radius: 30px;
    font-size: 20px;
    margin-right: 15px;
  }
  #vu-menu-li {
    width: 40%;
    height: 100%;
    float: left;
  }
  #vu-menu-li div {
    height: 40px;
    float: right;
    padding:0px 20px;
    margin:10px 0px;

  }
  #vu-menu-li i {
    line-height:40px;
    color: rgba(0,0,0,0.5);
    font-size: 25px;
  }
</style>
