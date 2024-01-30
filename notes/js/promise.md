### 手写实现Promise.js

##### 一. 简单实现 

1. 调用 then 方法，将想要在 Promise 异步操作成功时执行的 onFulfilled 放入callbacks队列，其实也就是注册回调函数，可以向观察者模式方向思考；
2. 创建 Promise 实例时传入的函数会被赋予一个函数类型的参数，即 resolve，它接收一个参数 value，代表异步操作返回的结果，当异步操作执行成功后，会调用resolve方法，这时候其实真正执行的操作是将 callbacks 队列中的回调一一执行；

```js
class Promise{
  callbacks=[]
  constructor(fn){
    fn(this._reslove.bind(this))
  }
  then(thenBack){
    this.callbacks.push(thenBack)
  }
  _reslove(value){  // fn的回调函数
    this.callbacks.forEach(fn=>fn(value))
  }
}
let p = new Promise(reslove=>{
  setTimeout(()=>{
    console.log('done')
		reslove('5s')
  },5000)
}).then(tip=>{
  console.log(tip)
})
// 因为传入的函数是异步，所以 .then执行以后，reslove(回调才会执行)，也就是callback被置入之前就reslove已经调用完毕了
```



##### 二.异步reslove

 1. 为了解决传入函数为同步函数时的执行顺序问题，可以借助setTimeout将reslove改为异步

 2. 同时问了解决链式调用可以在then中返回this

    ```js
    class Promise{
      callbacks=[]
      constructor(fn){
        fn(this._reslove.bind(this))
      }
      then(thenBack){
        this.callbacks.push(thenBack)
        return this  // 提供链式调用
      }
      _reslove(value){
       setTimeout(()=>{  //延时调用回调函数
          this.callbacks.forEach(fn=>fn(value))
       })
      }
    }
    let p = new Promise(reslove=>{
      reslove('hello promise')
    }).then(tip=>{
      console.log(tip)
    }).then(tip2=>{  // 链式调用
      console.log(tip2)
    })
    // 但是链式调用到第二次又面临着执行顺序的问题
    
    ```

##### 三. 添加状态和保存返回值，保证链式调用

```js
class Promise{
  callbacks=[]
  state= 'pending'
  value = null
  constructor(fn){
    fn(this._reslove.bind(this))
  }
  then(thenBack){
    if(this.state='pending'){
      this.callbacks.push(thenback)
    }else{
       thenBack(this.value)
    }
    return this 
  }
  _reslove(value){
    this.state = 'fulfilled'  // 标识reslove执行 ，这里就不再需要setTimeout了
    this.callbacks.forEach(fn=>fn(value))
  }
}
let p = new Promise(reslove=>{
  reslove('hello promise')
}).then(tip=>{
  console.log(tip)
}).then(tip2=>{  // 链式调用
  console.log(tip2)
})
// 虽然实现了链式调用，但是后面的链式多次调用只是返回了同一个值
```

四.

```js
//完整的实现
class Promise {
    callbacks = [];
    state = 'pending';//增加状态
    value = null;//保存结果
    constructor(fn) {
        fn(this._resolve.bind(this));
    }
    then(onFulfilled) {  // then的时候把then传的函数传入
        return new Promise(resolve => {
            this._handle({
                onFulfilled: onFulfilled || null, 
                resolve: resolve
            });
        });
    }
    _handle(callback) {
        if (this.state === 'pending') {
            this.callbacks.push(callback);
            return;
        }
        //如果then中没有传递任何东西
        if (!callback.onFulfilled) {
            callback.resolve(this.value);
            return;
        }
        var ret = callback.onFulfilled(this.value);
        callback.resolve(ret);
    }
    _resolve(value) {
        this.state = 'fulfilled';//改变状态
        this.value = value;//保存结果
        this.callbacks.forEach(callback => this._handle(callback));
    }
}
```

由上面的实现，我们可以看到：

- **then 方法中，创建并返回了新的 Promise 实例，这是串行Promise的基础，是实现真正链式调用的根本**
- **then 方法传入的形参 onFulfilled 以及创建新 Promise 实例时传入的 resolve 放在一起，被push到当前 Promise 的 callbacks 队列中，这是衔接当前 Promise 和后邻 Promise 的关键所在**
- **根据规范，onFulfilled 是可以为空的，为空时不调用 onFulfilled**