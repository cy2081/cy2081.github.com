// layui.use(['layer', 'form', 'element'], function(){
//     var $ = layui.$;
//     var layer = layui.layer
//     ,form = layui.form
//     ,element = layui.element;

//     //layer.msg('Hello World');
//     $(document).ready(function(){
//         $.get('/user/status', function(res){
//             if (res != "") {
//                 $("#login").html(
//                     '<a href="">' + res + '</a><a href="/user/logout">退出</a>'
//                     //"您好，" + res + "， <a href='/user/logout'>退出</a>"
//                 );
//             }
//         });
//     })
// });


$(document).ready(function(){
    $.get('/user/status', function(res){
        if (res != "") {
            $("#login").html(
                '<span class="text-white">' + res + '</span> <a class="btn btn-outline-primary" href="/user/logout">退出</a>'
                //"您好，" + res + "， <a href='/user/logout'>退出</a>"
            );
        }
    });
});
