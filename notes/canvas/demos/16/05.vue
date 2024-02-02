<template>
  <canvas id="c5" width="600" height="400">
    当前浏览器不支持canvas,请下载最新的浏览器
    <a href="https://www.google.cn/chrome/index.html">立即下载</a>
  </canvas>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  // 1、获取canvas画布
  var c1 = document.querySelector("#c5");
  if (!c1.getContext) {
    console.log("当前浏览器不支持canvas,请下载最新的浏览器");
  }
  // 2. 获取画笔，上下文对象
  var ctx = c1.getContext("2d");
  /*CanvasRenderingContext2D.setTransform() 是 Canvas 2D API 使用单位矩阵重新设置（覆盖）当前的变换并调用变换的方法，此变换由方法的变量进行描述。
        参见 transform() 方法，这个方法不会覆盖当前的变换矩阵，会多次叠加变换。
        
        语法
        void ctx.setTransform(a, b, c, d, e, f);
        变换矩阵的描述： 
                    [
                        a c e
                        b d f
                        0 0 1
                    ]
        
        参数
        a (m11)
        水平缩放。
        
        b (m12)
        垂直倾斜。
        
        c (m21)
        水平倾斜。
        
        d (m22)
        垂直缩放。
        
        e (dx)
        水平移动。
        
        f (dy)
        垂直移动。
        
        较新的类型由单个参数矩阵组成，该参数表示要设置的 2D 转换矩阵（从技术上讲，是 DOMMatrixInit 对象；任何对象只要包含上述作为属性的组件，就可以执行操作）。 */

  ctx.transform(1, 0.2, 0.8, 1, 0, 0);
  ctx.fillRect(0, 0, 100, 100);

  ctx.setTransform(1, 0, 0, 1, 0, 0); // 重置回初始值
  ctx.fillRect(0, 200, 100, 100);
});
</script>

<style scoped></style>
