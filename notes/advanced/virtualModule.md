### virtual-module，一个被低估的模块模式

<br />

#### virtual-module简介

virtual-module是一种在构建过程中动态生成的模块，它们不是实际存在于文件系统中的文件。Vite 在处理模块时，会检查模块的导入路径，如果该路径对应一个虚拟模块，则会根据预先定义的规则生成模块内容。这种技术允许开发者创建具有动态生成内容的模块，从而实现灵活的编程模式。


Vite 中的虚拟模块其实是沿用了 rollup 中的概念，它本身类型 alias 别名，但模块的内容本身并不是直接存储在磁盘中，而是内存中，因为它本身并不存在，而是在编译的时候动态生成的，这也是为什么说他是一个潜力被低估的原因之一。

#### 使用virtual-module

Anton Medvedev 是一名非常优秀的程序员，他编写了 zx、fx、expr 和 很多很酷且有趣的东西 ，比如他将 公元日期 发布为单独的 npm 包，从 1970 年到 2038 ，每一年都有一个单独的 npm 包，非常有趣，但这也很滑稽，如果我们使用虚拟模块来做的话，则非常简单。

* 原导入方式

```js
const birthday = require('@year/1986/03/05')
```

* virtual-module 实现
  
```js
function viteDates () {
  const prefix = /^\/?dates:/
  return {
    name: 'vite-plugin-dates',
    async resolveId (id) {
      const [, date] = id.split(prefix)
      if (date) {
        if (isNaN(Date.parse(date))) {
          throw new Error('Trying to load an invalid date')
        }
        return id // 如果你的插件使用 'virtual modules'（例如用于辅助函数），请在模块 ID 前添加 \0 前缀。 这可以防止其他插件尝试处理它。
      }  
    },
    load (id) {
      const [, date] = id.split(prefix)
      if (date) {
        return `export default new Date(Date.parse('${date}'))`
      }
    },
  }
}

```

* vite.config.js

```js
{
    plugin:[viteDates()]
}

```

* 导入
  
```js
import birthday from 'dates:1986/03/05'

document.body.innerHTML = `<p>My birthday is <b>${
  new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(birthday)
}</b>.</p>`

```



#### 定义 TS 模块类型声明
在 src 下有一个 vite-env.d.ts 文件，我们只需要在里面追加一下内容即可：

```ts
// 对所有以 virtual-dates: 开头的模块声明共同的类型
declare module 'dates:*' {
  // 声明一个变量，保存这个值的类型
  const date: Date
  // 告诉 ts，这个模块默认导出的值就是这个 date 变量的类型
  export default date
}

```



