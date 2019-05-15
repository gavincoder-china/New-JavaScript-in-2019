/*
	1.下载安装Mongoose
		npm i mongoose --save
	2.在项目中引入mongoose
		var mongoose = require("mongoose");
	3.连接MongoDB数据库
 		mongoose.connect('mongodb://数据库的ip地址:端口号/数据库名', { useMongoClient: true});
 		- 如果端口号是默认端口号（27017） 则可以省略不写

 	4.断开数据库连接(一般不需要调用)
 		- MongoDB数据库，一般情况下，只需要连接一次，连接一次以后，除非项目停止服务器关闭，否则连接一般不会断开
 			mongoose.disconnect()

	- 监听MongoDB数据库的连接状态
		- 在mongoose对象中，有一个属性叫做connection，该对象表示的就是数据库连接
			通过监视该对象的状态，可以来监听数据库的连接与断开

		数据库连接成功的事件
		mongoose.connection.once("open",function(){});

		数据库断开的事件
		mongoose.connection.once("close",function(){});

		Schema
		Model
		Document

 */

//引入
var mongoose = require("mongoose");
//连接数据库
mongoose.connect("mongodb://127.0.0.1/mongoose_test" , { useMongoClient: true});

//监听事件
mongoose.connection.once("open",function(){
	console.log("数据库连接成功~~~");
});

mongoose.connection.once("close",function(){
	console.log("数据库连接已经断开~~~");
});

//断开数据库连接
//mongoose.disconnect();




//将mongoose.Schema 赋值给一个变量
var Schema = mongoose.Schema;

//创建Schema（模式）对象
var stuSchema = new Schema({

	name:String,
	age:Number,
	gender:{
		type:String,
		default:"female"
	},
	address:String

});

//通过Schema来创建Model
//Model代表的是数据库中的集合，通过Model才能对数据库进行操作
//mongoose.model(modelName, schema):
//modelName 就是要映射的集合名 mongoose会自动将集合名变成复数
var StuModel = mongoose.model("student" , stuSchema);

//向数据库中插入一个文档
//StuModel.create(doc, function(err){});
StuModel.create({
	name:"白骨精",
	age:16,
	address:"白骨洞"
},function (err) {
	if(!err){
		console.log("插入成功~~~");
	}
});



//****************************新部分  model模块的增删改查 */
//****************************新部分  model模块的增删改查 */
//****************************新部分  model模块的增删改查 */
//****************************新部分  model模块的增删改查 */
//****************************新部分  model模块的增删改查 */
var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{useMongoClient:true});
mongoose.connection.once("open",function () {
	console.log("数据库连接成功~~~");
});

var Schema = mongoose.Schema;

var stuSchema = new Schema({

	name:String,
	age:Number,
	gender:{
		type:String,
		default:"female"
	},
	address:String

});

var StuModel = mongoose.model("student" , stuSchema);
/*
	- 有了Model，我们就可以来对数据库进行增删改查的操作了

 	Model.create(doc(s), [callback])
 	- 用来创建一个或多个文档并添加到数据库中
 	- 参数：
 		doc(s) 可以是一个文档对象，也可以是一个文档对象的数组
 		callback 当操作完成以后调用的回调函数

 	查询的：
	 Model.find(conditions, [projection], [options], [callback])
	 	- 查询所有符合条件的文档 总会返回一个数组
	 Model.findById(id, [projection], [options], [callback])
	 	- 根据文档的id属性查询文档
	 Model.findOne([conditions], [projection], [options], [callback])
	 	- 查询符合条件的第一个文档 总和返回一个具体的文档对象

 		conditions 查询的条件
 		projection 投影 需要获取到的字段
 			- 两种方式
 				{name:1,_id:0}
 				"name -_id"
 		options  查询选项（skip limit）
 				{skip:3 , limit:1}
 		callback 回调函数，查询结果会通过回调函数返回
 					回调函数必须传，如果不传回调函数，压根不会查询

 */

/*StuModel.find({name:"唐僧"},function (err , docs) {
	if(!err){
		console.log(docs);
	}
});*/

/*StuModel.find({},{name:1 , _id:0},function (err , docs) {
	if(!err){
		console.log(docs);
	}
});*/

/*StuModel.find({},"name age -_id", {skip:3 , limit:1} , function (err , docs) {
	if(!err){
		console.log(docs);
	}
});*/

/*StuModel.findOne({} , function (err , doc) {
	if(!err){
		console.log(doc);
	}
});*/

/*StuModel.findById("59c4c3cf4e5483191467d392" , function (err , doc) {
	if(!err){
		//console.log(doc);
		//通过find()查询的结果，返回的对象，就是Document，文档对象
		//Document对象是Model的实例
		console.log(doc instanceof StuModel);
	}
});*/



/*StuModel.create([
	{
		name:"沙和尚",
		age:38,
		gender:"male",
		address:"流沙河"
	}

],function (err) {
	if(!err){
		console.log(arguments);
	}
});*/


/*
	修改
 Model.update(conditions, doc, [options], [callback])
 Model.updateMany(conditions, doc, [options], [callback])
 Model.updateOne(conditions, doc, [options], [callback])
 	- 用来修改一个或多个文档
 	- 参数：
 		conditions 查询条件
 		doc 修改后的对象
 		options 配置参数
 		callback 回调函数
 Model.replaceOne(conditions, doc, [options], [callback])
* */

//修改唐僧的年龄为20
/*StuModel.updateOne({name:"唐僧"},{$set:{age:20}},function (err) {
	if(!err){
		console.log("修改成功");
	}
});*/

/*
	删除：
 Model.remove(conditions, [callback])
 Model.deleteOne(conditions, [callback])
 Model.deleteMany(conditions, [callback])
 */
/*StuModel.remove({name:"白骨精"},function (err) {
	if(!err){
		console.log("删除成功~~");
	}
});*/

/*
 Model.count(conditions, [callback])
 	- 统计文档的数量的
 */
StuModel.count({},function (err , count) {
	if(!err){
		console.log(count);
	}
});


//************************ */doucument操作
//************************ */doucument操作
//************************ */doucument操作
//************************ */doucument操作
//************************ */doucument操作
//************************ */doucument操作
var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{useMongoClient:true});
mongoose.connection.once("open",function () {
	console.log("数据库连接成功~~~");
});

var Schema = mongoose.Schema;

var stuSchema = new Schema({

	name:String,
	age:Number,
	gender:{
		type:String,
		default:"female"
	},
	address:String

});

var StuModel = mongoose.model("student" , stuSchema);
/*
	Document 和 集合中的文档一一对应 ， Document是Model的实例
		通过Model查询到结果都是Document
 */

//创建一个Document
var stu = new StuModel({
	name:"奔波霸",
	age:48,
	gender:"male",
	address:"碧波潭"
});

/*
	document的方法
 		Model#save([options], [fn])
 */
/*
stu.save(function (err) {
	if(!err){
		console.log("保存成功~~~");
	}
});*/

StuModel.findOne({},function (err , doc) {
	if(!err){
		/*
		 	update(update,[options],[callback])
		 		- 修改对象
		 	remove([callback])
		 		- 删除对象

		 */
		//console.log(doc);
		/*doc.update({$set:{age:28}},function (err) {
			if(!err){
				console.log("修改成功~~~");
			}
		});*/

		/*doc.age = 18;
		doc.save();*/

		/*doc.remove(function (err) {
			if(!err){
				console.log("大师兄再见~~~");
			}
		});*/


		/*
			get(name)
				- 获取文档中的指定属性值
			set(name , value)
				- 设置文档的指定的属性值
			id
				- 获取文档的_id属性值
			 toJSON() ******
			 	- 转换为一个JSON对象

			 toObject()
			 	- 将Document对象转换为一个普通的JS对象
			 		转换为普通的js对象以后，注意所有的Document对象的方法或属性都不能使用了

		 */
		//console.log(doc.get("age"));
		//console.log(doc.age);

		//doc.set("name","猪小小");
		//doc.name = "hahaha";

		//console.log(doc._id);
		//var j = doc.toJSON();
		//console.log(j);

		//var o = doc.toObject();

		//console.log(o);

		doc = doc.toObject();

		delete doc.address;

		console.log(doc._id);

	}
});


