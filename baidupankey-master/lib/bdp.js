#!/usr/bin/env node
const bdp = require('./baidupan');
const boxen = require('boxen');
const colors = require('colors');

const argv = require('yargs')
    .usage('Usage: bdp [url]')
    .example('bdp -u 百度网盘链接', '')
    .option('u', {
        alias: 'url',
        describe: '要查询的百度网盘链接',
        demandOption: true,
        type: 'string'
    })
    .alias('h', 'help')
    .alias('v', 'version')
    .help()
    .argv;

bdp.getPanKey(argv.u).then((d) => {
    if (d.status) {
        console.log(boxen('链接:  '.cyan +
            d.access_url + '\n\n' +
            '密码:  '.cyan +
            d.access_code .rainbow.bold, {
            padding: 1,
            margin: 1,
            borderStyle: 'double',
        }));
    } else {
        console.log('没有找到提取码'.yellow)
    }
}).catch(err => console.log(err.magenta));
