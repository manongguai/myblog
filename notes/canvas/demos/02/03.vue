<template>
  <canvas id="c3" width="600" height="400">
    当前浏览器不支持canvas,请下载最新的浏览器
    <a href="https://www.google.cn/chrome/index.html">立即下载</a>
  </canvas>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  // 1、获取canvas画布
  var c1 = document.querySelector("#c3");
  if (!c1.getContext) {
    console.log("当前浏览器不支持canvas,请下载最新的浏览器");
  }
  // 2. 获取画笔，上下文对象
  var ctx = c1.getContext("2d");
  // 绘制矩形路径 strokeRect(x, y, width, height)
  // ctx.strokeRect(100, 100, 200, 100)
  // ctx.fillRect(200, 150, 200, 100)
  ctx.beginPath();
  // 拆开写法
  ctx.rect(100, 100, 200, 100);
  // 显示路径
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.rect(200, 150, 200, 100);
  ctx.fill();
  ctx.closePath();
  // 直接整个画板清除
  // ctx.clearRect(0, 0, c1.clientWidth, c1.clientHeight)
  let height = 0;
  let width = 0;
  // 黑板擦模式
  let t1 = setInterval(() => {
      width += 20
      ctx.clearRect(0, 0, width, height)
      if (width > c1.clientWidth) {
          height += 20
          width = 0
      }
      if (height > c1.clientHeight) {
          clearInterval(t1)
      }
  }, 20)
});
</script>

<style scoped></style>
