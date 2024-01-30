### performance.now 实现准确的倒计时


* perfromance.now是什么？
performance.now 是一个函数，它返回以毫秒为单位的时间值(double类型)。返回的值表示自执行开始以来经过的时间。


* 解决什么问题？
使用new Date()方式实现的倒计时会受到系统时间的影响，比如修改系统时间，就可以修改倒计时的时间。
在JavaScript中，perfromance.now()方法可用于检查代码的性能。您可以使用此方法检查代码的执行时间。
 

用法:
```Javascript
let t = performance.now();
```
下面的代码将使您对该代码的执行方式有一个简短的了解。

```Javascript
<script> 
  const t0 = performance.now(); 
  for (let i = 0; i < 10; i++) { 
    console.log(i); 
  } 
  const t1 = performance.now(); 
  console.log(`Call to doSomething took ${t1 - t0} milliseconds.`); 
</script>
```

 * 根据这个特性，我们可以使用performance.now 实现不受系统时间影响的倒计时
* Demo
<preview path="./demos/performance.vue"></preview>