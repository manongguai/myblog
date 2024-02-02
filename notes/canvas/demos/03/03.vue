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
  ctx.beginPath();
  // 绘制一张脸
  ctx.arc(75, 75, 50, 0, 2 * Math.PI);
  // 使用moveTo挪动画笔
  ctx.moveTo(100, 85);
  // 绘制嘴巴
  ctx.arc(75, 85, 25, 0, Math.PI);
  ctx.moveTo(65, 65);
  // 绘制眼睛
  ctx.arc(60, 65, 5, 0, Math.PI * 2);
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2);
  ctx.closePath();
  ctx.stroke();
});
</script>

<style scoped></style>
