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
  // 绘制矩形 fillRect(x,y,width,height)
  /* 
        CanvasRenderingContext2D.scale() 是 Canvas 2D API 根据 x 水平方向和 y 垂直方向，为 canvas 单位添加缩放变换的方法。

        默认的，在 canvas 中一个单位实际上就是一个像素。例如，如果我们将 0.5 作为缩放因子，最终的单位会变成 0.5 像素，并且形状的尺寸会变成原来的一半。相似的方式，我们将 2.0 作为缩放因子，将会增大单位尺寸变成两个像素。形状的尺寸将会变成原来的两倍。

        语法
        void ctx.scale(x, y);
        参数
        x
        水平方向的缩放因子。A negative value flips pixels across the vertical axis. A value of 1 results in no horizontal scaling.

        y
        垂直方向的缩放因子。A negative value flips pixels across the horizontal axis. A value of 1 results in no vertical scaling.

 */
  ctx.scale(9, 3);
  ctx.fillStyle = "red";
  ctx.fillRect(10, 10, 8, 20);

  // Reset current transformation matrix to the identity matrix
  /* CanvasRenderingContext2D.setTransform() 是 Canvas 2D API 使用单位矩阵重新设置（覆盖）当前的变换并调用变换的方法，此变换由方法的变量进行描述。
        参见 transform() 方法，这个方法不会覆盖当前的变换矩阵，会多次叠加变换。 */
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  // Non-scaled rectangle
  ctx.fillStyle = "gray";
  ctx.fillRect(10, 10, 8, 20);
});
</script>

<style scoped>
canvas {
  border: 1px solid #ccc;
}
</style>
