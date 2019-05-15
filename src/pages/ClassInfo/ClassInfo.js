// src/pages/ClassInfo/ClassInfo.js
const App = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        focus: false,
        inputValue: '',
        navH: 0,
        naH:0
    },
    bindButtonTap: function () {
        this.setData({
            focus: true
        })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            navH: App.globalData.navHeight,
            naH: App.globalData.Height
        })
        console.log(this.data)
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
