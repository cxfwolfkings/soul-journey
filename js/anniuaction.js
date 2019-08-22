function shanchuyuansu(){
	if(dangqian){
	dangqian.remove();
	}
	}
function shengcheng(){
	$( "#renameform" ).dialog( "open" );
	}
function saveyuanban() {
	alert("生成的可再编辑表单："+$("#biaodanrongqi").html());
	}

function shezhilinbianleft(){
	var all1 = [];
	var linshi = [];
	var countforall1=0;
	for ( var i = 0; i < bianhao; i++) {
		linshi[i] = $("#fuzhu" + i);
		if(linshi[i].attr("id")){
			if(parseInt(dangqian.css("top"))
					- parseInt(linshi[i].css("top"))==0||parseInt(dangqian.css("top"))+parseInt(dangqian.css("height"))
					- parseInt(linshi[i].css("top"))-parseInt(linshi[i].css("height"))==0){
		if (dangqian.attr("id") != linshi[i].attr("id")) {
			all1[countforall1] = linshi[i];
			countforall1=countforall1+1;
		} 
					}
		
	}
	}
	var all2=[];
	for ( var i = 0; i < all1.length; i++) {
			all2[i] = parseInt(dangqian.css("left"))
					- parseInt(all1[i].css("left"));
	}
	
	var zmin = 0;
	for ( var i = 1; i < all2.length; i++) {
		if(all2[i]>0){
		if (all2[zmin] > all2[i]) {
			zmin = i;
		}
		}
	}
	if(all2[zmin]>0){
		
	if(all1[zmin].children("input").attr("type")=="text"){
		//alert("danhang");
		dangqian.css("left",parseInt(all1[zmin].css("left"))+parseInt(all1[zmin].children("input").css("width"))+parseInt($("#cssmarginleft").val())+"px");
	  	}
	if(all1[zmin].children("input").attr("type")=="button"){
		//alert("button");
		dangqian.css("left",parseInt(all1[zmin].css("left"))+parseInt(all1[zmin].children("input").css("width"))+parseInt($("#cssmarginleft").val())+"px");
		}
	if(all1[zmin].children("input").attr("type")=="checkbox"){
		//alert("checkbox");
		dangqian.css("left",parseInt(all1[zmin].css("left"))+parseInt(all1[zmin].css("width"))+parseInt($("#cssmarginleft").val())+"px");
		}
	if(all1[zmin].children("input").attr("type")=="radio"){
		//alert("radio");
		dangqian.css("left",parseInt(all1[zmin].css("left"))+parseInt(all1[zmin].css("width"))+parseInt($("#cssmarginleft").val())+"px");
		}
	if(all1[zmin].children("span").text()){
		//alert("span");
		dangqian.css("left",parseInt(all1[zmin].css("left"))+parseInt(all1[zmin].css("width"))+parseInt($("#cssmarginleft").val())+"px");
		}
	if(all1[zmin].children("a").attr("href")){
		//alert("a");
		dangqian.css("left",parseInt(all1[zmin].css("left"))+parseInt(all1[zmin].css("width"))+parseInt($("#cssmarginleft").val())+"px");
		}
	if(all1[zmin].children("select").attr("name")){
		//alert("select");
		dangqian.css("left",parseInt(all1[zmin].css("left"))+parseInt(all1[zmin].css("width"))+parseInt($("#cssmarginleft").val())+"px");
		}
	if(all1[zmin].children("textarea").attr("name")){
		//alert("textarea");
		dangqian.css("left",parseInt(all1[zmin].css("left"))+parseInt(all1[zmin].css("width"))+parseInt($("#cssmarginleft").val())+"px");
		}
		
		}
	
	}

function shezhilinbiantop(){
	
	var all1 = [];
	var linshi = [];
	var countforall1=0;
	for ( var i = 0; i < bianhao; i++) {
		linshi[i] = $("#fuzhu" + i);
		if(linshi[i].attr("id")){
		if(parseInt(dangqian.css("left"))
					- parseInt(linshi[i].css("left"))==0||parseInt(dangqian.css("left"))+parseInt(dangqian.css("width"))
					- parseInt(linshi[i].css("left"))-parseInt(linshi[i].css("width"))==0){
		if (dangqian.attr("id") != linshi[i].attr("id")) {
			all1[countforall1] = linshi[i];
			countforall1=countforall1+1;
		} 
					}
	}
	}
	var all2=[];
	for ( var i = 0; i < all1.length; i++) {
			all2[i] = parseInt(dangqian.css("top"))
					- parseInt(all1[i].css("top"));
	}
	
	var zmin = 0;
	for ( var i = 1; i < all2.length; i++) {
		if(all2[i]>0){
		if (all2[zmin] > all2[i]) {
			zmin = i;
		}
		}
	}
	if(all2[zmin]>0){
		
	if(all1[zmin].children("input").attr("type")=="text"){
		//alert("danhang");
		dangqian.css("top",parseInt(all1[zmin].css("top"))+parseInt(all1[zmin].children("input").css("height"))+parseInt($("#cssmargintop").val())+"px");
	  	}
	if(all1[zmin].children("input").attr("type")=="button"){
		//alert("button");
		dangqian.css("top",parseInt(all1[zmin].css("top"))+parseInt(all1[zmin].children("input").css("height"))+parseInt($("#cssmargintop").val())+"px");
		}
	if(all1[zmin].children("input").attr("type")=="checkbox"){
		//alert("checkbox");
		dangqian.css("top",parseInt(all1[zmin].css("top"))+parseInt(all1[zmin].css("height"))+parseInt($("#cssmargintop").val())+"px");
		}
	if(all1[zmin].children("input").attr("type")=="radio"){
		//alert("radio");
		dangqian.css("top",parseInt(all1[zmin].css("top"))+parseInt(all1[zmin].css("height"))+parseInt($("#cssmargintop").val())+"px");
		}
	if(all1[zmin].children("span").text()){
		//alert("span");
		dangqian.css("top",parseInt(all1[zmin].css("top"))+parseInt(all1[zmin].css("height"))+parseInt($("#cssmargintop").val())+"px");
		}
	if(all1[zmin].children("a").attr("href")){
		//alert("a");
		dangqian.css("top",parseInt(all1[zmin].css("top"))+parseInt(all1[zmin].css("height"))+parseInt($("#cssmargintop").val())+"px");
		}
	if(all1[zmin].children("select").attr("name")){
		//alert("select");
		dangqian.css("top",parseInt(all1[zmin].css("top"))+parseInt(all1[zmin].css("height"))+parseInt($("#cssmargintop").val())+"px");
		}
	if(all1[zmin].children("textarea").attr("name")){
		//alert("textarea");
		dangqian.css("top",parseInt(all1[zmin].css("top"))+parseInt(all1[zmin].css("height"))+parseInt($("#cssmargintop").val())+"px");
		}
		
		}
	
	}

function zuoduiqi() {//左对齐
	var all1 = [];
	for ( var i = 0; i < bianhao; i++) {
		var linshi = $("#fuzhu" + i);
		if(linshi.attr("id")){
		if (dangqian.attr("id") != linshi.attr("id")) {
			all1[i] = Math.abs(parseInt(dangqian.css("left"))
					- parseInt(linshi.css("left")));
		} else {
			all1[i] = 10000;
		}
		}else{
			all1[i] = 10000;
			}
	}
	var zmin = 0;
	for ( var i = 1; i < all1.length; i++) {
		if (all1[zmin] > all1[i]) {
			zmin = i;
		}
	}
	dangqian.css("left", $("#fuzhu" + zmin).css("left"));
}

function shangduiqi() {//上对齐
	var all1 = [];
	for ( var i = 0; i < bianhao; i++) {
		var linshi = $("#fuzhu" + i);
		if(linshi.attr("id")){
		if (dangqian.attr("id") != linshi.attr("id")) {
			all1[i] = Math.abs(parseInt(dangqian.css("top"))
					- parseInt(linshi.css("top")));
		} else {
			all1[i] = 10000;
		}
		}else{
			all1[i] = 10000;
			}
	}
	var zmin = 0;
	for ( var i = 1; i < all1.length; i++) {
		if (all1[zmin] > all1[i]) {
			zmin = i;
		}
	}
	dangqian.css("top", $("#fuzhu" + zmin).css("top"));
}

function xiaduiqi(){
	var all1 = [];
	for ( var i = 0; i < bianhao; i++) {
		var linshi = $("#fuzhu" + i);
		if(linshi.attr("id")){
		if (dangqian.attr("id") != linshi.attr("id")) {
			all1[i] = Math.abs(parseInt(dangqian.css("top"))+parseInt(dangqian.css("height"))
					- parseInt(linshi.css("top"))-parseInt(linshi.css("height")));
		} else {
			all1[i] = 10000;
		}
		}else{
			all1[i] = 10000;
			}
	}
	var zmin = 0;
	for ( var i = 1; i < all1.length; i++) {
		if (all1[zmin] > all1[i]) {
			zmin = i;
		}
	}
	var pianyiliang=parseInt(dangqian.css("top"))+parseInt(dangqian.css("height"))
					- parseInt($("#fuzhu" + zmin).css("top"))-parseInt($("#fuzhu" + zmin).css("height"));
	dangqian.css("top", parseInt(dangqian.css("top"))-pianyiliang);
	}

function youduiqi(){
	var all1 = [];
	for ( var i = 0; i < bianhao; i++) {
		var linshi = $("#fuzhu" + i);
		if(linshi.attr("id")){
		if (dangqian.attr("id") != linshi.attr("id")) {
			all1[i] = Math.abs(parseInt(dangqian.css("left"))+parseInt(dangqian.css("width"))
					- parseInt(linshi.css("left"))-parseInt(linshi.css("width")));
		} else {
			all1[i] = 10000;
		}
		}else{
			all1[i] = 10000;
			}
	}
	var zmin = 0;
	for ( var i = 1; i < all1.length; i++) {
		if (all1[zmin] > all1[i]) {
			zmin = i;
		}
	}
	var pianyiliang=parseInt(dangqian.css("left"))+parseInt(dangqian.css("width"))
					- parseInt($("#fuzhu" + zmin).css("left"))-parseInt($("#fuzhu" + zmin).css("width"));
	dangqian.css("left", parseInt(dangqian.css("left"))-pianyiliang);
	}

function enabletoolbar(){
	if($( "#toolbar" ).draggable( "option", "disabled" )==false){
		$("#toolbar").draggable( "disable" );
		$("#toolbar").css("opacity","1");
		$("#gudingtoolbar").val("移动控件箱");
		}else{
			$("#toolbar").draggable( "enable" );
			$("#gudingtoolbar").val("固定控件箱");
			}
	}
function enableshejiqi(){
	if($( "#shejiqi" ).draggable( "option", "disabled" )==false){
		$("#shejiqi").draggable( "disable" );
		$("#shejiqi").css("opacity","1");
		$("#gudingshejiqi").val("移动主屏幕");
		}else{
			$("#shejiqi").draggable( "enable" );
			$("#gudingshejiqi").val("固定主屏幕");
			}
	}
function enabletabs(){
	if($( "#tabs" ).draggable( "option", "disabled" )==false){
		$("#tabs").draggable( "disable" );
		$("#tabs").css("opacity","1");
		$("#gudingtabs").val("移动操作箱");
		}else{
			$("#tabs").draggable( "enable" );
			$("#gudingtabs").val("固定操作箱");
			}
	}
function cssandshuxingbangding(){
	if($( "#cssandshuxing" ).draggable( "option", "disabled" )==false){
		$("#cssandshuxing").draggable( "disable" );
		$("#cssandshuxing").css("opacity","1");
		$("#gudingcssandshuxing").val("移动属性箱");
		}else{
			$("#cssandshuxing").draggable( "enable" );
			$("#gudingcssandshuxing").val("固定属性箱");
			}
	}
	
function kuangaobangding(){
	if(iskuangaoenable==true){
		iskuangaoenable=false;
		$("#kuangaobangding").val("宽高绑定");
		}else{
			iskuangaoenable=true;
			$("#kuangaobangding").val("取消宽高绑定");
			}
	}
//function showposition(){
	//var string="主屏幕 "+$("#shejiqi").css("left")+" "+$("#shejiqi").css("top")+" "+
	//"状态栏 "+$("#cssandshuxing").css("left")+" "+$("#cssandshuxing").css("top")+" "+
	//"工具箱 "+$("#toolbar").css("left")+" "+$("#toolbar").css("top")+" "+
	//"操作箱 "+$("#tabs").css("left")+" "+$("#tabs").css("top")+" ";
	//$("#all").text(string);
	//}
function shezhishuxing(){
		
	if(dangqian.children("input").attr("type")=="text"){
		//alert("danhang");
		dangqian.children("input").attr("name",$("#shuxingname").val());
	    dangqian.children("input").attr("class",$("#shuxingclass").val());
	    dangqian.children("input").attr("id",$("#shuxingid").val());
	    dangqian.children("input").attr("onclick",$("#shuxingonclick").val());
		dangqian.children("input").val($("#shuxingvalue").val());
	  	}
	if(dangqian.children("input").attr("type")=="button"){
		//alert("button");
		dangqian.children("input").attr("name",$("#shuxingname").val());
	    dangqian.children("input").attr("class",$("#shuxingclass").val());
	    dangqian.children("input").attr("id",$("#shuxingid").val());
	    dangqian.children("input").attr("onclick",$("#shuxingonclick").val());
		dangqian.children("input").val($("#shuxingvalue").val());
		}
	if(dangqian.children("input").attr("type")=="checkbox"){
		//alert("checkbox");
		dangqian.children("input").attr("name",$("#shuxingname").val());
	    dangqian.children("input").attr("class",$("#shuxingclass").val());
	    dangqian.children("input").attr("id",$("#shuxingid").val());
	    dangqian.children("input").attr("onclick",$("#shuxingonclick").val());
		dangqian.children("input").val($("#shuxingvalue").val());
		}
	if(dangqian.children("input").attr("type")=="radio"){
		//alert("radio");
		dangqian.children("input").attr("name",$("#shuxingname").val());
	    dangqian.children("input").attr("class",$("#shuxingclass").val());
	    dangqian.children("input").attr("id",$("#shuxingid").val());
	    dangqian.children("input").attr("onclick",$("#shuxingonclick").val());
		dangqian.children("input").val($("#shuxingvalue").val());
		}
	if(dangqian.children("span").text()){
		//alert("span");
		dangqian.children("span").attr("name",$("#shuxingname").val());
	    dangqian.children("span").attr("class",$("#shuxingclass").val());
	    dangqian.children("span").attr("id",$("#shuxingid").val());
	    dangqian.children("span").attr("onclick",$("#shuxingonclick").val());
		dangqian.children("span").text($("#shuxingtext").val());
		}
	if(dangqian.children("a").attr("href")){
		//alert("a");
		dangqian.children("a").attr("name",$("#shuxingname").val());
	    dangqian.children("a").attr("class",$("#shuxingclass").val());
	    dangqian.children("a").attr("id",$("#shuxingid").val());
	    dangqian.children("a").attr("onclick",$("#shuxingonclick").val());
		dangqian.children("a").text($("#shuxingtext").val());
		dangqian.children("a").attr("href",$("#shuxinghref").val());
		}
	if(dangqian.children("select").attr("name")){
		//alert("select");
		dangqian.children("select").attr("name",$("#shuxingname").val());
	    dangqian.children("select").attr("class",$("#shuxingclass").val());
	    dangqian.children("select").attr("id",$("#shuxingid").val());
	    dangqian.children("select").attr("onclick",$("#shuxingonclick").val());
		dangqian.children("select").val($("#shuxingvalue").val());
		}
	if(dangqian.children("textarea").attr("name")){
		//alert("textarea");
		dangqian.children("textarea").attr("name",$("#shuxingname").val());
	    dangqian.children("textarea").attr("class",$("#shuxingclass").val());
	    dangqian.children("textarea").attr("id",$("#shuxingid").val());
	    dangqian.children("textarea").attr("onclick",$("#shuxingonclick").val());
		dangqian.children("textarea").val($("#shuxingvalue").val());
		}
	
	//$("#shuxingname").val("");
	//$("#shuxingclass").val("");
    //$("#shuxingid").val("");
	//$("#shuxingonclick").val("");
	//$("#shuxingtext").val("");
	//$("#shuxingvalue").val("");
	//if($("#shuxinghrefspan").text()){
	//	$("#shuxinghref").val("");
	//	}
	
	}
function shezhicss(){
	if(dangqian.children("input").attr("type")=="text"){
		//alert("danhang");
		dangqian.children("input").css("width",$("#csswidth").val()+"px");
		dangqian.css("left",$("#cssleft").val()+"px");
		dangqian.css("top",$("#csstop").val()+"px");
	  	}
	if(dangqian.children("input").attr("type")=="button"){
		//alert("button");
		dangqian.children("input").css("width",$("#csswidth").val()+"px");
	    dangqian.children("input").css("height",$("#cssheight").val()+"px");
		dangqian.css("left",$("#cssleft").val()+"px");
	    dangqian.css("top",$("#csstop").val()+"px");
		dangqian.children("input").css("font-size",$("#cssfontsize").val()+"px");
		dangqian.children("input").css("color",$("#cssfontcolor").val());
		}
	if(dangqian.children("input").attr("type")=="checkbox"){
		//alert("checkbox");
	    dangqian.css("top",$("#csstop").val()+"px");
		dangqian.css("left",$("#cssleft").val()+"px");
		dangqian.children("input").css("font-size",$("#cssfontsize").val()+"px");
		dangqian.children("input").css("color",$("#cssfontcolor").val());
		}
	if(dangqian.children("input").attr("type")=="radio"){
		//alert("radio");
		dangqian.css("left",$("#cssleft").val()+"px");
	    dangqian.css("top",$("#csstop").val()+"px");
		dangqian.children("input").css("font-size",$("#cssfontsize").val()+"px");
		dangqian.children("input").css("color",$("#cssfontcolor").val());
		}
	if(dangqian.children("span").text()){
		//alert("span");
		dangqian.css("left",$("#cssleft").val()+"px");
	    dangqian.css("top",$("#csstop").val()+"px");
		dangqian.children("span").css("font-size",$("#cssfontsize").val()+"px");
		dangqian.children("span").css("color",$("#cssfontcolor").val());
		}
	if(dangqian.children("a").attr("href")){
		//alert("a");
		dangqian.css("left",$("#cssleft").val()+"px");
	    dangqian.css("top",$("#csstop").val()+"px");
		dangqian.children("a").css("font-size",$("#cssfontsize").val()+"px");
		dangqian.children("a").css("color",$("#cssfontcolor").val());
		}
	if(dangqian.children("select").attr("name")){
		//alert("select");
		dangqian.css("left",$("#cssleft").val()+"px");
	    dangqian.css("top",$("#csstop").val()+"px");
		}
	if(dangqian.children("textarea").attr("name")){
		//alert("textarea");
		dangqian.css("left",$("#cssleft").val()+"px");
	    dangqian.css("top",$("#csstop").val()+"px");
		dangqian.children("textarea").css("width",$("#csswidth").val()+"px");
	    dangqian.children("textarea").css("height",$("#cssheight").val()+"px");
		}
	
	}
	
function genggaikuangao(){
	$("#biaodanwidth").val(parseInt($("#screen").css("width")));
	$("#biaodanheight").val(parseInt($("#screen").css("height")));
	$( "#resizeform" ).dialog( "open" );
	}