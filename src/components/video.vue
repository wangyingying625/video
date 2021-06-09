<template>
    <div class="header">
<!--      <video-player-->
<!--        ref="videoPlayer"-->
<!--        :playsinline="true"-->
<!--        :options="playerOptions">-->
<!--      </video-player>-->
      <video width="100%" height="100%" :src="'http://3gvideo.taropowder.cn/' + id + '.m4v'" controls>
      </video>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              id:524
            }
        },
      // created() {
      //   this.wechatShare({
      //     title: '你重置的分享标题',
      //     success: () => { //你重置分享成功后的回调
      //       this.htm = '你的小伙伴已收到'
      //       this.showDialog = true
      //     }
      //   })
      // },
      mounted() {
        this.id=$route.query.id
      }
    }
</script>

<style lang="less" scoped>
  .header{
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
  }
  .footer{
    background-color: #fff;
  }
</style>
