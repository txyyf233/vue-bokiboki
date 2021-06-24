<template>
  <div>
      <el-col :xs="24" :sm="24" :lg="16">
        <el-row>
          <el-col :xs="12" :sm="12" :lg="6">
            <div class="cardDiv" v-for="(item,i) in mainList" :key="item" v-if="cardIf(0,i)">
              <div class="collectButton" @click="collectionCard(item)" v-show="item.bokiCollectCard.userId === null">采集</div>
              <el-card :body-style="{ padding: '0px' }">
                <el-image :src="item.cardImgSrc" class="image"></el-image>
                <div style="padding: 8px">
                  <span style="font-size: 11px">{{ item.cardName }}</span>
                  <el-divider content-position="left"></el-divider>
                  <div style="height: 30px;width: 30px;float: left;margin-right: 10px">
                    <el-avatar :size="30" :src="item.bokiUser.userImgUrl" @error="errorHandler" fit="scale-down">
                      <img src="@/assets/errorImg.png"/>
                    </el-avatar>
                  </div>
                  <div style="height: 30px;line-height: 30px">
                    <span style="font-size: 10px">{{item.bokiUser.userNick}}</span>
                  </div>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :lg="6">
            <div class="cardDiv" v-for="(item,i) in mainList" :key="item" v-if="cardIf(1,i)">
              <div  class="collectButton" @click="collectionCard(item.id)" v-show="item.bokiCollectCard.userId === null">采集</div>
              <el-card :body-style="{ padding: '0px' }">
                <el-image :src="item.cardImgSrc" class="image"></el-image>
                <div style="padding: 8px">
                  <span style="font-size: 11px">{{ item.cardName }}</span>
                  <el-divider content-position="left"></el-divider>
                  <div style="height: 30px;width: 30px;float: left;margin-right: 10px">
                    <el-avatar :size="30" :src="item.bokiUser.userImgUrl" @error="errorHandler" fit="scale-down">
                      <img src="@/assets/errorImg.png"/>
                    </el-avatar>
                  </div>
                  <div style="height: 30px;line-height: 30px">
                    <span style="font-size: 10px">{{item.bokiUser.userNick}}</span>
                  </div>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col class="hidden-md-and-down" :lg="6">
            <div class="cardDiv" v-for="(item,i) in mainList" :key="item" v-if="cardIf(2,i)">
              <div  class="collectButton" @click="collectionCard(item.id)"  v-show="item.bokiCollectCard.userId === null">采集</div>
              <el-card :body-style="{ padding: '0px' }">
                <el-image :src="item.cardImgSrc" class="image"></el-image>
                <div style="padding: 8px">
                  <span style="font-size: 11px">{{ item.cardName }}</span>
                  <el-divider content-position="left"></el-divider>
                  <div style="height: 30px;width: 30px;float: left;margin-right: 10px">
                    <el-avatar :size="30" :src="item.bokiUser.userImgUrl" @error="errorHandler" fit="scale-down">
                      <img src="@/assets/errorImg.png"/>
                    </el-avatar>
                  </div>
                  <div style="height: 30px;line-height: 30px">
                    <span style="font-size: 10px">{{item.bokiUser.userNick}}</span>
                  </div>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col class="hidden-md-and-down" :lg="6">
            <div class="cardDiv" v-for="(item,i) in mainList" :key="item" v-if="cardIf(3,i)">
              <div  class="collectButton" @click="collectionCard(item.id)" v-show="item.bokiCollectCard.userId === null">采集</div>
              <el-card :body-style="{ padding: '0px' }">
                <el-image :src="item.cardImgSrc" class="image"></el-image>
                <div style="padding: 8px">
                  <span style="font-size: 11px">{{ item.cardName }}</span>
                  <el-divider content-position="left"></el-divider>
                  <div style="height: 30px;width: 30px;float: left;margin-right: 10px">
                    <el-avatar :size="30" :src="item.bokiUser.userImgUrl" @error="errorHandler" fit="scale-down">
                      <img src="@/assets/errorImg.png"/>
                    </el-avatar>
                  </div>
                  <div style="height: 30px;line-height: 30px">
                    <span style="font-size: 10px">{{item.bokiUser.userNick}}</span>
                  </div>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="24"><p v-if="cardAddLoad" style="text-align: center;font-size: 15px;color: rgba(0,0,0,0.5);margin: 10px auto">加载中...</p></el-col>
          <el-col  :span="24"><p v-if="noMoreCard"  style="text-align: center;font-size: 15px;color: rgba(0,0,0,0.5);margin: 10px auto">没有更多了</p></el-col>
        </el-row>
      </el-col>
  </div>
</template>

<script>
export default {
  name: 'Left',
  data () {
    return {
      // 卡片list
      mainList: [/* {
        'id': 'a',
        'cardImgSrc': 'png',
        'cardName': '有',
        'cardType': '表',
        'userId': '1',
        'cardLaudNum': 0,
        'cardCollectNum': 0,
        'userNick': '今',
        'userImgUrl': 'png'
      } */],
      // 卡片加载数量 瀑布流
      cardPage: 1,
      cardPageSize: 28,
      cardAddLoad: false,
      noMoreCard: false
    }
  },
  mounted () {
    // 卡片列表初始化
    this.getList(this.cardPage, this.cardPageSize, '')
    window.addEventListener('scroll', this.getScroll, true)
  },
  destroyed () {
    window.removeEventListener('scroll', this.getScroll)
  },
  methods: {
    // 卡片列表
    getList (pageNum, pageSize, search) {
      this.cardAddLoad = true
      const loading = this.$loading({lock: true, background: 'rgba(255, 255, 255, 0.1)'})
      this.$axios({
        method: 'post',
        url: '/api/main/list',
        data: this.$qs.stringify({'pageNum': pageNum, 'pageSize': pageSize, 'search': search}),
        timeout: 60000
      }).then((response) => {
        var resposeData = response.data
        if (resposeData.code === '1') {
          var cardList = []
          cardList = resposeData.resource
          this.mainList = this.mainList.concat(cardList)
          if (cardList.length < this.cardPageSize) {
            this.noMoreCard = true
          }
          this.cardPage = this.cardPage + 1
        } else {
          this.$message({message: resposeData.message, type: 'error', duration: 1000})
        }
      }).catch((error) =>
        this.$message({message: error, type: 'error', duration: 1000})
      ).finally(() => {
        loading.close()
        this.cardAddLoad = false
      })
    },
    // 卡片显示分发
    cardIf (num, i) {
      var mainLine = this.$store.state.mainLine
      if (num === i % mainLine) {
        return true
      }
      return false
    },
    // 卡片采集
    collectionCard (item) {
      this.$axios({
        method: 'post',
        url: '/api/main/collectCard',
        // 同步请求
        async: false,
        data: this.$qs.stringify({'cardId': item.id}),
        timeout: 60000
      }).then((response) => {
        var resposeData = response.data
        if (resposeData.code === '1') {
          this.$message({message: resposeData.message, type: 'success', duration: 1000})
        } else {
          this.$message({message: resposeData.message, type: 'error', duration: 1000})
        }
      }).catch((error) =>
        this.$message({message: error, type: 'error', duration: 1000})
      )
    },
    // 页面离底部距离
    getScroll () {
      let top = document.documentElement.scrollTop || document.body.scrollTop // 滚动条在Y轴上的滚动距离
      let vh = document.documentElement.clientHeight || document.body.clientHeight // 浏览器视口的高度
      let scrollh = document.body.scrollHeight || document.documentElement.scrollHeight
      let wh = window.innerHeight
      let offh = document.documentElement.offsetHeight || document.body.offsetHeight
      let bottomOfWindow = top + vh >= scrollh
      let bottomOfWindow2 = top + wh >= offh
      if ((bottomOfWindow || bottomOfWindow2) && !this.noMoreCard) { // 滚动到底部
        this.getList(this.cardPage, this.cardPageSize, this.search) // 如果已经滚到底了 获取数据
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cardDiv /deep/ .el-divider--horizontal{
    margin: 8px 0;
  }
  /deep/ .el-image-viewer__close > .el-icon-circle-close {
    color: rgba(5,102,116,1);
  }
  .cardDiv {
    background-color: white;
    border-radius: 5px;
    margin: 5px;
    position: relative
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
    background-color: rgba(0,0,0,0.1);
    float:right;
    position: absolute;
    top: 5px;
    right: 5px;
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
