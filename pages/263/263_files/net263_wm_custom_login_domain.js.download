// CUSTOM_LOGIN_VERSION $Id: net263_wm_custom_login_domain.js 13025 2017-07-19 03:04:19Z nayingli $
//格式化字符串
$.format = function (source, params) {
	if (arguments.length == 1)
	return function () {
		var args = $.makeArray(arguments);
		args.unshift(source);
		return $.format.apply(this, args);
	};
	if (arguments.length > 2 && params.constructor != Array) {
		params = $.makeArray(arguments).slice(1);
	}
	if (params.constructor != Array) {
		params = [params];
	}
	$.each(params, function (i, n) {
		source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
	});
	return source;
};

//圖片大小自適應、 垂直
var _changeSize = function(a,b,c){
	var img = new Image(); //创建一个Image对象，实现图片的预下载  
    img.src = a.attr("src");  
     
    var showWidth;
    var showHeight;
    if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数  
        if(img.width>0 && img.height>0 ){
			if(img.width/img.height>= b/c && img.width>b){
				showWidth = b;
				showHeight = (img.height*b)/img.width;
			} else if(img.width/img.height < b/c && img.height>c){
				showWidth = (img.width*c)/img.height;
				showHeight = c;
			}else{
				showWidth = img.width;
				showHeight = img.height;
			}
		 	a.css("width",showWidth);
		 	a.css("height",showHeight);
			a.alt=img.width+"×"+img.height;
		}
		if(showHeight < a.parents("div").height()){
		    var topMa = (a.parents("div").height() - showHeight) / 2;
		    a.css("margin-top",topMa + "px") ;
		} else{
			a.css("margin-top",0) ;
		}
		if(showWidth < a.parents("div").width()){
			var leftMa = (a.parents("div").width() - showWidth) / 2;
			a.css("margin-left",leftMa + "px");
		} else{
			a.css("margin-left",0);
		}
		$(".logo > img").css("margin-left",0);
        return; // 直接返回，不用再处理onload事件  
    }  
  
    img.onload = function () { //图片下载完毕时异步调用callback函数。  
        if(img.width>0 && img.height>0 ){
			if(img.width/img.height>= b/c && img.width>b){
				showWidth = b;
				showHeight = (img.height*b)/img.width;
			} else if(img.width/img.height < b/c && img.height>c){
				showWidth = (img.width*c)/img.height;
				showHeight = c;
			}else{
				showWidth = img.width;
				showHeight = img.height;
			}
		 	a.css("width",showWidth);
		 	a.css("height",showHeight);
			a.alt=img.width+"×"+img.height;
		}
		if(showHeight < a.parents("div").height()){
		    var topMa = (a.parents("div").height() - showHeight) / 2;
		    a.css("margin-top",topMa + "px") ;
		} 
		if(showWidth < a.parents("div").width()){
			var leftMa = (a.parents("div").width() - showWidth) / 2;
			a.css("margin-left",leftMa + "px");
		}
		$(".logo > img").css("margin-left",0);
    }  
}

//加載logo
var _loadLogo = function(){
	
	if (GlobalTempNo == 1 || GlobalTempNo == 2 || GlobalTempNo == 3) {
		_changeSize($(".logo > img"), 165 , 60 );
	} else {
		_changeSize($(".logo > img"), 188 , 50 );
	}
	$(".logo > img").show();
}

//加載illu
var _loadIllu = function(){
	if (GlobalTempNo == 1 || GlobalTempNo == 2 || GlobalTempNo == 3) {
		_changeSize($(".imgBox > img"), 376 , 240 );
	} else {
		_changeSize($(".imgBox > img"), 790 , 460 );
	}
	$(".imgBox > img").show();
}

var _custom_login_domain_init = function(type, action, data, templCod) {
	var appendTemplCod;
	var appendLogoUrl;
	var appendIlluUrl;
	appendLogoUrl = action.baseUrl + data.logoUrl + "?ludt=" + data.lastupdatetime;
	appendIlluUrl = action.baseUrl + data.illuUrl + "?ludt=" + data.lastupdatetime;
	//appendLogoUrl = '/custom_login' + action.baseUrl + data.logoUrl + "?ludt=" + data.lastupdatetime;
	//appendIlluUrl = '/custom_login' + action.baseUrl + data.illuUrl + "?ludt=" + data.lastupdatetime;
	var linkTemp = "";
    var linkStr = "<a href='{0}' target='_blank'>{1}</a> <span>&nbsp;|&nbsp;</span>";
    for (i=0;i<data.linkName.length;i++) {
		if( data.linkName[i] != "请输入链接名称"&& data.linkName[i] != ""){
	        var linkStrFor = $.format(linkStr,data.linkUrl[i],data.linkName[i]);
	        linkTemp = linkTemp + linkStrFor;
	    }
	}
    linkTemp = linkTemp.substring(0, linkTemp.length-26);
    if (data.templNo==4||data.templNo==5||data.templNo==6){
    	var topLinkTemp = "";
        var topLinkStr = "<li><a href='{0}' target='_blank'>{1}</a></li>";
        for (i=0;i<data.topLink.length;i++) {
        	if( data.topLink[i][0] != "请输入链接名称"&& data.topLink[i][0] != ""){
    	        var topLinkStrFor = $.format(topLinkStr,data.topLink[i][1],data.topLink[i][0]);
    	        topLinkTemp = topLinkTemp + topLinkStrFor;
    	    }
    	}
    }
    var appendPageTop = "";
	if(data.pageTop != "可输入公司简介等......"){
		appendPageTop = data.pageTop;
	}
	var appendPageFoot = "";
	if(data.pageFoot != "可输入版权信息等......"){
		appendPageFoot = data.pageFoot;
	}
   	if(data.templNo==1||data.templNo==2){
   		appendTemplCod = $.format(templCod,appendLogoUrl,appendPageTop,appendIlluUrl,linkTemp,appendPageFoot);
   	} else if (data.templNo==3){
   		appendTemplCod = $.format(templCod,appendLogoUrl,appendPageTop,linkTemp,appendPageFoot);
   	} else if (data.templNo==4||data.templNo==5){
   		appendTemplCod = $.format(templCod,appendLogoUrl,appendPageTop,appendIlluUrl,linkTemp,appendPageFoot,topLinkTemp);
   	} else if (data.templNo==6){
   		appendTemplCod = $.format(templCod,appendLogoUrl,appendPageTop,linkTemp,appendPageFoot,topLinkTemp);
   	}
   	$("#right_main_Box").html(appendTemplCod);
   	$(".imgBox > img").hide().attr("src",appendIlluUrl);
   	$(".logo > img").hide().attr("src",appendLogoUrl);
   	_loadLogo();
   	_loadIllu();
   	$(".desc").css("color",data.fontColor);
   	$(".copyright").css("color",data.fontColor);
   	$(".footLinks a").css("color",data.linkColor);
   	$(".pageHeader .nav a").css("color",data.linkColor);
   	$(".footLinks").css("color",data.linkColor);
   	if(data.templNo == 3){
   		$(".layout_Bgcolor").css("background",data.bgColor);
   	} else {
   		$(".pageSection").css("background",data.bgColor);
   	}
   	if(!!data.templNo){
   		$(".defaultWid .nav").css({"max-width": 400 + "px"});
   	}
}


