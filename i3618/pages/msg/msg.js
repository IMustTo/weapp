Page({
  data: {
    disabled: false,
    loading: false,
    msg: '',
  },

  msgblur({ detail: { value } }) {
    this.setData({ msg: value });
  },

  // 事件处理函数
  sendMsg() {
    this.setData({ loading: true });

    if (!this.validate()) {
      wx.showModal({
        title: '提示',
        content: '先填写内容先！！！',
        showCancel: false,
      });
      this.setData({ loading: false });
      return;
    }

    setTimeout(() => {
      wx.showModal({
        title: '你发送的消息是：',
        content: this.data.msg,
        showCancel: false,
      });

      this.setData({ loading: false });
    }, 2000);
  },

  validate() {
    if (this.data.msg.trim()) {
      return true;
    }

    return false;
  },

  onLoad() {

  },
});
