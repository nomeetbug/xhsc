<template>
  <div>
    <!-- 页头部分 -->
    <van-nav-bar left-arrow @click-left="onClickLeft" title="小黑商城" fixed />

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in detailData.pics" :key="index"
        ><img :src="item.pics_big" @click="_preview"
      /></van-swipe-item>
    </van-swipe>

    <div class="price">￥ {{ detailData.goods_price }}</div>
    <div class="pinfo">
      <span>{{ detailData.goods_name }}</span>
      <div class="collect">
        <img src="../../assets/images/star.png" />
        <div>收藏</div>
      </div>
    </div>
    <div class="express">快递：免运费</div>
    <div class="divider"></div>
    <div class="item">
      <div>
        <span>促销</span>
        <span>满300元减30元</span>
      </div>
    </div>
    <div class="item">
      <div>
        <span>已选</span>
        <span>黑色/S/1件</span>
      </div>
    </div>
    <div class="divider"></div>
    <div class="item">
      <div>
        <span>送至：</span>
        <span>请选择收货地址</span>
      </div>
    </div>
    <div class="divider"></div>
    <!-- tab切换 -->
    <van-tabs v-model="activeName" swipeable>
      <van-tab title="图文详情" name="0"
        ><div v-html="detailData.goods_introduce"></div
      ></van-tab>
      <van-tab title="规格参数" name="1" class="standard">
        <div v-for="(item, index) in detailData.attrs" :key="index">
          <span>{{ item.attr_name }}</span>
          <span>{{ item.attr_value }}</span>
        </div>
      </van-tab>
    </van-tabs>
    <!-- 底部商品导航 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :info="goodsNumber"
        @click="goCart"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        color="#FF976A"
        @click="onClickAddCart"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        color="#FF4444"
        @click="goCart"
      />
    </van-goods-action>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { ImagePreview } from 'vant'
export default {
  data() {
    return {
      goods_id: 0,
      detailData: {},
      activeName: 0
    }
  },
  created() {
    this.goods_id = this.$route.query.id
    this.getDetailData()
    console.log(this.goodsName)
  },
  methods: {
    async getDetailData() {
      const { data: res } = await this.$http.get('goods/detail', {
        params: {
          goods_id: this.goods_id
        }
      })
      console.log(res)
      if (res.meta.status !== 200) {
        return this.$toast('获取商品详情失败！')
      }
      this.detailData = res.message
    },
    // 点击返回按钮 返回上一页
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickAddCart() {
      console.log(this.detailData)
      this._join()
    },
    // 存储购物车数据
    _join() {
      // 拿到当前商品的 id 名字 价格 和图片
      console.log(this.detailData)
      const index = this.goodsName.findIndex(
        item => item.id === this.detailData.goods_id
      )
      console.log(index)
      console.log(this.goodsName)

      if (index === -1) {
        this.changeGoodsName({
          id: this.detailData.goods_id,
          name: this.detailData.goods_name,
          pic: this.detailData.goods_small_logo,
          price: this.detailData.goods_price,
          count: 1,
          is_check: 1
        })
      } else {
        this.addGoodsName(this.detailData.goods_id)
      }
    },
    goCart() {
      this.$router.push('/cart')
    },
    // 显示预览图片
    _preview() {
      const imgs = this.detailData.pics.map(item => item.pics_big)
      console.log(imgs)

      ImagePreview({
        images: imgs,
        startPosition: 0,
        loop: true,
        opactiy: 1
      })
    },
    ...mapMutations(['changeGoodsName', 'addGoodsName'])
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
.van-swipe {
  margin-top: 1.6rem;
  width: 100%;
  height: 10rem;
}
.van-swipe-item,
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
.price {
  font-size: 0.533333rem;
  color: #f44;
  margin: 0.266667rem 0;
  padding-left: 0.266667rem;
}
.pinfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.266667rem;
  font-size: 0.346667rem;
}
.pinfo > span {
  flex: auto;
  margin-right: 0.4rem;
}
.collect {
  width: 2.666667rem;
  border-left: 1px solid #ccc;
  padding-left: 0.266667rem;
  font-size: 0.16rem;
  text-align: center;
}
.collect img {
  display: block;
  margin: 0 auto 0.133333rem;
  width: 0.533333rem;
  height: 0.533333rem;
}
.express {
  font-size: 0.346667rem;
  color: #666;
  font-weight: bold;
  height: 1.066667rem;
  line-height: 1.066667rem;
  padding-left: 0.266667rem;
}
.divider {
  border-bottom: 0.2rem solid #ececec;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.173333rem;
  font-size: 0.32rem;
  color: #666;
  padding: 0 0.266667rem;
}
.item span:first-child {
  color: #333;
  font-weight: bold;
  margin-right: 0.266667rem;
}
.standard {
  border-top: 0.013333rem solid #eee;
}
.standard span {
  display: inline-block;
  height: 1.066667rem;
  text-indent: 1em;
  line-height: 1.066667rem;
}
.standard > div {
  border-bottom: 0.013333rem solid #eee;
}
.standard > div span:first-child {
  width: 40%;
  border-right: 0.013333rem solid #eee;
}
.van-tabs {
  margin-bottom: 1.333333rem;
}
.van-goods-action-button {
  height: 100%;
}
.van-goods-action-button--last {
  margin-right: 0;
  border-radius: 0;
}
.van-goods-action-button--first {
  border-radius: 0;
}
</style>
