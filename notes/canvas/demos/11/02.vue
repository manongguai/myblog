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

  var value = 0;
  function render() {
    ctx.clearRect(0, 0, c1.width, c1.height);
    value += 1;
    if (value > 50) {
      value = 0;
    }
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(350, 250);
    ctx.lineTo(350, 200);
    ctx.lineTo(300, 200);

    /* 
            setLineDash() 方法在填充线时使用虚线模式。它使用一组值来指定描述模式的线和间隙的交替长度。
            setLineDash(segments);
            segments
            一个Array数组。一组描述交替绘制线段和间距（坐标空间单位）长度的数字。如果数组元素的数量是奇数，数组的元素会被复制并重复。例如， [5, 15, 25] 会变成 [5, 15, 25, 5, 15, 25]。
            */
    ctx.setLineDash([3, 5]);
    /* 
            CanvasRenderingContext2D.lineDashOffset 是 Canvas 2D API 设置虚线偏移量的属性，例如可以实现“蚂蚁线“的效果。
            语法
            ctx.lineDashOffset = value;
            value
            偏移量是 float 精度的数字。初始值为 0.0。
            */
    ctx.lineDashOffset = value;
    ctx.stroke();
    // ctx.fill()
    ctx.closePath();
    setTimeout(render, 100);
  }
  setTimeout(render, 100);
});
</script>

<style scoped></style>
