//document.onmousemove = mouseMove;
//var screenleft=100;
//var screentop=50;
//var initx;// 鼠标相对于浏览器X
//var inity;// 鼠标相对于浏览器Y
var bianhao = 0;// 表单控件的编号
var dangqian;// 当前操作的控件
var isnewkongjian;// 判断是否是新生成的控件
var iskuangaoenable = false;// 判断是否可以调整控件的宽高
// var bianli=0;

var newwenben = "<input type='text'/>";
var newanniu = "<input type='button' value='button'/>";
var newspan = "<span>span</span>";
var newa = "<a href='*'>a href</a>";
var newcheckbox = "<input type='checkbox'/>";
var newradio = "<input type='radio'/>";
var newselect = "<select name='newselect'></select>";
var newtextarea = "<textarea name='newtextarea'></textarea>";

var fuzhuclick = function() {
	if (dangqian != null) {
		dangqian.css("border", "none");
	}
	dangqian = $(this);
	dangqian.css("border", "1px dashed #999999");
	shuxinglanshuaxin();

}

var tuozhuaistop = function() {
	switch ($(this).attr("id")) {
	case "newtext":
		$("#screen").append(
				"<div class='fuzhu' id='fuzhu" + bianhao + "'>" + newwenben
						+ "</div>");
		$("#fuzhu" + bianhao).resizable(newwidth);
		break;
	case "newbutton":
		$("#screen").append(
				"<div class='fuzhu' id='fuzhu" + bianhao + "'>" + newanniu
						+ "</div>");
		$("#fuzhu" + bianhao).resizable(newWandH);
		$("#fuzhu" + bianhao).css("width", "62px");
		$("#fuzhu" + bianhao).css("height", "50px");
		break;
	case "newspan":
		$("#screen").append(
				"<div class='fuzhu' id='fuzhu" + bianhao + "'>" + newspan
						+ "</div>");
		$("#fuzhu" + bianhao).resizable();
		$("#fuzhu" + bianhao).css("width", "62px");
		$("#fuzhu" + bianhao).css("height", "50px");
		$("#fuzhu" + bianhao).children("span").css("display", "block");
		break;
	case "newlianjie":
		$("#screen").append(
				"<div class='fuzhu' id='fuzhu" + bianhao + "'>" + newa
						+ "</div>");
		$("#fuzhu" + bianhao).resizable();
		$("#fuzhu" + bianhao).css("width", "62px");
		$("#fuzhu" + bianhao).css("height", "50px");
		$("#fuzhu" + bianhao).children("a").css("display", "block");
		break;
	case "newcheckbox":
		$("#screen").append(
				"<div class='fuzhu' id='fuzhu" + bianhao + "'>" + newcheckbox
						+ "</div>");
		$("#fuzhu" + bianhao).resizable();
		$("#fuzhu" + bianhao).css("width", "50px");
		$("#fuzhu" + bianhao).css("height", "50px");
		break;
	case "newradio":
		$("#screen").append(
				"<div class='fuzhu' id='fuzhu" + bianhao + "'>" + newradio
						+ "</div>");
		$("#fuzhu" + bianhao).resizable();
		$("#fuzhu" + bianhao).css("width", "50px");
		$("#fuzhu" + bianhao).css("height", "50px");
		break;
	case "newselect":
		$("#screen").append(
				"<div class='fuzhu' id='fuzhu" + bianhao + "'>" + newselect
						+ "</div>");
		$("#fuzhu" + bianhao).resizable();
		$("#fuzhu" + bianhao).css("width", "50px");
		$("#fuzhu" + bianhao).css("height", "50px");
		break;
	case "newtextarea":
		$("#screen").append(
				"<div class='fuzhu' id='fuzhu" + bianhao + "'>" + newtextarea
						+ "</div>");
		$("#fuzhu" + bianhao).resizable(newTextArea);
		$("#fuzhu" + bianhao).css("width", "180px");
		$("#fuzhu" + bianhao).css("height", "80px");
		break;
	case "newtable":
	$("#getnewtable").dialog("open");
	break;
	default:

		break;
	}
	if(!($("#fuzhu" + bianhao).children("table").attr("class")))
	{
	if ($("#fuzhu" + bianhao).attr("id")) {
		$("#fuzhu" + bianhao).css("position", "absolute");
		$("#fuzhu" + bianhao).click(fuzhuclick);
		$("#fuzhu" + bianhao).draggable({
			containment : "parent",
			start : function() {
				if (dangqian != null) {
					dangqian.css("border", "none");
				}
				dangqian = $(this);
				dangqian.css("border", "1px dashed #999999");
			},
			stop : function() {
				if (dangqian) {
					shuxinglanshuaxin();
				}
			}
		});
		bianhao = bianhao + 1;
		isnewkongjian = true;
	} else {
		isnewkongjian = false;
	}
	}
}
function beforeMouseUp(e) {
	var initx = e.clientX + document.body.scrollLeft;
	var inity = e.clientY + document.body.scrollTop;
	// alert(document.body.scrollLeft);
	// alert(initx);
	// alert(inity);
	// alert(document.body.scrollTop);
	var leftmin = parseInt($("#shejiqi").css("left"));
	// alert(leftmin);
	var leftmax = leftmin + parseInt($("#shejiqi").css("width"));
	var topmin = parseInt($("#shejiqi").css("top")) + 40;
	// alert(topmin);
	var topmax = parseInt($("#shejiqi").css("top"))
			+ parseInt($("#shejiqi").css("height"));
	// alert(leftmin);
	// alert(leftmax);
	// alert(topmin);
	// alert(topmax);
	// alert(inity);

	if (initx > leftmax || initx < leftmin || inity > topmax || inity < topmin) {
		// $("#screen").remove("#fuzhu" + (bianhao - 1));
		// $("#fuzhu" + (bianhao - 1)).empty();
		$("#fuzhu" + (bianhao - 1)).remove();
		isnewkongjian = false;
		bianhao = bianhao - 1;
	}
	if (isnewkongjian) {
		$("#fuzhu" + (bianhao - 1)).css(
				"left",
				initx - parseInt($("#fuzhu" + (bianhao - 1)).css("width")) / 2
						- parseInt($("#shejiqi").css("left")) + "px");
		// 如果css中left和top没有设置初始值，那么这里就没有读数，便无法定位。意思是left和top要使用必须初始化
		$("#fuzhu" + (bianhao - 1)).css(
				"top",
				inity - parseInt($("#fuzhu" + (bianhao - 1)).css("height")) / 2
						- 54 - parseInt($("#shejiqi").css("top")) + "px");
	}
}
function mouseUp(e) {
	beforeMouseUp(e);
	$(document).unbind("mouseup", mouseUp);
}

// function duiqi(){
// var dong=parseInt($(this).css("left"));
// var jing=$(this).next(".fuzhu");
// if($("#screen").children(".fuzhu")[0])
// }
// 刷新属性栏
function shuxinglanshuaxin() {
	// 属性栏清空
	$("#shuxingname").val("");
	$("#shuxingclass").val("");
	$("#shuxingid").val("");
	$("#shuxingonclick").val("");
	$("#shuxingtext").val("");
	$("#shuxingvalue").val("");
	$("#shuxingvalue").attr("disabled", "disabled");
	$("#shuxingtext").attr("disabled", "disabled");
	// CSS栏清空
	$("#csswidth").val("");
	$("#cssheight").val("");
	$("#cssleft").val("");
	$("#csstop").val("");
	$("#cssfontsize").val("");
	$("#cssfontcolor").val("");
	$("#cssbgcolor").val("");
	$("#csswidth").attr("disabled", "disabled");
	$("#cssheight").attr("disabled", "disabled");
	$("#cssfontsize").attr("disabled", "disabled");
	$("#cssfontcolor").attr("disabled", "disabled");

	if ($("#shuxinghrefspan").text()) {
		$("#shuxinghrefspan").remove();
		$("#shuxinghref").remove();
	}
	// 属性栏修改
	if (dangqian.children("input").attr("type") == "text") {
		// alert("danhang");
		$("#shuxingvalue").removeAttr("disabled");

		$("#csswidth").removeAttr("disabled");

		$("#shuxingname").val(dangqian.children("input").attr("name"));
		$("#shuxingclass").val(dangqian.children("input").attr("class"));
		$("#shuxingid").val(dangqian.children("input").attr("id"));
		$("#shuxingvalue").val(dangqian.children("input").val());
		$("#shuxingonclick").val(dangqian.children("input").attr("onclick"));

		$("#csswidth").val(parseInt(dangqian.children("input").css("width")));
		$("#cssleft").val(parseInt(dangqian.css("left")));
		$("#csstop").val(parseInt(dangqian.css("top")));
	}
	if (dangqian.children("input").attr("type") == "button") {
		// alert("button");
		$("#shuxingvalue").removeAttr("disabled");

		$("#csswidth").removeAttr("disabled");
		$("#cssheight").removeAttr("disabled");
		$("#cssfontsize").removeAttr("disabled");
		$("#cssfontcolor").removeAttr("disabled");

		$("#shuxingname").val(dangqian.children("input").attr("name"));
		$("#shuxingclass").val(dangqian.children("input").attr("class"));
		$("#shuxingid").val(dangqian.children("input").attr("id"));
		$("#shuxingvalue").val(dangqian.children("input").val());
		$("#shuxingonclick").val(dangqian.children("input").attr("onclick"));

		$("#csswidth").val(parseInt(dangqian.children("input").css("width")));
		$("#cssheight").val(parseInt(dangqian.children("input").css("height")));
		$("#cssleft").val(parseInt(dangqian.css("left")));
		$("#csstop").val(parseInt(dangqian.css("top")));
		$("#cssfontsize").val(
				parseInt(dangqian.children("input").css("font-size")));
		$("#cssfontcolor").val(dangqian.children("input").css("color"));
	}
	if (dangqian.children("input").attr("type") == "checkbox") {
		// alert("checkbox");
		$("#cssfontsize").removeAttr("disabled");
		$("#cssfontcolor").removeAttr("disabled");

		$("#shuxingname").val(dangqian.children("input").attr("name"));
		$("#shuxingclass").val(dangqian.children("input").attr("class"));
		$("#shuxingid").val(dangqian.children("input").attr("id"));
		$("#shuxingvalue").val(dangqian.children("input").val());
		$("#shuxingonclick").val(dangqian.children("input").attr("onclick"));

		$("#cssleft").val(parseInt(dangqian.css("left")));
		$("#csstop").val(parseInt(dangqian.css("top")));
		$("#cssfontsize").val(
				parseInt(dangqian.children("input").css("font-size")));
		$("#cssfontcolor").val(dangqian.children("input").css("color"));
	}
	if (dangqian.children("input").attr("type") == "radio") {
		// alert("radio");
		$("#cssfontsize").removeAttr("disabled");
		$("#cssfontcolor").removeAttr("disabled");

		$("#shuxingname").val(dangqian.children("input").attr("name"));
		$("#shuxingclass").val(dangqian.children("input").attr("class"));
		$("#shuxingid").val(dangqian.children("input").attr("id"));
		$("#shuxingvalue").val(dangqian.children("input").val());
		$("#shuxingonclick").val(dangqian.children("input").attr("onclick"));

		$("#cssleft").val(parseInt(dangqian.css("left")));
		$("#csstop").val(parseInt(dangqian.css("top")));
		$("#cssfontsize").val(
				parseInt(dangqian.children("input").css("font-size")));
		$("#cssfontcolor").val(dangqian.children("input").css("color"));
	}
	if (dangqian.children("span").text()) {
		// alert("span");
		$("#shuxingtext").removeAttr("disabled");

		$("#cssfontsize").removeAttr("disabled");
		$("#cssfontcolor").removeAttr("disabled");

		$("#shuxingname").val(dangqian.children("span").attr("name"));
		$("#shuxingclass").val(dangqian.children("span").attr("class"));
		$("#shuxingid").val(dangqian.children("span").attr("id"));
		$("#shuxingtext").val(dangqian.children("span").text());
		$("#shuxingonclick").val(dangqian.children("span").attr("onclick"));

		$("#cssleft").val(parseInt(dangqian.css("left")));
		$("#csstop").val(parseInt(dangqian.css("top")));
		$("#cssfontsize").val(
				parseInt(dangqian.children("span").css("font-size")));
		$("#cssfontcolor").val(dangqian.children("span").css("color"));
	}
	if (dangqian.children("a").attr("href")) {
		// alert("a");
		var newhref = "<span class='shuxingspan' id='shuxinghrefspan'>href:</span><input type='text' class='shuxing' id='shuxinghref'/>"
		$("#shuxingtext").removeAttr("disabled");
		$("#genggaishuxingzhi").before(newhref);

		$("#cssfontsize").removeAttr("disabled");
		$("#cssfontcolor").removeAttr("disabled");

		$("#shuxingname").val(dangqian.children("a").attr("name"));
		$("#shuxingclass").val(dangqian.children("a").attr("class"));
		$("#shuxingid").val(dangqian.children("a").attr("id"));
		$("#shuxingtext").val(dangqian.children("a").text());
		$("#shuxingonclick").val(dangqian.children("a").attr("onclick"));
		$("#shuxinghref").val(dangqian.children("a").attr("href"));

		$("#cssleft").val(parseInt(dangqian.css("left")));
		$("#csstop").val(parseInt(dangqian.css("top")));
		$("#cssfontsize")
				.val(parseInt(dangqian.children("a").css("font-size")));
		$("#cssfontcolor").val(dangqian.children("a").css("color"));
	}
	if (dangqian.children("select").attr("name")) {
		// alert("select");

		$("#shuxingname").val(dangqian.children("select").attr("name"));
		$("#shuxingclass").val(dangqian.children("select").attr("class"));
		$("#shuxingid").val(dangqian.children("select").attr("id"));
		$("#shuxingvalue").val(dangqian.children("select").val());
		$("#shuxingonclick").val(dangqian.children("select").attr("onclick"));

		$("#cssleft").val(parseInt(dangqian.css("left")));
		$("#csstop").val(parseInt(dangqian.css("top")));
	}
	if (dangqian.children("textarea").attr("name")) {
		// alert("textarea");
		$("#shuxingvalue").removeAttr("disabled");

		$("#csswidth").removeAttr("disabled");
		$("#cssheight").removeAttr("disabled");

		$("#shuxingname").val(dangqian.children("textarea").attr("name"));
		$("#shuxingclass").val(dangqian.children("textarea").attr("class"));
		$("#shuxingid").val(dangqian.children("textarea").attr("id"));
		$("#shuxingvalue").val(dangqian.children("textarea").val());
		$("#shuxingonclick").val(dangqian.children("textarea").attr("onclick"));

		$("#cssleft").val(parseInt(dangqian.css("left")));
		$("#csstop").val(parseInt(dangqian.css("top")));
		$("#csswidth")
				.val(parseInt(dangqian.children("textarea").css("width")));
		$("#cssheight").val(
				parseInt(dangqian.children("textarea").css("height")));
	}
}
function createnewtable(){
	var tablebegin="<table class='newtable'>";
	var tableend="</table>";
	var trbegin="<tr class='newtr'>";
	var trend="</tr>";
	var td="<td class='newtd'></td>";
	var hang=parseInt($("#biaogehangshu").val());
	var lie=parseInt($("#biaogelieshu").val());
	var newtable;
	newtable=tablebegin;
	for(var i=0;i<hang;i++){
		newtable+=trbegin;
		for(var j=0;j<lie;j++){
			newtable+=td;
			}
		newtable+=trend;
		}
	newtable+=tableend;
	$("#screen").append(
				"<div class='fuzhu' id='fuzhu" + bianhao + "'>" + newtable
						+ "</div>");
	$("#fuzhu" + bianhao).resizable(newTable);
	//$("#fuzhu" + bianhao).children("table").children("tr").children("td").css("border","1px solid #000");
	//$("#fuzhu" + bianhao).children("table").children("tr").children("td").css("width","20px");
	//$("#fuzhu" + bianhao).children("table").children("tr").children("td").css("height","20px");
	if ($("#fuzhu" + bianhao).attr("id")) {
		$("#fuzhu" + bianhao).css("position", "absolute");
		$("#fuzhu" + bianhao).click(fuzhuclick);
		$("#fuzhu" + bianhao).draggable({
			containment : "parent",
			start : function() {
				if (dangqian != null) {
					dangqian.css("border", "none");
				}
				dangqian = $(this);
				dangqian.css("border", "1px dashed #999999");
			},
			stop : function() {
				if (dangqian) {
					shuxinglanshuaxin();
				}
			}
		});
		bianhao = bianhao + 1;
		isnewkongjian = true;
	} else {
		isnewkongjian = false;
	}
}