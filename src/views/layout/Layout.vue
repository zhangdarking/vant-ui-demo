<template>
  <div class="layout-page">
    <router-view />
    <div class="bottom-tab-bar">
      121212
      <!-- <van-tabbar
        v-model="activeTab"
        @change="changeTab"
        :fixed="false"
      >
        <van-tabbar-item
          name="home"
          icon="home-o"
        >主页</van-tabbar-item>
        <van-tabbar-item
          name="giftExchange"
          icon="search"
        >兑换</van-tabbar-item>
        <van-tabbar-item
          name="cart"
          icon="friends-o"
        >购物车</van-tabbar-item>
        <van-tabbar-item
          name="mine"
          icon="setting-o"
        >我的</van-tabbar-item>
      </van-tabbar> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {
      activeTab: 'home'
    }
  },
  mounted () {
    this.activeTab = this.$route.name
  },
  methods: {
    changeTab (tabName) {
      this.$router.push({
        name: tabName
      })
    }
  }
}
</script>
