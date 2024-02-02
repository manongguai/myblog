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

  var heartPath = new Path2D();
  heartPath.moveTo(300, 200);
  //  ctx.bezierCurveTo(x1,y1,x2,y2,x3,y3)
  heartPath.bezierCurveTo(350, 150, 400, 200, 300, 280);

  heartPath.bezierCurveTo(200, 200, 250, 150, 300, 200);

  ctx.stroke(heartPath);
  // 创建一条折线
  var polyline = new Path2D("M10 10 h80 v80 h -80 z");
  ctx.stroke(polyline);
});
</script>

<style scoped></style>
