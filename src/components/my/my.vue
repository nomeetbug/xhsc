<template>
  <div>
    <Stepper @change="changeNum"></Stepper>
    <my-evaluate
      :touxiang="evaluate[0].touxiang"
      :nicheng="evaluate[0].nicheng"
      :content="evaluate[0].content"
      :img="evaluate[0].img"
      :source="evaluate[0].source"
    ></my-evaluate>
  </div>
</template>

<script>
import Stepper from '../../zujian/stepper/stepper.vue'
import MyEvaluate from '../../zujian/evaluate/evaluate.vue'
export default {
  components: {
    Stepper,
    'my-evaluate': MyEvaluate
  },
  data() {
    return {
      evaluate: [
        {
          touxiang:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582952161361&di=759012dc94cd2a5b3ebe85086c14e30c&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1219414651%2C167647501%26fm%3D214%26gp%3D0.jpg',
          nicheng: 'A***rew',
          like: 5,
          content:
            '环境很好，出门就是地铁站，非常方便。 还有一个超级大的阳台，落地窗，简直太温馨了！',
          img: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582952161361&di=759012dc94cd2a5b3ebe85086c14e30c&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1219414651%2C167647501%26fm%3D214%26gp%3D0.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582952161361&di=759012dc94cd2a5b3ebe85086c14e30c&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1219414651%2C167647501%26fm%3D214%26gp%3D0.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582952161361&di=759012dc94cd2a5b3ebe85086c14e30c&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1219414651%2C167647501%26fm%3D214%26gp%3D0.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582952161361&di=759012dc94cd2a5b3ebe85086c14e30c&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1219414651%2C167647501%26fm%3D214%26gp%3D0.jpg'
          ],
          previewImg: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582952161361&di=759012dc94cd2a5b3ebe85086c14e30c&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1219414651%2C167647501%26fm%3D214%26gp%3D0.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582952161361&di=759012dc94cd2a5b3ebe85086c14e30c&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1219414651%2C167647501%26fm%3D214%26gp%3D0.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582952161361&di=759012dc94cd2a5b3ebe85086c14e30c&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1219414651%2C167647501%26fm%3D214%26gp%3D0.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582952161361&di=759012dc94cd2a5b3ebe85086c14e30c&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1219414651%2C167647501%26fm%3D214%26gp%3D0.jpg'
          ],
          source: '途家民宿'
        }
      ]
    }
  },
  methods: {
    changeNum(e) {
      console.log(e)
    }
  }
}
</script>

<style scoped></style>
