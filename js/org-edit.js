$(function() {

	//点击行的数据
	var currentNode = {
		address: "九克拉公寓"
		city_name: "市辖区"
		contact_name: "11100010203021312313"
		contact_number: "110"
		district_id: "140111"
		district_name: "昌平区"
		has_child: "true"
		organization_id: "3bbb7bbf6de049ac904e016c126e512e"
		organization_name: "城东区教育局"
		parent_id: "2e30b634f4d64ed3bd264b663afa03c4"
		province_name: "北京市"
		token: ""
	}
	//查询到的地区数据
	var provinceCity = [
		0: {
			 "c": [
                {
                    "ci": "01", 
                    "cn": "市辖区", 
                    "d" : [
                        {
                            "di": "01", 
                            "dn": "东城区"
                        }, 
                        {
                            "di": "02", 
                            "dn": "西城区"
                        }, 
                        {
                            "di": "05", 
                            "dn": "朝阳区"
                        }, 
                        {
                            "di": "06", 
                            "dn": "丰台区"
                        }, 
                        {
                            "di": "07", 
                            "dn": "石景山区"
                        }, 
                        {
                            "di": "08", 
                            "dn": "海淀区"
                        }, 
                        {
                            "di": "09", 
                            "dn": "门头沟区"
                        }, 
                        {
                            "di": "11", 
                            "dn": "房山区"
                        }, 
                        {
                            "di": "12", 
                            "dn": "通州区"
                        }, 
                        {
                            "di": "13", 
                            "dn": "顺义区"
                        }, 
                        {
                            "di": "14", 
                            "dn": "昌平区"
                        }, 
                        {
                            "di": "15", 
                            "dn": "大兴区"
                        }, 
                        {
                            "di": "16", 
                            "dn": "怀柔区"
                        }, 
                        {
                            "di": "17", 
                            "dn": "平谷区"
                        }, 
                        {
                            "di": "18", 
                            "dn": "密云区"
                        }, 
                        {
                            "di": "19", 
                            "dn": "延庆区"
                        }
                    ]
                }
            ]
          },
			pi: "11",
			pn: "北京市"
		}
		1: {
			c: Array(1),
			pi: "12",
			pn: "天津市"
		}
		2: {
			c: Array(12),
			pi: "13",
			pn: "河北省"
		}
		3: {
			c: Array(11),
			pi: "14",
			pn: "山西省"
		}
		4: {
			c: Array(12),
			pi: "15",
			pn: "内蒙古自治区"
		}
		5: {
			c: Array(14),
			pi: "21",
			pn: "辽宁省"
		}
		6: {
			c: Array(9),
			pi: "22",
			pn: "吉林省"
		}
		7: {
			c: Array(13),
			pi: "23",
			pn: "黑龙江省"
		}
		8: {
			c: Array(1),
			pi: "31",
			pn: "上海市"
		}
		9: {
			c: Array(13),
			pi: "32",
			pn: "江苏省"
		}
		10: {
			c: Array(11),
			pi: "33",
			pn: "浙江省"
		}
		11: {
			c: Array(16),
			pi: "34",
			pn: "安徽省"
		}
		12: {
			c: Array(9),
			pi: "35",
			pn: "福建省"
		}
		13: {
			c: Array(11),
			pi: "36",
			pn: "江西省"
		}
		14: {
			c: Array(17),
			pi: "37",
			pn: "山东省"
		}
		15: {
			c: Array(18),
			pi: "41",
			pn: "河南省"
		}
		16: {
			c: Array(14),
			pi: "42",
			pn: "湖北省"
		}
		17: {
			c: Array(14),
			pi: "43",
			pn: "湖南省"
		}
		18: {
			c: Array(19),
			pi: "44",
			pn: "广东省"
		}
		19: {
			c: Array(14),
			pi: "45",
			pn: "广西壮族自治区"
		}
		20: {
			c: Array(3),
			pi: "46",
			pn: "海南省"
		}
		21: {
			c: Array(2),
			pi: "50",
			pn: "重庆市"
		}
		22: {
			c: Array(21),
			pi: "51",
			pn: "四川省"
		}
		23: {
			c: Array(9),
			pi: "52",
			pn: "贵州省"
		}
		24: {
			c: Array(16),
			pi: "53",
			pn: "云南省"
		}
		25: {
			c: Array(7),
			pi: "54",
			pn: "西藏自治区"
		}
		26: {
			c: Array(10),
			pi: "61",
			pn: "陕西省"
		}
		27: {
			c: Array(13),
			pi: "62",
			pn: "甘肃省"
		}
		28: {
			c: Array(8),
			pi: "63",
			pn: "青海省"
		}
		29: {
			c: Array(5),
			pi: "64",
			pn: "宁夏回族自治区"
		}
		30: {
			c: Array(15),
			pi: "65",
			pn: "新疆维吾尔自治区"
		}
		length:
		31
	];
	//渲染省级数据
	threeAction(provinceCity, currentNode.province_name);

	//渲染市级数据
	$("#input-province").change(function() {
		renderCity(provinceCity, currentNode.city_name);
	});
	//渲染区级数据
	$("#input-city").change(function() {
		renderArea(provinceCity, currentNode.district_name);
	});
	//选择区级数据
	$("#input-area").change(function() {
		selectArea();
	})
	$("#input-province").trigger('change');
	$("#input-city").trigger('change');
	$("#input-area").trigger('change');
})