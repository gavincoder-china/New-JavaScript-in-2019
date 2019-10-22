const bdp = require('./lib/baidupan');
const boxen = require('boxen');
const colors = require('colors');

const url = "https://pan.baidu.com/s/18qxAdLt2SW1Fn5O9eL0cxg";
// const url ="https://pan.baidu.com/share/init?surl=oPu7b_C9xrMO2L34BLKG2g#2hp8"
// const url = "https://pan.baidu.co/s/18qxasd";

bdp.getPanKey(url).then((d) => {
    if (d.status) {
        console.log(boxen('链接:\t'.cyan +
            d.access_url + '\n\n' +
            '密码:\t'.cyan +
            d.access_code .rainbow.bold, {
            padding: 1,
            margin: 1,
            borderStyle: 'double',
        }));
    } else {
        console.log(d.messages.yellow)
    }
}).catch(err => console.log(err.message.magenta));

