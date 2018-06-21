//index.js
//获取应用实例
const app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    imgUrls: [
      '../img/1.jpg',
      '../img/2.png',
      '../img/3.png',
      '../img/4.png',
      '../img/5.png',
    ],
    circular:true,
    toView: 'red',
    scrollTop: 100,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    swiperCurrent: 0,
    indicatorDots: true,
    categories: [],
    activeCategoryId: 0,
    loadingMoreHidden: true,
    goods: [],//货物，后台接口请求回来的
  },
  bindTypeTap: function (e) {
    console.log(e, '-----')
    this.setData({
      selectCurrent: e.index
    })
  },
  tabClick: function (e) {
    console.log(e, '===========')
    this.setData({
      activeCategoryId: e.currentTarget.id
    });
  },
  onLoad: function () {
    var that = this
    let cate = [{ id: 0, name: "全部" }, { id: 1, name: "上装" }, { id: 2, name: "裤装" },
    { id: 3, name: "风衣" }, { id: 4, name: "皮衣" }, { id: 5, name: "卫衣" }]
    that.setData({
      categories: cate,
      activeCategoryId: 0
    })
    that.getGoodsList()
  },
  getGoodsList: function() {
    let that = this
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/list',
      data:'',
      success: function (res) {
        // console.log(res.data, '  ===========================')
        if (res.data.code == 0) {
          let goods = []
          for (let i in res.data.data) {
            goods.unshift(res.data.data[i])
          }
        let newGoods =  goods.slice(0,42)
        console.log(newGoods, 'goods')
          that.setData({
            goods: newGoods
          })
        
        }
           
      }
    })
  }
})