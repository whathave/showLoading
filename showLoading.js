/*
* @Author: sunala
* @Date:   2016-11-21 19:11:38
* @Last Modified by:   sunala
* @Last Modified time: 2016-11-21 19:18:12
*/

/*---------------------------------------------------------*/
/*                      显示加载提示                       */
/*---------------------------------------------------------*/
/*
	LoadingHideObj      用于清除延时关闭（全局变量）
	LoadingLoadTimeObj  用于清除超时提示（全局变量）
	Str                 要显示的内容
	T                   自动关闭的时间数值
*/

var LoadingHideObj = null;
var LoadingLoadTimeObj = null;

function Show_Loading(Str, T) {
	var LoadingLoadTime = 0;
	window.clearInterval(LoadingLoadTimeObj);
	hideselect();
	window.clearTimeout(LoadingHideObj);
	if ($("#Loading").length <= 0) {
		$("body").append('<div id="LoadingBg"></div><div id="Loading"></div>');
	}
	var o = $("#Loading");
	var oo = $("#LoadingBg");
	Str = '<img style="width:180px" src="loadingNew.gif"><br>' + Str;
	o.html(Str);
	var _sTop = $(document).scrollTop(),
		_wH = $(window).height(),
		_wW = $(window).width(),
		_tH = o.height(),
		_tW = o.width();
	_Top = (_wH - _tH) / 2 + _sTop;
	_Left = (_wW - _tW) / 2;
	o.css({
		"display": "block",
		"margin": "0px auto 0px auto",
		"top": _Top,
		"left": _Left
	});
	oo.css({
		"opacity": 0.2,
		"height": $(document).height()
	}).show();
	if (!isNaN(T)) {
		LoadingHideObj = window.setTimeout("Hide_Loading();", T);
	}
}

//隐藏加载框

function Hide_Loading() {
	$("#LoadingBg").fadeOut("slow");
	$("#Loading").html("").hide();
	showselect();
	window.clearTimeout(LoadingHideObj);
	window.clearInterval(LoadingLoadTimeObj);
}
