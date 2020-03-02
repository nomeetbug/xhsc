<template>
  <div>
    <!-- 页头部分 -->
    <van-nav-bar left-arrow @click-left="onClickLeft" title="小黑商城" fixed />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div
        @click="goDetail(item.goods_id)"
        class="item"
        v-for="(item, index) in listData"
        :key="index"
      >
        <img :src="item.goods_small_logo" />
        <div class="info">
          <p>{{ item.goods_name }}</p>
          <div class="name">
            <span>￥ {{ item.goods_price }}</span>
            <span>× {{ item.goods_number }}</span>
          </div>
        </div>
      </div>
    </van-list>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataId: '',
      listData: [],
      loading: false,
      finished: false,
      pagenum: 1,
      total: 0,
      flag: true
    }
  },
  created() {
    this.dataId = this.$route.query.id
    // console.log(this.$route.query)
  },
  methods: {
    // getListData() {
    //   this.dataId = this.$route.query.id

    // },
    async onLoad() {
      if (this.flag) {
        this.flag = false

        const { data: res } = await this.$http.get('goods/search', {
          params: {
            // query: this.$route.query,
            query: this.dataId,
            pagenum: this.pagenum,
            pagesize: 20
          }
        })
        console.log(res)

        if (res.meta.status !== 200) {
          return this.$toast('获取列表数据失败！')
        }
        console.log(res)
        this.total = res.message.total
        for (var i = 0; i < res.message.goods.length; i++) {
          this.listData[this.listData.length] = res.message.goods[i]
        }
        console.log(this.listData)
        // 加载结束
        this.loading = false
        this.pagenum += 1
        console.log(this.pagenum)

        if (this.listData.length >= this.total) {
          this.finished = true
        }
        this.flag = true
      }
    },
    // 点击返回按钮 返回上一页
    onClickLeft() {
      this.$router.go(-1)
    },
    goDetail(id) {
      console.log(id)
      this.$router.push('/detail?id=' + id)
    }
  }
}
</script>

<style scoped>
.van-list {
  margin-top: 1.6rem;
}
.item {
  display: flex;
  align-items: center;
  margin: 0.266667rem;
}
.item img {
  width: 2.133333rem;
  min-width: 2.133333rem;
  height: 2.133333rem;
  margin-right: 0.266667rem;
}
.info {
  flex: auto;
}
.info > p {
  font-weight: bold;
}
.name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.266667rem;
}
.name span:first-child {
  color: #f44;
  font-weight: bold;
}
</style>
