Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    money: '',
    content: '确认提现'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getMoney: function (e) {
    this.setData({
      money: e.detail.value
    })
  },
  confirm: function () {
    console.log(this.data.money, '==============')
    if (!this.data.money) {
      wx.showModal({
        title: '请输入提现的金额.',
        duration:2000,
        showCancel:false
      })
      return false
    } else {
      wx.showToast({
        title: '提现成功.',
      })
      this.setData({
        loading: true,
        content: '正在提现中,请稍等.'
      })
    }

  },
  cancle: function () {
    /**
     * navgatiorTo :  跳转到页面
     * swithtab :  跳转到 底部导航的 页面
     */
    wx.switchTab({
      url: '../me/me',  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
      success: function () {
        console.log(123)

      },       //成功后的回调；
      fail: function () {
        console.log(456)
      }
    })
    7

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