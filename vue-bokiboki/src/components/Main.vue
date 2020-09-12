<template>
  <div>
    <div id="vuMain">
      <a>
        <img id="vuHeadImg" src="@/assets/bokiboki.png">
      </a>
      <ul id="vuHeadUl" style="background-color: lightgray">
        <li style="background-color: aqua">
          <div id="vuSearch" style="border-radius: 30px;background-color: lightcoral">
            <input id="vuSearch-input" placeholder="请输入内容" style="border: 0px;background-color: rgba(0,0,0,0)">
            <a id="vuSearch-search"><i class="el-icon-search"></i></a>
          </div>
        </li>
        <li>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      vuInput: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #vuMain {
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0px;
    z-index: 999;
    background-color: #438a5e;
  }
  #vuHeadImg {
    padding: 10px 3%;
    height: 60px;
  }
  #vuHeadUl {
    height: 60px;
    float: right;
    margin-top: 0px;
  }
  #vuHeadUl li{
    list-style: none;
    height: 100%;
  }
</style>
