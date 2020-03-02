<template>
  <div>
    <div
      v-if="caresInfo.length"
      class="cates"
      :style="'height:' + height + 'px'"
    >
      <!-- 左侧列表 -->
      <happy-scroll class="left" hide-vertical>
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item
            :title="item.cat_name"
            v-for="(item, index) in caresInfo"
            :key="index"
          />
        </van-sidebar>
      </happy-scroll>
      <!-- 右侧列表 -->
      <happy-scroll class="right" :scroll-top.sync="topScroll" hide-vertical>
        <!-- 二级列表 -->
        <div v-for="item in caresInfo[activeKey].children" :key="item.cat_id">
          <div class="emsp">/ {{ item.cat_name }} /</div>
          <!-- 三级列表 -->
          <div
            @click="goGoodsList(item.cat_id)"
            class="list"
            v-for="item in item.children"
            :key="item.cat_id"
          >
            <img :src="item.cat_icon" />
            <span>{{ item.cat_name }}</span>
          </div>
        </div>
      </happy-scroll>
    </div>
    <div
      class="error"
      v-else-if="status == 'error'"
      :style="'height:' + height + 'px'"
    >
      <div>获取商品列表数据失败！</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caresInfo: [],
      height: 100,
      activeKey: 0,
      topScroll: 0,
      status: ''
    }
  },
  created() {
    this.getCares()
    this.getHeight()
  },
  methods: {
    async getCares() {
      const { data: res } = await this.$http.get('categories')
      if (res.meta.status !== 200) {
        this.status = 'error'
        return this.$toast('获取分类数据失败！')
      }
      this.caresInfo = res.message
      console.log(this.caresInfo)
    },
    getHeight() {
      var h =
        document.documentElement.clientHeight || document.body.clientHeight
      this.height = h - 110
      console.log(this.height)
    },
    onChange() {
      this.topScroll = 0
      console.log(this.topScroll)
    },
    // 跳转到列表页面
    goGoodsList(id) {
      this.$router.push('/list?id=' + id)
    }
  }
}
</script>

<style scoped>
.cates {
  display: flex;
}
.right {
  flex: auto;
  box-sizing: border-box;
}
.van-sidebar-item {
  font-size: 0.346667rem;
}
.left,
.van-sidebar,
.van-sidebar-item {
  width: 2rem;
  min-width: 2rem;
  padding-right: 0;
  box-sizing: border-box;
}
.van-sidebar-item {
  background-color: #f2f3f5;
}
.van-sidebar-item--select {
  background-color: #fff;
}
/* .right div {
  width: 100%;
} */

.emsp {
  width: 100%;
  text-align: center;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.373333rem;
  margin-top: 0.266667rem;
}
.right img {
  width: 1.866667rem;
  height: 1.866667rem;
}
.list {
  width: 33.3%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.133333rem 0;
}
.error {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
