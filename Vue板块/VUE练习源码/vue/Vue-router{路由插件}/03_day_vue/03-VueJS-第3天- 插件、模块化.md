

### vue补充

#### 获取DOM元素

* 救命稻草, document.querySelector
* 1: 在template中标识元素 ref="xxxx"
* 2: 在要获取的时候, this.$refs.xxxx 获取元素
  * 创建组件,装载DOM,用户点击按钮
* ref在DOM上获取的是原生DOM对象
* ref在组件上获取的是组件对象
  * $el 是拿其DOM
  * 这个对象就相当于我们平时玩的this,也可以直接调用函数



### 路由

------

#### 路由原理

* 传统开发方式 url改变后 立刻发起请求，响应整个页面，渲染整个页面
* SPA 锚点值改变后 不会发起请求,发起ajax请求,局部改变页面数据
  * 页面不跳转 用户体验更好

#### SPA

* single page application(单页应用程序)
* 前端路由
  * 锚点值监视
  * ajax获取动态数据
  * 核心点是锚点值
* 前端框架 Vue/angular/react都很适合开发单页应用

#### 基本使用

* vue-router 
* 其是vue的核心插件
* 1:下载 `npm i vue-router -S`
* 1.2(重要):安装插件`Vue.use(VueRouter);`  
* 2:在main.js中引入vue-router对象 `import VueRouter form './x.js';`
* 3:创建路由对象 `var router = new VueRouter();`
* 4:配置路由规则 `router.addRoutes([路由对象]);`
  * 路由对象`{path:'锚点值',component:要(填坑)显示的组件}`
* 5:将配置好的路由对象交给Vue
  * 在options中传递-> key叫做 router
* 6:留坑(使用组件) `<router-view></router-view>`

#### router-link

* to
* 帮助我们生成a标签的href
* 锚点值代码维护不方便，如果需要改变锚点值名称
  * 则需要改变 [使用次数 + 1（配置规则）] 个地方的代码

#### 命名路由

* 1:给路由对象一个名称 `{ name:'home',path:'/home',component:Home}`
* 2:在router-link的to属性中描述这个规则
  * `<router-link :to="{name:'home'}></router-link>"`
  * 通过名称找路由对象，获取其path，生成自己的href
* 大大降低维护成本，锚点值改变只用在main.js中改变path属性即可



#### 阶段总结

* vue-router使用步骤 : 1:引入 2:安装插件 3:创建路由实例 4:配置路由规则  5:将路由对象关联vue 6:留坑
* router-link   to="/xxx"  命名路由   
  * 1. 在路由规则对象中 加入name属性
    2. 在router-link中  :to="{ name:"xxx'} "

![52855161286](assets/1528551612863.png)



* 生僻API梳理:

  * 1. Vue.use(插件对象);   //  过程中会注册一些全局组件,及给vm或者组件对象挂在属性

    2. 给vm及组件对象挂在的方式  :  Object.defineProperty(Vue.prototype,'$router',{

       ​	get:function () {
       		return 自己的router对象;

       ​	}

       })

#### 参数router-link,

* `Vue.prototype.xxx = {add:fn}`
* 所有组件中，使用this.xxx就能拿到这个对象
* 查询字符串 
  * 1:配置`:to="{name:'detail',query:{id:hero.id} }"`
  * 2:规则 `{name:'detail',path:'/detail',component:Detail}`
  * 3:获取 `this.$route.query.id`
  * 4:生成 `<a href="/detail?id=1">`
* path方式 
  * 4:生成 `<a href="/detail/1">`
  * 1:配置 `:to="{name:'detail',params:{id:hero.id}  }"`
  * 2:规则 `{ name:'detail',path:'/detail/:id'}`
  * 3:获取 `this.$route.params.id`
* 查询字符串配置参数
  * router-link一次
  * 获取的时候一次
* path方式配置参数
  * router-link一次
  * 规则配置的时候声明位置
  * 获取的时候一次
* 总结书写代码注意事项
  * path方式需要在路由规则中声明位置

#### vue-router中的对象

* $route 路由信息对象,只读对象
* $router 路由操作对象,只写对象

#### 嵌套路由


* 市面上所谓的用单页应用框架开发多页应用
  * 嵌套路由
* 案例
  * 进入我的主页显示：电影、歌曲
* 代码思想
  * 1:router-view的细分
    * router-view第一层中，包含一个router-view
  * 2:每一个坑挖好了，要对应单独的组件
* 使用须知: 1:router-view包含router-view 2:路由children路由

#### 知识点介绍

* 路由meta元数据 -> meta是对于路由规则是否需要验证权限的配置
  * 路由对象中 和name属性同级 ```{  meta:{ isChecked:true  }  }```
* 路由钩子 -> 权限控制的函数执行时期
  * 每次路由匹配后,  渲染组件到router-view之前
  * ```router.beforeEach(function(to,from,next) {    } )```



#### 练习

* 1: 使用koa 编写一个服务器...
  * a. /login的请求..    ctx.body = { msg:'ok'}   ```前端用jq发送ajax请求```
* 2: 客户端接收响应以后.如果是ok.  localStroage中保存该值
* 3: 在全局路由守卫中,区分/login 不验证(meta),   /show 要验证,  验证条件就是从localStorage中获取



#### 编程导航

* 1: 跳到指定的锚点,并显示页面 ```this.$router.push({ name:'xxx',query:{id:1},params:{name:'abc'}  });```
* 2: 配置规则 ```{name:'xxx',path:'/xxx/:name'}```
* 3: 根据历史记录.前进或后退
  * ```this.$router.go(-1|1);```
  * 1代表进一步,-1是退一步





### axios

#### 基本使用

```js
Axios.method('url',[,..data],options)
.then(function(res){  })
.catch(function(err) { } )
```

#### 合并请求

* ```js
  this.$axios.all([请求1,请求2])
  .then(  this.$axios.spread(function(res1,res2){  
           
           })
  )
  ```



#### 拦截器
- 单请求配置options: `axios.post(url,data,options);`
- 全局配置defaults: `this.$axios.defaults`
- config : `请求拦截器中的参数`
- response.config `响应拦截器中的参数`

* options
    - baseURL 基础URL路径
    - params 查询字符串（对象）
    - transformRequest 转换请求体数据
    - transformResponse 转换响应体数据
    - headers 头信息
    - data 请求体数据
    - timeout 请求超时，请求多久以后没有响应算是超时（毫秒）




### 模块化

* webpack命令
  npm init -y
  npm install webpack@3.6.0 --save-dev --registry https://registry.npm.taobao.org
* package.json文件
  `"scripts": {
    "test": "webpack ./main.js ./build.js"
  },`
* 命令行运行 npm run test

#### ES6模块

* 导入和导出只能存在顶级作用域
* require引入是代码执行的时候才加载
* import 和export 都是提前加载 ，加载在代码执行之前

#### 箭头函数和function

* 一方面箭头函数是种简写形式
* 应用场景: 由于箭头函数本身没有this和arguments，通常用在事件类的回调函数上，让其向上级function绑定this，而非事件对象
* 箭头函数不可以作为构造函数

#### ES6函数简写

* 用在对象的属性中

    ```js
    fn3() { //干掉了:function,用在对象的属性中

    				console.log(this);

    		},

    ```

    ​


