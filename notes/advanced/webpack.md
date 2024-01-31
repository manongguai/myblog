# Webpack详细介绍


## 一、webpack入门

### 1.1 webpack安装

注意: 先安装nodejs的最新版

   **全局安装webpack**
   ```
    npm i webpack webpack-cli -g
   ```
   
   **项目中安装webpack(推荐)**
   ```
    npm i webpack webpack-cli -D
   ```
   
### 1.2 webpack使用
   
#### 1.2.1 webpack-cli
   
npm 5.2以上的版本提供了一个npx命令

npx 想要解决的主要问题, 就是调用项目内部安装的模块, 原理就是在node_modules下的.bin目录中找到对应的命令执行
   ```
   // 使用webpack 命令
   npx webpack
   ```
webpack4.0之后 可以实现0配置打包, 0配置的特点就是限制较多 , 无法自定义很多内容 

开发中常用的还是使用webpack配置进行打包构建

#### 1.2.2 webpack配置

webpack有四大核心概念: 

 + 入口(enter): 程序的入口js
 
 + 输出(output): 打包后存放的位置
 
 + loader: 用于对模块的源代码进行转换
 
 + 插件(plugins): 插件目的在于解决loader无法实现的其他事情
 
 webpack.config.js
 ```
 const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        //  path.resolve() 解析当前相对路径的绝对路径
        // path: path.resolve('./dist/'),


        // path.join 传入两个参数 , (_dirname 当前根目录 , 相对路径) ,最后拼接成绝对路径
        path: path.join(__dirname, './dist/'),

        // 文件输出的名字
        filename: 'wanghan.js'
    },
    mode: 'production'  // 默认是production , 可以手动设置为development , 区别就是是否可以进行压缩混淆
}

 ```
 
1. npx webpack打包 , 默认选的配置文件webpack.config.js

   我们也可以自定义打包配置文件件,  如要换选用其他的配置文件 , npx webpack --config webpack.new.config.js
   
2. 但是每次如果切换打包配置文件 , 命令文件过于长了点 , 我们可以在package.json文件中配置命令

   ```
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.new.config.js"
   },
   ```
   
   然后我们执行 **npm run build** 即可





### 1.2.3 开发时自动编译工具

每次要编译代码时, 手动运行 *npm run build* 就会变得很麻烦

webpack 中有几个不同的选项, 可以帮助我们的代码发生变化后自动编译代码

1. webpack's Wacth Mode  监视模式
2. webpack-dev-server  推荐~~
3. webpack-dev-middleware  中间件

多数场景中 , 可能需要使用的 *webpack-dev-server* , 但是不同的方式都可以了解一下 


#### 2.3.1 wacth

  **webpack is watching the files…**
  
  在webpack指令后加上 *--watch* 参数即可
  
  主要作用就是监视本地项目文件的变化 , 发现有修改的代码会自动编译打包 ,生成输出文件
   
   1. 配置package.json 的scripts 中 "watch" : "wabpack --watch"
   
   2. 运行 npm run watch
   
  以上是cli的方式设置watch的参数

  还可以通过配置文件对watch的参数进行修改

  ```
  const path = require('path')

  module.exports = {
      
      watch: true
  }

  ```
  
  #### 2.3.2 webpack-dev-server
  
   1. 安装 *devServer* :
       
       devServer需要依赖webpack , 必须在项目中依赖安装webpack
       
       
       ```
       npm i webpack-dev-server webpack -D
       ```
       
       
   2. index.html中修改  \<script src="/wanghan/js">\</script>

   3. 运行 **npm webpack-dev-server**

   4. 运行 **npx webpack-dev-server --hot --open --port 8090**
    
   5. 配置package.json的scripts: **"dev": "webpack-dev-server --hot --open --port 8090**
    
       + --contentBase
       
       *本地服务器默认打开根目录下的index.html文件 , 但是如果想要打开 src/index.html 或其他页面*
       
       *webpack-dev-server --contentBase ./src*
       
       + --open 自动开发
       
       + --port 配置端口
       
       + --hot 热模块替换
       
           不需要重新打包我们的文件 , 只需要像类似补丁的形式去更新我们变动的模块(打补丁)
           
       + --compress  压缩
       
    
   6. 运行 **npm run dev**
    
      devServer会在内存中生成一个打包好的wanghan.js文件, 专供开发时使用 , 打包效率非常高 , 修改代码后会自动打包以及刷新浏览器 , 用户体验非常好   
    
      以上是cli的方式设置devServer的参数
      
    
   7. 还可以通过配置文件对devServer的参数进行修改
   
   ```
   const path = require('path')

    module.exports = {
        devServer: {
            open: true,
            hot: true,
            compress: true,
            port: 8090,
            contentBase: './src'
        }
    }

   ```
   
   
   #### 2.3.3 html插件

 1. 安装html-webpack-plugin插件 *npm i html-webpack-plugin -D*
   
 2. 在 *webpack.config.js* 中的plugin节点下配置
   
   
    ```
    const HtmlWabpackPlugin = require('html-webpack-plugin')
    
    plugins: [
        new HtmlWabpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]

    ```
    
    **作用:**
    
      + devServer时, 根据模板在项目根目录下生成html文件 , 类似于devServer生成内存中的wanghan.js
      
      + devServer时, 自动打包引入 wanghan.js
      
      + build时, 打包时自动生成index.html
      
      
 #### 2.3.4 webpack-dev-middleware
 
 *webpack-dev-middleware* 是一个容器(wrapper) , 它可以把webpack处理后的文件传递给一个服务器(server).
 
 *webpack-dev-server* 在内部使用了它, 同时 , 它也可以作为一个单独的包来使用 , 以便进行更多的自定义的设置来实现更多的需求.
 
  1. 安装 express 和 webpack-dev-middleware: 
  
    ```
    npm i express webpack-dev-middleware -D
    ```
  
  2. 新建server.js
  
  ```
  const  express = require('express')

  const webpack = require('webpack')

  const webpackDevMiddleWare = require('webpack-dev-middleware')

  const config = require('./webpack.config.js')

  const app = express()

  const compiler = webpack(config)

  app.use(webpackDevMiddleWare(compiler, {
      publicPath: '/'
  }))

  app.listen(3000, function() {
      console.log('http://localhost:3000')
  })
  ```
  
  3. 配置package.json中的scripts : *"server" : "node server.js"*
  
  4. 运行 *npm run server*
  
  *注意: 如果要使用middleware, 必要要使用 html-webpack-plugin 插件, 否则html文件无法正常的输出到express服务器的根目录*
  
  接下来 我们要对webpack的配置文件做一些调整 , 以确保中间件(middleware)功能能够正确启用
  
  
  
  
##小结

只有在开发时才需要使用自动编译工具 , 例如 webpack-dev-server

项目上线时都会直接使用webpack进行打包构建 , 不需要使用这些自动编译工具 

自动编译工具只是为了 **提高开发体验** 
  
  

## 二、webpack高级

### 2.1. HTML中img标签的图片资源处理

  1. 安装 npm install -S html-withimg-loader
  
  2. 在webpak.config.js文件中添加loader
  
    ```
    {
      test: /\.(html|html)$/i,
      loader: 'html-withimg-loader'
    }
    ```
   使用时, 只需要在html中正常引用图片即可, webpack会找到对应的资源进行打包, 并修改html中的引用路劲
   
### 2.2 SPA 单页面应用(Single Page Application)

### 2.3. 多页应用打包

    ```
    // 修改为多入口
    entry: {
        index: './src/index.js',
        other: './src/other.js'
    },
    output: {
        //  path.resolve() 解析当前相对路径的绝对路径
        // path: path.resolve('./dist/'),


        // path.join 传入两个参数 , (_dirname 当前根目录 , 相对路径) ,最后拼接成绝对路径
        path: path.join(__dirname, './dist/'),

        // 文件输出的名字
        // 多入口无法对应一个固定的出口 , 所以修改filename为 [name] 变量
        filename: '[name].js'
    },
    mode: 'development',  // 默认是production , 可以手动设置为development , 区别就是是否可以进行压缩混淆
    // watch: true  // 开启则会打开监视模式
    devServer: {
        open: true,
        hot: true,
        compress: true,
        port: 8090,
        // contentBase: './src'
    },
    plugins: [
        // 如果用了html插件 , 需要手动配置多入口对应的html1文件 将指定对应的输出文件
        new HtmlWabpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            // 从入口entry的名字来
            chunks: ['index']
        }),
        new HtmlWabpackPlugin({
            filename: 'other.html',
            template: './src/other.html',
            chunks: ['other']
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns:[
               { from: path.join(__dirname, 'assets'), to: 'assets' }
            ]
        }),
        new webpack.BannerPlugin('涂心仪')
    ],
    ```
    
    
 ### 2.4. 全局变量
 
  可以通过*expose-loader*进行全局变量注入, 
  
  同时也可以使用内置插件 *webpack.ProvidePlugin*对每个模块的闭包空间注入一个变量, 自动加载模块, 而不必到处 import 或 require
  
  + expose-loader将库引入到全局作用域
  
      1. 安装 *npm i expose-loader -D*
      
      2. 配置loader
      
      ```
      {
        // require.resolve找到jquery的绝对路径
        test: require.resolve('jquery'),
        use: {
          loader: 'expose-loader',
          options: '$'
        }
      }
      ```
      
  + webpack.ProvidePlugin 将库自动加载到每个模块
  
    1. 引入webpack
    
      ```
        const webpack = require('webpack')
      ```
      
    2. 创建插件对象
    
    要自动加载jquery , 我们可以将两个变量都指向对应的node模块
    
    ```
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
    ```
 
 
 ### 2.5. Development / Production 不同配置文件打包
 
 项目开始时一般需要使用两套或多套配置文件 , 用于开发阶段打包(不压缩代码, 不优化代码, 增加效率 ) 和 上线阶段打包 (压缩代码 , 优化代码 , 打包后直接上线使用)
 
 抽取三个文件 :
 
   + webpack.base.js
   
   + webpack.prod.js
   
   + webpack,dev.js
   
  步骤如下: 
  
   1. 将开发环境和生产环境公用的配置放入base中, 不同的配置各自放入prod或dev文件中
   
   2. 然后再dev和prod中使用webpack-merge把自己的配置与base的配置进行合并后导出
   
      *npm i webpack-merge -D*
   
   3. 将package.json中的脚本参数进行修改, 通过 *--config* 手动指定特定的配置文件
   
      ```
      const {merge} = require('webpack-merge')

      const baseConfig = require('./webpack.base.js')

      module.exports = merge(baseConfig, {
          mode: 'production',
          devtool: 'cheap-module-source-map'
      })

      ```
      
 ### 2.6. 定义环境变量
 
  除了区分不同的配置文件进行打包 , 还需要在开发时知道当前的环境是开发阶段或上线阶段, 所以可以借助webpack内置插件**DefinePlugin**来定义环境变量
  
  最终实现开发阶段和上线阶段的api的地址自动切换等目的
  
   1. 引入webpack
   
      ```
      const Webpack = require('webpack')
      ```
      
   2. 创建插件对象 ,并定义环境变量
   
      ```
      new Webpack.DefinePlugin({
        DEV: 'true'
      })
      ```
      
   3. 在src打包的代码环境下可以直接使用
   
   
  ### 2.7. 使用devServer解决跨域问题
  
  在开发阶段很多时间需要使用到跨域 
  
  **跨域** 受制于浏览器的同源策略 , 所谓同源是指 , 域名 , 端口 , 协议 相同
  
  开发阶段往往会遇到上面这种情况 , 也许将来上线后 , 前端项目会和后端项目部署在同一个服务器下 , 并不会有跨域问题 , 
  
  但由于开发时会用到 webpakc-dev-server, 所以一定会有跨域问题
  
  目前解决跨域主要的方案有 : 
  
     + jsonp (淘汰)
     
     + cors
     
     + http proxy
     
   此处介绍的使用devServer解决跨域, 其实原理就是 http proxy
   
   将所有的ajax请求发送给devServer服务器 , 再由devServer服务器做一次转发 , 发送给数据接口服务器
   
   由于ajax请求是发送给devServer服务器的 , 所以不存在跨域问题 , 而devServer由于是用node平台发送的http请求 ,
   
   自然也不涉及跨域问题 , 可以完美解决!
   
   [devServer-proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy)
   
   
### 2.8. HMR

  [HMR](https://webpack.js.org/guides/hot-module-replacement/)
  
  
  
## 三、webpack loader

### 3.1. 处理css

   #### 3.1.1 安装 *npm i css-loader style-loader -D*
   
   #### 3.1.2. 配置 webpack.config.js
   
   ```
   // loader配置
    module: {
        rules: [
            // 配置的是用来解析.css文件的loader (css-loader 和 style-loader)
            {
                // 用正则匹配当前访问的文件的后缀名是 .css
                test: /\.css$/,
                // webpack底层调用这些包的顺序是从右到左
                // loader的执行顺序是从右到左以管道的方式链式调用
                use: ['style-loader', 'css-loader']
            }
        ]
    }
   ```
   
   注释 : 
     
   * css-loader * : 解析css文件
     
   * style-loader * : 将解析出来的文件放在html中,使其生效
   
 
 ### 3.2. 处理 less 和 sass 
 
   1. 安装 *npm i less less-loader -D*
   
   2. 安装 *npm i node-sass sass-loader -D*
   
   ```
      {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
          test: /\.s(a|c)ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
      }
   ```
   
 ### 3.3。 处理 图片 和 字体

   1. 安装 *npm i file-loader -D*
   
   ```
   {
       test: /\.(png|jpg|gif)$/,
       use: 'file-loader'
   },
   {
       test: /\.(woff|svg|woff2|ttf|eot)$/,
       use: 'file-loader'
   }
   ```
  
  2. 更进一步 安装 *npm i url-loader -D*
  
     > 安装 url-loader 之前, 需要先安装 file-loader

   ```
   {
       test: /\.(png|jpg|gif)$/,
       use: {
           loader: 'url-loader',
           options: {
               // 图片小于5kb时, 会转化成base64
               // base64的体积会比原图大30%左右 , 但是base64不用额外请求 , 所以当图片体积较小(一般不超过5kb)时 , 转成base64格式
               // 图片体积大于 5kb 时 , 就以路径的形式展示
               limit: 5 * 1024,
               // 打包后 图片存放的文件夹
               outputPath: 'images',
               // 图片命名 , hash 代表用hash算法
               name: '[name]-[hash:4].[ext]'
           }
       }
   },
   ```
   
 ### 3.4 babel
   
   1. *npm i babel-loader @babel/core @babel/preset-env webpack -D*
   
       @babel/core babel 核心
       
       @babel/preset-env 预设
      
   2. 如果需要支持更高级的ES6语法 , 可以继续安装插件:
      
         *npm i @babel/plugin-proposal-class0properties -D*
         
         也可以根据需要在babel官网找插件进行安装
         
          ```
          {
             test: /\.js$/,
             use: {
                 loader: 'babel-loader',
                 options: {
                     // 预设
                     presets: ['@babel/env'],
                     plugins: ['@babel/plugin-syntax-class-properties', 'transform-class-properties']
                 }
             },
             // 排除js文件 , 不打包
             exclude: /node_modules/
          }
          ```
          
       babel更推荐把配置单独写一个文件 .babelrc
       
       webpack.config.js
       
       ```
       {
          test: /\.js$/,
          use: {
              loader: 'babel-loader',
              // options: {
              //     // 预设
              //     presets: ['@babel/env'],
              //     plugins: [
              //         '@babel/plugin-syntax-class-properties',
              //         'transform-class-properties',
              //         '@babel/plugin-transform-runtime'
              //     ]
              // }
          },
          // 排除js文件 , 不打包
          exclude: /node_modules/
       }
       ```
       .babelrc (json格式)
       
       ```
         {
             "presets": ["@babel/env"],
             "plugins": [
                 "@babel/plugin-syntax-class-properties",
                 "transform-class-properties",
                 "@babel/plugin-transform-runtime"
             ]
         }
       
       ```
       
         
   3. 如果需要使用[Generator](http://www.ruanyifeng.com/blog/2015/04/generator.html), 无法直接使用babel进行转换,因为会将generator转化为一个
      regeneratorRuntime, 然后使用mark和wrap来实现regenerator , 但由于babel并没有内置regeneratorRuntime , 所以无法直接使用
      
         需要安装插件 :

         *npm i @babel/plugin-transform-runtime -D*

         同时还需要安装运行时依赖:

         *npm i @babel/runtime -D*

         在.babelrc中添加插件:

         ```
         {
             test: /\.js$/,
             use: {
                 loader: 'babel-loader',
                 options: {
                     // 预设
                     presets: ['@babel/env'],
                     plugins: [
                         '@babel/plugin-syntax-class-properties',
                         'transform-class-properties',
                         '@babel/plugin-transform-runtime'
                     ]
                 }
             },
             // 排除js文件 , 不打包
             exclude: /node_modules/
         }
         ```
         
   4. 如果需要使用es6/7中对象原型提供的新方法, babel默认情况无法转换, 即使用了 *transform-runtime* 的插件也不支持转换原型上的方法
   
      需要使用另一个模块: 
      
      *npm i @babel/polyfill -S*
      
      该模块需要在使用新方法的地方直接引入
      
      ```
      import '@babel/polyfill'
      ```
   
   
### 3.5. source map使用

   #### 3.5.1. devtool
   
      此选项控制是否生成，以及如何生成 source map。

      使用 [`SourceMapDevToolPlugin`](/plugins/source-map-dev-tool-plugin) 进行更细粒度的配置。查看 [`source-map-loader`](/loaders/source-map-loader) 来处理已有的 source map。

*  `devtool` {#devtool}

`string` `false`

   选择一种 [source map](http://blog.teamtreehouse.com/introduction-source-maps) 格式来增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度。

   webpack 仓库中包含一个 [显示所有 `devtool` 变体效果的示例](https://github.com/webpack/webpack/tree/master/examples/source-map)。这些例子或许会有助于你理解这些差异之处。

  你可以直接使用 `SourceMapDevToolPlugin`/`EvalSourceMapDevToolPlugin` 来替代使用 `devtool` 选项，因为它有更多的选项。切勿同时使用 `devtool` 选项和 `SourceMapDevToolPlugin`/`EvalSourceMapDevToolPlugin` 插件。`devtool` 选项在内部添加过这些插件，所以你最终将应用两次插件。

   devtool                                  | 构建速度 | 重新构建速度 | 生产环境 | 品质(quality)
   ---------------------------------------- | ------- | ------- | ---------- | -----------------------------
   (none)                                   | 非常快速 | 非常快速  | yes        | 打包后的代码
   eval                                     | 非常快速 | 非常快速  | no         | 生成后的代码
   eval-cheap-source-map                    | 比较快   | 快速     | no         | 转换过的代码（仅限行）
   eval-cheap-module-source-map             | 中等     | 快速     | no         | 原始源代码（仅限行）
   eval-source-map                          | 慢      | 比较快   | no         | 原始源代码
   eval-nosources-source-map                |         |         |            |
   eval-nosources-cheap-source-map          |         |         |            |
   eval-nosources-cheap-module-source-map   |         |         |            |
   cheap-source-map                         | 比较快   | 中等     | yes        | 转换过的代码（仅限行）
   cheap-module-source-map                  | 中等     | 比较慢   | yes        | 原始源代码（仅限行）
   inline-cheap-source-map                  | 比较快   | 中等     | no         | 转换过的代码（仅限行）
   inline-cheap-module-source-map           | 中等     | 比较慢   | no         | 原始源代码（仅限行）
   inline-source-map                        | 慢      | 慢       | no         | 原始源代码
   inline-nosources-source-map              |         |         |            |
   inline-nosources-cheap-source-map        |         |         |            |
   inline-nosources-cheap-module-source-map |         |         |            |
   source-map                               | 慢      | 慢       | yes        | 原始源代码
   hidden-source-map                        | 慢      | 慢       | yes        | 原始源代码
   hidden-nosources-source-map              |         |         |            |
   hidden-nosources-cheap-source-map        |         |         |            |
   hidden-nosources-cheap-module-source-map |         |         |            |
   hidden-cheap-source-map                  |         |         |            |
   hidden-cheap-module-source-map           |         |         |            |
   nosources-source-map                     | 慢      | 慢       | yes        | 无源代码内容
   nosources-cheap-source-map               |         |         |            |
   nosources-cheap-module-source-map        |         |         |            |

  验证 devtool 名称时， 我们期望使用某种模式， 注意不要混淆 devtool 字符串的顺序， 模式是： `[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map`.

  其中一些值适用于开发环境，一些适用于生产环境。对于开发环境，通常希望更快速的 source map，需要添加到 bundle 中以增加体积为代价，但是对于生产环境，则希望更精准的 source map，需要从 bundle 中分离并独立存在。
   
   
   
 #### 3.5.2. 这么多模式用哪个比较好
   
   开发环境推荐: 
   
   *cheap-module-eval-source-map*
   
   生产环境推荐: 
   
   *(none) 不使用*
   
   原因如下: 
   
   1. 使用cheap模式可以大幅度提高soure map生成的效率 . 大部分情况下我们调试并不关心列信息, 而且就算source map 没有列 , 有些浏览器也会给出列的信息
   
   2. 使用module可以支持babel这种预编译工具, 映射转换前的代码
   
   3. 使用eval方式可大幅度提高持续构建效率. 官方文档提供的书读对比表格可以看到eval模式的重新构建速度都很快
   
   4.使用 eval-source-map 模式可以减少网络请求. 这种模式开启DataUrl 本身包含完整的 source map信息, 并不需要想 sourceUrl那样 , 浏览器需要发送一个      完整的请求去获取 sourcemap 文件, 这会略微提高一点效率. 但是生产环境中就不适用了 , 因为这样会让文件变得很大
   

### 3.6. 插件

   #### 1. clean-webpack-plugin
   
   该插件可以用于自动清除dist目录后重新生成 . 在*npm run build*时非常方便
   
   1. 安装插件 
   
   *npm i clean-webpack-plugin -D*
   
   2. 引入
   
   *const { CleanWebpackPlugin } = require('clean-webpack-plugin')*
   
   3. 使用插件,在plugin中直接创建对象即可
   
   ```
   plugins: [
        new HtmlWabpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
   ```
   
   #### 2. copy-webpack-plugin
   
   1. 安装插件 
   
   *npm i copy-webpack-plugin -D*
   
   2. 引入
   
   *const { CopyWebpackPlugin } = require('copy-webpack-plugin')*
   
   3. 使用插件,在plugin中直接创建对象并配置源和目标
   
   form: 源, 从哪里拷贝, 可以使相对路径或绝对路劲, 推荐绝对路径
   
   to: 目标, 拷贝到哪里去, 相对于output的路劲, 同样可以使绝对路径或相对路径, 但更推荐相对路径
   
   ```
   new CopyWebpackPlugin({
            patterns:[
               { from: path.join(__dirname, 'assets'), to: 'assets' }
            ]
        })
   ```
   
   
   #### 3. BannerPlugin
   
   这是一个webpack的内置插件, 用于给打包的js文件加上版权注释信息
   
   1. 引入webpack插件
    
    ```
    const webpack = require('webpack')
    ```
    
   2. 创建插件对象
   
      ```
      new webpack.BannerPlugin('涂心仪')
      ```
   
   
   #### 4. HotModuleReplacementPlugin
   
   这是一个webpack的内置插件, 可以在我们修改样式时，更新页面中标签的样式效果而不用刷新整个页面，这个需要配合webpack-dev-server一起用
   
   这个插件成为HMR， 热更新
   
   1. 引入webpack插件
    
    ```
    const webpack = require('webpack')
    ```
    
   2. 创建插件对象
   
    ```
      new webpack.HotModuleReplacementPlugin()
    ```
   
   
   
## 四、webpack 优化


### 4.1 production模式打包自带优化

  + **tree shaking**
  
    tree shaking是一个术语, 通常用于打包时移除JavaScript中未引用的代码(dead-code), 它依赖于ES6模块系统中的import 和 export的静态结构特性.
    
    开发时引入一个模块, 如果只使用其中一个功能, 上线打包时只会把用到的功能打包进bundle, 其他没有用到的功能不会打包进来, 可以实现最基础的优化.
    
    *import* 静态导入, 只能在根节点写
    
    *require* 是动态导入 , 可以在if的大括号里面写
    
    
  + **scope hoisting**
  
    scope hoisting的作用是将模块之间的关系进行结果推测, 可以让Webpack打包出来的代码文件更小, 运行更快
    
    scope hoisting的实现原理其实也很简单: 分析出模块之间的依赖关系, 尽可能的把打散的模块合并到一个函数中去, 但前提是不能造成代码的冗余
    
    因此只有那些被引用了一次的模块才能被合并
    
    由于scope hoisting 需要分析出模块之间的依赖关系, 因此源码必须采用es6模块化语法, 不然它将无法生效
    
    原因和 tree shaking一样
    
    
  + **代码压缩**
  
    所有代码使用UglifylsPlugin插件进行压缩, 混淆
    
    
 ### 4.2. 将css提取到独立文件中
  
  > 原因: 多个模块使用是可以复用,不用每个模块都插入一个style标签
 
  *mini-css-extract-plugin*是用于将css提取为独立的文件的插件, 对每个包含css的js文件都会创建一个css文件, 支持按需加载css和sourceMap
  
  只能用在webpack4中, 有如下优势: 
  
    + 异步加载
    + 不重复编译, 性能更好
    + 更容易使用
    + 只针对css
    
  使用方法:
  
    1. 安装
    
      ```
      npm i -D mini-css-extract-pligin
      ```
    
    2. 在webpack配置文件中引入插件
    
      ```
      const MiniCssExtractPlugin = require('mini-css-extract-pligin')
      ```
      
    3. 创建插件对象, 配置抽离的css文件名, 支持placeholder语法
    
      ```
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
      ```
    
    4. 将原来配置的的所有*style-loader*替换为*MiniCssExtractPlugin*
      
      ```
      {
          // 用正则匹配当前访问的文件的后缀名是 .css
          test: /\.css$/,
          // webpack底层调用这些包的顺序是从右到左
          // loader的执行顺序是从右到左以管道的方式链式调用
          // css-loader 接续css文件
          // style-loader 将解析出来的文件放在html中,使其生效
          // use: ['style-loader', 'css-loader']
          use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
          test: /\.less$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
          test: /\.s(a|c)ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      ```
    
### 4.3. 自动添加css前缀
  
  使用postcss, 需要用到 postcss-loader 和 autoprefixer 插件
    
  1. 安装 
  
    ```
     npm i -D postcss-loader autoprefixer
    ```
    
  2. 修改webpack配置文件中的loader , 将 postcss-loader 放置在css-loader的右边(调用链是从右往左)
  
    ```
    {
        // 用正则匹配当前访问的文件的后缀名是 .css
        test: /\.css$/,
        // webpack底层调用这些包的顺序是从右到左
        // loader的执行顺序是从右到左以管道的方式链式调用
        // css-loader 接续css文件
        // style-loader 将解析出来的文件放在html中,使其生效
        // use: ['style-loader', 'css-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
    },
    {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader']
    },
    {
        test: /\.s(a|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
    }
    ```
    
  3. 项目根目录下添加postcss的配置文件: postcss.config.js
  
  4. 在postcss的配置文件中使用插件
  
    ```
    module.exports = {
        plugin: [require('qutoprefixer')]
    }
    ```
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

   
   
   
   
   
   
   
   
   
   
   
   

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  















