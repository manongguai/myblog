<template>
  <div class="magnifier" @mousemove="onmousemove" id="magnifier"></div>
</template>

<script setup>
function onmousemove(e) {
  e.target.style.setProperty("--x", `${e.offsetX}px`);
  e.target.style.setProperty("--y", `${e.offsetY}px`);
}
</script>

<style scoped>
.magnifier {
  --x: 0;
  --y: 0;
  --width:600px;
  --height:400px;
  --scale:2;
  overflow: hidden;
  position: relative;
  width: var(--width);
  height: var(--height);
  background: url("./2233.jpg") no-repeat center/100% 100%;
  cursor: pointer;
}

.magnifier::before {
  --size: 100;
  position: absolute;
  left: var(--x);
  top: var(--y);
  border-radius: 100%;
  width: var(--size);
  height: var(--size);
  background: #333 url("./2233.jpg") no-repeat
    calc(var(--size) / var(--scale) - var(--scale) * var(--x)) calc(var(--size) / var(--scale) - var(--scale) * var(--y)) /
    calc(var(--width) * var(--scale)) calc(var(--height) * var(--scale));
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  content: "";
  will-change: left, top;
  transform: translate(-50%, -50%);
}

.magnifier:hover::before {
  --size: 100px;
}
/*# sourceMappingURL=1.min.css.map */

</style>
