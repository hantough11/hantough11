var maxMyproject = new Number;

$(document).ready(init_initializeMyprojects);

function init_initializeMyprojects() {	
	// Myproject 불러오기
	loadMyprojectInfo();
	
	// Myproject 개수가 2개 미만일 경우 slide dimmed 효과 없앤다.
	if(maxMyproject < 2)$("#body_myprojects .body_contents_sub_dimmed").hide();	
	
	// Myproject 개수가 없을 경우, 메시지 출력 및 방향키 제거
	if(maxMyproject <=0 ){
		$("#body_myprojects .noContents").show();
		$("#body_myprojects .body_button").hide();
	}
	
	// Myproject List 생성
	var makeMyprojectList = new MakeMyproject();
	makeMyprojectList.kind = "list";
	makeMyprojectList.wrapper = "#body_myprojects .body_contents";
	makeMyprojectList.cellWidth = 104;
	makeMyprojectList.cellHeight = 58.5;
	makeMyprojectList.build();	
	
	// Myproject Popup 생성
	var makeMyprojectPopup = new MakeMyproject();
	makeMyprojectPopup.kind = "popup";
	makeMyprojectPopup.wrapper = "#body_myprojects .previewPopup_scene";
	makeMyprojectPopup.cellWidth = 160;
	makeMyprojectPopup.cellHeight = 90;
	makeMyprojectPopup.build();
	
	// Myproject Editor 생성
	var makeMyprojectEditor = new MakeMyproject();
	makeMyprojectEditor.kind = "editor";
	makeMyprojectEditor.wrapper = "#body_myprojects .editMap_scene";
	makeMyprojectEditor.cellWidth = 230;
	makeMyprojectEditor.cellHeight = 129;
	makeMyprojectEditor.build();	
}

function loadMyprojectInfo() {
	orderTmp = localStorage.getItem("save.order");
	for(var k=1; k<orderTmp; k++) {
		myproject[k] = new Myproject();		
		myproject[k].divided = localStorage.getItem("save_" +  Number(k) + ".divided");			
		myproject[k].background.kind = localStorage.getItem("save_" + Number(k) + ".background.kind");
		myproject[k].background.color = localStorage.getItem("save_" + Number(k) + ".background.color");
		myproject[k].background.image.url = localStorage.getItem("save_" + Number(k) + ".background.image.url");			
		for(var i=1; i<=25; i++) {
			myproject[k].cell[i].kind = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].kind");				
			if(myproject[k].cell[i].kind){					
				myproject[k].cell[i].x = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].x");
				myproject[k].cell[i].y = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].y");
				switch(myproject[k].cell[i].kind) {
					case "image":
						myproject[k].cell[i].image.theFirstOrderFiveImages = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].image.theFirstOrderFiveImages");
						myproject[k].cell[i].image.selectedFiveImageNo = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].image.selectedFiveImageNo");
						for(var j=1; j<=5; j++) {
							myproject[k].cell[i].image.url[j] = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].image.url[" + j + "]");
							
							myproject[k].cell[i].image.imageInCellPercentage[j] = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].image.imageInCellPercentage[" + j + "]");
							myproject[k].cell[i].image.imageInCellTop[j] = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].image.imageInCellTop[" + j + "]");
							myproject[k].cell[i].image.imageInCellLeft[j] = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].image.imageInCellLeft[" + j + "]");
							myproject[k].cell[i].image.imageInCellWidth[j] = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].image.imageInCellWidth[" + j + "]");
							myproject[k].cell[i].image.imageInCellHeight[j] = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].image.imageInCellHeight[" + j + "]");							
							myproject[k].cell[i].image.imageInEditPercentage[j] = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].image.imageInEditPercentage[" + j + "]");
							myproject[k].cell[i].image.imageInEditPositionX[j] = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].image.imageInEditPositionX[" + j + "]");
							myproject[k].cell[i].image.imageInEditPositionY[j] = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].image.imageInEditPositionY[" + j + "]");
						}
						break;
					case "text":
						myproject[k].cell[i].text.contents = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].text.contents");
						myproject[k].cell[i].text.font_size = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].text.font_size");
						myproject[k].cell[i].text.font_color = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].text.font_color");
						myproject[k].cell[i].text.font_family = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].text.font_family");
						myproject[k].cell[i].text.font_align = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].text.font_align");
						myproject[k].cell[i].text.font_back_color = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].text.font_back_color");
						myproject[k].cell[i].text.font_weight = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].text.font_weight");
						myproject[k].cell[i].text.font_vertical = localStorage.getItem("save_" + Number(k) + ".cell[" + i + "].text.font_vertical");
						break;	
					default :
						break;
				}
			}
		}
	}	
	maxMyproject = orderTmp - 1;	
	console.log("The maximum myproject is " + maxMyproject);
}


function MakeMyproject() {
	var cellNo = new Number;
	var elementWidth = new Number;
	var elementHeight = new Number;
	var elementTop = new Number;
	var elementLeft = new Number;
	var tempId = 1;
	var cellHTMLString = new String;	
	
	this.build = function(){		
		var backgroundWidth = this.cellWidth * 5;
		var backgroundHeight = this.cellHeight * 5;
		
		// html 작성
		for(var i=1; i<=maxMyproject; i++){
			tempId = i;
			updateVariation(this.kind);
			$(this.wrapper).prepend(cellHTMLString);
		}
		
		// css 생성
		for(var myprojectNo=1; myprojectNo<=maxMyproject; myprojectNo++){
			switch(this.kind) {
				case "list":					
					// size 정의
					$(this.wrapper + "_" + myprojectNo + "_img").css({
						"position":"absolute",
						"width":backgroundWidth + "px",
						"height":backgroundHeight +"px",
						top:"6px",
						left:"6px"						
					});
					// Background 정의
					fillBackground(this.wrapper);
					break;
				case "popup":
					// size 정의
					$(this.wrapper + "_" + myprojectNo + "_img").css({
						"position":"absolute",
						"width":backgroundWidth + "px",
						"height":backgroundHeight +"px",
						top:"42px",
						left:"59px"						
					});
					// Background 정의
					fillBackground(this.wrapper);
					break;
				case "editor":
					// size 정의
					$(this.wrapper + "_" + myprojectNo + "_img").css({
						"position":"absolute",
						"width":backgroundWidth + "px",
						"height":backgroundHeight +"px",
						top:"0px",
						left:"0px"						
					});
					// Background 정의
					fillBackground(this.wrapper);
					break;
				case "player":
					// size 정의
					$(this.wrapper + "_" + myprojectNo + "_img").css({
						"position":"absolute",
						"width":backgroundWidth + "px",
						"height":backgroundHeight +"px",
						top:"0px",
						left:"0px"						
					});
					// Background 정의
					fillBackground(this.wrapper);
					break;					
			}						
			
			for(cellNo=1; cellNo<=25; cellNo++){
				if(myproject[myprojectNo].cell[cellNo].kind){
					switch(myproject[myprojectNo].cell[cellNo].kind) {
						case "widgets":
							fillImageCellElement(this.cellWidth, this.cellHeight, this.wrapper);
							if(this.kind == "editor")fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
							//$(this.wrapper + "_" + myprojectNo + "_img").prepend("<span style='font-family:arial;color:#ddd; font-size:14px; position:absolute; top:" + ((elementTop + elementTop + elementHeight) / 2 - 7) + "px; left:" + ((elementLeft + elementLeft + elementWidth) / 2 - 19) + "px; z-index:10;'>IMAGE</span>");
							break;
						case "image":
							fillImageCellElement(this.cellWidth, this.cellHeight, this.wrapper);
							if(this.kind == "editor")fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
							//$(this.wrapper + "_" + myprojectNo + "_img").prepend("<span style='font-family:arial;color:#ddd; font-size:14px; position:absolute; top:" + ((elementTop + elementTop + elementHeight) / 2 - 7) + "px; left:" + ((elementLeft + elementLeft + elementWidth) / 2 - 19) + "px; z-index:10;'>IMAGE</span>");
							break;
						case "text":
							fillTextCellElement(this.cellWidth, this.cellHeight, this.wrapper);
							if(this.kind == "editor")fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
							//$(this.wrapper + "_" + myprojectNo + "_img").prepend("<span style='font-family:arial;color:#ddd; font-size:14px; position:absolute; top:" + ((elementTop + elementTop + elementHeight) / 2 - 7) + "px; left:" + ((elementLeft + elementLeft + elementWidth) / 2 - 15) + "px; z-index:10;'>TEXT</span>");
							break;
						case "empty":
							fillEmptyCellElement(this.cellWidth, this.cellHeight, this.wrapper);
							if(this.kind == "editor")fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
							//$(this.wrapper + "_" + myprojectNo + "_img").prepend("<span style='font-family:arial;color:#ddd; font-size:14px; position:absolute; top:" + ((elementTop + elementTop + elementHeight) / 2 - 7) + "px; left:" + ((elementLeft + elementLeft + elementWidth) / 2 - 46) + "px; z-index:10;'>BACKGROUND</span>");
							break;						
						default :
							break;					
					}
				}
			}
		}
		
		function fillBackground(wrapper) {			
			if(myproject[myprojectNo].background.kind == "color"){
				$(wrapper + "_" + myprojectNo + "_img .body_contents_background").css({
					"display":"block",
					"position":"absolute",
					"width":backgroundWidth + "px",
					"height":backgroundHeight +"px",
					"background-color":myproject[myprojectNo].background.color
				});
			}
			else if(myproject[myprojectNo].background.kind == "image"){
				$(wrapper + "_" + myprojectNo + "_img .body_contents_background").css({
					"display":"block",
					"position":"absolute",
					"width":backgroundWidth + "px",
					"height":backgroundHeight +"px",
					"background-image":"url(" + myproject[myprojectNo].background.image.url + ")",
					"background-size":"100% 100%"
				});
			}
			else {
				$(wrapper + "_" + myprojectNo + "_img .body_contents_background").css({
					"display":"block",
					"position":"absolute",
					"width":backgroundWidth + "px",
					"height":backgroundHeight +"px",					
				});
			}
		}		
		
		function fillImageCellElement(width, height, wrapper) {
			// 변수 설정
			var backgroundSizeValue = new Number;
			var backgroundPositionXValue = new Number;
			var backgroundPositionYValue = new Number;
			
			elementWidth = myproject[myprojectNo].cell[cellNo].x * width;
			elementHeight = myproject[myprojectNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;
			
			switch(wrapper) {
				case "#body_myprojects .body_contents" :
					backgroundSizeValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPercentage[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]);
					backgroundPositionXValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPositionX[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]) * (104 / 230);
					backgroundPositionYValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPositionY[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]) * (104 / 230);				
					break;
				case "#body_myprojects .previewPopup_scene" :
					backgroundSizeValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPercentage[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]);
					backgroundPositionXValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPositionX[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]) * (160 / 230);
					backgroundPositionYValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPositionY[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]) * (160 / 230);				
					break;
				case "#body_myprojects .editMap_scene" :
					backgroundSizeValue = myproject[myprojectNo].cell[cellNo].image.imageInEditPercentage[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages];
					backgroundPositionXValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPositionX[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]);
					backgroundPositionYValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPositionY[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]);				
					break;
			}
			
			// set backboard
			$(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo).css({
				//"border":"2px solid #ddd",
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:elementTop + "px",
				left:elementLeft + "px"						
			});
			
			// set css of 5 images
			for(var i=1; i<=5; i++){
				$(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo + " .img_" + i).css({
					"background-repeat":"no-repeat",
					"position":"absolute",
					"width":elementWidth + "px",
					"height":elementHeight + "px",
					top:0,
					left:0			
				});					
			}
			
			// set only one image
			$(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo + " .img_1").css({						
				"background-image":"url(" + myproject[myprojectNo].cell[cellNo].image.url[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages] + ")",					
				"background-size":backgroundSizeValue + "%",
				"background-position-x":backgroundPositionXValue + "px",
				"background-position-y":backgroundPositionYValue + "px",
				"background-repeat":"no-repeat",
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:0,
				left:0			
			});			
		}		
		
		function fillTextCellElement(width, height, wrapper) {
			elementWidth = myproject[myprojectNo].cell[cellNo].x * width;
			elementHeight = myproject[myprojectNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;			
						
			$(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo).css({
				"background-color":myproject[myprojectNo].cell[cellNo].text.font_back_color,
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:elementTop + "px",
				left:elementLeft + "px"
			});	
			$(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo + " .vertical-align").css({
				"width":elementWidth + "px",
				"height":Number((width/256) * myproject[myprojectNo].cell[cellNo].text.font_size) + "px",
				"font-size":Number((width/256) * myproject[myprojectNo].cell[cellNo].text.font_size) + "px",
				"color":myproject[myprojectNo].cell[cellNo].text.font_color,
				"font-family":myproject[myprojectNo].cell[cellNo].text.font_family,
				"text-align":myproject[myprojectNo].cell[cellNo].text.font_align,				
				"font-weight":myproject[myprojectNo].cell[cellNo].text.font_weight
			});
			runTextVerticalAlign(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo + " .vertical-align", myproject[myprojectNo].cell[cellNo].text.font_vertical);
			if((myproject[myprojectNo].cell[cellNo].text.contents) != "undefined")$(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo + " .vertical-align-" + myproject[myprojectNo].cell[cellNo].text.font_vertical).text(myproject[myprojectNo].cell[cellNo].text.contents);
		}		
		
		function fillEmptyCellElement(width, height, wrapper) {
			elementWidth = myproject[myprojectNo].cell[cellNo].x * width;
			elementHeight = myproject[myprojectNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;			
			$(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo).css({
				//"background-image":'',
				"background-size":"100% 100%",
				//"border":"2px solid #ddd",
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:elementTop + "px",
				left:elementLeft + "px"						
			});				
		}		
		
		function fillCellElementHover(width, height, wrapper) {
			elementWidth = myproject[myprojectNo].cell[cellNo].x * width;
			elementHeight = myproject[myprojectNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;
			$(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo).hover(
				function(){
					$(this).css({						
						"border":"4px solid #00d7ff",
						top:"-=4px",
						left:"-=4px",
						"z-index":5
					});
				},
				function(){
					$(this).css({						
						"border":"none",
						top:"+=4px",
						left:"+=4px",
						"z-index":0						
					});
				}
			);
		}		
		
		function updateVariation(kind) {
			switch(kind) {
				case "list" :
					cellHTMLString =  "<a id='" + tempId + "' class='slideList' href='#'>" +
											"<div class='body_contents_sub list_" + tempId + "'>" +												
												"<div class='body_contents_" + tempId + "_img'>" +
													"<div class='body_contents_background'>" +
													"</div>" +
													"<div class='cell_1'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_2'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_3'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_4'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_5'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_6'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_7'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_8'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_9'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_10'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_11'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_12'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +										
													"<div class='cell_13'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_14'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_15'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_16'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_17'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_18'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_19'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_20'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +										
													"<div class='cell_21'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_22'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +										
													"<div class='cell_23'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_24'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_25'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +		
												"</div>" +
												"<span class='divided'>" + myproject[tempId].divided + "</span>" + 
												"<span class='body_contents_1_text'><img src='../websrc/img/main/lb_main_featured_06.png'></span>" +
												//"<span class='body_contents_1_widget_1'><img src='../websrc/img/main/lb_main_featured_08.png'></span>" +
												//"<span class='body_contents_1_widget_2'><img src='../websrc/img/main/lb_main_featured_11.png'></span>" +
												//"<span class='body_contents_1_widget_3'><img src='../websrc/img/main/lb_main_featured_10.png'></span>" +
												//"<span class='body_contents_1_widget_4'><img src='../websrc/img/main/lb_main_featured_09.png'></span>" +
											"</div>" +
										"</a>";
					break;
				case 'popup' :
					cellHTMLString = "<div class='previewPopup_scene_" + tempId + "_img'>" +
										"<div class='body_contents_background'>" +
										"</div>" +
										"<div class='cell_1'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_2'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_3'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_4'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_5'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_6'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_7'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_8'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_9'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_10'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_11'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_12'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +										
										"<div class='cell_13'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_14'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_15'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_16'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_17'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_18'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_19'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_20'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +										
										"<div class='cell_21'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_22'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +										
										"<div class='cell_23'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_24'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_25'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
									"</div>";
					break;
				case 'editor' :
					cellHTMLString = "<div class='editMap_scene_" + tempId + "_img'>" +
										"<div class='body_contents_background'>" +
										"</div>" +
										"<a id='1' href='#'><div class='cell_1'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='2' href='#'><div class='cell_2'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='3' href='#'><div class='cell_3'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='4' href='#'><div class='cell_4'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='5' href='#'><div class='cell_5'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='6' href='#'><div class='cell_6'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='7' href='#'><div class='cell_7'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='8' href='#'><div class='cell_8'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='9' href='#'><div class='cell_9'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='10' href='#'><div class='cell_10'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +
										
										"<a id='11' href='#'><div class='cell_11'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='12' href='#'><div class='cell_12'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='13' href='#'><div class='cell_13'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='14' href='#'><div class='cell_14'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='15' href='#'><div class='cell_15'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='16' href='#'><div class='cell_16'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='17' href='#'><div class='cell_17'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='18' href='#'><div class='cell_18'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='19' href='#'><div class='cell_19'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='20' href='#'><div class='cell_20'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +
										"<a id='21' href='#'><div class='cell_21'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='22' href='#'><div class='cell_22'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='23' href='#'><div class='cell_23'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='24' href='#'><div class='cell_24'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='25' href='#'><div class='cell_25'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +
									"</div>";
					break;
				case 'player' :
					cellHTMLString = "<div class='player_scene_" + tempId + "_img'>" +
										"<div class='body_contents_background'>" +
										"</div>" +
										"<div class='cell_1'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_2'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_3'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_4'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_5'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_6'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_7'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_8'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_9'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_10'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_11'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_12'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +										
										"<div class='cell_13'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_14'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_15'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_16'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_17'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_18'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_19'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_20'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +										
										"<div class='cell_21'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_22'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +										
										"<div class='cell_23'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_24'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_25'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
									"</div>";
					break;
				default:
					break;
			}
		}
	};
}