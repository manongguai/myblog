<template>
  <canvas id="c1" width="600" height="400">
    当前浏览器不支持canvas,请下载最新的浏览器
    <a href="https://www.google.cn/chrome/index.html">立即下载</a>
  </canvas>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  var c1 = document.querySelector("#c1");
  if (!c1.getContext) {
    console.log("当前浏览器不支持canvas,请下载最新的浏览器");
  }
  var ctx = c1.getContext("2d");
  // 1.获取图片
  var img = new Image();
  img.src = "../imgs/draw.jpg";
  img.onload = function () {
    // 2.绘制图片
    /* 
            Canvas 2D API 中的 CanvasRenderingContext2D.drawImage() 方法提供了多种在画布（Canvas）上绘制图像的方式。
            语法
            JS
            Copy to Clipboard

            drawImage(image, dx, dy);
            drawImage(image, dx, dy, dWidth, dHeight);
            drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            */
    /* 
            
            参数
            image
            绘制到上下文的元素。允许任何的画布图像源，例如：HTMLImageElement、SVGImageElement (en-US)、HTMLVideoElement、HTMLCanvasElement、ImageBitmap、OffscreenCanvas 或 VideoFrame (en-US)。

            sx 可选
            需要绘制到目标上下文中的，image 的矩形（裁剪）选择框的左上角 X 轴坐标。可以使用 3 参数或 5 参数语法来省略这个参数。

            sy 可选
            需要绘制到目标上下文中的，image 的矩形（裁剪）选择框的左上角 Y 轴坐标。可以使用 3 参数或 5 参数语法来省略这个参数。

            sWidth 可选
            需要绘制到目标上下文中的，image 的矩形（裁剪）选择框的宽度。如果不说明，整个矩形（裁剪）从坐标的 sx 和 sy 开始，到 image 的右下角结束。可以使用 3 参数或 5 参数语法来省略这个参数。使用负值将翻转这个图像。

            sHeight 可选
            需要绘制到目标上下文中的，image的矩形（裁剪）选择框的高度。使用负值将翻转这个图像。

            dx
            image 的左上角在目标画布上 X 轴坐标。

            dy
            image 的左上角在目标画布上 Y 轴坐标。

            dWidth
            image 在目标画布上绘制的宽度。允许对绘制的 image 进行缩放。如果不说明，在绘制时 image 宽度不会缩放。注意，这个参数不包含在 3 参数语法中。

            dHeight
            image 在目标画布上绘制的高度。允许对绘制的 image 进行缩放。如果不说明，在绘制时 image 高度不会缩放。注意，这个参数不包含在 3 参数语法中。
            */

    /*    原图像从坐标 (33,71) 处截取一个宽度为 500 高度为 600 的图像。并将其绘制到画布的 (21, 20) 坐标处，并将其缩放为宽 87、高 104 的图像。 */
    ctx.drawImage(img, 33, 71, 500, 600, 21, 20, 87, 104);
  };
});
</script>

<style scoped></style>
