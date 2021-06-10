<template>
  <div>
    <div class="header">
      <a-row>
        <a-col :span="24">
          <a-icon type="share-alt" @click="maskShow"/>
          <img style="z-index: -1;" width="100%" src="http://3gvideo.taropowder.cn/header.jpg"/>
        </a-col>
      </a-row>
    </div>
    <div class="content">
      <a-row v-for="(list, index) in msg" :key="index">
        <a-col :span="8" v-for="(item, i) in list" :key="i" @click="toVideo(item)">
          <img :src="'http://3gvideo.taropowder.cn/' + item + '.png'">
        </a-col>
      </a-row>
    </div>

    <div class="mask" v-show="show" @click="maskShow">
      <div>
        <img height="100px" src="http://3gvideo.taropowder.cn/arrow.png"/>
      </div>
      <p class="text_share">
        点击右上角分享
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: [
        ['520','522','523'],
        ['524','525','526'],
        ['527','528','529'],
        ['530','531','601'],
        ['602','603','604'],
        ['605','606','607'],
        ['608']
      ],
      show:false
    }
  },
  methods:{
    toVideo(id){
      this.$router.push({
        path: '/video',
        query: {
          id: id
        }
      })
    },
    maskShow(){
      this.show=!this.show
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
  .mask{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(#000,0.5);
    img{
      position: absolute;
      top: 25px;
      right: 20px;
    }
    .text_share{
      color: #fff;
      position: absolute;
      top: 135px;
      right: 45px;
    }
  }
  /deep/.header{
    .ant-col{
      .anticon{
        padding: 4px;
        border: 1px solid #fff;
        border-radius: 50%;
        position: fixed;
        color:#fff;
        top: 4px;
        right: 5px;
      }
    }
  }
  .content {
    background-color: crimson;
    .ant-col{
      background-color: crimson;
      width: 33%;
      img{
        width: 100%;
      }
    }
  }

</style>
