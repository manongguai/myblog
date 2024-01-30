<template>
  <div>
    <p>Click anywhere in this pane, then try tabbing through the elements.</p>
    <label>First in tab order:<input type="text" /></label>
    <div id="tabindex" @focus.once="onfocus" @blur.once="onblur" tabindex="0">
      Tabbable due to tabindex.
    </div>
    <div>Not tabbable: no tabindex.</div>
    <label>Third in tab order:<input type="text" /></label>
  </div>
</template>

<script setup>

function onfocus() {
  alert("this div is focus");
}
function onblur() {
  alert("this div is blur");
}
</script>

<style scoped>
input{
    border: 1px solid #ccc;
}
p {
  font-style: italic;
  font-weight: bold;
}
div,
label {
  display: block;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

div:focus {
  font-weight: bold;
}
</style>
