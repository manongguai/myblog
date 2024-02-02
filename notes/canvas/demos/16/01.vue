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
  // 绘制矩形 fillRect(x,y,width,height)
  /* 
        Canvas 2D API 的 CanvasRenderingContext2D.translate() 方法对当前网格添加平移变换的方法。
        语法
        void ctx.translate(x, y);
        translate() 方法，将 canvas 按原始 x 点的水平方向、原始的 y 点垂直方向进行平移变换 */
  ctx.translate(100, 100);
  ctx.fillRect(0, 0, 50, 50);
  ctx.translate(100, 100);
  ctx.fillRect(0, 0, 50, 50);
});
</script>

<style scoped>
canvas {
  border: 1px solid #ccc;
}
</style>
