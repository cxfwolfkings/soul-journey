var initw;// ����ǰ���������
var initw2;// ����ǰ�Ŀؼ����
var inith;// ����ǰ�������߶�
var inith2;// ����ǰ�Ŀؼ��߶�
var newwidth = {
	helper : "ui-resizable-helper",
	minHeight : 27,
	start : function() {
		if (iskuangaoenable == true) {
			// initw=parseInt($("#hehe").css("width"));
			initw = parseInt($(this).css("width"));
			initw2 = parseInt($(this).children("input").css("width"));
		}
	},
	stop : function() {
		if (iskuangaoenable == true) {
			// for(var i=0;i<text.length;i++){
			// if(text[i].attr("class")!="ui-resizable-handle"){
			$(this).children("input").css("width",
					initw2 + parseInt($(this).css("width")) - initw + "px");
			
			if (dangqian) {
					shuxinglanshuaxin();
				}
		}
		// }
		// }
	}
}
var newWandH = {
	helper : "ui-resizable-helper",
	start : function() {
		if (iskuangaoenable == true) {
			// initw=parseInt($("#hehe").css("width"));
			initw = parseInt($(this).css("width"));
			initw2 = parseInt($(this).children("input").css("width"));
			inith = parseInt($(this).css("height"));
			inith2 = parseInt($(this).children("input").css("height"));
		}
	},
	stop : function() {
		if (iskuangaoenable == true) {
			// for(var i=0;i<text.length;i++){
			// if(text[i].attr("class")!="ui-resizable-handle"){
			$(this).children("input").css("width",
					initw2 + parseInt($(this).css("width")) - initw + "px");
			$(this).children("input").css("height",
					inith2 + parseInt($(this).css("height")) - inith + "px");
					
			if (dangqian) {
					shuxinglanshuaxin();
				}
		}
		// }
		// }
	}
}
var newTable = {
	helper : "ui-resizable-helper",
	start : function() {
		if (iskuangaoenable == true) {
			// initw=parseInt($("#hehe").css("width"));
			initw = parseInt($(this).css("width"));
			initw2 = parseInt($(this).children("table").css("width"));
			inith = parseInt($(this).css("height"));
			inith2 = parseInt($(this).children("table").css("height"));
		}
	},
	stop : function() {
		if (iskuangaoenable == true) {
			// for(var i=0;i<text.length;i++){
			// if(text[i].attr("class")!="ui-resizable-handle"){
			$(this).children("table").css("width",
					initw2 + parseInt($(this).css("width")) - initw + "px");
			$(this).children("table").css("height",
					inith2 + parseInt($(this).css("height")) - inith + "px");
					
			if (dangqian) {
					shuxinglanshuaxin();
				}
		}
		// }
		// }
	}
}
var newTextArea={
	helper : "ui-resizable-helper",
	start : function() {
		if (iskuangaoenable == true) {
			// initw=parseInt($("#hehe").css("width"));
			initw = parseInt($(this).css("width"));
			initw2 = parseInt($(this).children("textarea").css("width"));
			inith = parseInt($(this).css("height"));
			inith2 = parseInt($(this).children("textarea").css("height"));
		}
	},
	stop : function() {
		if (iskuangaoenable == true) {
			// for(var i=0;i<text.length;i++){
			// if(text[i].attr("class")!="ui-resizable-handle"){
			$(this).children("textarea").css("width",
					initw2 + parseInt($(this).css("width")) - initw + "px");
			$(this).children("textarea").css("height",
					inith2 + parseInt($(this).css("height")) - inith + "px");
					
			if (dangqian) {
					shuxinglanshuaxin();
				}
		}
		// }
		// }
	}
}