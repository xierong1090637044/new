Component({
  data: {
    color: "#999",
    selectedColor: "#E72E62",
    list: [{
        "pagePath": "/pages/index/index",
        "iconPath": "/images/tabar/tab_home_icon.png",
        "selectedIconPath": "/images/tabar/tab_home_selected_icon.png",
        "text": "首页",
      },
      {
        "pagePath": "/pages/strategy/strategy",
        "iconPath": "/images/tabar/tab_home_find_icon.png",
        "selectedIconPath": "/images/tabar/tab_home_find_selected_icon.png",
        "text": "发现",
      },
      {
        "iconPath": "/images/tabar/tab_home_more_icon.png",
        "selectedIconPath": "/images/tabar/tab_home_more_icon.png",
      },
      {
        "pagePath": "/pages/activities/activities",
        "iconPath": "/images/tabar/tab_home_welfare_icon.png",
        "selectedIconPath": "/images/tabar/tab_home_welfare_selected_icon.png",
        "text": "福利",
      },
      {
        "pagePath": "/pages/mine/mine",
        "iconPath": "/images/tabar/tab_home_my_icon.png",
        "selectedIconPath": "/images/tabar/tab_home_my_selected_icon.png",
        "text": "我的",
        "total": 0,
      }
    ],

    index_tabs: [{
        icon: "/images/pop_icon_film.png",
        desc: "约电影",
        url: "/pages/appointment/choose_perm/index?type=0"
      },
      {
        icon: "/images/pop_icon_show.png",
        desc: "约演出",
        url: "/pages/appointment/choose_perm/index?type=1"
      },
      {
        icon: "/images/pop_icon_motion.png",
        desc: "约运动",
        url: "/pages/appointment/choose_perm/index?type=5",
      },
      {
        icon: "/images/pop_icon_tourism.png",
        desc: "约旅游",
        url: "/pages/appointment/choose_perm/index?type=2"
      },
      {
        icon: "/images/pop_icon_public_welfare.png",
        desc: "约公益",
        url: "/pages/appointment/choose_perm/index?type=3"
      },
      {
        icon: "/images/pop_icon_have_fun.png",
        desc: "约玩乐",
        url: "/pages/appointment/choose_perm/index?type=4"
      },
      
      {
        icon: "/images/pop_icon_game.png",
        desc: "约游戏",
        url: "/pages/appointment/choose_perm/index?type=6"
      },
      {
        icon: "/images/pop_icon_btn_appointment_more.png",
        desc: "其他",
        url: "/pages/appointment/start_3/start_3"
      },
    ]
  },
  attached() {},
  methods: {

    switchTab(e) {
      const data = e.currentTarget.dataset
      this.data.list[4].total = wx.getStorageSync("UnreadNums")
      const url = data.path
      wx.switchTab({
        url
      })

      this.setData({
        list: this.data.list,
        selected: data.index
      })
    },

    choose_add: function() {
      this.setData({
        add_click: true
      })
    },

    hidden_select: function() {
      wx.setStorageSync("repo_type", "1")
      this.setData({
        add_click: false
      })
    },
  }
})