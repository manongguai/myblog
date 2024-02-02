<template>
  <canvas id="c1" width="600" height="400">
    当前浏览器不支持canvas,请下载最新的浏览器
    <a href="https://www.google.cn/chrome/index.html">立即下载</a>
  </canvas>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  // 1、获取canvas画布
  var c1 = document.querySelector("#c1");
  if (!c1.getContext) {
    console.log("当前浏览器不支持canvas,请下载最新的浏览器");
  }
  // 2. 获取画笔，上下文对象
  var ctx = c1.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(300, 200);
  ctx.lineTo(350, 250);
  ctx.lineTo(350, 200);
  ctx.lineTo(300, 200);
  ctx.stroke();
  // ctx.fill()
  ctx.closePath();
});
</script>

<style scoped></style>
