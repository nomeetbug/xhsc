import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsName: localStorage.goodsName ? JSON.parse(localStorage.goodsName) : []
  },
  mutations: {
    // 添加商品到本地存储
    changeGoodsName(state, cart) {
      state.goodsName.push(cart)
      localStorage.goodsName = JSON.stringify(state.goodsName)
    },
    // 已有次商品 数量加一
    addGoodsName(state, id) {
      state.goodsName.forEach(item => {
        if (item.id === id) {
          item.count += 1
        }
      })
      localStorage.goodsName = JSON.stringify(state.goodsName)
    },
    // 改变选中状态
    changeGoodsName2(state, id) {
      state.goodsName.forEach(item => {
        if (item.id === id) {
          item.is_check = item.is_check === 1 ? 0 : 1
        }
      })
      localStorage.goodsName = JSON.stringify(state.goodsName)
    },
    // 删除商品
    removeGoodsName(state, id) {
      state.goodsName = state.goodsName.filter(item => item.id !== id)
      localStorage.goodsName = JSON.stringify(state.goodsName)
    },
    // 全选状态改变
    changeCheckAllGoodsName(state, item) {
      state.goodsName = item
      localStorage.goodsName = JSON.stringify(state.goodsName)
    }
  },
  actions: {},
  modules: {}
})
