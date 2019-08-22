$(function(){
    //提交留言
    $(".btn-box .submit").click(function(){
        //取值
        var _name = $(".name").val(), _msg = $(".message").val();
        //存储
        if(_name=='' || _msg==''){
            alert('请输入信息')
        }else {
            localStorage.setItem(_name,_msg);
            $(".name ,.message").val("");
            //展示
            msgShow();
        }
        
    });
    //查看留言
    $(".btn-box  .viewMes").click(function(){
        msgShow();
    });
    //删除全部留言
    $(".btn-box  .deleteAll").click(function(){
       localStorage.clear();
       $(".messageList").html('所有数据清除');
    });
    //删除单个留言
    $(".messageList").on('click','.del',function(){
        var name = $(this).parent().attr('data-name');   //prop()
       localStorage.removeItem(name);
       $(this).parent().remove();
    });
    //展示
    function msgShow() {
        var str = "";
        for(var i =0;i<localStorage.length;i++){
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            // str += '<li class="list-group-item">'+key+
            //                  '<span>说：</span>'+value+
            //                 '<button class="badge delbtn del">删除</button>'+
            //              '</li>'
            //ES6模板字符串
            str += `<li class="list-group-item" data-name=${key}>${key}
                             <span>说：</span>${value}
                            <button class="badge delbtn del">删除</button>
                         </li>`;
        };
        $(".messageList").html(str);
    };
});