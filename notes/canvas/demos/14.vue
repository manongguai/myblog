<template>
  <canvas id="c1" width="600" height="400">
    当前浏览器不支持canvas,请下载最新的浏览器
    <a href="https://www.google.cn/chrome/index.html">立即下载</a>
  </canvas>
  <button id="btn">播放/暂停</button>
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
  var video = document.createElement("video");
  video.src = "/videos/video.mp4";
  video.addEventListener("loadeddata", function (e) {
    this.currentTime = 0; // 设置视频时间为0，显示第一帧
  });
  var btn = document.querySelector("#btn");
  btn.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      render();
    } else {
      video.pause();
    }
  });
  function render() {
    ctx.drawImage(video, 0, 0, 600, 400);
    requestAnimationFrame(render);
  }
  render();
});
</script>

<style scoped></style>
