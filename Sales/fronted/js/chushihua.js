$(function() {
	// $("#hehe").resizable(newtext);
	// $( "#screen" ).sortable({ grid: [ 20, 10 ] });
	// $( "#screen" ).disableSelection();
	// $( "#also" ).resizable();
	$("input[type=button]").button();  //��ť��ʽ��ʼ��
	// .click();

	// $( "#htmltools" ).sortable();
	// $( "#htmltools" ).disableSelection();

	$("#toolbar").accordion({             //�������ʼ��
		collapsible : true
	});

	$(".liebiao").draggable({           
		opacity : 0.9,
		helper : "clone",
		start : function() {
			$(document).bind("mouseup", mouseUp);
		},
		stop : tuozhuaistop
	});

	// $("#shejiqi").resizable({
	// alsoResize : "#screen"
	// });
	$("#toolbar").draggable({
		disabled : true
	});

	var tabs = $("#tabs").tabs();                //״̬���ʼ��
	tabs.find(".ui-tabs-nav").sortable({
		axis : "x",
		stop : function() {
			tabs.tabs("refresh");
		}
	});
	$("#tabs").draggable({
		disabled : true
	});

	var cssandshuxing = $("#cssandshuxing").tabs();      
	cssandshuxing.find(".ui-tabs-nav").sortable({
		axis : "x",
		stop : function() {
			cssandshuxing.tabs("refresh");
		}
	});
	$("#cssandshuxing").draggable({          
		disabled : true
	});

	$("#shejiqi").draggable({
		disabled : true
	});

	var allFields = $([]).add($("#biaodanid"));           //�Ի����ʼ��
	$("#renameform")
			.dialog(
					{
						autoOpen : false,
						height : 300,
						width : 350,
						modal : true,
						buttons : {
							"OK" : function() {
								allFields.removeClass("ui-state-error");

								var ceshi = "<span id='woshiyonglaiceshide'></span>";// ������ȡ

								var zuizhongshengcheng = "<div id='zuizhongshengcheng'></div>";
								$("body").append(zuizhongshengcheng);
								$("#zuizhongshengcheng").css("display", "none");
								var linshi = $("#biaodanrongqi").html();
								$("#zuizhongshengcheng").append(linshi);
								// alert($("#zuizhongshengcheng").children("#screen").children("#fuzhu0").attr("id"));
								$("#zuizhongshengcheng").children("#screen")
										.children(".fuzhu").css("border",
												"none");
								$("#zuizhongshengcheng").children("#screen")
										.children(".fuzhu").draggable();
								$("#zuizhongshengcheng").children("#screen")
										.children(".fuzhu").resizable();
								$("#zuizhongshengcheng").children("#screen")
										.children(".fuzhu")
										.draggable("destroy");
								$("#zuizhongshengcheng").children("#screen")
										.children(".fuzhu")
										.resizable("destroy");
								// $("#zuizhongshengcheng").children("#screen").children(".fuzhu").hover(function(){$(this).css("cursor","default");});
								$("#zuizhongshengcheng").children("#screen")
										.attr("id", $("#biaodanid").val());// ID��Ӧ�����������
								// �������ɴ������ȡ�����ԣ�
								alert("The final form is:"
										+ $("#zuizhongshengcheng").html());
								if ($("#woshiyonglaiceshide").attr("id")) {
									$("#woshiyonglaiceshide").text(
											$("#zuizhongshengcheng").html());
								} else {
									$("body").append(ceshi);
									// alert($("#woshiyonglaiceshide").attr("id"));
									$("#woshiyonglaiceshide").text(
											$("#zuizhongshengcheng").html());
								}

								$("#zuizhongshengcheng").remove();

								$(this).dialog("close");
							},
							"Cancel" : function() {
								$(this).dialog("close");
							}

						},
						close : function() {
							allFields.val("").removeClass("ui-state-error");
						}
					});
	// $( "#screen" ).resizable();
	// for(var i=0;i<5;i++){
	// var gao=i*39;
	// var j=i+1;
	// $("#liebiao"+j).css("margin-top",gao+"px");
	// alert($("#liebiao"+j).attr("id"));
	// }
	var allFields1 = $([]).add($("#biaodanwidth")).add($("#biaodanheight"));    
	$("#resizeform")
			.dialog(
					{
						autoOpen : false,
						height : 300,
						width : 350,
						modal : true,
						buttons : {
							"OK" : function() {
								allFields1.removeClass("ui-state-error");
                                
								$("#shejiqi").css("width",$("#biaodanwidth").val()+"px");
								$("#shejiqi").css("height",parseInt($("#biaodanheight").val())+40+"px");
								$("#screen").css("width",$("#biaodanwidth").val()+"px");
								$("#screen").css("height",parseInt($("#biaodanheight").val())+"px");

								$(this).dialog("close");
							},
							"Cancel" : function() {
								$(this).dialog("close");
							}

						},
						close : function() {
							allFields1.val("").removeClass("ui-state-error");
						}
					});
	var allFields2 = $([]).add($("#biaogehangshu")).add($("#biaogelieshu"));    
	$("#getnewtable")
			.dialog(
					{
						autoOpen : false,
						height : 300,
						width : 350,
						modal : true,
						buttons : {
							"OK" : function() {
								allFields1.removeClass("ui-state-error");
                                
								createnewtable();

								$(this).dialog("close");
							},
							"Cancel" : function() {
								$(this).dialog("close");
							}

						},
						close : function() {
							allFields1.val("").removeClass("ui-state-error");
						}
					});
	
});