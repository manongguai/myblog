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
  /* 
        CanvasRenderingContext2D.globalCompositeOperation
        Canvas 2D API 的 CanvasRenderingContext2D.globalCompositeOperation 属性设置要在绘制新形状时应用的合成操作的类型，其中 type 是用于标识要使用的合成或混合模式操作的字符串。 默认是source-over
        */
  // 绘制矩形 fillRect(x,y,width,height)
  ctx.fillStyle = "rgba(0,0,255,1)"; // 蓝色
  ctx.fillRect(300, 200, 100, 100);
  ctx.fillStyle = "rgba(255,0,0,1)"; // 红色
  ctx.globalCompositeOperation = "xor"; // 形状在重叠处变为透明，并在其他地方正常绘制。
  ctx.fillRect(250, 150, 100, 100);
});
</script>

<style scoped></style>
