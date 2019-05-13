##  less预编译器 中的继承

我的逻辑是,写三个按钮.  

第一个按钮的样式自己写,下面两个通过继承方法来实现.  

我们来分解一下.

### less 样式

![WechatIMG12.png](https://i.loli.net/2019/05/13/5cd991256cc7552297.png)



### html片段

![WX20190513-234649.png](https://i.loli.net/2019/05/13/5cd9917ec96d416534.png)

 ### 编译后的css



![](https://cdn.sinaimg.cn.52ecy.cn/large/005BYqpgly1g304mwmowbj30b10agdgu.jpg)

### 实现效果

![](https://cdn.sinaimg.cn.52ecy.cn/large/005BYqpgly1g304lizd1hg31ey0o4u11.jpg)



### 结果

我们可以看到,第三个框子实现了跟第一个一样的效果.  

正是因为其在继承时使用了  all   //  &:extend(.first all);  





好了,就这样.  

欢迎来我的github主页玩:



https://github.com/xunyegege





















```html

```



