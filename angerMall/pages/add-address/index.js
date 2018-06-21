// pages/add-address/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: [],//省市区级联列表
    username: '',//联系人姓名
    userphone: '',//手机号
    addressinfo: '',//详细地址
    ems: '',//邮政编号
    name: '',//具体地址
    address: '',//省市区
  },
  // 获取输入的姓名
  userName: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  // 获取 手机号
  userPhone: function (e) {
    this.setData({
      userphone: e.detail.value
    })
  },
  // 获取详细地址
  getAddress(e) {
    this.setData({
      addressinfo: e.detail.value
    })

  },
  // 获取邮政编号
  getEms(e) {
    this.setData({
      ems: e.detail.value
    })

  },
  //保存 信息
  save() {
    console.log(this.data.username, '===========')
    let that = this
    if (!that.checked()) {
      return false
    } else {
      wx.showToast({
        title: '保存成功',
        success: function (res) {
        wx.setStorage({
          key: 'username',
          data: that.data.username,
        })
        wx.setStorage({
          key: 'phone',
          data: that.data.userphone,
        })
        wx.setStorage({
          key: 'address',
          data: that.data.addressinfo,
        })
        wx.setStorage({
          key: 'ems',
          data: that.data.ems,
        })



          wx.switchTab({
            url: '../me/me',
          })

        }
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 获取位置信息
  getLocation: function () {
    let that = this
    wx.chooseLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res, 123)
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        that.setData({
          name: res.name,
          address: res.address
        })
      }
    })

  },
  // 验证 输入的内容
  checked() {
    if (!this.data.username) {
      wx.showToast({
        title: '请输入姓名',
      })
      return false
    } else if (!this.data.userphone) {
      wx.showToast({
        title: '请输入手机号码',
      })
      return false

    } else if (!this.data.addressinfo) {
      wx.showToast({
        title: '请输入详细地址',
      })
      return false
    } else if (!this.data.ems) {
      wx.showToast({
        title: '请输入邮政编号',
      })
      return false
    }
    return true
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