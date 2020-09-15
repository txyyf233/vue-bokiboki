<template>
  <div id="app" :style="{width: mainWidth}">
    <el-row>
      <el-col :span="24">
        <div id="vu-top" :style="{top: mainTop + 'px'}">
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
                   style="position: relative;left: -20px"></i>
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
      </el-col>
    </el-row>
    <div id="vu-hidden"></div>
    <div id="vu-goTop" class="vu-fixed"><i class="el-icon-caret-top"></i></div>
    <div id="vu-add" class="vu-fixed"><i class="el-icon-circle-plus"></i></div>
    <div id="vu-massage" class="vu-fixed"><i class="el-icon-s-comment"></i></div>
    <router-view/>
  </div>
</template>

<script scoped>
export default {
  name: 'App',
  data () {
    return {
      mainWidth: 'inherit',
      mainTop: 0,
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
      this.mainTop = document.documentElement.scrollTop || document.body.scrollTop
    }
  },
  mounted () {
    window.onresize = () => {
      if (window.innerWidth < 768) {
        this.mainWidth = '768px'
      } else {
        this.mainWidth = 'inherit'
      }
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
  html {
    background-color: rgba(0,0,0,0.2);
  }
  #vu-top {
    width: inherit;
    height: 60px;
    position: absolute;
    top: 0px;
    z-index: 999;
    background-color: #438a5e;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
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
  .vu-fixed {
    width: 40px;
    height: 40px;
    position: fixed;
    right: 22px;
    color: rgba(0,0,0,0.8);
    text-align: center;
    line-height: 40px;
    background-color: #438a5e;
    border-radius: 30px;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
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
