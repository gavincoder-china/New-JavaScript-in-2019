window.onload = function(){
    var data = {
        children:[{
            children:[{
                children:[],
                name:'服务器A-1'
            },
            {
                children:[
                    {
                        children:[],
                        name:'服务器A-1-1'
                    },
                ],
                name:'服务器A-1'
            },
            {
                children:[],
                name:'服务器A-1'
            },],
            name:'服务器A',
            type:'A'
        },
        {
            children:[{
                children:[],
                name:'服务器B-1'
            },
            {
                children:[],
                name:'服务器B-2'
            }],
            name:'服务器B'
        },
        {
            children:[],
            name:'服务器C'
        },
        {
            children:[{
                children:[],
                name:'服务器D-1'
            }],
            name:'服务器D'
        },
        {
            children:[],
            name:'服务器E'
        }],
        name:'服务器'
    };
    //节点渲染
    // 注册节点
    G6.registNode('abc', {
        // 绘制
        draw(cfg, group) {
            var model = cfg.model;    //数据
            var tree1 = 'images/tree_01.png';
            var tree2 = 'images/tree_02.png';
            var tree3 = 'images/tree_03.png';
            var obj = {
                attrs: {
                    x: 0,
                    y: 0,
                    img:tree1,
                    width:40,
                    height:40
                }
            };
            if(model.children &&model.children.length>0) {   //是否有子目录
                obj.attrs.img = tree3;
            };
            if(model.root) {   //根目录
                console.log(model);
                obj.attrs.img = tree2;
            };
            // 添加文本、更多图形
            return group.addShape('image',obj)
        },
    });
    var tree = new G6.Tree({    //配置画布
        id: 'c1', // 容器ID
        height: window.innerHeight, // 画布高
        fitView: 'autoZoom' // 自动缩放
    });
    tree.source(data); //载入数据
    tree.node().label(function(data){    //展示节点标签
        return data.name
    })
    tree.tooltip(true);  //移入后tip
    tree.node().tooltip(function(data){    //提示配置
        return [
            ['name',data.name],
            ['型号','经济型'],
        ]
    })
    tree.node().shape('abc'); //渲染节点
    tree.edge().shape('smooth'); //线条设置     line直线
    tree.render()  ;//渲染数据
}