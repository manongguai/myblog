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
  var index = 0;
  function render() {
    index += 0.1;
    if (index > 1) {
      index = 0;
    }
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    // createRedialGradient(圆心1x,圆心1y,圆心1r,圆心2x,圆心2y,圆心2r)
    var radialGradient = ctx.createRadialGradient(300, 200, 0, 300, 200, 100);
    radialGradient.addColorStop(0, "red");
    radialGradient.addColorStop(index, "pink");
    radialGradient.addColorStop(1, "blue");
    ctx.fillStyle = radialGradient;
    ctx.arc(300, 200, 100, 0, 2 * Math.PI);
    ctx.fill();
    setTimeout(render, 100);
  }
  setTimeout(render, 100);
});
</script>

<style scoped></style>
