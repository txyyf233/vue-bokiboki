<template>
  <div>
      <!---------------------------------------右侧展示栏----------------------------------->
      <el-col class="hidden-md-and-down" :lg="6">
        <el-card :body-style="{ padding: '0px' }" style="background-color: white;border-radius: 5px;margin: 5px">
          <div style="height: 80px">
            <div style="height: 60px;width: 60px;float: left;margin: 10px">
              <el-avatar :size="60" :src="rightUserInfo.headSrc" @error="errorHandler" fit="scale-down">
                <img src="@/assets/errorImg.png"/>
              </el-avatar>
            </div>
            <div style="height: 60px;float: left;margin: 10px 0px">
              <div style="height: 40px;line-height: 40px;font-size: 17px">
                <span>{{rightUserInfo.userNick}}</span>
              </div>
              <div style="height: 20px;line-height: 20px;font-size: 12px">
                <span>关注：{{rightUserInfo.userCare}}</span>
                <el-divider direction="vertical"></el-divider>
                <span>粉丝：{{rightUserInfo.userFans}}</span>
              </div>
            </div>
          </div>
          <div>
            <el-divider content-position="left"  style="margin: 15px"><span style="font-size: 10px;color: rgba(0,0,0,0.5)">采集</span></el-divider>
            <el-scrollbar style="height:100%">
              <div style="height: 440px">
                <el-card :body-style="{ padding: '0px' }"  shadow="hover" style="margin:5px 10px 0px 10px" v-for="item in collectionList" :key="item">
                  <el-row>
                    <el-col :span="8">
                      <img class="image" style="height: 100px" :src="item.cardImgSrc">
                    </el-col>
                    <el-col :span="16" >
                      <div class="cardDiv" style="height: 90px">
                        <div  class="collectButton2">采集：{{item.cardCollectNum}}</div>
                        <div  class="likeButton">喜欢：{{item.cardLaudNum}}</div>
                        <div style="padding: 10px;text-align: center">
                          {{item.cardName}}
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </el-card>
              </div>
            </el-scrollbar>
            <el-divider content-position="left"  style="margin: 15px"><span style="font-size: 10px;color: rgba(0,0,0,0.5)">空间</span></el-divider>
            <el-scrollbar style="height:100%">
              <div style="height: 440px">
                <el-card :body-style="{ padding: '0px' }"  shadow="hover" style="margin:5px 10px 0px 10px" v-for="item in zoneList" :key="item">
                  <el-row>
                    <el-col :span="8">
                      <img class="image" style="height: 100px" :src="item.cardImgSrc">
                    </el-col>
                    <el-col :span="16" >
                      <div class="cardDiv" style="height: 90px">
                        <div  class="collectButton2">采集：{{item.cardCollectNum}}</div>
                        <div  class="likeButton">喜欢：{{item.cardLaudNum}}</div>
                        <div style="padding: 10px;text-align: center">
                          {{item.cardName}}
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </el-card>
              </div>
            </el-scrollbar>
          </div>
          <div>
            <el-divider content-position="left" style="margin: 15px"><span style="font-size: 10px;color: rgba(0,0,0,0.5)">排行</span></el-divider>
            <div style="margin:10px auto;text-align: center">
              <el-radio-group v-model="rankRadio" size="mini" fill="#66bfbf">
                <el-radio-button label="今日排行"></el-radio-button>
                <el-radio-button label="当月排行"></el-radio-button>
                <el-radio-button label="总排行"></el-radio-button>
              </el-radio-group>
            </div>
            <el-scrollbar style="height:100%">
              <div style="height: 440px">
                <el-card :body-style="{ padding: '0px' }"  shadow="hover" style="margin:5px 10px 0px 10px" v-for="item in rankingList" :key="item">
                  <el-row>
                    <el-col :span="8">
                      <img class="image" style="height: 100px" :src="item.cardImgSrc">
                    </el-col>
                    <el-col :span="16" >
                      <div class="cardDiv" style="height: 90px">
                        <div  class="collectButton2">采集：{{item.cardCollectNum}}</div>
                        <div  class="likeButton">喜欢：{{item.cardLaudNum}}</div>
                        <div style="padding: 10px;text-align: center">
                          {{item.cardName}}
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </el-card>
              </div>
            </el-scrollbar>
          </div>
          <el-divider content-position="left"><span style="font-size: 10px;color: rgba(0,0,0,0.5)">bokiboki</span></el-divider>
          <div style="padding:10px 40px 20px">
            <span style="font-size: 12px;color: rgba(0,0,0,0.5)">©2021&nbsp;bokiboki&nbsp;今天的风儿甚是喧嚣啊</span><br/>
            <span style="font-size: 12px">
              <a style="color:rgba(0,0,0,0.5) " href="https://beian.miit.gov.cn" target="_blank">鲁ICP备2020049493号</a>
            </span><br/>
            <span style="font-size: 12px;color: rgba(0,0,0,0.5)">总访问量：{{visitInfo.visitSum}}</span><br/>
            <span style="font-size: 12px;color: rgba(0,0,0,0.5)">今日访问量：{{visitInfo.todayVisitSum}}</span><br/>
            <span style="font-size: 12px;color: rgba(0,0,0,0.5)">当前在线：{{visitInfo.visitNowSum}}</span>
          </div>
        </el-card>
      </el-col>
  </div>
</template>

<script>
export default {
  name: 'Right',
  data () {
    return {
      // 错误图片
      errorHandler: '',
      // 右侧用户详情
      rightUserInfo: {
        // 右侧头像
        headSrc: this.$store.state.user.userImgUrl,
        // 右侧用户昵称
        userNick: this.$store.state.user.userNick,
        // 右侧用户关注
        userCare: this.$store.state.user.userCare,
        // 右侧用户粉丝
        userFans: this.$store.state.user.userFans
      },
      // 右侧采集卡
      collectionList: [/* {
        cardName: 'bokiboki',
        cardLaudNum: 0,
        cardCollectNum: 0,
        cardImgSrc: 'http://47.93.57.186:4396/a.png'
      } */],
      // 右侧空间卡
      zoneList: [],
      // 右侧排行卡
      rankRadio: '',
      rankingList: [],
      visitInfo: {
        // 右侧总访问量
        visitSum: 0,
        // 右侧今日访问量
        todayVisitSum: 0,
        // 右侧在线人数
        visitNowSum: 0
      }
    }
  },
  methods: {
    // 抓取用户访问量
    getUserSum () {
      this.$axios({
        method: 'post',
        url: '/api/main/visit',
        // 同步请求
        async: false,
        data: {},
        timeout: 60000
      }).then((response) => {
        var resposeData = response.data
        if (resposeData.code === '1') {
          var sum = {}
          sum = resposeData.resource
          this.visitInfo.visitSum = sum.visitSum
          this.visitInfo.todayVisitSum = sum.todayVisitSum
          this.visitInfo.visitNowSum = sum.visitNowSum
        } else {
          this.$message({message: resposeData.message, type: 'error', duration: 1000})
        }
      }).catch((error) =>
        this.$message({message: error, type: 'error', duration: 1000})
      )
    }
  },
  mounted () {
    // 右侧访问量初始化
    var mainLine = this.$store.state.mainLine
    if (mainLine === 4) {
      this.getUserSum()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /deep/ .el-image-viewer__close > .el-icon-circle-close {
    color: rgba(5,102,116,1);
  }
  .cardDiv {
    background-color: white;
    border-radius: 5px;
    margin: 5px;
    position: relative
  }
  .collectButton2 {
    height: 25px;
    padding: 0 10px;
    font-size: 13px;
    color: rgba(255,75,92,0.6);
    border-radius: 3px;
    box-shadow: 0px 0px 1px rgba(255,75,92,0.4);
    text-align: center;
    line-height: 25px;
    background-color: rgba(0,0,0,0.1);
    float:right;
    position: absolute;
    bottom: 5px;
    right: 5px;
    z-index: 100;
  }
  .likeButton {
    height: 25px;
    padding: 0 10px;
    font-size: 13px;
    color: rgba(255,75,92,0.6);
    border-radius: 3px;
    box-shadow: 0px 0px 1px rgba(255,75,92,0.4);
    text-align: center;
    line-height: 25px;
    background-color: rgba(0,0,0,0.1);
    float:right;
    position: absolute;
    bottom: 5px;
    left: 5px;
    z-index: 100;
  }
  .image {
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    max-height: 1000px;
  }
</style>
