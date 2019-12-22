// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classfiySelect: "",
    leftText: [{
      id: "01",
      text1: "学一",
    },
    {
      id: "02",
      text1: "教一",
    },
    {
      id: "03",
      text1: "学二",
    },
    {
      id: "04",
      text1: "教二",
    },
    {
      id: "05",
      text1: "学三",
    },
    {
      id: "06",
      text1: "教三",
    },
    {
      id: "07",
      text1: "学四",
    },
    {
      id: "08",
      text1: "教四",
    },
    {
      id: "09",
      text1: "学五",
    },
    {
      id: "010",
      text1: "教五",
    },

    ],
    rightData: [{
      id: "01",
      title: "学一食堂",
      frist: [{
        url: "https://s2.ax1x.com/2019/11/24/MXlTPJ.jpg",
        text: "担担面",
        money: 11,
        sum: 4,
      },
      {
        url: "https://s2.ax1x.com/2019/11/24/MX327T.jpg",
        text: "麻酱拌面",
        money: 11,
        sum: 5,
      },
      {
        url: "https://s2.ax1x.com/2019/11/24/MX33pd.jpg",
        text: "西红柿蛋炒饭",
        money: 10,
        sum: 4,
      },
        {
          url: "https://s2.ax1x.com/2019/11/25/Mj6Qvq.jpg",
          text: "燕麦牛奶",
          money: 5,
          sum: 4,
        },
      {
        url: "https://s2.ax1x.com/2019/11/25/MX4qSg.jpg",
        text: "胡萝卜鸡蛋包子",
          money: 1,
          sum: 5,
      },
        {
          url: "https://s2.ax1x.com/2019/11/25/MjRYO1.jpg",
          text: "豆浆",
          money: 2,
          sum: 5,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MX1gFe.jpg",
          text: "土家掉渣饼",
          money: "0+",
          sum: 5,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MX3uTO.jpg",
          text: "烧麦",
          money: 1,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/25/MjRaTK.jpg",
          text: "香酥鸡腿饭",
          money: 11,
          sum: 3,
        },
      ],
    },
    {
      id: "02",
      title: "教一食堂",
      frist: [{
        url: "https://s2.ax1x.com/2019/11/24/MOXWBF.jpg",
        text: "干拌面",
        money: 10,
        sum: 5,
      },
      {
        url: "https://s2.ax1x.com/2019/11/24/MXCfYD.jpg",
        text: "肥肠小面",
        money: 13,
        sum: 5,
      },
      {
        url: "https://s2.ax1x.com/2019/11/24/MXPCmq.jpg",
        text: "豌豆小面",
        money: 9,
        sum: 5,
      },
      {
        url: "https://s2.ax1x.com/2019/11/24/MXC0W4.jpg",
        text: "蘑菇豆子菜",
          money: 9,
          sum: 4,
      },
      {
        url: "https://s2.ax1x.com/2019/11/24/MXC5SH.jpg",
        text: "麻辣烫",
          money: "18.8/斤",
          sum: 4,
      },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXCrl9.jpg",
          text: "鸡腿豆角丸子冬瓜",
          money: 17,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXCsyR.jpg",
          text: "馄饨",
          money: 7,
          sum: 5,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXCyO1.jpg",
          text: "丸子炖萝卜",
          money: 5,
          sum: 3,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXCcex.jpg",
          text: "鸡腿",
          money: 5,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXChfe.jpg",
          text: "小笼包",
          money: 5,
          sum: 5,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXCo6A.jpg",
          text: "烧麦",
          money: 7,
          sum: 5,
        },
         {
           url: "https://s2.ax1x.com/2019/11/24/MXCIld.jpg",
          text: "鸡柳夹馍",
          money: 5,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXPpXn.jpg",
          text: "鸡汤小面",
          money: 7,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXCb0P.jpg",
          text: "香辣烤肉拌饭",
          money: 10,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXCqTf.jpg",
          text: "皮蛋瘦肉粥",
          money: 3,
          sum: 5,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXCXtS.jpg",
          text: "蛋挞",
          money: 2.5,
          sum: 5,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXZpPP.jpg",
          text: "牛肉小面",
          money: 13,
          sum: 5,
        },
      ],
    },
    {
      id: "03",
      title: "学二食堂",
      frist: [{
        url: "https://s2.ax1x.com/2019/11/25/MjcQFe.jpg",
        text: "玉米发糕",
        money: 1,
        sum: 5,
      },
      {
        url: "https://s2.ax1x.com/2019/11/24/MX83UU.jpg",
        text: "土豆丝饼",
        money: 3,
        sum: 5,
      },
      {
        url: "https://s2.ax1x.com/2019/11/24/MX19Gd.jpg",
        text: "玉米块",
        money: 1,
        sum: 4,
      },
      {
        url: "https://s2.ax1x.com/2019/11/24/MX1Bsx.jpg",
        text: "南瓜发糕",
        money: 1.5,
        sum: 3,
      },
        {
          url: "https://s2.ax1x.com/2019/11/25/MXIG2F.jpg",
          text: "小米粥",
          money: 0.5,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXGAqx.jpg",
          text: "红薯",
          money: 2,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/25/MjRfk8.jpg",
          text: "豆浆",
          money: 1,
          sum: 5,
        },
        {
          url: "https://s2.ax1x.com/2019/11/25/MjHfrF.jpg",
          text: "爆炒面",
          money: 12,
          sum: 5,
        },
        {
          url: "https://s2.ax1x.com/2019/11/25/MjgjbV.jpg",
          text: "黑椒烤肉拌饭",
          money: 12,
          sum: 3,
        },

      ],
    },
    {
      id: "04",
      title: "教二食堂",
      frist: [{
        url: "https://s2.ax1x.com/2019/11/23/MqRzkQ.jpg",
        text: "豆豉蒜苔炒培根",
        money: 8,
        sum: 5,
      },
      {
        url: "https://s2.ax1x.com/2019/11/23/MqRvTg.jpg",
        text: "冬瓜",
        money: 3,
        sum: 2,
      },
      {
        url: "https://s2.ax1x.com/2019/11/23/MqWpfs.jpg",
        text: "果汁鸡",
        money: 7,
        sum: 4,
      },
        {
          url: "https://s2.ax1x.com/2019/11/23/MqWi60.jpg",
          text: "鸡肉饭",
          money: 8,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/23/MqWAmT.jpg",
          text: "煎蛋",
          money: 1,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/23/MqWE0U.jpg",
          text: "龙利鱼蒸蛋",
          money: 8,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/23/MqWmtJ.jpg",
          text: "鲇鱼炖豆腐",
          money: 8,
          sum: 3,
        },
      ],
    },
    {
      id: "05",
      title: "学三食堂",
      frist: [{
        url: "https://s2.ax1x.com/2019/11/25/Mj6PgI.jpg",
        text: "米酒醪糟汤圆",
        money: 4,
        sum: 1,
      },
      {
        url: "https://s2.ax1x.com/2019/11/24/MX8NvR.jpg",
        text: "烤面筋",
        money: 4,
        sum: 1,
      },
      {
        url: "https://s2.ax1x.com/2019/11/24/MX8xaT.jpg",
        text: "糯米蒸鸭",
        money: 4.5,
        sum: 5,
      },
      {
        url: "https://s2.ax1x.com/2019/11/24/MXMTwF.jpg",
        text: "鱼香杏鲍菇",
          money: 3,
          sum: 5,
      },
      {
          url: "https://s2.ax1x.com/2019/11/25/MjoS1O.jpg",
          text: "胡萝卜粉丝",
          money: 3,
          sum: 5,
      },
        {
          url: "https://s2.ax1x.com/2019/11/24/MX8LMn.jpg",
          text: "鸭血杂炖",
          money: 6,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/25/MXb3jS.jpg",
          text: "腐竹芹菜",
          money: 5,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/25/MX7nDH.jpg",
          text: "白菜汤",
          money: 2,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/25/Mjo8Nq.jpg",
          text: "酱爆鸦片",
          money: 4,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXlRK0.jpg",
          text: "圆白菜炒豆皮",
          money: 3,
          sum: 3,
        },
        {
          url: "https://s2.ax1x.com/2019/11/25/Mjybg1.jpg",
          text: "红烧狮子头",
          money: 3,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/25/MjyXDK.jpg",
          text: "糖醋鸡块",
          money: 6,
          sum: 3,
        },
        {
          url: "https://s2.ax1x.com/2019/11/25/MX7F4x.jpg",
          text: "清炒豆芽",
          money:0.8,
          sum: 5,
        },
        {
          url: "https://s2.ax1x.com/2019/11/25/MXbnAA.jpg",
          text: "酸菜肉丝面",
          money: 6,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/25/MXbl1f.jpg",
          text: "孜然酥鸡肉",
          money: 5,
          sum: 4,
        },
      ],
    },
    {
      id: "06",
      title: "教三食堂",
      frist: [{
        url: "https://s2.ax1x.com/2019/11/23/MqW80O.jpg",
        text: "圆白菜炒肉",
        money: 4,
        sum: 5,
      },
      {
        url: "https://s2.ax1x.com/2019/11/24/MXKJCn.jpg",
        text: "芹菜炒蟹棒",
        money: 4,
        sum: 5,
      },
      {
        url: "https://s2.ax1x.com/2019/11/24/MXKtg0.jpg",
        text: "炸酱面",
        money: 10,
        sum: 2,
      },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXKNvV.jpg",
          text: "牛肉云吞面",
          money: 14,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXKauT.jpg",
          text: "菠萝鸡米饭",
          money: 14,
          sum: 4,
        },
      ],
    },
    {
        id: "07",
        title: "学四食堂",
        frist: [{
          url: "https://s2.ax1x.com/2019/11/24/MXNn0I.jpg",
          text: "奥尔良烤翅饭",
          money: 15,
          sum: 5,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXNFfO.jpg",
          text: "老北京烤鸭饭",
          money: 13,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXNV6H.jpg",
          text: "盐酥鸡饭",
          money: 14,
          sum: 5,
        },
          {
            url: "https://s2.ax1x.com/2019/11/24/MXNE1e.jpg",
            text: "酱香排骨饭",
            money: 16,
            sum: 4,
          },
          {
            url: "https://s2.ax1x.com/2019/11/24/MXNu7t.jpg",
            text: "三杯鸡排饭",
            money: 13,
            sum: 4,
          },
          {
            url: "https://s2.ax1x.com/2019/11/24/MXNZXd.jpg",
            text: "花甲方便面",
            money: 13,
            sum: 5,
          },
          {
            url: "https://s2.ax1x.com/2019/11/24/MXNQtf.jpg",
            text: "铁板黑椒牛排",
            money: 15,
            sum: 2,
          },
          {
            url: "https://s2.ax1x.com/2019/11/24/MXNJXj.jpg",
            text: "麻辣香锅",
            money: "0+",
            sum: 5,
          },
          {
            url: "https://s2.ax1x.com/2019/11/24/MXNU7q.jpg",
            text: "咖喱鸡烤肉双拼饭",
            money: 12,
            sum: 4,
          },
          {
            url: "https://s2.ax1x.com/2019/11/24/MXNgBR.jpg",
            text: "可乐鸡翅饭",
            money: 14,
            sum: 4,
          },
          {
            url: "https://s2.ax1x.com/2019/11/24/MXNdA0.jpg",
            text: "鱼排饭",
            money: 14,
            sum: 5,
          },
          {
            url: "https://s2.ax1x.com/2019/11/24/MXND9U.jpg",
            text: "久久鸭腿饭",
            money: 14,
            sum: 4,
          },
          {
            url: "https://s2.ax1x.com/2019/11/24/MXNh4K.jpg",
            text: "玉米粉花甲",
            money: 14,
            sum: 5,
          },
          {
            url: "https://s2.ax1x.com/2019/11/24/MXNfN6.jpg",
            text: "麻辣烫",
            money: "0+",
            sum: 5,
          },
        ],
    },
      {
        id: "08",
        title: "教四食堂",
        frist: [{
          url: "https://s2.ax1x.com/2019/11/24/MXKMDS.jpg",
          text: "北京烤鸭",
          money: 16.8,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXKyCR.jpg",
          text: "烤肉拌饭",
          money: 13,
          sum: 5,
        },
        {
          url: "https://s2.ax1x.com/2019/11/24/MXKdDU.jpg",
          text: "咖喱黑椒鸡排饭",
          money: 13,
          sum: 4,
        },
          {
            url: "https://s2.ax1x.com/2019/11/24/MXKwbF.jpg",
            text: "水煮龙利鱼",
            money: 13.5,
            sum: 4,
          },
          {
            url: "https://s2.ax1x.com/2019/11/24/MXM3qO.jpg",
            text: "火锅刀削面",
            money: 11,
            sum: 5,
          },
          {
            url: "https://s2.ax1x.com/2019/11/24/MXKcgx.jpg",
            text: "素三鲜水饺",
            money: 12,
            sum: 4,
          },
          {
            url: "https://s2.ax1x.com/2019/11/24/MXK681.jpg",
            text: "牛肉大葱水饺",
            money: 14,
            sum: 3,
          },
        ],
      },
      {
        id: "09",
        title: "学五食堂",
        frist: [{
          url: "https://s2.ax1x.com/2019/11/25/MXaXp8.jpg",
          text: "重庆辣抄手",
          money: "13+",
          sum: 5,
        },
        {
          url: "https://s2.ax1x.com/2019/11/25/MXabkt.jpg",
          text: "喜上麻辣泡泡鸡",
          money: 17,
          sum: 4,
        },
        {
          url: "https://s2.ax1x.com/2019/11/25/MXa7TI.jpg",
          text: "过桥米线",
          money: "10+",
          sum: 5,
        },
          {
            url: "https://s2.ax1x.com/2019/11/25/MXaT0A.jpg",
            text: "酸菜鱼",
            money: 15,
            sum: 4,
          },
          {
            url: "https://s2.ax1x.com/2019/11/25/MXaqtP.jpg",
            text: "丸子米线",
            money: 12,
            sum: 4,
          },
          {
            url: "https://s2.ax1x.com/2019/11/25/MXaLff.jpg",
            text: "蟹棒冒菜",
            money: 14,
            sum: 4,
          },
        ],
      },
      {
        id: "10",
        title: "教五食堂",
        frist: [{
          url: "",
          text: "",
          money: 0,
          sum: 0,
        },
        {
          url: "",
          text: "",
          money: 0,
          sum: 0,
        },
        {
          url: "",
          text: "",
          money: 0,
          sum: 0,
        },
        ],
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      classfiySelect: this.data.leftText[0].id
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

  },
  //滚动触发
  scroll: function (e) {
    var scrollTop = e.detail.scrollTop,
      h = 0,
      classfiySelect;
    var that = this;
    that.data.leftText.forEach(function (clssfiy, i) {
      var _h = 26 + that.length(clssfiy['id']) * 102;
      if (scrollTop >= h) {
        classfiySelect = clssfiy['id'];
      }
      h += _h;
      console.log(h);
    })
    that.setData({
      classfiySelect: classfiySelect,
    })
  },
  //求每一栏高度
  length: function (e) {
    var that = this;
    var rightData = that.data.rightData;
    for (var i = 0; i < rightData.length; i++) {
      if (rightData[i]['id'] == e) {
        return rightData[i]['frist'].length;

      }
    }
  },
  //点击左边事件
  left_list: function (e) {
    var that = this;
    var l_id = e.currentTarget.dataset.id;
    that.setData({
      rigId: l_id,
    })
  },
  //跳转详情界面
  particulars: function (e) {

  }
})