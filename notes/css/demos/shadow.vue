<template>
  <div class="box">
    <div class="shadow-only-bottom">bottom</div>
    <div class="shadow-only-right">right</div>
    <div class="shadow-only-left">left</div>
    <div class="shadow-only-top">top</div>
  </div>
</template>

<script setup>
 
</script>

<style  scoped>
.box{
    display: flex;
    justify-content: space-around;
    div{
        width: 40px;
        height: 40px;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
    }
}
.shadow-only-bottom{ box-shadow: 0px 7px 7px -7px #5E5E5E;  }
.shadow-only-right{ box-shadow: 7px 0px 7px -7px #5E5E5E;  }
.shadow-only-left{ box-shadow: -7px 0px 7px -7px #5E5E5E;  }
.shadow-only-top{ box-shadow: 0px -7px 7px -7px #5E5E5E;  }
</style>
