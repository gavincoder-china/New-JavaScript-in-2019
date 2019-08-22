$(function(){
    $(".menu-link").click(function(){
        if($("#layout").hasClass('active')){
            $("#layout").removeClass('active')
        }else {
            $("#layout").addClass('active')
        }
    })
})