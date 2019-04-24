/**
 * @description 项目助手函数，方便我们对数组进行操作，万能的，放在身边，一用好多年
 * @author bob 
 * @contact 有问题、索要课程资料、下载学习路线图 记得加微信号：1872783807。备注：喜欢千锋扣丁学堂Bob老师
 * @join 学前端基础进阶全栈，关注公开课报名，点击链接：https://ke.qq.com/course/320523
 */
/**
 * 数组删除某个元素
 * @param arg 元素
 * @returns
 */
Array.prototype.remove = function (arg) {
	var i = 0,
		n = 0;
	var arrSize = this.length;
	for (i = 0; i < arrSize; i++) {
		if (this[i] != arg) {
			this[n++] = this[i];
		}
	}
	if (n < i) {
		this.length = n;
	}
};

/**
 * 数组根据下标删除元素
 * @param index 元素下标
 * @returns
 */
Array.prototype.removeByIndex = function (index) {
	var i = 0,
		n = 0;
	var arrSize = this.length;
	for (i = 0; i < arrSize; i++) {
		if (this[i] != this[index]) {
			this[n++] = this[i];
		}
	}
	if (n < i) {
		this.length = n;
	}
};

/**
 * 数组是否包含某个元素
 * @param arg 元素
 * @returns
 */
Array.prototype.contain = function (arg) {
	var i = 0;
	var arrSize = this.length;
	for (i = 0; i < arrSize; i++) {
		if (this[i] == arg) {
			return true;
		}
	}
	return false;
};