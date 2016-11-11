// index.js
// 获取应用实例
Page({
  data: {
    imgUrls: [
      '../../assets/images/s1.png',
      '../../assets/images/s2.png',
    ],

    btns: [{
      icon: '../../assets/images/tzgg.png',
      name: '通知公告',
      page: 'msg',
    }, {
      icon: '../../assets/images/zy.png',
      name: '发作业',
      page: '1',
    }, {
      icon: '../../assets/images/qz.png',
      name: '家校圈',
      page: '2',
    }, {
      icon: '../../assets/images/xyx.png',
      name: '秀一秀',
      page: '3',
    }],
  },

  tapGridBtn(e) {
    const { page } = e.currentTarget.dataset;

    wx.navigateTo({
      url: `../${page}/${page}`,
    });
  },
});
