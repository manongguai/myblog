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
  var radialGradient = ctx.createRadialGradient(250, 150, 10, 300, 200, 100);
  radialGradient.addColorStop(0, "pink");
  radialGradient.addColorStop(1, "red");
  ctx.fillStyle = radialGradient;
  ctx.arc(300, 200, 100, 0, 2 * Math.PI);
  ctx.fill();
});
</script>

<style scoped></style>
