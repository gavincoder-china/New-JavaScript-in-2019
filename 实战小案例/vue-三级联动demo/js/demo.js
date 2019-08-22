	var arrAll =
		[
			{
				name: "北京",
				sub: [
					{name: "请选择", sub: []},
					{
						name: "北京",
						sub: [{name: "请选择"}, {name: "东城区"}, {name: "西城区"}, {name: "崇文区"}, {name: "宣武区"}, {name: "朝阳区"}, {name: "海淀区"}, {name: "丰台区"}, {name: "石景山区"}, {name: "房山区"}, {name: "通州区"}, {name: "顺义区"}, {name: "昌平区"}, {name: "大兴区"}, {name: "怀柔区"}, {name: "平谷区"}, {name: "门头沟区"}, {name: "密云县"}, {name: "延庆县"}]
					}]
			},
			{
				name: "广东",
				sub: [{name: "请选择", sub: []},
					{
						name: "广州",
						sub: [{name: "请选择"}, {name: "越秀区"}, {name: "荔湾区"}, {name: "海珠区"}, {name: "天河区"}, {name: "白云区"}, {name: "黄埔区"}, {name: "番禺区"}, {name: "花都区"}, {name: "南沙区"}, {name: "萝岗区"}, {name: "增城市"}, {name: "从化市"}]
					},
					{
						name: "深圳",
						sub: [{name: "请选择"}, {name: "福田区"}, {name: "罗湖区"}, {name: "南山区"}, {name: "宝安区"}, {name: "龙岗区"}, {name: "盐田区"}]
					},
					{
						name: "珠海",
						sub: [{name: "请选择"}, {name: "香洲区"}, {name: "斗门区"}, {name: "金湾区"}],
					},
					{
						name: "汕头",
						sub: [{name: "请选择"}, {name: "金平区"}, {name: "濠江区"}, {name: "龙湖区"}, {name: "潮阳区"}, {name: "潮南区"}, {name: "澄海区"}, {name: "南澳县"}]
					}]
			},
			{
				name: "上海",
				sub: [{name: "请选择", sub: []},
					{
						name: "上海",
						sub: [{name: "请选择"}, {name: "黄浦区"}, {name: "卢湾区"}, {name: "徐汇区"}, {name: "长宁区"}, {name: "静安区"}, {name: "普陀区"}, {name: "闸北区"}, {name: "虹口区"}, {name: "杨浦区"}, {name: "宝山区"}, {name: "闵行区"}, {name: "嘉定区"}, {name: "松江区"}, {name: "金山区"}, {name: "青浦区"}, {name: "南汇区"}, {name: "奉贤区"}, {name: "浦东新区"}, {name: "崇明县"}]
					}]
			},
			{
				name: "重庆",
				sub: [{name: "请选择", sub: []},
					{
						name: "重庆",
						sub: [{name: "请选择"}, {name: "渝中区"}, {name: "大渡口区"}, {name: "江北区"}, {name: "南岸区"}, {name: "北碚区"}, {name: "渝北区"}, {name: "巴南区"}, {name: "长寿区"}, {name: "双桥区"}, {name: "沙坪坝区"}, {name: "万盛区"}, {name: "万州区"}, {name: "涪陵区"}, {name: "黔江区"}, {name: "永川区"}, {name: "合川区"}, {name: "江津区"}, {name: "九龙坡区"}, {name: "南川区"}, {name: "綦江县"}, {name: "潼南县"}, {name: "荣昌县"}, {name: "璧山县"}, {name: "大足县"}, {name: "铜梁县"}, {name: "梁平县"}, {name: "开县"}, {name: "忠县"}, {name: "城口县"}, {name: "垫江县"}, {name: "武隆县"}, {name: "丰都县"}, {name: "奉节县"}, {name: "云阳县"}, {name: "巫溪县"}, {name: "巫山县"}, {name: "石柱土家族自治县"}, {name: "秀山土家族苗族自治县"}, {name: "酉阳土家族苗族自治县"}, {name: "彭水苗族土家族自治县"}]
					}]
			},
			{
				name: "湖北",
				sub: [{name: "请选择", sub: []},
					{
						name: "武汉",
						sub: [{name: "请选择"}, {name: "江岸区"}, {name: "武昌区"}, {name: "江汉区"}, {name: "硚口区"}, {name: "汉阳区"}, {name: "青山区"}, {name: "洪山区"}, {name: "东西湖区"}, {name: "汉南区"}, {name: "蔡甸区"}, {name: "江夏区"}, {name: "黄陂区"}, {name: "新洲区"}]
					},
					{
						name: "黄石",
						sub: [{name: "请选择"}, {name: "黄石港区"}, {name: "西塞山区"}, {name: "下陆区"}, {name: "铁山区"}, {name: "大冶市"}, {name: "阳新县"}]
					},
					{
						name: "十堰",
						sub: [{name: "请选择"}, {name: "张湾区"}, {name: "茅箭区"}, {name: "丹江口市"}, {name: "郧县"}, {name: "竹山县"}, {name: "房县"}, {name: "郧西县"}, {name: "竹溪县"}]
					},
					{
						name: "荆州",
						sub: [{name: "请选择"}, {name: "沙市区"}, {name: "荆州区"}, {name: "洪湖市"}, {name: "石首市"}, {name: "松滋市"}, {name: "监利县"}, {name: "公安县"}, {name: "江陵县"}]
					},
					{
						name: "宜昌",
						sub: [{name: "请选择"}, {name: "西陵区"}, {name: "伍家岗区"}, {name: "点军区"}, {name: "猇亭区"}, {name: "夷陵区"}, {name: "宜都市"}, {name: "当阳市"}, {name: "枝江市"}, {name: "秭归县"}, {name: "远安县"}, {name: "兴山县"}, {name: "五峰土家族自治县"}, {name: "长阳土家族自治县"}]
					},
					{
						name: "襄樊",
						sub: [{name: "请选择"}, {name: "襄城区"}, {name: "樊城区"}, {name: "襄阳区"}, {name: "老河口市"}, {name: "枣阳市"}, {name: "宜城市"}, {name: "南漳县"}, {name: "谷城县"}, {name: "保康县"}]
					}]
				}];
window.onload = function(){
    new Vue({
        el:'#my',
        data:{
            arr:arrAll,
            prov:'北京',//省
            city:'北京',//市
            district:'',//区
            cityArr:[], //市数据
            districArr:[] //区数据
        },
        methods:{
            updateCity:function(){   //更新市数据
                var self = this;
                this.arr.forEach(function(item,index){
                    if(item.name == self.prov){   //window
                        self.cityArr = item.sub;
                    }
                });
                self.city = self.cityArr[1].name
            },
            updateDistrict:function(){   //更新区数据
                var self = this;
                this.cityArr.forEach(function(item,index){
                    if(item.name == self.city){   //window
                        self.districArr = item.sub;
                    }
                });
                self.districArr && self.districArr.length>0 ? self.district = self.districArr[1].name :self.district= '';
            }
        },
        mounted:function(){   //
            this.updateCity();
            this.updateDistrict();
        }
    })
}