<template>
  <div id="app" :style="{width: mainWidth + 'px', height: mainHeight + 'px'}">
    <div id="vu-top" :style="{left: mainLeft + 'px'}">
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
    <div id="vu-hidden"></div>
    <el-backtop class="el-backtop" target="#app">
      <div id="vu-goTop"><i class="el-icon-caret-top"></i></div>
    </el-backtop>
    <router-view/>
  </div>
</template>

<script scoped>
var oldWidth = window.innerWidth
var newWidth
oldWidth = oldWidth > 768 ? oldWidth : 768
export default {
  name: 'App',
  data () {
    return {
      mainWidth: oldWidth,
      mainHeight: window.innerHeight,
      mainLeft: 0,
      vuSearch: '',
      result: '',
      headSrc: ''
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
      this.mainLeft = (document.documentElement.scrollLeft || document.body.scrollLeft) * -1
    }
  },
  mounted () {
    window.onresize = () => {
      newWidth = window.innerWidth
      console.log('当前浏览器窗口宽度' + newWidth + 'px')
      if (newWidth > 768) {
        this.mainWidth = newWidth
      }
      this.mainHeight = window.innerHeight
    }
    window.addEventListener('scroll', this.getScroll, true)
  },
  destroyed () {
    window.removeEventListener('scroll', this.getScroll)
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }
  #app {
    background-color: rgba(0,0,0,0.2);
    overflow-y: scroll;
  }
  #vu-top {
    width: inherit;
    height: 60px;
    position: fixed;
    top: 0px;
    z-index: 999;
    background-color: #438a5e;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }
  #vu-head {
    width: inherit;
    height: 60px;
    margin: 0px 0px;
    padding: 0px 0px;
  }
  #vu-hidden {
    width: inherit;
    height: 60px;
    margin: 0px 0px;
    padding: 0px 0px;
  }
  li {
    list-style: none;
  }
  #vu-img-li {
    width: 20%;
    height: 60px;
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
    height: 60px;
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
    height: 60px;
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
  #vu-goTop {
    height: 100%;
    width: 100%;
    box-shadow: 0 0 6px rgba(0,0,0, 0.5);
    text-align: center;
    line-height: 40px;
    border-radius: 30px;
    color: #438a5e;
  }
</style>
