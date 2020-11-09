<template>
  <div>
    <headTop></headTop>
    <el-row style="margin-top: 10px">
      <el-col class="hidden-md-and-down" :lg="1">&nbsp;</el-col>
      <el-col :xs="12" :sm="12" :lg="4">
        <div style="background-color: white;border-radius: 5px;margin: 10px">
          <el-card :body-style="{ padding: '0px' }">
            <el-image :src="cardSrc" class="image" :preview-src-list="srcList"></el-image>
            <div style="padding: 13px">
              <span style="font-size: 11px">{{ cardName }}</span>
              <el-divider content-position="left" style="padding: 0px;margin: 0px"></el-divider>
              <div style="height: 40px;width: 40px;float: left">
                <el-avatar :size="40" :src="headSrc" @error="errorHandler" fit="scale-down">
                  <img src="@/assets/errorImg.png"/>
                </el-avatar>
              </div>
              <div style="height: 40px;line-height: 40px">
                <span style="font-size: 8px">{{userNick}}</span>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="4">
        1
      </el-col>
      <el-col class="hidden-md-and-down" :lg="4">
        1
      </el-col>
      <el-col class="hidden-md-and-down" :lg="4">
        1
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
      userNick: '今天的风儿甚是喧嚣啊',
      userCare: '',
      userFans: '',
      cardSrc: 'http://pic3.pocoimg.cn/image/poco/works/06/2020/1029/11/16039421889025499_201533676.JPG?imageMogr2/auto-orient/thumbnail/x800/blur/1x0/quality/100&',
      srcList: ['http://pic3.pocoimg.cn/image/poco/works/06/2020/1029/11/16039421889025499_201533676.JPG?imageMogr2/auto-orient/thumbnail/x800/blur/1x0/quality/100&'],
      cardName: '泪眼问花花不语，乱红飞过秋千我去',
      cardLaud: '',
      cardCollect: '',
      content: '',
      editorOption: {
        placeholder: '编辑文章内容'
      }
    }
  },
  mounted: function () {
    this.getList()
  },
  methods: {
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
          this.$message({message: resposeData.message, type: 'success'})
        } else {
          this.$message({message: resposeData.message, type: 'error'})
        }
      }).catch((error) =>
        this.$message({message: error, type: 'error'})
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-divider--horizontal{
    margin: 8px 0;
  }

  .image {
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
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
