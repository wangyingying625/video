<template>
  <div>
    <div class="header">
      <a-row>
        <a-col :span="24">
          <img width="100%" src="http://3gvideo.taropowder.cn/header.jpg"/>
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
    <div class="footer">
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
      ]
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
  .header{
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
