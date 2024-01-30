<template>
  <div>
    <div>
      <div
        style="
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        "
      >
        <div class="title">倒计时1-服务器时间</div>
        <div class="currentTime"></div>
        <div>
          <n-button class="stopBtn">stop</n-button>
          <n-button class="pauseBtn">pause</n-button>
        </div>
      </div>
      <br />
      <div
        style="
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        "
      >
        <div class="title">倒计时2-毫秒数倒计时</div>
        <div class="currentTime2"></div>
        <div>
          <n-button class="stopBtn2">stop</n-button>
          <n-button class="pauseBtn2">pause</n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(async () => {
  var localStartTime;
  var ServeTime = await getServerTime();
  var ServeEndTime = await getServerEndTime();
  // 服务器当前时间
  function getCurrentServeTime() {
    return ServeTime + (performance.now() - localStartTime);
  }
  // 服务器剩余时间数
  async function getTime() {
    return ServeEndTime - getCurrentServeTime();
  }
  // 毫秒转天时分秒
  function formatDuring(mss) {
    var days = parseInt(mss / (1000 * 60 * 60 * 24));
    var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = (mss % (1000 * 60)) / 1000;
    return (
      days +
      " 天 " +
      hours +
      " 小时 " +
      minutes +
      " 分钟 " +
      seconds.toFixed() +
      " 秒 "
    );
  }
  async function getServerTime() {
    localStartTime = performance.now();
    return Promise.resolve(new Date("2023-06-02 12:00:00").getTime());
  }
  async function getServerEndTime() {
    return Promise.resolve(new Date("2023-06-02 12:01:00").getTime());
  }
  /**
   * @description: 开启定时器
   * @param {*} time // 毫秒数
   * @param {*} callback 没帧的回调，返回剩余毫秒数
   * @return {*} { stop,pause } 返回停止和暂停函数
   */
  function setTime(time, callback) {
    // 开启标志符
    var isProgressing = false;
    // 本地结束时间
    let localEndTime = performance.now() + time;
    function next() {
      // 剩余的毫秒数
      let residueTime = localEndTime - performance.now();
      residueTime = residueTime > 0 ? residueTime : 0;
      if (typeof callback == "function") {
        callback(residueTime);
      }
      if (residueTime > 0 && !isProgressing) {
        requestAnimationFrame(next);
      }
    }
    // 停止
    function stop() {
      isProgressing = true;
      localEndTime = 0;
    //   callback(0) // 停止是否清零
    }
    // 暂停/开始
    function pause() {
      isProgressing = !isProgressing;
      if (isProgressing === false && localEndTime != 0) {
        // 重新开始重置本地结束时间
        localEndTime = performance.now() + time;
        next();
      } else {
        // 获得剩余的时间
        time = localEndTime - performance.now();
      }
    }
    next();
    return {
      stop,
      pause,
    };
  }
  async function start1() {
    var time = await getTime();
    let { stop, pause } = setTime(time, (residueTime) => {
      let currentText = formatDuring(residueTime);
      let dom = document.querySelector(".currentTime");
      dom.innerHTML = currentText;
    });
    let btn = document.querySelector(".stopBtn");
    btn.addEventListener("click", stop);
    let btn2 = document.querySelector(".pauseBtn");
    btn2.addEventListener("click", pause);
  }
  async function start2() {
    var time = await getTime();
    let { stop, pause } = setTime(60000, (residueTime) => {
      let currentText = formatDuring(residueTime > 0 ? residueTime : 0);
      let dom = document.querySelector(".currentTime2");
      dom.innerHTML = currentText;
    });
    let btn = document.querySelector(".stopBtn2");
    btn.addEventListener("click", stop);
    let btn2 = document.querySelector(".pauseBtn2");
    btn2.addEventListener("click", pause);
  }
  start1();
  start2();
});
</script>

<style lang="scss" scoped></style>
