import Vue from 'vue'
import wx from 'wx-js-sdk'
//暴露插件
export function wechatShare(shareDate) {
  return new Promise(async function(resolve, reject) {
    try {
      let isWechat = navigator.userAgent.indexOf('MicroMessenger') > -1
      if(!isWechat) {
        return resolve('您目前所处的并不是微信内置浏览器')
      }
      //设置默认的分享标题、描述、网页、图片，以及分享成功后的回调
      let defaultData = {
        title: '这5句话情人，让我甜到了心了去！',
        content: '试试点进来，你也会被甜到...',
        url: 'http://ricola.360vt.cn/qrcode',
        logo: 'http://ricola.360vt.cn/qrcode/static/images/share.jpg',
        success: function (res) {}
      }
      //shareDate是你重置的分享标题等等
      let data = { ...defaultData, ...shareDate }
      //等待后台返回签名
      let ret = await act()
      console.log('ret = ', ret)
      //后台返回成功后，配置微信的API
      let newRest = Object.assign({
        debug: true,
        jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
      }, {
        appId: ret.content.appId, //公众号的唯一标识
        timestamp: ret.content.timeStamp, //接口返回签名的时间戳
        nonceStr: ret.content.nonceStr, //接口返回签名的随机串
        signature: ret.content.signature //接口返回签名
      })
      wx.config(newRest)
      //处理验证成功后的信息
      wx.ready(function () {
        wx.onMenuShareTimeline({ //分享到朋友圈
          title: data.title,
          desc: data.content,
          link: data.url,
          imgUrl: data.logo,
          dataUrl: '',
          success: data.success,
          cancel: function () {}
        })
        wx.onMenuShareAppMessage({ //分享给朋友
          title: data.title,
          desc: data.content,
          link: data.url,
          imgUrl: data.logo,
          dataUrl: '',
          success: data.success,
          cancel: function () {}
        })
        wx.onMenuShareQQ({ //分享到QQ
          title: data.title,
          desc: data.content,
          link: data.url,
          imgUrl: data.logo,
          dataUrl: '',
          success: data.success,
          cancel: function () {}
        })
      })
    } catch (error) {
      reject(error) //处理验证失败后的结果
    }
  })
}
//异步接口获取签名
function act() {
  return new Promise((resolve, reject) => {
    Vue.http.get('http://ricola.360vt.cn/qrcode/getData4WxShare', {
      params: {
        url: window.location.href.split('#')[0]
      }
    }).then(res => {
      resolve(res)
    },err => {
      reject( err )
    })
  })
}
