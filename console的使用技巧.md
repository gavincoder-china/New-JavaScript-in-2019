### 一、显示信息的命令

> ```js
> console.log("normal");           // 用于输出普通信息
> console.info("information");     // 用于输出提示性信息
> console.error("error");          // 用于输出错误信息
> console.warn("warn");            // 用于输出警示信息
> ```

### 二、点位符：字符(%s)、整数(%d或%i)、浮点数(%f)和对象(%o)

> ```js
> console.log("%s","string");                 //字符(%s)
> console.log("%d年%d月%d日",2016,8,29);       //整数(%d或%i)
> console.log("圆周率是%f",3.1415926);         //浮点数(%f)
> var dog = {};
> dog.name = "大毛";
> dog.color = "黄色";
> dog.sex = "母狗";
> console.log("%o",dog);                      //对象(%o)
> ```
>
> 

### 三、信息分组 (console.group(),console.groupEnd())

> ```js
> console.group("第一组信息");
>     console.log("第一组第一条：我的博客");
>     console.log("第一组第二条：CSDN");
> console.groupEnd();
> 
> console.group("第二组信息");
>     console.log("第二组第一条：程序爱好者QQ群");
>     console.log("第二组第二条：欢迎你加入");
> console.groupEnd();
> ```
>
> 

### 四、将对象以树状结构展现 (console.dir()可以显示一个对象所有的属性和方法)

> ```js
> var info = {
>     name : "Alan",
>     age : "27",
>     grilFriend : "nothing",
>     getName : function(){
>         return this.name;
>     }
> }
> console.dir(info);
> ```
>
> 

### 五、显示某个节点的内容 (console.dirxml()用来显示网页的某个节点(node)所包含的html/xml代码)

> ```js
> var node = document.getElementById("info");
> node.innerHTML += "<p>追加的元素显示吗</p>";
> console.dirxml(node);
> ```
>
> 

### 六、判断变量是否是真 (console.assert()用来判断一个表达式或变量是否为真，只有表达式为false时，才输出一条相应作息，并且抛出一个异常)

> ```js
> var testObj = false;
> console.assert(testObj, '当testObj为false时才输出！');
> ```
>
> 

### 七、计时功能 (console.time()和console.timeEnd()，用来显示代码的运行时间)

> ```js
> console.time("控制台计时器");
> for(var i = 0; i < 10000; i++){
>     for(var j = 0; j < 10000; j++){}       
> }
> console.timeEnd("控制台计时器");
> ```
>
> 

### 八、性能分析performance profile (就是分析程序各个部分的运行时间，找出瓶颈所在，使用的方法是console.profile()和console.proileEnd();) 

> ```js
> function All(){
>     // alert(11);
>     for(var i = 0; i < 10; i++){
>         funcA(100);
>     }
>     funcB(1000);
> }
> function funcA(count){
>     for(var i = 0; i < count; i++){};
> }
> function funcB(count){
>     for(var i = 0; i < count; i++){};
> }
> console.profile("性能分析器");
> All();
> console.profileEnd();
> ```
>
> 

### 九、console.count()统计代码被执行的次数

> ```js
> function myFunction(){
>     console.count("myFunction 被执行的次数");
> }
> myFunction();       //myFunction 被执行的次数: 1
> myFunction();       //myFunction 被执行的次数: 2
> myFunction();       //myFunction 被执行的次数: 3
> ```
>
> 

### 十、keys和values，要在浏览器里输入

![](https://images2015.cnblogs.com/blog/777145/201609/777145-20160910142314988-1073223360.jpg)

### 十一、console.table表格显示方法

> ```js
> var mytable = [
>     {
>         name: "Alan",
>         sex : "man",
>         age : "27"
>     },
>     {
>         name: "Wu",
>         sex : "gril",
>         age : "28"
>     },
>     {
>         name: "Tao",
>         sex : "man and gril",
>         age : "29"
>     }
> ]
> console.table(mytable);
> ```
>
> 

### 十二、Chrome 控制台中原生支持类jQuery的选择器，也就是说你可以用$加上熟悉的css选择器来选择DOM节。

> ```js
> $("body");           //选择body节点
> ```
>
> ![](https://images2015.cnblogs.com/blog/777145/201609/777145-20160910142430504-1813497996.jpg)

### 十三、copy通过此命令可以将在控制台获取到的内容复制到剪贴板

> ```js
> copy(document.body);                      //复制bodycopy(document.getElementById("info"));    //复制某id元素的的节点
> ```
>
> 

### 十四、$_命令返回最近一次表达式执行的结果，$0-$4代表了最近5个你选择过的DOM节点

![](https://images2015.cnblogs.com/blog/777145/201609/777145-20160910142644848-1329402825.gif)

### 十五、利用控制台输出文字,图片,以%c开头，后面的文字就打印的信息，后面一个参数就是样式属性

> ```js
> console.log("请在邮件中注明%c 来自:console","font-size:16px;color:red;font-weight:bold;");
> ```
>
> ![](https://images2015.cnblogs.com/blog/777145/201609/777145-20160910142724629-65894045.png)



