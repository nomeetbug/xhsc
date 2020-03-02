<template>
  <div>
    <div class="title">
      <img src="../../assets/images/shop.png" />
      <div>购物车列表</div>
    </div>
    <div class="list">
      <div v-for="item in goodsName" :key="item.id">
        <van-swipe-cell>
          <div class="item">
            <div class="check" @click="changeCheck(item.id)">
              <img src="../../assets/images/check.png" v-show="item.is_check" />
              <img src="../../assets/images/uncheck.png" />
            </div>
            <img :src="item.pic" />
            <div class="info">
              <p>{{ item.name }}</p>
              <div class="info-num">
                <span>￥ {{ item.price.toFixed(2) }}</span>
                <!-- <van-stepper
                  v-model="item.count"
                  input-width="26px"
                  button-size="20px"
                  @change="changeNum($event, item.id)"
                /> -->
                <Stepper
                  :count="item.count"
                  @change="changeNum($event, item.id)"
                ></Stepper>
              </div>
            </div>
          </div>
          <van-button
            slot="right"
            square
            text="删除"
            type="danger"
            @click="deleteClick(item.id)"
          />
        </van-swipe-cell>
      </div>
    </div>
    <!-- 底部选择框 -->
    <div class="footer">
      <div class="toggleAll" @click="changeCheckAll">
        <div class="toggle-img">
          <img src="../../assets/images/check.png" v-show="!checkAll" />
          <img src="../../assets/images/uncheck.png" />
        </div>
        <span>全选</span>
      </div>
      <div class="price-btn">
        <div class="tools-price">
          <span>合计：</span>
          <span>￥ {{ getTotal.toFixed(2) }}</span>
        </div>
        <div class="submit">提交订单</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Stepper from '../../zujian/stepper/stepper.vue'
export default {
  data() {
    return {
      value: 1
    }
  },
  created() {
    console.log(this.goodsName)
  },
  methods: {
    // 改变选中状态
    changeCheck(id) {
      console.log(id)
      this.changeGoodsName2(id)
    },
    // 数量发生变化时
    changeNum(e, id) {
      this.goodsName.some(item => {
        if (item.id === id) {
          item.count = e
          return true
        }
      })
      this.changeCheckAllGoodsName(this.goodsName)
    },
    // 删除
    deleteClick(id) {
      console.log(id)
      this.removeGoodsName(id)
    },
    // 点击全选按钮
    changeCheckAll() {
      if (this.checkAll) {
        this.goodsName.forEach(item => (item.is_check = 1))
      } else {
        this.goodsName.forEach(item => (item.is_check = 0))
      }
      this.changeCheckAllGoodsName(this.goodsName)
    },
    ...mapMutations([
      'changeGoodsName',
      'changeGoodsName2',
      'removeGoodsName',
      'changeCheckAllGoodsName'
    ])
  },
  computed: {
    ...mapState(['goodsName']),
    // 获取总金额
    getTotal() {
      return this.goodsName.reduce(
        (sum, item) =>
          sum + (item.is_check === 1 ? item.price * item.count : 0),
        0
      )
    },
    // 获取全选按钮状态
    checkAll() {
      return this.goodsName.some(item => item.is_check !== 1)
    }
  },
  components: {
    Stepper
  }
}
</script>

<style scoped>
.title {
  display: flex;
  align-items: center;
  padding: 0.4rem 0;
}
.title img {
  width: 0.426667rem;
  height: 0.426667rem;
  margin: 0 0.266667rem;
}
.item {
  display: flex;
  align-items: center;
  padding: 0.266667rem 0.333333rem;
  border-bottom: 0.013333rem solid #ccc;
}
.item > img {
  width: 2.4rem;
  height: 2.4rem;
  min-width: 2.4rem;
  margin-right: 0.266667rem;
}
.check {
  position: relative;
  width: 0.533333rem;
  min-width: 0.533333rem;
  height: 2.4rem;
}
.check img {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 0.426667rem;
  height: 0.426667rem;
}
.info-num {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-num span {
  color: #f44;
  font-weight: bold;
}
.van-button {
  height: 100%;
}
.list {
  margin-bottom: 2.666667rem;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 1.333333rem;
  width: 100%;
  height: 1.333333rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
}
.toggleAll {
  display: flex;
  align-items: center;
  margin-left: 0.4rem;
  height: 100%;
}
.toggle-img {
  position: relative;
  width: 0.426667rem;
  height: 0.426667rem;
  margin-right: 0.266667rem;
}
.toggle-img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.price-btn {
  flex: auto;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
}
.tools-price span {
  font-weight: bold;
}
.tools-price span:last-child {
  color: #f44;
}
.submit {
  width: 3.666667rem;
  background-color: #f44;
  color: #fff;
  height: 100%;
  line-height: 1.333333rem;
  text-align: center;
  letter-spacing: 0.053333rem;
  margin-left: 0.266667rem;
}
</style>
