<template>
  <div>
    <headTop></headTop>
    <el-row style="margin-top: 20px">
      <el-col class="hidden-xs-only" :sm="2" :lg="2">&nbsp;</el-col>
      <el-col :xs="12" :sm="5" :lg="4">
        <div style="background-color: white;border-radius: 5px;margin: 10px">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="cardSrc" class="image">
            <div style="padding: 14px">
              <span>{{ cardName }}</span>
              <div>
                <time class="time">{{ cardDate }}</time>
              </div>
              <el-divider content-position="left"></el-divider>
              <div style="height: 60px;width: 60px;float: left">
                <el-avatar :size="60" :src="headSrc" @error="errorHandler" fit="scale-down">
                  <img src="@/assets/errorImg.png"/>
                </el-avatar>
              </div>
              <div style="height: 40px;line-height: 40px;font-size: 15px">
                <span>{{userNick}}</span>
              </div>
              <div style="height: 20px;line-height: 20px;font-size: 10px">
                <span>粉丝：{{userFans}}</span>
                <el-divider direction="vertical"></el-divider>
                <span>采集：{{cardCollect}}</span>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="12" :sm="5" :lg="4"><div style="background-color: white;border-radius: 5px;margin: 10px">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://img.erp.ctrl.com.cn/group1/M00/01/5E/PNAg4F-mF1yARblPAAB9bupom4k210.jpg" class="image">
          <div style="padding: 14px">
            <span>{{ cardName }}</span>
            <div>
              <time class="time">{{ cardDate }}</time>
            </div>
            <el-divider content-position="left"></el-divider>
            <div style="height: 60px;width: 60px;float: left">
              <el-avatar :size="60" :src="headSrc" @error="errorHandler" fit="scale-down">
                <img src="@/assets/errorImg.png"/>
              </el-avatar>
            </div>
            <div style="height: 40px;line-height: 40px;font-size: 15px">
              <span>{{userNick}}</span>
            </div>
            <div style="height: 20px;line-height: 20px;font-size: 10px">
              <span>粉丝：{{userFans}}</span>
              <el-divider direction="vertical"></el-divider>
              <span>采集：{{cardCollect}}</span>
            </div>
          </div>
        </el-card>
      </div>
      </el-col>
      <el-col class="hidden-xs-only" :sm="5" :lg="4">
        <div style="background-color: white;border-radius: 5px;margin: 10px">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="cardSrc" class="image">
          <div style="padding: 14px">
            <span>{{ cardName }}</span>
            <div>
              <time class="time">{{ cardDate }}</time>
            </div>
            <el-divider content-position="left"></el-divider>
            <div style="height: 60px;width: 60px;float: left">
              <el-avatar :size="60" :src="headSrc" @error="errorHandler" fit="scale-down">
                <img src="@/assets/errorImg.png"/>
              </el-avatar>
            </div>
            <div style="height: 40px;line-height: 40px;font-size: 15px">
              <span>{{userNick}}</span>
            </div>
            <div style="height: 20px;line-height: 20px;font-size: 10px">
              <span>粉丝：{{userFans}}</span>
              <el-divider direction="vertical"></el-divider>
              <span>采集：{{cardCollect}}</span>
            </div>
          </div>
        </el-card>
        </div>
      </el-col>
      <el-col class="hidden-xs-only hidden-md-and-down" :lg="4">
        <div style="background-color: white;border-radius: 5px;margin: 10px">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://img.erp.ctrl.com.cn/group1/M00/01/5E/PNAg4F-mF1yARblPAAB9bupom4k210.jpg" class="image">
            <div style="padding: 14px">
              <span>{{ cardName }}</span>
              <div>
                <time class="time">{{ cardDate }}</time>
              </div>
              <el-divider content-position="left"></el-divider>
              <div style="height: 60px;width: 60px;float: left">
                <el-avatar :size="60" :src="headSrc" @error="errorHandler" fit="scale-down">
                  <img src="@/assets/errorImg.png"/>
                </el-avatar>
              </div>
              <div style="height: 40px;line-height: 40px;font-size: 15px">
                <span>{{userNick}}</span>
              </div>
              <div style="height: 20px;line-height: 20px;font-size: 10px">
                <span>粉丝：{{userFans}}</span>
                <el-divider direction="vertical"></el-divider>
                <span>采集：{{cardCollect}}</span>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col class="hidden-xs-only " :sm="5" :lg="4">
        <div style="background-color: white;border-radius: 5px;margin: 10px">
          <div style="height: 80px">
            <div style="height: 60px;width: 60px;float: left;margin: 10px">
              <el-avatar :size="60" :src="headSrc" @error="errorHandler" fit="scale-down">
                <img src="@/assets/errorImg.png"/>
              </el-avatar>
            </div>
            <div style="height: 60px;float: left;margin: 10px 0px">
              <div style="height: 40px;line-height: 40px;font-size: 20px">
                <span>{{userNick}}</span>
              </div>
              <div style="height: 20px;line-height: 20px;font-size: 15px">
                <span>关注：{{userCare}}</span>
                <el-divider direction="vertical"></el-divider>
                <span>粉丝：{{userFans}}</span>
              </div>
            </div>
          </div>
          <el-divider content-position="left">采集</el-divider>
          <div style="height: 450px"></div>
          <el-divider content-position="left">空间</el-divider>
          <div style="height: 300px"></div>
        </div>
      </el-col>
      <el-col class="hidden-xs-only" :sm="2" :lg="2">&nbsp;</el-col>
    </el-row>
    <!--<div style="height: 200px;width: 200px">
      <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
    </div>-->
    <div id="vu-add" class="vu-fixed"><i class="el-icon el-icon-cherry"></i></div>
    <div id="vu-massage" class="vu-fixed"><i class="el-icon el-icon-chat-dot-square"></i></div>
  </div>
</template>

<script>
import HeadTop from '@/components/middle/HeadTop'
export default {
  name: 'Main',
  components: { HeadTop },
  data () {
    return {
      userNick: '今天的风儿',
      userCare: '',
      userFans: '',
      cardSrc: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      cardName: '泪眼问花花不语，乱红飞过秋千我去',
      cardDate: new Date(),
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
  .time {
    font-size: 13px;
    color: #999;
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
  #vu-massage {
    bottom: 20px;
  }
  #vu-add {
    bottom: 80px;
  }
</style>
