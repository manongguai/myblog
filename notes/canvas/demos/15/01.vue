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
        CanvasRenderingContext2D 对象的方法 fillText() 是 Canvas 2D API 的一部分，它在指定的坐标上绘制文本字符串，并使用当前的 fillStyle 对其进行填充。存在一个可选参数，其指定了渲染文本的最大宽度，用户代理将通过压缩文本或使用较小的字体大小来实现。
        此方法会直接绘制到画布上，而不会修改当前路径，因此任何后续的 fill() 或 stroke() 调用都不会对其产生影响。
        文本根据 font、textAlign、textBaseline 和 direction 属性所定义的字体和文本布局来渲染。
         如果需要绘制字符串中字符的轮廓，需要调用其上下文的 strokeText() 方法。
        */
  /* 语法
        fillText(text, x, y)
        fillText(text, x, y, maxWidth)
        参数
        text
        要作为渲染上下文的文本字符串。使用当前的 font、textAlign、textBaseline 和 direction 设置值对文本进行渲染。

        x
        开始绘制文本的点的 X 轴坐标，单位为像素。

        y
        开始绘制文本的基线的 Y 轴坐标，单位为像素。

        maxWidth 可选
        文本渲染后的最大像素宽度。如果未指定，则文本宽度没有限制。但是，如果提供了该值，用户代理将调整字距，选择水平方向更紧凑的字体（如果有这种字体或可以在不降低质量的情况下生成这种字体），或缩小字体大小，以便在指定宽度内容纳文本。 */
  ctx.font = "50px serif";
  ctx.fillText("Hello world", 50, 90);
  ctx.fillText("Hello world2", 50, 190, 140);
});
</script>

<style scoped></style>
