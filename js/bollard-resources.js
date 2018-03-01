/**
 * 提供前端全局资源的读取
 */
(function($) {
	// api资源
	var resources = {
		// 登录相关接口
		captchaURL: '/bollard-platform/login/get-captcha.html?width=100&height=41&seed=',
		loginURL: '/bollard-platform/login/go-login.html',
		logoutURL: '/bollard-platform/login/go-logout.html',
		indexPermURL: '/bollard-platform/login/get-permission.html',
		myInfoPageURL:'/bollard-platform/login/my-info.html',
		getMyInfoURL:'/bollard-platform/login/get-my-info.html',
		changePasswordURL:'/bollard-platform/login/change-password.html',
	};

	// RSA公钥
	var publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCfUETS9ATPIqCffrzWhPiGNYBqwiSjdeHInwgGzvxy/e/cXvgJRoPCs2vPnFlS15nJZM4QszF8f0E7sNoTi0AFflrHeRK5hXiLkjrdywgsToNmzfYXxmRbI+FxCKH7xqrddT9F+g4sQCc+CHrQMOKllyobnCFfFLVIbbMzlerf7QIDAQAB";

	$.extend({
		// 获取url资源
		getResource: function(key) {
			if('captchaURL' == key) {
				return resources[key] + Math.random();
			} else {
				return resources[key];
			}
		},
		
		// 取RSA公钥
		getCustomPublicKey: function() {
			return publicKey;
		},
		
		// hex -> unicode
		convertFromHex: function(hex) {
			var hex = hex.toString();
			var str = '';
			for(var i = 0; i < hex.length; i += 2)
				str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
			return str;
		},
		
		// unicode -> hex
		convertToHex: function(str) {
			var hex = '';
			for(var i = 0; i < str.length; i++) {
				hex += '' + str.charCodeAt(i).toString(16);
			}
			return hex;
		},
		
		// 获取url参数
		getUrlParam: function(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if(r != null) {
				return unescape(r[2]);
			} else {
				return null;
			}
		},
		
		// 检查用户名
		chkName: function(name) {
			// 用户名, 支持大小写字母, 数字, 下划线, 减号, 长度为6~16位
			var pattern = /^[_a-zA-Z0-9-]{6,16}$/;
			return pattern.test(name);
		},
		
		// 检查密码
		chkPwd: function(pwd) {
			// 密码, 支持大小写字母, 数字, 字符, 长度为6~20位
			var pattern = /^([A-Z]|[a-z]|[0-9]|[\`\-\=\[\]\;\,\.\/\~\!\@\#\$\%\^\*\(\)\_\+]){6,20}$/;
			return pattern.test(pwd);
		},
		
		// 数值型随机字符串
		randNum: function(n) {
			t = '';
			for(var i=0; i<n; i++) {
				t += Math.floor(Math.random()*10);
			}
			return t;
		},
		// 检查验证码
		chkCaptcha: function(captcha) {
			// 验证码, 支持大小写字母和数字, 长度为4位
			var pattern = /^[a-zA-Z0-9]{4}$/;
			return pattern.test(captcha);
		},
	});

})(jQuery);

// 扩展Date的格式化方法. author: meizz 
Date.prototype.Format = function (fmt) {
    var o = {
    	 // 月份
        "M+": this.getMonth() + 1,
        // 日
        "d+": this.getDate(),
        // 小时
        "h+": this.getHours(),
        // 分
        "m+": this.getMinutes(),
        // 秒
        "s+": this.getSeconds(),
        // 季度
        "q+": Math.floor((this.getMonth() + 3) / 3),
        // 毫秒
        "S": this.getMilliseconds()
    };
    if(/(y+)/.test(fmt)) {
    	fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
    	if(new RegExp("(" + k + ")").test(fmt)) {
    		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    	}
    }
    return fmt;
}
	//三级联动函数
    function threeAction(date,val){
    	var flag=true;
		if(undefined == date){
			return 
		}
		var Array=isArray(date);
		if(!Array){
			return
		}
		if(val==undefined){
			val='';
		}
		var html = "<option value=''>请选择</option>";
        $("#input-city").append(html); 
        $("#input-area").append(html);
         $.each(date,function(idx,item){
            if (null != item.pn ) {
                html += "<option value='"+idx+"' data-pi='"+item.pi+"'>"+item.pn+"</option>";
            }   
        });
        $("#input-province option").remove();
		$("#input-province").append(html);	
		if(flag){
			defaultValue($("#input-province"),val,flag);
		}	
	}

	//默认值
	function defaultValue(data,val){
			if(Object.prototype.toString.call(data)!='[object Object]'){
				return;
			}
			if(undefined==""){
				return;
			}
			if(val==undefined){
			val='';
		  }
            $.each(data.children(),function(index,item){
            	if($(item).text()==val){
            		$(item).attr("selected",true);
            	}
            })
			flag=false;
	}
	
    //初始化区县编码
	var areaDI=null;
	//选择区级数据
	function selectArea(){
		if ($("#input-area").val() == "") {return};
		areaDI = $("#input-area").find("option:selected").data('di');
	}
	 //获取区级数据
	 function getAreaData(data,provinceCity){
	 	if(undefined==data){
	 		return
	 	}
	 	var indexArr=data.split('-');
	 	var areaData=provinceCity[indexArr[1]].c[indexArr[0]].d;
	 	return areaData;	
	 }
	 
	//渲染市级数据
	function renderCity(provinceCity,val){
		var flag=true;
        if ($("#input-province").val() == "") {
        	return;
        }
        $("#input-city option").remove(); 
        var  provincePI= $("#input-province").find("option:selected").data("pi"); 
        var provinceIndex =$("#input-province").find("option:selected").val(); 
        var cityDate=provinceCity[provinceIndex].c;
        var Array=isArray(cityDate);
        if(!Array){
        	return;
        }
        var html = "<option value=''>请选择</option>";$("#input-city").append(html);
            $.each(cityDate,function(idx,item){
                if (null!=item.cn) {
                    html += "<option value='" + idx + "-"+provinceIndex+"' data-ci='" + item.ci +provincePI+"'>" + item.cn + "</option>";
                }    
            });
        $("#input-city option").remove();
        $("#input-city").append(html);    
        if(flag){
			defaultValue( $("#input-city"),val,flag);
		}
   }
    //渲染区级数据
    function renderArea(provinceCity,val){
    	var flag=true;
        if ($("#input-city").val() == ""){return};
        $("#input-area option").remove();
        var areaCI = $(("#input-city")).find("option:selected").data('ci');
        var areaIndex = $(("#input-city")).find("option:selected").val();       
        var html = "<option value=''>请选择</option>";     
        var areaDate=getAreaData(areaIndex,provinceCity);
        var Array=isArray(areaDate);
		if(!Array){
		    return;
		}
        $.each(areaDate,function(idx,item){
            html += "<option data-di='" + item.di +areaCI+ "'>" + item.dn + "</option>";
        });
        $("#input-area option").remove();
        $("#input-area").append(html);
        if(flag){
			defaultValue( $("#input-area"),val,flag);
		}
    }
	//验证是否是数组
	function isArray(o){
        return Object.prototype.toString.call(o)=='[object Array]';
    }