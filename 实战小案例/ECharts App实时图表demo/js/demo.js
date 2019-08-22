window.onload = function(){
    var arr = [[344, 345, 901, 466, 1290, 743, 234],
                [256, 677, 467, 934, 436, 1330, 525],
                [856, 543, 901, 934, 1290, 1330, 999],
                [437, 425,391, 556, 6773, 1330, 333],
                [999, 664, 901, 934, 1290, 1330, 634]];
    //容器
    //图表配置
    var option = {
        //backgroundColor:'#fff',//背景
        color:['#fff'],   //系列柱颜色
        title:{
            text:'2018年数据展示', //主标题
            subtext:'数据来源某某公司',   //副标题
            x:'center',  //居中
            textStyle:{   //主标题样式
                color:'#f60'
            },
            subtextStyle:{
                color:'#333'
            }
        },
        legend: {   //图例
            data:['2018年'],
            x:'left',  //
        },
        tooltip:{   //提示框

        },
        xAxis: {
            type: 'category',
            data: ['1', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine:{    //线条
                lineStyle:{
                    color:'#fff'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine:{    //线条
                lineStyle:{
                    color:'#fff'
                }
            },
            axisLabel:{
                formatter: function (value, index) {
                   if(value >0){
                       return value +'万'
                   }else {
                        return value
                   }
                }
            }
        },
        series: [{   //展示区
            name:'2018年',
            data: [20, 932, 901, 934, 1290, 1330, 1320],   //数据
            type: 'bar'   //类型
        }],
        grid:{   //位置
            left:'0',
            right:'0',
            botton:'0',
            containLabel:true
        }
    };
    //初始化容器
    var myChart = echarts.init(document.getElementById("echarts"));
    //设置数据
    //myChart.setOption(option);
    //动态获取
    //定时器
    setInterval(getList,2000);
    function getList(){
        var random = parseInt(Math.random()*arr.length);     //0-1    0.3*6
        option.series[0].data = arr[random];
        //设置数据
        myChart.setOption(option);
    };
    getList();
    window.onresize = function(){   //根据窗口的大小变化
        myChart.resize();
    };
}