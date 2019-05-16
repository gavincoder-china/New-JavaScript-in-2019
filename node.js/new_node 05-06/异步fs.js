const fs = require("fs");
//异步方法没有返回值,通过回调函数的参数返回
//回调函数的两个参数:err 错误提示  fd 文件描述
fs.open("./hello_异步.txt", "a",
    function (err, fd) {
        if (!err) {

            console.log("success");

            fs.write(fd, "hello 异步write ", function (err) {
                if (err) {
                    console.log(err)
                }
            });
            fs.close(fd, function () {
                if (err) {
                    console.log(err)
                }
            });
        } else {
            console.log(err)
        }


        // if (!err) {
        //     console.log(fd)
        //     //如果没有错误,则进行写入操作
        //     fs.write(fd, "异步hello fs", function (err) {
        //         if (!err) {
        //             console.log("写入成功")
        //         }
        //         //关闭
        //         fs.close(fd, function (err) {
        //             if (!err) {
        //                 console.log("文件已关闭");

        //             }
        //         });
        //     })
        // } else {
        //     console.log(err)
        // }


    })