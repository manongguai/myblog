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
    ctx.drawImage(img, 0, 0, c1.width, c1.height);
    /* 
            CanvasRenderingContext2D.getImageData() 返回一个ImageData对象，用来描述 canvas 区域隐含的像素数据，这个区域通过矩形表示，起始点为*(sx, sy)、宽为sw、高为sh。*
            语法
            ImageData ctx.getImageData(sx, sy, sw, sh);
            参数
            sx
            将要被提取的图像数据矩形区域的左上角 x 坐标。

            sy
            将要被提取的图像数据矩形区域的左上角 y 坐标。

            sw
            将要被提取的图像数据矩形区域的宽度。

            sh
            将要被提取的图像数据矩形区域的高度。

            返回值
            一个ImageData 对象，包含 canvas 给定的矩形图像数据。
            */
    let imageData = ctx.getImageData(0, 0, c1.width, c1.height);
    console.log(imageData); // rgba数据格式
    // 每四个数值为一个像素点，代表rgba
    for (let i = 0; i < imageData.data.length; i += 4) {
      // 计算色值平均值
      let avg =
        (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
      // 全部等于平均值得到灰度值
      imageData.data[i] = avg;
      imageData.data[i + 1] = avg;
      imageData.data[i + 2] = avg;
      imageData.data[i + 3] = 255;
    }
    /* 
            CanvasRenderingContext2D.putImageData() 是 Canvas 2D API 将数据从已有的 ImageData 对象绘制到位图的方法。如果提供了一个绘制过的矩形，则只绘制该矩形的像素。此方法不受画布转换矩阵的影响。
            语法
            void ctx.putImageData(imagedata, dx, dy);
            void ctx.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
            参数
            imageData

            ImageData ，包含像素值的数组对象。

            dx
            源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）。

            dy
            源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）。

            dirtyX 可选
            在源图像数据中，矩形区域左上角的位置。默认是整个图像数据的左上角（x 坐标）。

            dirtyY 可选
            在源图像数据中，矩形区域左上角的位置。默认是整个图像数据的左上角（y 坐标）。

            dirtyWidth 可选
            在源图像数据中，矩形区域的宽度。默认是图像数据的宽度。

            dirtyHeight 可选
            在源图像数据中，矩形区域的高度。默认是图像数据的高度。
            */
    ctx.putImageData(imageData, 0, 0);
  };
});
</script>

<style scoped></style>
