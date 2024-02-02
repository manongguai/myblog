<template>
  <canvas id="c1" width="600" height="400">
    当前浏览器不支持canvas,请下载最新的浏览器
    <a href="https://www.google.cn/chrome/index.html">立即下载</a>
  </canvas>
  <button id="restoreBtn">撤销</button>
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
        CanvasRenderingContext2D.save() 是 Canvas 2D API 通过将当前状态放入栈中，保存 canvas 全部状态的方法。
        语法
        void ctx.save(); 
        绘制状态
        保存到栈中的绘制状态有下面部分组成：

        当前的变换矩阵。
        当前的剪切区域。
        当前的虚线列表。
        以下属性当前的值： strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled.
  */
  ctx.save();

  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 100, 100);
  ctx.save();
  ctx.fillStyle = "red";
  ctx.fillRect(150, 40, 100, 100);
  const restoreBtn = document.querySelector("#restoreBtn");
  restoreBtn.addEventListener("click", function () {
    // 恢复
    ctx.restore();
    ctx.fillRect(360, 40, 100, 100);
  }); // Restore to the state saved by the most recent call to save()
});
</script>

<style scoped></style>
