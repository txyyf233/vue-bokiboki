<template>
  <div>
    <!---------------------------------------导航栏----------------------------------->
    <headTop></headTop>
    <!---------------------------------------左侧展示栏----------------------------------->
    <el-row style="margin-top: 5px">
      <el-col class="hidden-md-and-down" :lg="1">&nbsp;</el-col>
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
      <el-col class="hidden-md-and-down" :lg="1">&nbsp;</el-col>
    </el-row>
    <!--<div style="height: 200px;width: 200px">
      <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
    </div>-->
    <!---------------------------------------发布上传栏----------------------------------->
    <div id="vu-add" class="vu-fixed" @click="addMainCard = true"><i class="el-icon el-icon-cherry"></i></div>
    <el-dialog title="动态发布" :visible.sync="addMainCard">
      <el-form class="el-form" :label-position="labelPosition" :model="addCardForm" status-icon :rules="rules" ref="addCardForm" label-width="0px">
        <el-form-item label="上传封面" prop="cardFile">
          <el-upload
            ref="upload"
            action="/api/file/upload"
            list-type="picture"
            :before-upload="handleBefore"
            :on-success="handleSuccess"
            :on-preview="handlePreview"
            :on-exceed="handleExceed"
            :http-request="httpUpLoad"
            :limit="1"
            :auto-upload="false">
            <el-button size="small" type="primary" style="background-color: rgba(5,102,116,1)">选取封面</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="采集板（不存在可新建）" prop="cardType">
          <el-select
            style="width: 100%"
            v-model="addCardForm.cardType"
            filterable
            allow-create
            default-first-option
            placeholder="请选择采集板">
            <el-option
              v-for="item in cardTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标题或简介" prop="cardContext">
          <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 6}" v-model="addCardForm.cardContext" clearable  prop="cardContext"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitCard" style="float: right;margin-left: 10px;background-color: rgba(5,102,116,1)">发布</el-button>
          <el-button type="primary" @click="submitCardReset" style="float: right;background-color: rgba(5,102,116,1)">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import HeadTop from '@/components/middle/HeadTop'
export default {
  name: 'Main',
  components: { HeadTop },
  data () {
    var validateCardContext = (rule, value, callback) => {
      if (value.trim() === '') {
        callback(new Error('请填写标题/简介'))
      } else {
        callback()
      }
    }
    var validateCardFile = (rule, value, callback) => {
      if (this.addCardForm.cardImageUrl === '') {
        callback(new Error('请上传封面'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'top',
      // 发布弹出层状态
      addMainCard: false,
      // 搜索条件
      search: '',
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
      },
      // 富文本内容
      content: '',
      // 富文本工具栏
      editorOption: {
        placeholder: '编辑文章内容'
      },
      rules: {
        cardContext: [
          { validator: validateCardContext, trigger: 'blur' }
        ],
        cardFile: [
          { validator: validateCardFile, trigger: 'blur' }
        ]
      },
      // 采集板下拉框展示值
      cardTypeOptions: [{
        value: '表情',
        label: '表情'
      }],
      cardTypeValue: [],
      // 文件预览？？
      dialogImageUrl: '',
      dialogVisible: false,
      addCardForm: {
        // 发布表单标题
        cardContext: '',
        // 下拉框选中值
        cardType: '',
        // 上传图片
        cardImageUrl: ''
      },
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
    // 右侧访问量初始化
    var mainLine = this.$store.state.mainLine
    if (mainLine === 4) {
      this.getUserSum()
    }
    window.addEventListener('scroll', this.getScroll, true)
  },
  destroyed () {
    window.removeEventListener('scroll', this.getScroll)
  },
  methods: {
    // 提交搜索
    searchMethods (search) {
      this.search = search
      this.mainList = []
      this.getList(1, 28, search)
    },
    // 卡片列表
    getList (pageSum, pageSize, search) {
      this.cardAddLoad = true
      const loading = this.$loading({lock: true, background: 'rgba(255, 255, 255, 0.1)'})
      this.$axios({
        method: 'post',
        url: '/api/main/list',
        data: this.$qs.stringify({'pageSum': pageSum, 'pageSize': pageSize, 'search': search}),
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
          item.collectShow = false
        } else {
          this.$message({message: resposeData.message, type: 'error', duration: 1000})
        }
      }).catch((error) =>
        this.$message({message: error, type: 'error', duration: 1000})
      )
    },
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
    },
    // 文件上传达到上限
    handleExceed (files, fileList) {
      this.$message({message: '已达到上传上限', type: 'warning', duration: 1000})
    },
    // 上传文件之前的钩子
    handleBefore (file) {
      const picType = file.name.substring(file.name.lastIndexOf('.') + 1)
      const checkType = ['jpg', 'png', 'img', 'bmp', 'webp', 'jpeg', 'tif', 'gif']
      const isPic = checkType.indexOf(picType)
      const isLt2M = file.size / 1024 / 1024 < 10

      if (isPic < 0) {
        this.$message({message: '上传头像图片只能是 JPG 格式!', type: 'warning', duration: 1000})
      }
      if (!isLt2M) {
        this.$message({message: '上传头像图片大小不能超过 10MB!', type: 'warning', duration: 1000})
      }
      return isPic && isLt2M
    },
    // 文件上传成功
    handleSuccess (response, file, fileList) {
    },
    // 点击已上传文件钩子
    handlePreview (file) {
      this.addCardForm.dialogImageUrl = file.url
      this.addMainCard.dialogVisible = true
    },
    httpUpLoad (params) {
      var file = params.file
      let formData = new window.FormData()
      formData.append('multipartFile', file)
      const loading = this.$loading({lock: true, background: 'rgba(255, 255, 255, 0.1)'})
      this.$axios({
        method: 'post',
        url: '/api/file/upload',
        data: formData,
        async: false,
        timeout: 60000
      }).then((response) => {
        var resposeData = response.data
        if (resposeData.code === '1') {
          this.$message({message: resposeData.message, type: 'success', duration: 1000})
          this.addCardForm.cardImageUrl = resposeData.resource
          // 表单提交
          this.$refs['addCardForm'].validate((valid) => {
            if (valid) {
              this.$axios({
                method: 'post',
                url: '/api/addCard/addCard',
                data: this.$qs.stringify(this.addCardForm),
                timeout: 60000
              }).then((response) => {
                var resposeData = response.data
                if (resposeData.code === '1') {
                  this.$message({message: resposeData.message, type: 'success', duration: 1000})
                  this.addMainCard = false
                  this.submitCardReset()
                } else {
                  this.$message({message: resposeData.message, type: 'error', duration: 1000})
                }
              }).catch((error) =>
                this.$message({message: error, type: 'error', duration: 1000})
              )
            } else {
              return false
            }
          })
        } else {
          this.$message({message: resposeData.message, type: 'error', duration: 1000})
        }
      }).catch((error) => {
        this.$message({message: error, type: 'error', duration: 1000})
      }).finally(() => {
        loading.close()
      })
    },
    // 卡片表单提交
    submitCard () {
      // 文件上传
      this.$refs.upload.submit()
    },
    // 重置表单
    submitCardReset () {
      this.$refs['addCardForm'].resetFields()
      this.$refs.upload.clearFiles()
    },
    // 页面离底部距离
    getScroll () {
      let top = document.documentElement.scrollTop || document.body.scrollTop // 滚动条在Y轴上的滚动距离
      let vh = document.compatMode === 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight // 浏览器视口的高度
      let height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) // 文档的总高度
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight
      if (((top + vh >= height) || bottomOfWindow) && !this.noMoreCard) { // 滚动到底部
        this.getList(this.cardPage, this.cardPageSize, this.search) // 如果已经滚到底了 获取数据
      }
    }
  },
  watch: {
    $route (to, from) {
      this.$router.go(0)
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
  /deep/ .el-dialog {
    padding: 5px;
    min-width: 300px;
  }
  /deep/ .el-dialog__body {
    padding: 5px;
  }
  /deep/ .el-dialog__header {
    padding: 5px;
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
