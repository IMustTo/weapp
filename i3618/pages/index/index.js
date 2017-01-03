// index.js
// 获取应用实例
Page({
  data: {
    common: {
      title: '常用应用',
      apps: [
        {
          icon: '../../assets/images/app-tongzhigonggao.png',
          name: '通知公告',
          page: '../msg/msg',
        },
      ],
    },

    navbar: [
      {
        icon: '../../assets/images/icon-home.png',
        name: '首页',
        page: '../msg/msg',
      },
      {
        icon: '../../assets/images/icon-xiaoxi.png',
        name: '消息',
        page: '../msg/msg',
      },
      {
        icon: '../../assets/images/icon-more.png',
        name: '',
        page: '../msg/msg',
      },
      {
        icon: '../../assets/images/icon-tongxunlu.png',
        name: '通讯录',
        page: '../msg/msg',
      },
      {
        icon: '../../assets/images/icon-wo.png',
        name: '我',
        page: '../msg/msg',
      },
    ],
  },

  onLoad() {
    // TODO
  },
});
