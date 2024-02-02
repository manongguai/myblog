# 使用 husky eslint commitlint 等工具统一项目规范

<!-- > 之前做的项目,大多都是通过脚手架直接生成的自带了 eslint commitlint 等开发的一些规范 ,  -->

## 官网文档

- [commit lint](https://commitlint.js.org/#/)
- [husky](https://typicode.github.io/husky/#/?id=automatic-recommended)
- [prettier](https://prettier.io/)
- [eslint](http://eslint.cn/docs/user-guide/command-line-interface)
- [lint-staged](https://github.com/okonet/lint-staged#readme)
- [vscode-eslint](https://github.com/Microsoft/vscode-eslint)


## 功能 

- [x] eslint 代码规范检测
- [x] git commit  提交信息规范校验 eslint 代码规范校验
- [x] vscode 保存自动修复


## 从零搭建项目规范

 
### 基础配置

创建项目

```
mkdir eslint-test 
```

进入项目
```
cd eslint-test 
```
安装package.json


```
npm init -y 
```

初始化 git

```
git init 
```

创建 git 忽略文件


```
touch .gitignore 
```

安装 husky , 在执行下面命令的时候 会自动创建 一个 pre-commit 脚本 默认会执行 npm run test , 我们可以根据自己的需求去修改运行的脚本
```
npx husky-init && yarn
```

添加 commit msg 校验

```
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

安装 commitlitn 依赖
```bash
yarn add -D @commitlint/cli @commitlint/config-conventional
```

跟目录下创建 commitlint.config

```js
module.exports = { extends: ["@commitlint/config-conventional"] };

```

项目里我们用ts，这里初始化个ts的配置
```
yarn add -D typescript
tsc --init
```
### 搭建eslint 相关配置


```
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

在项目跟目录下创建 .eslintrc.js 文件, 在本案件里中只用了ts 如果有用其他框架如 react vue 自行添加配置


```js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {},
};
```

### 搭建 prettier

安装相关依赖
```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

创建 .prettierrc 

``` json

{
  "quotes": true,
  "semi": true,
  "tabWidth": 2
}

```


## 安装 lint-staged

```
yarn add -D lint-staged
```


在代码提交之前，进行代码规则检查能够确保进入git库的代码都是符合代码规则的。但是整个项目上运行lint速度会很慢，lint-staged能够让lint只检测暂存区的文件，所以速度很快。

在package.json 添加以下内容 , 

``` json  
 "lint-staged": {
    "src/*.{js,jsx,ts}": "eslint"
  }
```
在 package.json  添加以下脚本
```
 "lint": "lint-staged"
```
最后我们在 husky 下面的 precommit 脚本中 添加 npm run lint 就好了

```shell   .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
npm run lint

```
