<template>
  <div class="evaluate">
    <div class="evaluate-title">
      <div class="img">
        <img class="evaluate-title-image" :src="touxiang" />
      </div>
      <span>{{ nicheng }}</span>
    </div>
    <div class="evaluate-content">
      {{ content }}
    </div>
    <div class="evaluate-img">
      <img
        class="evaluate-img-image"
        v-for="(item, index) in img"
        :key="index"
        :src="item"
      />
    </div>
    <div class="evaluate-from">
      <span>该评论来自: </span><span>{{ source }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    touxiang: {
      type: String
    },
    nicheng: {
      type: String
    },
    content: {
      type: String
    },
    img: {
      type: Array
    },
    source: {
      type: String
    }
  }
}
</script>

<style scoped>
.weui-icon {
  display: inline;
}

.evaluate {
  border-top: 1px solid #f5f5f5;
  padding: 5px 16px;
}

.evaluate-title .img {
  display: inline-block;
  position: relative;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;
  margin: 0 5px 0;
}

.evaluate-title-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 38px;
  height: 38px;
}

.evaluate-content {
  margin-top: 32px;
  margin-bottom: 32px;
  font-size: 14px;
  color: #2c2d31;
}

.evaluate-img-image {
  width: 83px;
  height: 83px;
  margin-right: 10px;
}

.evaluate-from {
  margin-left: 5px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}
</style>
