<template>
  <div>
    <div class="stepper">
      <span class="jian" @click="sub">-</span>
      <input
        class="valueInfo"
        type="number"
        :value="count"
        @blur="onBlur"
        @input="onInput"
      />
      <span class="jia" @click="add">+</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1
    }
  },
  props: {
    count: Number || String
  },
  mounted() {
    this.value = this.count
  },
  methods: {
    // 点击减少
    sub() {
      console.log('---')
      if (this.value === 1) return
      this.value -= 1
      this.$emit('change', this.value)
    },
    // 点击增加
    add() {
      //   console.log('++++')
      this.value += 1
      this.$emit('change', this.value)
    },
    // 失去光标
    onBlur(e) {
      //   console.log('光标失去')
      console.log(e.target.value)
      const res = /[0-9]/g
      const abc = res.test(e.target.value)
      console.log(abc)
      if (!abc) {
        this.value = 1
        // console.log(this.value)
        this.$emit('change', this.value)
      } else {
        this.value = +e.target.value.replace(/[+-]/gi, '')
      }
      console.log(this.value)
      document.querySelector('.valueInfo').value = this.value
      this.$emit('change', this.value)
    },
    // input事件处理函数
    onInput(e) {
      //   console.log(e)
      this.value = +e.target.value.replace(/[+-]/gi, '') || 1
      //   console.log(this.value)
      //   document.querySelector('.valueInfo').value = this.value

      this.$emit('change', this.value)
    }
    // onChange(e) {
    //   console.log(e)
    //   this.value = +e.target.value.replace(/[+-]/gi, '') || 1
    //   //   console.log(this.value)

    //   this.$emit('change', this.value)
    // }
  }
}
</script>

<style scoped>
.stepper {
  width: 72px;
  height: 22px;
  background-color: #eee;
}
.jian,
.jia {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 16px;
}
.valueInfo {
  width: 30px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border: 0;
  background-color: #eee;
}
</style>
