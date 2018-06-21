// pages/me/me.js
//获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: '',
    motto: 'Hello World',
    userInfo: {},
    loading: false,
    jifen: 0,
    phone:'',//手机号
    btnStatus:true,//绑定手机号的按钮
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 获取收货地址信息
  getAddressInfo(){
   wx.chooseAddress({
     success:function(res){
       console.log(res)
     }
   })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.phone.length)
    this.getUserInfo()
    // this.getAddressInfo()

  },
  getUserInfo: function (cb) {
    var that = this
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            // console.log(res)
            if (res.userInfo.gender == '') {
              that.setData({
                userInfo: '',
                status: false,
              });
            } else {
              that.setData({
                userInfo: res.userInfo,
                status: true
              });
            }

          }
        })
      }
    })
  },
  // 签到
  qiandao() {
    wx.showToast({
      title: '签到成功.',
    })
  },
  // 关于我们
  aboutUs() {
    wx.showModal({
      title: 'About Us',
      content: 'It Was Just A Little Program.',
      showCancel: false,
    })

  },
  // 绑定手机号
  bindPhone() {
    let that = this
    let itemList = ['15021795320', '13973664539', '17721184630', '17621243820']
    wx.showActionSheet({
      itemList:itemList,
      success: function (res) {
        console.log(res)
        that.setData({
          phone: itemList[res.tapIndex],
          btnStatus:false
        })
        // console.log(that.data.phone.length)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  layout() {
    let that = this
    wx.showModal({
      title: '确定要退出吗？',
      content: '',
      success: function () {
        that.setData({
          status: false
        })
      }
    })

  },
  login() {
    this.getUserInfo()
    this.setData({
      status: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
 
    

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})