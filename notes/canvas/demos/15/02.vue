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
  /*
        CanvasRenderingContext2D.strokeText() 是 Canvas 2D API 在给定的 (x, y) 位置绘制文本的方法。如果提供了表示最大值的第四个参数，文本将会缩放适应宽度。
        参见 CanvasRenderingContext2D.fillText() 方法填充文本。

        语法
        void ctx.strokeText(text, x, y [, maxWidth]);
        参数
        text
        使用当前 font，textAlign，textBaseline和direction 的值对文本进行渲染。

        x
        文本起始点的 x 轴坐标。

        y
        文本起始点的 y 轴坐标。

        maxWidth 可选
        需要绘制的最大宽度。如果指定了值，并且经过计算字符串的宽度比最大宽度还要宽，字体为了适应会使用一个水平缩小的字体（如果通过水平缩放当前的字体，可以进行有效的或者合理可读的处理）或者小号的字体。
   
           */
  ctx.font = "50px serif";
  ctx.strokeText("Hello world", 50, 90);
});
</script>

<style scoped></style>
