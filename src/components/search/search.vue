<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索内容"
      show-action
      @search="onSearch"
      @cancel="onCancel"
      @input="onInput"
    />
    <div class="history" v-show="isShow">
      <div class="title">
        <div>历史搜索</div>
        <div class="iconfont" @click="clearHistory">&#xe645;</div>
      </div>
      <div
        class="conent"
        v-for="(item, index) in history"
        :key="index"
        @click="goList(item)"
      >
        <span>{{ item }}</span>
      </div>
    </div>
    <!-- 历史记录与搜索建议 -->
    <div v-show="!isShow" class="list">
      <div
        v-for="item in list"
        :key="item.goods_id"
        @click="goDetail(item.goods_id)"
      >
        {{ item.goods_name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      isShow: true,
      timer: null,
      list: [],
      history: []
    }
  },
  created() {
    this.getHistory()
  },
  methods: {
    // 获取本地存储
    getHistory() {
      this.history = localStorage.history.split(',') || []
      console.log(this.history)
    },
    // 清空本地存储
    clearHistory() {
      this.history = []
      localStorage.clear('history')
    },
    onSearch(e) {
      console.log(e)
      e = e.trim()
      const res = this.history.some(item => item === e)
      console.log(res)

      if (!res && e) {
        this.history.unshift(e)
        this.history = this.history.slice(0, 10)
        localStorage.history = this.history
      }
      if (this.list.length === 0) {
        return this.$toast('未查询到数据')
      }
      this.goList(e)
    },
    onCancel(e) {
      console.log(e)
    },
    onInput(e) {
      console.log(e)
      // 去除空格
      const query = e.trim()
      // 设置定时器 减少因输入过快的发送次数
      clearTimeout(this.timer)
      if (query) {
        this.timer = setTimeout(() => {
          console.log(111)

          this.getListData(query)
          this.isShow = false
        }, 800)
      } else {
        this.isShow = true
      }
    },
    // 跳转到detail页面
    goDetail(id) {
      console.log(id)
      this.$router.push('/detail?id=' + id)
    },
    goList(id) {
      this.$router.push('/list?id=' + id)
    },
    // 封装发送数据的方法
    async getListData(e) {
      const { data: res } = await this.$http.get('goods/qsearch?query=' + e)
      if (res.meta.status !== 200) {
        return this.toast('查询不到您要找的数据!')
      }
      //   for (var i = 0; i < res.message.length; i++) {
      //     this.list[this.list.length + i] = res.message[i]
      //   }
      this.list = res.message
      console.log(this.list)
    }
  }
}
</script>

<style scoped>
.history {
  margin: 0 0.4rem;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.133333rem 0;
  font-size: 0.373333rem;
}
.title div:first-child {
  font-weight: bold;
}
.list {
  padding: 0.266667rem 0.533333rem;
}
.list div {
  display: flex;
  align-items: center;
  font-size: 0.346667rem;
  padding: 0.133333rem 0;
  min-height: 1.066667rem;
  line-height: 1.5;
  border-bottom: 0.013333rem solid #f2f3f5;
}
.conent {
  display: inline-block;
  padding: 0.133333rem 0.133333rem;
  text-align: center;
  background-color: #eee;
  margin: 0.133333rem 0.133333rem;
}
</style>
