
function buildName1(firstName:string,lastName:string){
    return firstName+lastName;
}
console.log(buildName1('li','si')); //正确
// console.log(buildName1('li')); //不正确
// console.log(buildName1('li','li','cai')); //不正确

/**1.可选参数:lastName*/
function buildName2(firstName:string,lastName?:string){
    if(lastName){
        return firstName+lastName;
    }
    return firstName;
}

console.log(buildName2('li','si')); //正确
console.log(buildName2('li')); //正确
// console.log(buildName2('li','li','cai')); //不正确

/**2.默认参数:lastName*/
function buildName3(firstName:string,lastName='si'){
     return firstName+lastName;
}

console.log(buildName3('li')); //正确
console.log(buildName3('li','cai')); //正确
// console.log(buildName3('li','si','cai')); //不正确

/**3.剩余参数: ...restOfName: string[] */
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + "-" + restOfName.join("-");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);