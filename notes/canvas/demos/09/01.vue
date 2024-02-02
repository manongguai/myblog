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
  // createLinearGradient(起点x,起点y,终点x,终点y)
  var pinkPosition = 0;
  function render() {
    pinkPosition += 0.1;
    if (pinkPosition > 1) {
      pinkPosition = 0;
    }
    ctx.clearRect(0, 0, c1.width, c1.height);
    var linearGradient = ctx.createLinearGradient(100, 200, 400, 500);
    linearGradient.addColorStop(0, "red");
    linearGradient.addColorStop(pinkPosition, "pink");
    linearGradient.addColorStop(1, "blue");
    ctx.fillStyle = linearGradient;
    // 绘制矩形 fillRect(x,y,width,height)
    ctx.fillRect(100, 200, 300, 300);
    setTimeout(render, 100);
  }
  setTimeout(render, 100);
});
</script>

<style scoped></style>
