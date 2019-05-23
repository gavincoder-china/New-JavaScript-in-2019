// 利用条件运算符的嵌套来完成此题:学习成绩> =90 分的同学用 A 表示，
//60-89 分之间 的用 B 表示，60 分以下的用 C 表示。

let n = 99;
let grade = function (n) {
    if (n >= 90 && n < 100) {
        return 'A';
    } else if (n >= 60 && n < 90) {
        return 'B';
    } else if (n < 60 && n>= 0) {
        return 'C';

    }else {

        return 'error'
    }


}
console.log(grade(n))