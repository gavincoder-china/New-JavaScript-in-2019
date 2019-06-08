//这边引入一些第三方模块

//这边的模块功能是在输出时找到目标路径
const path = require('path');

//用 html 模板,将生成的 bundle.js 导入,并放到 dist 目录下
const HtmlWebpackPlugin = require('html-webpack-plugin');

//抽离 css样式形成单独文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//这边是 webpack 的配置
module.exports = {
    //mode 模式:默认两种 1:development 开发模式  2:production 生产模式  (该模式下代码会被压缩)
    mode: 'development',
    //entry 入口路径
    //在 webpack中主文件是一个 js 文件
    entry: './src/js/main.js',
    //文件出口 这边指的是打包后的文件所放路径  默认是 dist 目录下  (distribution)
    output: {
        //默认文件名为: bundle.js
        //这边打包后的文件名也可以加上 hash 值保证其唯一性
        //filename: 'bundle.[hash:8].js', :8 指的是 8 位,也可以不设置
        filename: 'bundle.js',
        //path 路径,必须是绝对路径,这边需要一个 node 模块来定位
        //__dirname 是两个下划线
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        //配置路径
        contentBase: path.join(__dirname, "dist"),
        //设置本地地址的端口 http://localhost:8888
        port: 8888,
        //是否启动压缩
        compress: false,
        //是否热更新  热更新指的是不刷新页面就显示修改的变化
        hot: true,
        //输出运行进度到控制台
        progress: true,
        //还有很多在后面
    },
    //这是个数组,存放着所有的插件
    plugins: [
        new HtmlWebpackPlugin({
            //html模板的路径
            template: './src/index.html',
            //导出的文件的命名
            filename: 'index.html',
            //压缩的配置,可以不配
            minify: {
                //去除变量双引号
                removeAttributeQuotes: false,
                //折叠空格
                collapseWhitespace: false
            },
            //加上 hash 时间戳,保证其唯一性
            hash: false
        }),
        new MiniCssExtractPlugin({
            //这边是抽离 css样式形成单独文件的文件名
            filename: 'main.css'
        })
    ],
    //导入的第三方loader模块配置
    module: {
        //使用规则配置
        //loader的配置解析顺序是从右向左,从下往上
        rules: [
            {
                //正则筛选目标后缀文件
                test: /\.css$/,
                use: [

                    {
                        //此处声明要用的 loader
                        //style-loader 是将 解析后的 css 文件插入到 html 文件的 head 中
                        loader: 'style-loader',
                        //此处写配置项
                        options: {
                            //插到顶部
                            insertAt: 'top'
                        }
                    }, {
                        //解析@import 语法
                        loader: 'css-loader'
                        //配置项可以不写
                        // options: {
                        // }
                    }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                    options: {
                        insertAt: 'top'
                    }
                },
                    //记得先后顺序,先 解析 less,再解析 css,最后style-loader 将 css 插入 html 中
                    'css-loader',
                    'postcss-loader',
                    'less-loader'

                ]
            },
            {
                test: /\.css$/,
                use: [
                    //抽离成单独文件
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }
        ]
    }
}