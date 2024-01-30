<template>
  <div>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.box1,
.box2,
.box3,
.box4 {
  margin: 10px auto;
  width: 0;
  height: 0;
  border: 50px solid red;
}
.box1 {
  border-color: blue transparent transparent;
}
.box2 {
  border-color: transparent blue transparent transparent;
}
.box3 {
  border-color: transparent transparent blue transparent;
}
.box4 {
  border-color: transparent transparent transparent blue;
}
</style>
