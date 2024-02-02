<template>
  <div class="box">
    <div id="ggk">谢谢惠顾</div>
    <canvas id="c2" width="600" height="400">
      当前浏览器不支持canvas,请下载最新的浏览器
      <a href="https://www.google.cn/chrome/index.html">立即下载</a>
    </canvas>
  </div>
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
  ctx.fillStyle = "#ccc";
  ctx.fillRect(0, 0, c1.width, c1.height);

  var isDraw = false;
  c1.onmousedown = function (e) {
    c1.onmousemove = function (e) {
      console.log(e);
      isDraw = true;
      var x = e.offsetX;
      var y = e.offsetY;
      ctx.globalCompositeOperation = "destination-out";
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.fill();
    };
  };

  c1.onmouseup = function (e) {
    isDraw = false;
    c1.onmousemove = () => {};
  };
  var random = Math.random();
  var ggk = document.querySelector("#ggk");
  if (random < 0.1) {
    ggk.innerHTML = "一等奖";
  } else if (0.1 < random && random < 0.3) {
    ggk.innerHTML = "二等奖";
  } else {
    ggk.innerHTML = "谢谢惠顾";
  }
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box{
  position: relative;
}

#ggk {
  width: 600px;
  height: 400px;
  font-size: 30px;
  font-weight: 900;
  line-height: 400px;
  text-align: center;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  color: red;
  border: 1px solid #ccc;
  z-index: -1;
}
</style>
