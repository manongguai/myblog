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
  /* CanvasRenderingContext2D.rotate() 是 Canvas 2D API 在变换矩阵中增加旋转的方法。角度变量表示一个顺时针旋转角度并且用弧度表示。
        语法
        void ctx.rotate(angle);
        参数
        angle
        顺时针旋转的弧度。如果你想通过角度值计算，可以使用公式： degree * Math.PI / 180 。
        旋转中心点一直是 canvas 的起始点。如果想改变中心点，我们可以通过 translate() 方法移动 canvas。 */
  ctx.rotate((45 * Math.PI) / 180);
  ctx.fillRect(0, 0, 50, 50);
});
</script>

<style scoped></style>
