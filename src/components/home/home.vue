<template>
  <div>
    <!-- 页头部分 -->
    <van-nav-bar title="小黑商城" fixed />
    <!-- 路由占位符 -->
    <div class="count"><router-view></router-view></div>
    <!-- 页底Tab栏 -->
    <van-tabbar v-model="active" @change="onChangeTab">
      <van-tabbar-item
        v-for="(item, index) in tabbars"
        :key="index"
        :to="item.name"
        :info="item.name == 'cart' ? goodsNumber : ''"
      >
        <span>{{ item.title }}</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? item.active : item.normal"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      active: 0,
      total: 5,
      tabbars: [
        {
          name: 'home',
          title: '首页',
          normal: require('../../assets/images/home.png'),
          active: require('../../assets/images/home-active.png')
        },
        {
          name: 'cates',
          title: '分类',
          normal: require('../../assets/images/cates.png'),
          active: require('../../assets/images/cates-active.png')
        },
        {
          name: 'search',
          title: '搜索',
          normal: require('../../assets/images/search.png'),
          active: require('../../assets/images/search-active.png')
        },
        {
          name: 'cart',
          title: '购物车',
          normal: require('../../assets/images/cart.png'),
          active: require('../../assets/images/cart-active.png')
        },
        {
          name: 'my',
          title: '个人中心',
          normal: require('../../assets/images/my.png'),
          active: require('../../assets/images/my-active.png')
        }
      ]
    }
  },
  created() {
    this.active = sessionStorage.active - 0 || 0
  },
  methods: {
    onChangeTab(e) {
      this.active = e
      sessionStorage.active = e
    },
    ...mapMutations(['changeGoodsName'])
  },
  computed: {
    ...mapState(['goodsName']),
    goodsNumber() {
      return this.goodsName.reduce((sum, item) => sum + item.count, 0)
    }
  }
}
</script>

<style scoped>
.van-tabbar {
  border-top: 1px solid #ccc;
}
.van-tabbar-item__icon img {
  width: 0.56rem;
  height: 0.56rem;
}
.count {
  margin-top: 1.6rem;
}
</style>
