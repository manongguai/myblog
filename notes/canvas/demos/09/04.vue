<template>
  <canvas id="c4" width="600" height="400">
    当前浏览器不支持canvas,请下载最新的浏览器
    <a href="https://www.google.cn/chrome/index.html">立即下载</a>
  </canvas>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  // 1、获取canvas画布
  var c1 = document.querySelector("#c4");
  if (!c1.getContext) {
    console.log("当前浏览器不支持canvas,请下载最新的浏览器");
  }
  // 2. 获取画笔，上下文对象
  var ctx = c1.getContext("2d");
  // createConGradient(开始角度，x,y)
  var conicGradient = ctx.createConicGradient(Math.PI, 300, 200);
  conicGradient.addColorStop(0, "red");
  conicGradient.addColorStop(0.5, "yellow");
  conicGradient.addColorStop(1, "blue");
  ctx.fillStyle = conicGradient;
  ctx.fillRect(0, 0, 600, 400);
});
</script>

<style scoped></style>
