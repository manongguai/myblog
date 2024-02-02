<template>
  <canvas id="c1" width="600" height="400">
    当前浏览器不支持canvas,请下载最新的浏览器
    <a href="https://www.google.cn/chrome/index.html">立即下载</a>
  </canvas>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  var c1 = document.querySelector("#c1");
  if (!c1.getContext) {
      console.log('当前浏览器不支持canvas,请下载最新的浏览器');
  }
  // 2. 获取画笔，上下文对象
  var ctx = c1.getContext('2d')
  // 3. 创建图案样式
  var img = new Image();
  img.src = '../imgs/draw.jpg'
  img.onload = function () {
      // createPattern(图片对象,重复方式)
      /* 
      repeat	默认。该模式在水平和垂直方向重复。
      repeat-x	该模式只在水平方向重复。
      repeat-y	该模式只在垂直方向重复。
      no-repeat	该模式只显示一次（不重复）。
      */
      let pattern = ctx.createPattern(img, 'repeat')
      ctx.fillStyle = pattern
      ctx.fillRect(0, 0, c1.width, c1.height)
  }
});
</script>

<style scoped></style>
