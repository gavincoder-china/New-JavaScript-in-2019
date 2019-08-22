$(function() {
	$(".add").on("click",function() {
		addRow();
	});
	$(".del").on("click",function() {
		delRow();
	});
	
	var i=1;
	function addRow() {
		$(".rows").append('<div class="list"><input type="checkbox"/>'+i+'<a>删除</a></div>');
		i++;
		callback();
	};
	function delRow() {
		var rows = $(".rows input");
		rows.each(function(index,item){
			if($(item).prop("checked")) {    
				$(item).parent().remove();
			};
		});
	};
	/*对于HTML元素本身就带有的固有属性，在处理时，使用prop方法。
	对于HTML元素我们自己自定义的DOM属性，在处理时，使用attr方法。*/
});
function callback(){
	$(".rows .list").hover(function() {
		$(this).find("a").show();
	},function() {
		$(this).find("a").hide();
	});
	$(".rows .list a").on("click",function() {
		$(this).parent().remove();
	})
};