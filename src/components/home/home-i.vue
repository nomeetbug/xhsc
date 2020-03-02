<template>
  <div>
    <!-- 轮播图区域 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swiperInfo" :key="item.goods_id">
        <img v-lazy="item.image_src" @click="toDetail(item.goods_id)" />
      </van-swipe-item>
    </van-swipe>
    <!-- 导航区 -->

    <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="(item, index) in navInfo" :key="index">
        <img :src="item.image_src" />
      </van-grid-item>
    </van-grid>

    <!-- 楼层区 -->
    <div class="floor">
      <div v-for="(item, index) in floorInfo" :key="index">
        <div class="title">
          <img :src="item.floor_title.image_src" />
        </div>
        <div class="box">
          <img
            :src="item.image_src"
            v-for="(item, index) in item.product_list"
            :key="index"
            @click="goodList(item.navigator_url)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 轮播数据
      swiperInfo: [],
      // 导航数据
      navInfo: [],
      // 楼层区数据
      floorInfo: []
    }
  },
  created() {
    this.getSwiper()
    this.getNav()
    this.getFloor()
  },
  methods: {
    // 获取轮播图数据
    async getSwiper() {
      const { data: res } = await this.$http.get('home/swiperdata')
      console.log(res)

      if (res.meta.status !== 200) {
        return this.$toast('获取轮播图数据失败！')
      }
      this.swiperInfo = res.message
    },
    // 获取导航数据
    async getNav() {
      const { data: res } = await this.$http.get('home/catitems')
      console.log(res)
      if (res.meta.status !== 200) {
        return this.$toast('获取列表数据失败！')
      }
      this.navInfo = res.message
    },
    // 获取楼层区数据
    async getFloor() {
      const { data: res } = await this.$http.get('home/floordata')
      if (res.meta.status !== 200) {
        return this.$toast('获取楼层数据失败！')
      }
      this.floorInfo = res.message
      console.log(this.floorInfo)
    },
    // 跳转到商品详情页
    toDetail(id) {
      this.$router.push('/detail?id=' + id)
    },
    // 跳转到商品列表页
    goodList(url) {
      let res = url.split('=')
      this.$router.push('/list?id=' + res[1])
    }
  }
}
</script>

<style scoped>
.van-swipe {
  width: 10rem;
  height: 4.666667rem;
}
.van-swipe-item,
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
.van-grid img {
  width: 1.706667rem;
  height: 1.866667rem;
}
.van-grid {
  margin: 0.266667rem 0;
}
.floor {
  margin-bottom: 1.333333rem;
}
.title img {
  height: 0.666667rem;
}
.box {
  overflow: hidden;
}
.box img {
  float: left;
  height: 2.533333rem;
  margin: 0.093333rem;
}
.box img:first-child {
  height: 5.2rem;
}
</style>
