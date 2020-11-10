<template>
  <div>
    <headTop></headTop>
    <el-row style="margin-top: 10px">
      <el-col class="hidden-md-and-down" :lg="1">&nbsp;</el-col>
      <el-col :xs="12" :sm="12" :lg="4">
        <div style="background-color: white;border-radius: 5px;margin: 10px;position: relative" v-for="(item,i) in mainList" :key="item" v-if="cardIf(1,i)">
          <div  class="collectButton" :style="{display: item.collectDisplay}">采集</div>
          <el-card :body-style="{ padding: '0px' }"  @mouseenter.native="mouseOverCard" @mouseleave.native="mouseOutCard">
            <el-image :src="item.cardImgSrc" class="image" :preview-src-list="item.cardImgSrc"></el-image>
            <div style="padding: 13px">
              <span style="font-size: 11px">{{ item.cardName }}</span>
              <el-divider content-position="left" style="padding: 0px;margin: 0px"></el-divider>
              <div style="height: 40px;width: 40px;float: left">
                <el-avatar :size="40" :src="item.userImgSrc" @error="errorHandler" fit="scale-down">
                  <img src="@/assets/errorImg.png"/>
                </el-avatar>
              </div>
              <div style="height: 40px;line-height: 40px">
                <span style="font-size: 8px">{{userName}}</span>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="4">
        <div style="background-color: white;border-radius: 5px;margin: 10px;position: relative" v-for="(item,i) in mainList" :key="item" v-if="cardIf(2,i)">
          <div  class="collectButton" :style="{display: item.collectDisplay}">采集</div>
          <el-card :body-style="{ padding: '0px' }"  @mouseenter.native="mouseOverCard" @mouseleave.native="mouseOutCard">
            <el-image :src="item.cardImgSrc" class="image" :preview-src-list="item.cardImgSrc"></el-image>
            <div style="padding: 13px">
              <span style="font-size: 11px">{{ item.cardName }}</span>
              <el-divider content-position="left" style="padding: 0px;margin: 0px"></el-divider>
              <div style="height: 40px;width: 40px;float: left">
                <el-avatar :size="40" :src="item.userImgSrc" @error="errorHandler" fit="scale-down">
                  <img src="@/assets/errorImg.png"/>
                </el-avatar>
              </div>
              <div style="height: 40px;line-height: 40px">
                <span style="font-size: 8px">{{userName}}</span>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col class="hidden-md-and-down" :lg="4">
        <div style="background-color: white;border-radius: 5px;margin: 10px;position: relative" v-for="(item,i) in mainList" :key="item" v-if="cardIf(3,i)">
          <div  class="collectButton" :style="{display: item.collectDisplay}">采集</div>
          <el-card :body-style="{ padding: '0px' }"  @mouseenter.native="mouseOverCard" @mouseleave.native="mouseOutCard">
            <el-image :src="item.cardImgSrc" class="image" :preview-src-list="item.cardImgSrc"></el-image>
            <div style="padding: 13px">
              <span style="font-size: 11px">{{ item.cardName }}</span>
              <el-divider content-position="left" style="padding: 0px;margin: 0px"></el-divider>
              <div style="height: 40px;width: 40px;float: left">
                <el-avatar :size="40" :src="item.userImgSrc" @error="errorHandler" fit="scale-down">
                  <img src="@/assets/errorImg.png"/>
                </el-avatar>
              </div>
              <div style="height: 40px;line-height: 40px">
                <span style="font-size: 8px">{{userName}}</span>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col class="hidden-md-and-down" :lg="4">
        <div style="background-color: white;border-radius: 5px;margin: 10px;position: relative" v-for="(item,i) in mainList" :key="item" v-if="cardIf(4,i)">
          <div  class="collectButton" :style="{display: item.collectDisplay}">采集</div>
          <el-card :body-style="{ padding: '0px' }"  @mouseenter.native="mouseOverCard" @mouseleave.native="mouseOutCard">
            <el-image :src="item.cardImgSrc" class="image" :preview-src-list="item.cardImgSrc"></el-image>
            <div style="padding: 13px">
              <span style="font-size: 11px">{{ item.cardName }}</span>
              <el-divider content-position="left" style="padding: 0px;margin: 0px"></el-divider>
              <div style="height: 40px;width: 40px;float: left">
                <el-avatar :size="40" :src="item.userImgSrc" @error="errorHandler" fit="scale-down">
                  <img src="@/assets/errorImg.png"/>
                </el-avatar>
              </div>
              <div style="height: 40px;line-height: 40px">
                <span style="font-size: 8px">{{userName}}</span>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col class="hidden-md-and-down" :lg="6">
        <el-card :body-style="{ padding: '0px' }" style="background-color: white;border-radius: 5px;margin: 10px">
          <div style="height: 80px">
            <div style="height: 60px;width: 60px;float: left;margin: 10px">
              <el-avatar :size="60" :src="headSrc" @error="errorHandler" fit="scale-down">
                <img src="@/assets/errorImg.png"/>
              </el-avatar>
            </div>
            <div style="height: 60px;float: left;margin: 10px 0px">
              <div style="height: 40px;line-height: 40px;font-size: 17px">
                <span>{{userNick}}</span>
              </div>
              <div style="height: 20px;line-height: 20px;font-size: 12px">
                <span>关注：{{userCare}}</span>
                <el-divider direction="vertical"></el-divider>
                <span>粉丝：{{userFans}}</span>
              </div>
            </div>
          </div>
          <el-divider content-position="left"><span style="font-size: 10px;color: rgba(0,0,0,0.5)">采集</span></el-divider>
          <div style="height: 390px"></div>
          <el-divider content-position="left"><span style="font-size: 10px;color: rgba(0,0,0,0.5)">空间</span></el-divider>
          <div style="height: 390px"></div>
          <el-divider content-position="left"><span style="font-size: 10px;color: rgba(0,0,0,0.5)">bokiboki</span></el-divider>
          <div style="padding:10px 40px 20px">
            <span style="font-size: 12px;color: rgba(0,0,0,0.5)">©2020&nbsp;bokiboki&nbsp;今天的风儿甚是喧嚣啊</span><br/>
            <span style="font-size: 12px;color: rgba(0,0,0,0.5)">今日访问量：{{a}}</span><br/>
            <span style="font-size: 12px;color: rgba(0,0,0,0.5)">总访问量：{{a}}</span><br/>
            <span style="font-size: 12px;color: rgba(0,0,0,0.5)">当前在线：{{a}}</span>
          </div>
        </el-card>
      </el-col>
      <el-col class="hidden-md-and-down" :lg="1">&nbsp;</el-col>
    </el-row>
    <!--<div style="height: 200px;width: 200px">
      <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
    </div>-->
    <div id="vu-add" class="vu-fixed"><i class="el-icon el-icon-cherry"></i></div>
  </div>
</template>

<script>
import HeadTop from '@/components/middle/HeadTop'
export default {
  name: 'Main',
  components: { HeadTop },
  data () {
    return {
      // 卡片list
      mainList: [{
        // 卡片图片地址
        cardImgSrc: '',
        // 卡片标题
        cardName: '',
        // 卡片的赞
        cardLaudNum: '',
        // 卡片采集
        cardCollectNum: '',
        // 用户名
        userName: '',
        // 用户头像
        userImgSrc: '',
        // 卡片采集按钮状态
        collectDisplay: 'none'
      }],
      // 右侧用户昵称
      userNick: '',
      // 右侧用户关注
      userCare: '',
      // 右侧用户粉丝
      userFans: '',
      // 富文本内容
      content: '',
      // 富文本工具栏
      editorOption: {
        placeholder: '编辑文章内容'
      }
    }
  },
  mounted () {
    // 卡片列表初始化
    this.getList()
  },
  methods: {
    // 卡片列表
    getList () {
      this.$axios({
        method: 'post',
        url: '/api/main/list',
        data: {},
        timeout: 10000
      }).then((response) => {
        console.log(response)
        var resposeData = response.data
        if (resposeData.code === '1') {
          this.mainList = resposeData.resource
          console.log(this.mainList)
          this.$message({message: resposeData.message, type: 'success'})
        } else {
          this.$message({message: resposeData.message, type: 'error'})
        }
      }).catch((error) =>
        this.$message({message: error, type: 'error'})
      )
    },
    cardIf (num, i) {
      var mainLine = this.$store.state.mainLine
      if (num === (i + 1) || ((i + 1) % mainLine === num)) {
        return true
      }
      return false
    },
    // 指到卡片效果
    mouseOverCard () {
      this.collectDisplay = ''
    },
    // 移出卡片效果
    mouseOutCard () {
      this.collectDisplay = 'none'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-divider--horizontal{
    margin: 8px 0;
  }
  .collectButton {
    height: 25px;
    width: 50px;
    font-size: 13px;
    color: rgba(255,75,92,0.6);
    border-radius: 3px;
    box-shadow: 0px 0px 1px rgba(255,75,92,0.4);
    text-align: center;
    line-height: 25px;
    background-color: rgba(255,255,255,0.4);
    float:right;
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 100;
  }

  el-button--default:hover{
    color: #333333;
    border: #333333;
  }

  .image {
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    max-height: 1000px;
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
    background-color: rgba(5,102,116,1);
  }
  #vu-add {
    bottom: 50px;
  }
</style>
