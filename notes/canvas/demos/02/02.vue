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
  // 绘制矩形路径 strokeRect(x, y, width, height)
  // ctx.strokeRect(100, 100, 200, 100)
  // 拆开写法

  ctx.rect(100, 100, 200, 100); // 绘制路径，没有任何显示
  ctx.fill(); // 绘制路径
});
</script>

<style scoped></style>
