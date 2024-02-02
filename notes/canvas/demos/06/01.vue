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
  ctx.moveTo(200, 300);
  //  ctx.quadraticCurveTo(x1,y1,x2,y2)
  ctx.quadraticCurveTo(150, 300, 150, 200);
  ctx.quadraticCurveTo(150, 100, 300, 100);
  ctx.quadraticCurveTo(450, 100, 450, 200);
  ctx.quadraticCurveTo(450, 300, 250, 300);
  ctx.quadraticCurveTo(250, 350, 150, 350);
  ctx.quadraticCurveTo(200, 350, 200, 300);
  ctx.stroke();
  ctx.closePath();
});
</script>

<style scoped></style>
