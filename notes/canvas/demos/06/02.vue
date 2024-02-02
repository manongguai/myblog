<template>
  <canvas id="c2" width="600" height="400">
    当前浏览器不支持canvas,请下载最新的浏览器
    <a href="https://www.google.cn/chrome/index.html">立即下载</a>
  </canvas>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  // 1、获取canvas画布
  var c1 = document.querySelector("#c2");
  if (!c1.getContext) {
    console.log("当前浏览器不支持canvas,请下载最新的浏览器");
  }
  // 2. 获取画笔，上下文对象
  var ctx = c1.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(300, 200);
  //  ctx.bezierCurveTo(x1,y1,x2,y2,x3,y3)
  // 右爱心
  ctx.bezierCurveTo(350, 150, 400, 200, 300, 280);

  ctx.bezierCurveTo(200, 200, 250, 150, 300, 200);
  // 左爱心

  ctx.stroke();
  ctx.closePath();
});
</script>

<style scoped></style>
