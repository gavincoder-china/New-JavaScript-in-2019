# an'zuwebpack配置开发工程师进阶教程

## 1.新建项目目录

npm init 初始化目录,对照提示自己选择即可

![image-20190608154307600](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608154307600.png)



## 2.安装 webpack 基本库

npm i webpack webpack-cli webpack-dev-server -D 

webpack 4.0 以后的版本要求安装 webpack 与 webpack-cli

webpack-dev-server 是本地服务模块,基于 express 设计

-D 表示开发依赖,不上线

如果有些模块在生产环境中也需要,就不要加-D

## 3.创建 webpack.config.js 配置文件并创建如下文件目录

​                                                                     ![image-20190608154609077](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608154609077.png)  



![image-20190608155736853](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608155736853.png)



## 4.基本配置详解

![image-20190608160459640](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608160459640.png)

## 5.配置 devServer(精简)

![image-20190608162720191](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608162720191.png)



## 6.配置 npm   package.json的 script命令

![image-20190608163403189](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608163403189.png)

## 7.用 html 模板,将生成的 bundle.js 导入,并放到 dist 目录下

首先安装插件:html-webpack-plugin

![image-20190608163710007](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608163710007.png)

声明模块![image-20190608163839472](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608163839472.png)

配置

![image-20190608164141035](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608164141035.png)

多样化配置

![image-20190608164757575](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608164757575.png)

## 8.配置 css  

安装loader:  style-loader css-loader

![image-20190608165911329](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608165911329.png)

## 9.配置 less

安装 loader :less less-loader

![image-20190608171449505](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608171449505.png)

![image-20190608171918184](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608171918184.png)

## 10.抽离 css样式形成单独文件

安装插件:mini-css-extract-plugin

![image-20190608172110381](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608172110381.png)

配置

![image-20190608172546861](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608172546861.png)

这写在 plugin 中

![image-20190608172613486](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608172613486.png)

![image-20190608172635989](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608172635989.png)



## 11.css 中自动添加浏览器前缀

安装 postcss-loader 跟autoprefixer

![image-20190608174001074](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608174001074.png)

单独创建个 postcss.config.js 文件并如下配置

![image-20190608174225603](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608174225603.png)



加在 css 的配置中

![image-20190608174438394](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608174438394.png)

## 12.压缩 css 的插件

安装插件 optimize-css-assets-webpack-plugin

![image-20190608174616845](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608174616845.png)

//这块先见官网配置

## 13.处理 es 6

安装插件:@babel/core  babel-loader  @babel/preset-env

![image-20190608175720496](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608175720496.png)

![image-20190608180116071](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608180116071.png)

![image-20190608180312239](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608180312239.png)

## 14.处理es7

安装插件: @babel/plugin-proposal-class-properties

![image-20190608181036243](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608181036243.png)

![image-20190608181310677](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608181310677.png)





## 15.第三方框架库的全局映射

![image-20190608132528473](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608132528473.png)



![image-20190608132720710](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608132720710.png)

![image-20190608132939721](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608132939721.png)

排除打包

![image-20190608133223145](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608133223145.png)

## 16.图片

![image-20190608133852198](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608133852198.png)

![image-20190608134051468](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608134051468.png)

![image-20190608134425364](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608134425364.png)

解析 html 中的图片

![image-20190608134554263](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608134554263.png)

![image-20190608134821156](/Users/gavincoder/Library/Application Support/typora-user-images/image-20190608134821156.png)