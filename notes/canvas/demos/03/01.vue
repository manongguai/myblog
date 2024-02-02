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
            console.log('当前浏览器不支持canvas,请下载最新的浏览器');
        }
        // 2. 获取画笔，上下文对象
        var ctx = c1.getContext('2d')
        // 绘制圆弧  ctx.arc(圆心x, 圆心y, 半径,start角度,stop角度,顺时针还是逆时针,默认顺时针)
        ctx.arc(300, 200, 50, 0, 2 * Math.PI, false)
        ctx.fill()
  });
  </script>
  
  <style scoped></style>
  