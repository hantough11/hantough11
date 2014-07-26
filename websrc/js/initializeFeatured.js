var maxFeatured = new Number;

$(document).ready(init_initializeFeatured);

function init_initializeFeatured(){
	// Featured 불러오기
	loadFeaturedInfo();
	
	// Featured 개수가 2개 미만일 경우 slide dimmed 효과 없앤다.
	if(maxFeatured < 2)$("#body_featured .body_contents_sub_dimmed").hide();
	
	// Featured 개수가 없을 경우, 메시지 출력 및 방향키 제거
	if(maxFeatured <=0 ){
		$("#body_featured .noContents").show();
		$("#body_featured .body_button").hide();
	}
	
	// Featured List 생성
	var makeFeaturedList = new MakeFeatured();
	makeFeaturedList.kind = "list";
	makeFeaturedList.wrapper = "#body_featured .body_contents";
	makeFeaturedList.cellWidth = 104;
	makeFeaturedList.cellHeight = 58.5;
	makeFeaturedList.build();	
	
	// Featured Popup 생성
	var makeFeaturedPopup = new MakeFeatured();
	makeFeaturedPopup.kind = "popup";
	makeFeaturedPopup.wrapper = "#body_featured .previewPopup_scene";
	makeFeaturedPopup.cellWidth = 160;
	makeFeaturedPopup.cellHeight = 90;
	makeFeaturedPopup.build();
	
	// Featured Editor 생성
	var makeFeaturedEditor = new MakeFeatured();
	makeFeaturedEditor.kind = "editor";
	makeFeaturedEditor.wrapper = "#body_featured .editMap_scene";
	makeFeaturedEditor.cellWidth = 230;
	makeFeaturedEditor.cellHeight = 129;
	makeFeaturedEditor.build();	
}

function loadFeaturedInfo() {
	orderTmp = localStorage.getItem("publishEveryone.order");
	for(var k=1; k<orderTmp; k++) {
		featured[k] = new Featured();		
		featured[k].divided = localStorage.getItem("publishEveryone_" +  Number(k) + ".divided");			
		featured[k].background.kind = localStorage.getItem("publishEveryone_" + Number(k) + ".background.kind");
		featured[k].background.color = localStorage.getItem("publishEveryone_" + Number(k) + ".background.color");
		featured[k].background.image.url = localStorage.getItem("publishEveryone_" + Number(k) + ".background.image.url");			
		for(var i=1; i<=25; i++) {
			featured[k].cell[i].kind = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].kind");				
			if(featured[k].cell[i].kind){					
				featured[k].cell[i].x = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].x");
				featured[k].cell[i].y = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].y");
				switch(featured[k].cell[i].kind) {
					case "image":
						featured[k].cell[i].image.theFirstOrderFiveImages = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].image.theFirstOrderFiveImages");
						featured[k].cell[i].image.selectedFiveImageNo = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].image.selectedFiveImageNo");
						for(var j=1; j<=5; j++) {
							featured[k].cell[i].image.url[j] = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].image.url[" + j + "]");							
						
							featured[k].cell[i].image.imageInCellPercentage[j] = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].image.imageInCellPercentage[" + j + "]");
							featured[k].cell[i].image.imageInCellTop[j] = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].image.imageInCellTop[" + j + "]");
							featured[k].cell[i].image.imageInCellLeft[j] = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].image.imageInCellLeft[" + j + "]");
							featured[k].cell[i].image.imageInCellWidth[j] = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].image.imageInCellWidth[" + j + "]");
							featured[k].cell[i].image.imageInCellHeight[j] = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].image.imageInCellHeight[" + j + "]");
							featured[k].cell[i].image.imageInEditPercentage[j] = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].image.imageInEditPercentage[" + j + "]");
							featured[k].cell[i].image.imageInEditPositionX[j] = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].image.imageInEditPositionX[" + j + "]");
							featured[k].cell[i].image.imageInEditPositionY[j] = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].image.imageInEditPositionY[" + j + "]");
						}
						break;
					case "text":
						featured[k].cell[i].text.contents = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].text.contents");
						featured[k].cell[i].text.font_size = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].text.font_size");
						featured[k].cell[i].text.font_color = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].text.font_color");
						featured[k].cell[i].text.font_family = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].text.font_family");
						featured[k].cell[i].text.font_align = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].text.font_align");
						featured[k].cell[i].text.font_back_color = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].text.font_back_color");
						featured[k].cell[i].text.font_weight = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].text.font_weight");
						featured[k].cell[i].text.font_vertical = localStorage.getItem("publishEveryone_" + Number(k) + ".cell[" + i + "].text.font_vertical");
						break;	
					default :
						break;
				}
			}
		}
	}	
	maxFeatured = orderTmp - 1;	
	console.log("The maximum featured is " + maxFeatured);
}


function MakeFeatured() {
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
		for(var i=1; i<=maxFeatured; i++){
			tempId = i;
			updateVariation(this.kind);
			$(this.wrapper).prepend(cellHTMLString);
		}
		
		// css 생성
		for(var featuredNo=1; featuredNo<=maxFeatured; featuredNo++){
			switch(this.kind) {
				case "list":					
					// size 정의
					$(this.wrapper + "_" + featuredNo + "_img").css({
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
					$(this.wrapper + "_" + featuredNo + "_img").css({
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
					$(this.wrapper + "_" + featuredNo + "_img").css({
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
					$(this.wrapper + "_" + featuredNo + "_img").css({
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
				if(featured[featuredNo].cell[cellNo].kind){
					switch(featured[featuredNo].cell[cellNo].kind) {
						case "widgets":
							fillImageCellElement(this.cellWidth, this.cellHeight, this.wrapper);
							if(this.kind == "editor")fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
							//$(this.wrapper + "_" + featuredNo + "_img").prepend("<span style='font-family:arial;color:#ddd; font-size:14px; position:absolute; top:" + ((elementTop + elementTop + elementHeight) / 2 - 7) + "px; left:" + ((elementLeft + elementLeft + elementWidth) / 2 - 19) + "px; z-index:10;'>IMAGE</span>");
							break;
						case "image":
							fillImageCellElement(this.cellWidth, this.cellHeight, this.wrapper);
							if(this.kind == "editor")fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
							//$(this.wrapper + "_" + featuredNo + "_img").prepend("<span style='font-family:arial;color:#ddd; font-size:14px; position:absolute; top:" + ((elementTop + elementTop + elementHeight) / 2 - 7) + "px; left:" + ((elementLeft + elementLeft + elementWidth) / 2 - 19) + "px; z-index:10;'>IMAGE</span>");
							break;
						case "text":
							fillTextCellElement(this.cellWidth, this.cellHeight, this.wrapper);
							if(this.kind == "editor")fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
							//$(this.wrapper + "_" + featuredNo + "_img").prepend("<span style='font-family:arial;color:#ddd; font-size:14px; position:absolute; top:" + ((elementTop + elementTop + elementHeight) / 2 - 7) + "px; left:" + ((elementLeft + elementLeft + elementWidth) / 2 - 15) + "px; z-index:10;'>TEXT</span>");
							break;
						case "empty":
							fillEmptyCellElement(this.cellWidth, this.cellHeight, this.wrapper);
							if(this.kind == "editor")fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
							//$(this.wrapper + "_" + featuredNo + "_img").prepend("<span style='font-family:arial;color:#ddd; font-size:14px; position:absolute; top:" + ((elementTop + elementTop + elementHeight) / 2 - 7) + "px; left:" + ((elementLeft + elementLeft + elementWidth) / 2 - 46) + "px; z-index:10;'>BACKGROUND</span>");
							break;						
						default :
							break;					
					}
				}
			}
		}
		
		function fillBackground(wrapper) {			
			if(featured[featuredNo].background.kind == "color"){
				$(wrapper + "_" + featuredNo + "_img .body_contents_background").css({
					"display":"block",
					"position":"absolute",
					"width":backgroundWidth + "px",
					"height":backgroundHeight +"px",
					"background-color":featured[featuredNo].background.color
				});
			}
			else if(featured[featuredNo].background.kind == "image"){
				$(wrapper + "_" + featuredNo + "_img .body_contents_background").css({
					"display":"block",
					"position":"absolute",
					"width":backgroundWidth + "px",
					"height":backgroundHeight +"px",
					"background-image":"url(" + featured[featuredNo].background.image.url + ")",
					"background-size":"100% 100%"
				});
			}
			else {
				$(wrapper + "_" + featuredNo + "_img .body_contents_background").css({
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
			
			elementWidth = featured[featuredNo].cell[cellNo].x * width;
			elementHeight = featured[featuredNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;
			
			switch(wrapper) {
				case "#body_featured .body_contents" :
					backgroundSizeValue = (featured[featuredNo].cell[cellNo].image.imageInEditPercentage[featured[featuredNo].cell[cellNo].image.theFirstOrderFiveImages]);
					backgroundPositionXValue = (featured[featuredNo].cell[cellNo].image.imageInEditPositionX[featured[featuredNo].cell[cellNo].image.theFirstOrderFiveImages]) * (104 / 230);
					backgroundPositionYValue = (featured[featuredNo].cell[cellNo].image.imageInEditPositionY[featured[featuredNo].cell[cellNo].image.theFirstOrderFiveImages]) * (104 / 230);				
					break;
				case "#body_featured .previewPopup_scene" :
					backgroundSizeValue = (featured[featuredNo].cell[cellNo].image.imageInEditPercentage[featured[featuredNo].cell[cellNo].image.theFirstOrderFiveImages]);
					backgroundPositionXValue = (featured[featuredNo].cell[cellNo].image.imageInEditPositionX[featured[featuredNo].cell[cellNo].image.theFirstOrderFiveImages]) * (160 / 230);
					backgroundPositionYValue = (featured[featuredNo].cell[cellNo].image.imageInEditPositionY[featured[featuredNo].cell[cellNo].image.theFirstOrderFiveImages]) * (160 / 230);				
					break;
				case "#body_featured .editMap_scene" :
					backgroundSizeValue = featured[featuredNo].cell[cellNo].image.imageInEditPercentage[featured[featuredNo].cell[cellNo].image.theFirstOrderFiveImages];
					backgroundPositionXValue = (featured[featuredNo].cell[cellNo].image.imageInEditPositionX[featured[featuredNo].cell[cellNo].image.theFirstOrderFiveImages]);
					backgroundPositionYValue = (featured[featuredNo].cell[cellNo].image.imageInEditPositionY[featured[featuredNo].cell[cellNo].image.theFirstOrderFiveImages]);				
					break;
			}
			// set backboard
			$(wrapper + "_" + featuredNo + "_img .cell_" + cellNo).css({					
				//"border":"2px solid #ddd",
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:elementTop + "px",
				left:elementLeft + "px"						
			});
			
			// set css of 5 images
			for(var i=1; i<=5; i++){
				$(wrapper + "_" + featuredNo + "_img .cell_" + cellNo + " .img_" + i).css({
					"background-repeat":"no-repeat",
					"position":"absolute",
					"width":elementWidth + "px",
					"height":elementHeight + "px",
					top:0,
					left:0			
				});					
			}
			
			// set only one image
			$(wrapper + "_" + featuredNo + "_img .cell_" + cellNo + " .img_1").css({						
				"background-image":"url(" + featured[featuredNo].cell[cellNo].image.url[featured[featuredNo].cell[cellNo].image.theFirstOrderFiveImages] + ")",					
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
			elementWidth = featured[featuredNo].cell[cellNo].x * width;
			elementHeight = featured[featuredNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;	
			
			$(wrapper + "_" + featuredNo + "_img .cell_" + cellNo).css({
				"background-color":featured[featuredNo].cell[cellNo].text.font_back_color,
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:elementTop + "px",
				left:elementLeft + "px"
			});	
			$(wrapper + "_" + featuredNo + "_img .cell_" + cellNo + " .vertical-align").css({
				"width":elementWidth + "px",
				"height":Number((width/256) * featured[featuredNo].cell[cellNo].text.font_size) + "px",
				"font-size":Number((width/256) * featured[featuredNo].cell[cellNo].text.font_size) + "px",
				"color":featured[featuredNo].cell[cellNo].text.font_color,
				"font-family":featured[featuredNo].cell[cellNo].text.font_family,
				"text-align":featured[featuredNo].cell[cellNo].text.font_align,				
				"font-weight":featured[featuredNo].cell[cellNo].text.font_weight
			});
			runTextVerticalAlign(wrapper + "_" + featuredNo + "_img .cell_" + cellNo + " .vertical-align", featured[featuredNo].cell[cellNo].text.font_vertical);
			if((featured[featuredNo].cell[cellNo].text.contents) != "undefined")$(wrapper + "_" + featuredNo + "_img .cell_" + cellNo + " .vertical-align-" + featured[featuredNo].cell[cellNo].text.font_vertical).text(featured[featuredNo].cell[cellNo].text.contents);
		}		
		
		function fillEmptyCellElement(width, height, wrapper) {
			elementWidth = featured[featuredNo].cell[cellNo].x * width;
			elementHeight = featured[featuredNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;			
			$(wrapper + "_" + featuredNo + "_img .cell_" + cellNo).css({
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
			elementWidth = featured[featuredNo].cell[cellNo].x * width;
			elementHeight = featured[featuredNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;
			$(wrapper + "_" + featuredNo + "_img .cell_" + cellNo).hover(
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
												"<span class='divided'>" + featured[tempId].divided + "</span>" + 
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