$(function(){
    //提交留言
    $(".btn-box .submit").click(function(){
        var _name = $(".name").val(),
            _msg = $(".message").val();
        if(_name=='' || _msg ==''){
            alert('请输入信息')
        }else {
            localStorage.setItem(_name,_msg);
            $(".name,.message").val('');
            listShow();
        }
    });
    //列表
    function listShow(){
        var str="";
        for(var i=0;i<localStorage.length;i++){
            var key= localStorage.key(i),
                value=localStorage.getItem(key);
            str+=`<li class="list-group-item" data-name=${key}>${key}
                        <span>说：</span>${value}
                        <button class="badge delbtn del">删除</button>
                    </li>`
        };
        $(".messageList").html(str);
    };
    //查看留言
    $(".btn-box .viewMes").click(function(){
        listShow();
    });
    //删除选中留言
    $(".messageList").on('click','.del',function(){
        var name=$(this).parent().attr("data-name");
       localStorage.removeItem(name);
       $(this).parent().remove();
    });
    //删除全部留言
    $(".btn-box .deleteAll").click(function(){
        localStorage.clear();
        $(".messageList").html('所有数据清除');
    });
})