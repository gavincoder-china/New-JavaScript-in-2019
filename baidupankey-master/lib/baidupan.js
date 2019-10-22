const url = require('url');
const https = require("https");

module.exports = {

    getPanKey: function (link) {
        return new Promise((resolve, reject) => {
            if (!/https?:\/\/pan\.baidu\.com\/s\/1([a-zA-Z0-9_\-]{5,22})/gi.exec(link) && !/https?:\/\/pan\.baidu\.com\/share\/init\?surl=([a-zA-Z0-9_\-]{5,22})/gi.exec(link)) {
                resolve({messages: "参数不合法", status: false});
            }

            let api = 'https://node.pnote.net/public/pan?url=' + link;

            //  合并对象
            let param = Object.assign({"method": "GET"}, url.parse(api));

            var req = https.request(param, function (res) {
                let chunks = [];

                res.on("data", function (chunk) {
                    chunks.push(chunk);
                });

                res.on("end", function () {
                    let body = Buffer.concat(chunks).toString();

                    resolve(JSON.parse(body));
                });
            });

            req.on('error', (e) => {
                reject(e);
            });

            req.end();
        });
    }
};
