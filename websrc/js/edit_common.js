$(document).ready(function(){
	// 1-b. 공통 - cell 클릭 이벤트
	// 1-b-1. 공통 - cell 클릭 이벤트 - editor layer 불러오기
	$(".editMap .cell_1").live('click', function(event) {
		ready_editor_layer(1);
	});	
	$(".editMap .cell_2").live('click', function(event) {
		ready_editor_layer(2);
	});
	$(".editMap .cell_3").live('click', function(event) {
		ready_editor_layer(3);
	});
	$(".editMap .cell_4").live('click', function(event) {
		ready_editor_layer(4);
	});
	$(".editMap .cell_5").live('click', function(event) {
		ready_editor_layer(5);
	});
	
	$(".editMap .cell_6").live('click', function(event) {
		ready_editor_layer(6);
	});
	$(".editMap .cell_7").live('click', function(event) {
		ready_editor_layer(7);
	});
	$(".editMap .cell_8").live('click', function(event) {
		ready_editor_layer(8);
	});
	$(".editMap .cell_9").live('click', function(event) {
		ready_editor_layer(9);
	});
	$(".editMap .cell_10").live('click', function(event) {
		ready_editor_layer(10);
	});
	
	$(".editMap .cell_11").live('click', function(event) {
		ready_editor_layer(11);
	});
	$(".editMap .cell_12").live('click', function(event) {
		ready_editor_layer(12);
	});
	$(".editMap .cell_13").live('click', function(event) {
		ready_editor_layer(13);
	});
	$(".editMap .cell_14").live('click', function(event) {
		ready_editor_layer(14);
	});
	$(".editMap .cell_15").live('click', function(event) {
		ready_editor_layer(15);
	});
	
	$(".editMap .cell_16").live('click', function(event) {
		ready_editor_layer(16);
	});
	$(".editMap .cell_17").live('click', function(event) {
		ready_editor_layer(17);
	});
	$(".editMap .cell_18").live('click', function(event) {
		ready_editor_layer(18);
	});
	$(".editMap .cell_19").live('click', function(event) {
		ready_editor_layer(19);
	});
	$(".editMap .cell_20").live('click', function(event) {
		ready_editor_layer(20);
	});
	
	$(".editMap .cell_21").live('click', function(event) {
		ready_editor_layer(21);
	});
	$(".editMap .cell_22").live('click', function(event) {
		ready_editor_layer(22);
	});
	$(".editMap .cell_23").live('click', function(event) {
		ready_editor_layer(23);
	});
	$(".editMap .cell_24").live('click', function(event) {
		ready_editor_layer(24);
	});
	$(".editMap .cell_25").live('click', function(event) {
		ready_editor_layer(25);
	});
	
	if($("#lay_editor_layer").length > 0){
	    // 1. 공통
		// 1-a. 공통 - 변수 선언
		var cellKind = new Array();
		var cellSizeX = new Array();
		var cellSizeY = new Array();
		//var color_no = "#202020";
		//var edit_category = 4;    // 1:cancel  2:save  3:publish  4:backgrounds  5:widgets  6:images  7:text
		var backgrounds_image_click_mode = "select";		
		var backgrounds_image_file_name = new String;
		var backgrounds_image_no = 0;
		var images_image_click_mode = "select";		
		//var images_image_file_name = new Array();	
		var images_image_no = 0;		
		var selectedCellNo = 0;		
		var text_color_list = [
			"#f00"   , "#ff6c00", "#ffaa00", "#ffef00", "#a6cf00", "#009e25", "#00b0a2", "#0075c8", "#3a32c3", "#7820b9", "#ef007c", "#000",    "#252525", "#464646", "#636363", "#7d7d7d", "#9a9a9a",
			"#ffe8e8", "#f7e2d2", "#f5eddc", "#f5f4e0", "#edf2c2", "#def7e5", "#d9eecc", "#c9e0f0", "#d6d4eb", "#e7dbed", "#f1e2ea", "#acacac", "#c2c2c2", "#cccccc", "#e1e1e1", "#ebebeb", "#ffffff", 
			"#e97d81", "#e19b73", "#d1b274", "#cfcca2", "#ceca92", "#61b977", "#53aea8", "#518fbb", "#6a65bb", "#9a54ce", "#e573ae", "#5a504b", "#767b86", "#000",    "#000",    "#000",    "#000",    
			"#951015", "#6e391a", "#785c25", "#5f5b25", "#4c511f", "#1c4827", "#0d514c", "#1b496a", "#2b285f", "#45245b", "#721947", "#352e2c", "#3c3f45", "#000",    "#000",    "#000",    "#000"
		];		
		var text_font_back_color_trigger = [
			0, 0, 0, 0, 0, 0,
			   0, 0, 0, 0, 0,
			   0, 0, 0, 0, 0,
			   0, 0, 0, 0, 0,
			   0, 0, 0, 0, 0
		];     // 0:off  1:on
		
		var text_font_color_trigger = [
			0, 0, 0, 0, 0 , 0
		];          // 0:off  1:on
		
		var text_preview_gain;
		var text_preview_gain_x;
		var text_preview_gain_y;
		
		build_text_color_list();
		//load_cell();		
		
		
		function ready_editor_layer(cell_no)
		{
			//if(enabledKey) {
			//	enabledKey = false;
				selectedCellNo = cell_no;
				popup("lay_editor_layer");
				$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 0, 'easeInOutQuint', function(){
					$('#lay_editor_layer').animate( {top:"129px", opacity:"1.0"}, 500, 'easeInOutQuint', function(){
						//enabledKey = true;
					});
					loadCellProperty(selectedSlideListKind);
					loadEditorLayerLnb();
					loadEditorLayer();
				});
			//}
		}
		
		function loadCellProperty(kind) {
		/*
			switch(kind) {
				case "playlists" :
					originalEditKind = playlist[selectedSlideListNo];
					underEditKind = JSON.parse(JSON.stringify(originalEditKind)); 
					break;			
				case "theme" :
					originalEditKind = new Template();
					originalEditKind = template[selectedSlideListNo];	
					underEditKind = new Template();
					underEditKind = originalEditKind;
					break;			
			}
*/
			
			for(var i=1; i<=25; i++){
				cellKind[i] = originalEditKind.cell[i].kind;
				cellSizeX[i] = originalEditKind.cell[i].x * 230;
				cellSizeY[i] = originalEditKind.cell[i].y * 130;
			}
			
		}
		
		
		function loadEditorLayerLnb(){
			var targetLeftBtn = new Object;
			//alert("originalEditKind.cell[selectedCellNo].kind : " + originalEditKind.cell[selectedCellNo].kind);
			
			switch(originalEditKind.cell[selectedCellNo].kind){
				case "widgets" :
					lnbWidgetsProhibit = false;
					lnbImagesProhibit = true;
					lnbTextProhibit = true;
					
					//editLayerLeftKeyLocation.vertical = 6;
					//readyForBackPage = "editLayer_images";
					
					//targetLeftBtn = $("#lay_editor_layer .left_btn .left_images");
					//targetLeftBtn.addClass("focus");
					//targetLeftBtn.css({top:"-=2"});
					//targetLeftBtn.css({left:"-=2"});
					break;
				case "image" :
					lnbWidgetsProhibit = true;
					lnbImagesProhibit = false;
					lnbTextProhibit = true;
					
					//editLayerLeftKeyLocation.vertical = 6;
					//readyForBackPage = "editLayer_images";
					
					//targetLeftBtn = $("#lay_editor_layer .left_btn .left_images");
					//targetLeftBtn.addClass("focus");
					//targetLeftBtn.css({top:"-=2"});
					//targetLeftBtn.css({left:"-=2"});
					break;
				case "text" :
					lnbWidgetsProhibit = true;
					lnbImagesProhibit = true;
					lnbTextProhibit = false;
					
					//editLayerLeftKeyLocation.vertical = 7;
					//readyForBackPage = "editLayer_text";
					
					//targetLeftBtn = $("#lay_editor_layer .left_btn .left_text");
					//targetLeftBtn.addClass("focus");
					//targetLeftBtn.css({top:"-=2"});
					//targetLeftBtn.css({left:"-=2"});
					break;
				case "empty" :
					lnbWidgetsProhibit = true;
					lnbImagesProhibit = true;
					lnbTextProhibit = true;
					
					//editLayerLeftKeyLocation.vertical = 4;
					//readyForBackPage = "editLayer_backgrounds";
					
					//targetLeftBtn = $("#lay_editor_layer .left_btn .left_backgrounds");
					//targetLeftBtn.addClass("focus");
					//targetLeftBtn.css({top:"-=2"});
					//targetLeftBtn.css({left:"-=2"});
					break;
			}			
			
			// UI 적용
			if(lnbWidgetsProhibit){
				$("#lay_editor_layer .left_btn .left_widgets").css({"background-image":"url(../websrc/img/main/lb_editor_layer_left_10_dim.png)"});
				$("#lay_editor_layer .left_btn .left_widgets").parent().removeAttr("href");
			}
			else {
				$("#lay_editor_layer .left_btn .left_widgets").css({"background-image":"url(../websrc/img/main/lb_editor_layer_left_10.png)"});
				$("#lay_editor_layer .left_btn .left_widgets").parent().attr("href", "#");
			}
			if(lnbImagesProhibit){
				$("#lay_editor_layer .left_btn .left_images").css({"background-image":"url(../websrc/img/main/lb_editor_layer_left_12_dim.png)"});
				$("#lay_editor_layer .left_btn .left_images").parent().removeAttr("href");
			}
			else {
				$("#lay_editor_layer .left_btn .left_images").css({"background-image":"url(../websrc/img/main/lb_editor_layer_left_12.png)"});
				$("#lay_editor_layer .left_btn .left_images").parent().attr("href", "#");
			}
			if(lnbTextProhibit){
				$("#lay_editor_layer .left_btn .left_text").css({"background-image":"url(../websrc/img/main/lb_editor_layer_left_14_dim.png)"});
				$("#lay_editor_layer .left_btn .left_text").parent().removeAttr("href");
			}
			else {
				$("#lay_editor_layer .left_btn .left_text").css({"background-image":"url(../websrc/img/main/lb_editor_layer_left_14.png)"});
				$("#lay_editor_layer .left_btn .left_text").parent().attr("href", "#");
			}
		}
		
		
		function loadEditorLayer()
		{			
			if(cellKind[selectedCellNo] == "empty"){
				if(underEditKind.background.kind == "color")display_edit_layer("backgrounds", "color", "1");
				else if(underEditKind.background.kind == "image")display_edit_layer("backgrounds", "image", "2");
				else display_edit_layer("backgrounds", "color", "1");
				/*switch(cellSubKind[selectedCellNo]) {
					case "color" :
						display_edit_layer("backgrounds", "color", "1");
						break;
					case "image" :
						display_edit_layer("backgrounds", "image", "2");
						break;
					case "video" :
						display_edit_layer("backgrounds", "image", "3");
						break;
					case "tv" :
						display_edit_layer("backgrounds", "image", "4");
						break;
					default :
						display_edit_layer("backgrounds", "color", "1");
						break;						
				}*/
			}
			else if(cellKind[selectedCellNo] == "widgets"){
				display_edit_layer("widgets", "clock", "4");
				/*switch(cellSubKind[selectedCellNo]) {
					case "tv" :
						display_edit_layer("widgets", "tv", "1");
						break;
					case "video" :
						display_edit_layer("widgets", "tv", "2");
						break;
					case "music" :
						display_edit_layer("widgets", "tv", "3");
						break;
					case "clock" :
						display_edit_layer("widgets", "clock", "4");
						break;
					case "weather" :
						display_edit_layer("widgets", "weather", "5");
						break;
					case "news" :
						display_edit_layer("widgets", "news", "6");
						break;
					case "currencies" :
						display_edit_layer("widgets", "currencies", "7");
						break;
					default :
						display_edit_layer("widgets", "tv", "1");
						break;
				}*/
			}	
			else if(cellKind[selectedCellNo] == "image"){
				// 이미지가 빈 영역이라면, empty와 똑같은 효과를 적용한다.
				var isItEmptyCellCount = 0;
				
				for(var i=1; i<=5; i++) {
					if(String(underEditKind.cell[selectedCellNo].image.url[i]) == "" ||  String(underEditKind.cell[selectedCellNo].image.url[i]) == "undefined" || String(underEditKind.cell[selectedCellNo].image.url[i]) == "null"){
						isItEmptyCellCount++;
					}
				}
				if (isItEmptyCellCount == 5) {
					if(underEditKind.background.kind == "color")display_edit_layer("backgrounds", "color", "1");
					else if(underEditKind.background.kind == "image")display_edit_layer("backgrounds", "image", "2");
					else display_edit_layer("backgrounds", "color", "1");
				}
				else display_edit_layer("images", "", "");
			}
			else if(cellKind[selectedCellNo] == "text"){
				display_edit_layer("text", "", "");
				
				preview_text_trigger();
				preview_text_style_change();
			}
		}
		
		
		// 1-b-3. 공통 - cell 클릭 이벤트 - editor layer 보이기
		function display_edit_layer(left_category, top_category, top_no){
			// top
			if(top_no != "")$("#lay_editor_layer ." + left_category +" .top_btn #" + top_no).click();
			
			// left
			left_navigation(left_category);
			
			// contents
			window_reset();
			$("#lay_editor_layer ." + left_category).show();
			if(top_category != "")$("#lay_editor_layer ." + left_category + " ." + top_category).show();
			
			// backgrounds 경우, 배경이미지 불러오기
			if(left_category == "backgrounds"){
				switch(top_category) {
					case "color" :
						break;
					case "image" :
						if(String(underEditKind.background.image.url) == "" ||  String(underEditKind.background.image.url) == "undefined" || String(underEditKind.background.image.url) == "null"){
							$('#lay_editor_layer .backgrounds .image .image_preview_1').css({"background-image":"url(../websrc/img/main/lb_editor_layer_background_20.png)"});
						}
						else {
							$('#lay_editor_layer .backgrounds .image .image_preview_1').css({"background-image":"url(" + underEditKind.background.image.url + ")"});
						}
						break;
				}
			}
			
			// images인 경우, 5개의 이미지 불러오기
			else if(left_category == "images"){
				deleteFiveImages();
				loadFiveImages();
			}
		}
		
		
		function deleteFiveImages() {
			for (var i=1; i<=5; i++){
				// 5개 이미지 제거				
				$("#lay_editor_layer .images .contents .image_preview_" + i + " .imageInCell img").attr("src", "");
				
				var imageDepth = $("#lay_editor_layer .images .contents .image_preview_" + i + " .imageInCell img");
				imageDepth.css({
					'position':'relative',
					'width':'100%',
					'height':'100%',
					'top':0,
					'left':0
				});				
				
				// 이미지 체크 마크 제거			
				$("#lay_editor_layer .images .contents .image_preview .image_selected").hide();
				
				// disableCell 제거
				$("#lay_editor_layer .image_preview .image_preview_" + i + " .disableCell_1").hide();
				$("#lay_editor_layer .image_preview .image_preview_" + i + " .disableCell_2").hide();
				$("#lay_editor_layer .image_preview .image_preview_" + i + " .cell_size").hide();
				
				// isFiveImageSetted 변수 false로 설정
				isFiveImageSetted[i] = false;
			}
		}
		
		
		function loadFiveImages() {
			for (var i=1; i<=5; i++){					
				console.log("********************************* loadFiveImages ***************************************");
				console.log("originalEditKind.cell[" + selectedCellNo + "].image.url[1] : " + originalEditKind.cell[selectedCellNo].image.url[1]);
				console.log("	originalEditKind.cell["+ selectedCellNo + "].image.imageInEditPercentage[1] : " + originalEditKind.cell[selectedCellNo].image.imageInEditPercentage[1]);
				console.log("originalEditKind.cell[" + selectedCellNo + "].image.url[2] : " + originalEditKind.cell[selectedCellNo].image.url[2]);
				console.log("	originalEditKind.cell["+ selectedCellNo + "].image.imageInEditPercentage[2] : " + originalEditKind.cell[selectedCellNo].image.imageInEditPercentage[2]);
				console.log("originalEditKind.cell[" + selectedCellNo + "].image.url[3] : " + originalEditKind.cell[selectedCellNo].image.url[3]);
				console.log("	originalEditKind.cell["+ selectedCellNo + "].image.imageInEditPercentage[3] : " + originalEditKind.cell[selectedCellNo].image.imageInEditPercentage[3]);
				console.log("originalEditKind.cell[" + selectedCellNo + "].image.url[4] : " + originalEditKind.cell[selectedCellNo].image.url[4]);
				console.log("	originalEditKind.cell["+ selectedCellNo + "].image.imageInEditPercentage[4] : " + originalEditKind.cell[selectedCellNo].image.imageInEditPercentage[4]);
				console.log("originalEditKind.cell[" + selectedCellNo + "].image.url[5] : " + originalEditKind.cell[selectedCellNo].image.url[5]);
				console.log("	originalEditKind.cell["+ selectedCellNo + "].image.imageInEditPercentage[5] : " + originalEditKind.cell[selectedCellNo].image.imageInEditPercentage[5]);
				
				// 5개 이미지 있는것은 보여준다.
				if(String(originalEditKind.cell[selectedCellNo].image.url[i]) != "" && String(originalEditKind.cell[selectedCellNo].image.url[i]) != "undefined" && String(originalEditKind.cell[selectedCellNo].image.url[i]) != "null"){
					$("#lay_editor_layer .images .contents .image_preview_" + i + " .imageInCell img").attr("src",  originalEditKind.cell[selectedCellNo].image.url[i]);
					
					setupActiveDisableCell(i);
					
					var imageDepth = $("#lay_editor_layer .images .contents .image_preview_" + i + " .imageInCell img");
					
					if(String(originalEditKind.cell[selectedCellNo].image.imageInCellTop[i]) != "undefined") {
						imageDepth.css({
							'position':'relative',
							'width':originalEditKind.cell[selectedCellNo].image.imageInCellPercentage[i] + '%',
							'height':originalEditKind.cell[selectedCellNo].image.imageInCellPercentage[i] + '%',
							'top':originalEditKind.cell[selectedCellNo].image.imageInCellTop[i] + 'px',
							'left':originalEditKind.cell[selectedCellNo].image.imageInCellLeft[i] + 'px'
						});
					}
					
					else {
						imageDepth.css({
							'position':'relative',
							'width':activeCellWidth[1] + '%',
							'height':activeCellHeight[1] + '%',
							'top':activeCellTop[1] + 'px',
							'left':activeCellLeft[1] + 'px'
						});	

						limitImageInCellPercentage = imageInCellPercentage[1];						
						
						console.log("여기 / originalEditKind.cell["+selectedCellNo+"].image.imageInCellTop["+i+"] : " + originalEditKind.cell[selectedCellNo].image.imageInCellTop[i]);
						console.log("여기 / originalEditKind.cell["+selectedCellNo+"].image.imageInCellPercentage["+i+"] : " + originalEditKind.cell[selectedCellNo].image.imageInCellPercentage[i]);
						console.log("여기 / activeCellTop["+1+"] : " + activeCellTop[1]);
						console.log("여기 / limitImageInCellPercentage : " + limitImageInCellPercentage);											
					}
					
					// disableCell 보이기
					//setupActiveDisableCell(i);
					$("#lay_editor_layer .image_preview .image_preview_" + i + " .disableCell_1").show();
					$("#lay_editor_layer .image_preview .image_preview_" + i + " .disableCell_2").show();
					$("#lay_editor_layer .image_preview .image_preview_" + i + " .cell_size").show();	
					
					
					
					
					console.log("cell클릭 / String(originalEditKind.cell[selectedCellNo].image.url[i])" + String(originalEditKind.cell[selectedCellNo].image.url[i]));
					
					// isFiveImageSetted 변수 true로 설정
					isFiveImageSetted[i] = true;
				}
				
				// 이미지 체크 마크 보여준다.
				if(originalEditKind.cell[selectedCellNo].image.selectedFiveImageNo !=0 ){					
					selectedFiveImageNo = originalEditKind.cell[selectedCellNo].image.selectedFiveImageNo;
					selectedImageContorlNo = selectedFiveImageNo;
					$("#lay_editor_layer .images .contents .image_preview .image_selected").show();
					$("#lay_editor_layer .images .contents .image_preview .image_selected").css({
						top:"125px",
						left:(((selectedFiveImageNo - 1) * 131) + 343) + "px"
					});					
				}
				
				// 변수 설정
				//var imageDepth = $("#lay_editor_layer .images .contents .image_preview_" + i + " .imageInCell img");
				//targetImageWidth[i] = parseInt(imageDepth.css('width'));
				//targetImageHeight[i] = parseInt(imageDepth.css('height'));
				urlOfCellImage[i] = originalEditKind.cell[selectedCellNo].image.url[i];				
				imageInCellPercentage[i] = originalEditKind.cell[selectedCellNo].image.imageInCellPercentage[i];
				imageInCellTop[i] = originalEditKind.cell[selectedCellNo].image.imageInCellTop[i];
				imageInCellLeft[i] = originalEditKind.cell[selectedCellNo].image.imageInCellLeft[i];
				imageInCellWidth[i] = originalEditKind.cell[selectedCellNo].image.imageInCellWidth[i];
				imageInCellHeight[i] = originalEditKind.cell[selectedCellNo].image.imageInCellHeight[i];
				imageInEditPercentage[i] =originalEditKind.cell[selectedCellNo].image.imageInEditPercentage[i];
				imageInEditPositionX[i] =originalEditKind.cell[selectedCellNo].image.imageInEditPositionX[i];
				imageInEditPositionY[i] =originalEditKind.cell[selectedCellNo].image.imageInEditPositionY[i];
			}
		}
		
		
		
		// 1-d. 공통 - Top button 클릭 이벤트
		// 1-d-1. 공통 - Top button 클릭 이벤트 - Backgrounds
		$("#lay_editor_layer .backgrounds .top_btn #1").click(function(){
		    top_btn_reset("backgrounds");
		    $("#lay_editor_layer .backgrounds .color").show();
			$("#lay_editor_layer .backgrounds .top_btn .color_btn").addClass("selected");
		});
		$("#lay_editor_layer .backgrounds .top_btn #2").click(function(){
            top_btn_reset("backgrounds");
			$("#lay_editor_layer .backgrounds .image").show();
			$("#lay_editor_layer .backgrounds .top_btn .image_btn").addClass("selected");
		});
		$("#lay_editor_layer .backgrounds .top_btn #3").click(function(){
		    top_btn_reset("backgrounds");
			$("#lay_editor_layer .backgrounds .video").show();
			$("#lay_editor_layer .backgrounds .top_btn .video_btn").addClass("selected");

		});
		/*
		$("#lay_editor_layer .backgrounds .top_btn #4").click(function(){
		    top_btn_reset("backgrounds");
			$("#lay_editor_layer .backgrounds .tv").show();
			$("#lay_editor_layer .backgrounds .top_btn .tv_btn").css({'background-image':'url(../websrc/img/main/lb_editor_layer_background_13.png)'});

		});
		*/
		
        // 1-d-2. 공통 - Top button 클릭 이벤트 - Widgets
		$("#lay_editor_layer .widgets .top_btn #1").click(function(){
		    top_btn_reset("widgets");
		    $("#lay_editor_layer .widgets .tv").show();
			$("#lay_editor_layer .widgets .top_btn .tv_btn").css({'background-image':'url(../websrc/img/main/lb_editor_layer_widgets_04.png)'});
		});
		$("#lay_editor_layer .widgets .top_btn #2").click(function(){
		    top_btn_reset("widgets");
		    $("#lay_editor_layer .widgets .video").show();
			$("#lay_editor_layer .widgets .top_btn .video_btn").css({'background-image':'url(../websrc/img/main/lb_editor_layer_widgets_07.png)'});
		});
		$("#lay_editor_layer .widgets .top_btn #3").click(function(){
		    top_btn_reset("widgets");
		    $("#lay_editor_layer .widgets .music").show();
			$("#lay_editor_layer .widgets .top_btn .music_btn").css({'background-image':'url(../websrc/img/main/lb_editor_layer_widgets_10.png)'});
		});
		$("#lay_editor_layer .widgets .top_btn #4").click(function(){
		    top_btn_reset("widgets");
		    $("#lay_editor_layer .widgets .clock").show();
			$("#lay_editor_layer .widgets .top_btn .clock_btn").css({'background-image':'url(../websrc/img/main/lb_editor_layer_widgets_13.png)'});
		});
		$("#lay_editor_layer .widgets .top_btn #5").click(function(){
		    top_btn_reset("widgets");
		    $("#lay_editor_layer .widgets .weather").show();
			$("#lay_editor_layer .widgets .top_btn .weather_btn").css({'background-image':'url(../websrc/img/main/lb_editor_layer_widgets_16.png)'});
		});
		$("#lay_editor_layer .widgets .top_btn #6").click(function(){
		    top_btn_reset("widgets");
		    $("#lay_editor_layer .widgets .news").show();
			$("#lay_editor_layer .widgets .top_btn .news_btn").css({'background-image':'url(../websrc/img/main/lb_editor_layer_widgets_19.png)'});
		});
		$("#lay_editor_layer .widgets .top_btn #7").click(function(){
		    top_btn_reset("widgets");
		    $("#lay_editor_layer .widgets .currencies").show();
			$("#lay_editor_layer .widgets .top_btn .currencies_btn").css({'background-image':'url(../websrc/img/main/lb_editor_layer_widgets_22.png)'});
		});

		
		// 1-e. 공통 - Top button reset, Window reset
		// 1-e-1. 공통 - Top button reset, Window reset - Top button reset
		function top_btn_reset(category){
			if(category == "backgrounds"){
				color_sub_list_reset();
				$("#lay_editor_layer .backgrounds .color").hide();
				$("#lay_editor_layer .backgrounds .image").hide();
				$("#lay_editor_layer .backgrounds .video").hide();
				$("#lay_editor_layer .backgrounds .tv").hide();		

				$("#lay_editor_layer .backgrounds .top_btn .color_btn").removeClass("selected");
				$("#lay_editor_layer .backgrounds .top_btn .image_btn").removeClass("selected");
				$("#lay_editor_layer .backgrounds .top_btn .video_btn").removeClass("selected");
				/*$("#lay_editor_layer .backgrounds .top_btn .color_btn").css({'background-image':''});
				$("#lay_editor_layer .backgrounds .top_btn .image_btn").css({'background-image':''});
				$("#lay_editor_layer .backgrounds .top_btn .video_btn").css({'background-image':''});
				$("#lay_editor_layer .backgrounds .top_btn .tv_btn").css({'background-image':''});	*/
			}
			else if(category == "widgets"){
				$("#lay_editor_layer .widgets .tv").hide();
				$("#lay_editor_layer .widgets .video").hide();
				$("#lay_editor_layer .widgets .music").hide();
				$("#lay_editor_layer .widgets .clock").hide();	    
				$("#lay_editor_layer .widgets .weather").hide();
				$("#lay_editor_layer .widgets .news").hide();
				$("#lay_editor_layer .widgets .currencies").hide();
				$("#lay_editor_layer .widgets .top_btn .tv_btn").css({'background-image':''});
				$("#lay_editor_layer .widgets .top_btn .video_btn").css({'background-image':''});
				$("#lay_editor_layer .widgets .top_btn .music_btn").css({'background-image':''});
				$("#lay_editor_layer .widgets .top_btn .clock_btn").css({'background-image':''});
				$("#lay_editor_layer .widgets .top_btn .weather_btn").css({'background-image':''});
				$("#lay_editor_layer .widgets .top_btn .news_btn").css({'background-image':''});
				$("#lay_editor_layer .widgets .top_btn .currencies_btn").css({'background-image':''});
			}
		}
		
		
		// 1-e-2. 공통 - Top button reset, Window reset - Window reset
		function window_reset(){
			$("#lay_editor_layer .cancel_layer").hide();
			$("#lay_editor_layer .save").hide();
			$("#lay_editor_layer .publish").hide();
			$("#lay_editor_layer .backgrounds").hide();
			$("#lay_editor_layer .widgets").hide();
			$("#lay_editor_layer .images").hide();
			$("#lay_editor_layer .text").hide();			
		}
		

		// 1-f.  공통 - bottom button 클릭 이벤트
		// 1-f-1. 공통 - bottom button 클릭 이벤트 - Cancel
		$("#lay_editor_layer .bottom_btn .cancel").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
				// "cell size" 텍스트 이미지 삭제
				//$("#lay_editor_layer .image_preview .cell_size").hide();
				// cell size 실제 값 삭제
				//$("#lay_editor_layer .image_preview .cell_size .pix").text(null);
				
				// popup 닫기
				popclose("lay_editor_layer");
				
				//readyForBackPage = "editMap_theme";
				//enabledKey = true;
			});
		});
		
		
		// 1-f-2. 공통 - bottom button 클릭 이벤트 - Backgrounds
		$("#lay_editor_layer .backgrounds .color .bottom_btn .apply").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
				popclose("lay_editor_layer");
                // 실제 cell에 적용하기				
				color_sub_list_reset();
				underEditKind.background.kind = "color";
				appliedEditKind = JSON.parse(JSON.stringify(underEditKind));
				$("#body_" + selectedSlideListKind + " .editMap_scene" + "_" + selectedSlideListNo + "_img .body_contents_background").css({
					"background-color":appliedEditKind.background.color,
					"background-image":"none",
					"background-size":"100% 100%"
				});				
			});
		});
		$("#lay_editor_layer .backgrounds .image .bottom_btn .apply").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){				
				popclose("lay_editor_layer");
				// 실제 cell에 적용하기
				underEditKind.background.image.url = urlOfBackgroundImage;
				underEditKind.background.kind = "image";
				appliedEditKind = JSON.parse(JSON.stringify(underEditKind));				
				$("#body_" + selectedSlideListKind + " .editMap_scene" + "_" + selectedSlideListNo + "_img .body_contents_background").css({
					"background-color":"undefined",
					"background-image":"url(" + appliedEditKind.background.image.url + ")",
					"background-size":"100% 100%"
				});
				
			});
		});
		$("#lay_editor_layer .backgrounds .bottom_btn .cancel").click(function(){
		
			underEditKind = JSON.parse(JSON.stringify(appliedEditKind));			
			$('#lay_editor_layer .backgrounds .image .image_preview_1').css({"background-image":"url(" + underEditKind.background.image.url + ")"});
		});
		/*
		$("#lay_editor_layer .backgrounds .video .bottom_btn .apply").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
				cellKind[selectedCellNo] = "backgrounds_video";
				popclose("lay_editor_layer");			
			});
		});
		$("#lay_editor_layer .backgrounds .tv .bottom_btn .apply").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
				cellKind[selectedCellNo] = "backgrounds_tv";
				popclose("lay_editor_layer");			
			});
		});*/
		
		
		// 1-f-3. 공통 - bottom button 클릭 이벤트 - Widgets
		/*
		$("#lay_editor_layer .widgets .tv .bottom_btn .apply").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
				cellKind[selectedCellNo] = "widgets_tv";
				popclose("lay_editor_layer");			
			});
		});
		$("#lay_editor_layer .widgets .video .bottom_btn .apply").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
				cellKind[selectedCellNo] = "widgets_video";
				popclose("lay_editor_layer");			
			});
		});
		$("#lay_editor_layer .widgets .music .bottom_btn .apply").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
				cellKind[selectedCellNo] = "widgets_music";
				popclose("lay_editor_layer");
				// 실제 cell에 적용하기
				$(".body_contents .cell_" + selectedCellNo).css({'background-position':'0px 0px'});
				$(".body_contents .cell_" + selectedCellNo).css({'background-size':'100% 100%'});
				$(".body_contents .cell_" + selectedCellNo).css({'background-image':'url(../websrc/img/main/lb_editor_layer_widgets_music_01.png)'});				
			});
		});
		$("#lay_editor_layer .widgets .clock .bottom_btn .apply").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
				cellKind[selectedCellNo] = "widgets_clock";
				popclose("lay_editor_layer");
				// 실제 cell에 적용하기				
				$(".body_contents .cell_" + selectedCellNo).css({'background-position':'0px 0px'});
				$(".body_contents .cell_" + selectedCellNo).css({'background-size':'100% 100%'});
				$(".body_contents .cell_" + selectedCellNo).css({'background-image':'url(../websrc/img/main/lb_editor_layer_widgets_clock_01.png)'});
				
			});
		});
		$("#lay_editor_layer .widgets .weather .bottom_btn .apply").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
				cellKind[selectedCellNo] = "widgets_weather";
				popclose("lay_editor_layer");
				// 실제 cell에 적용하기
				$(".body_contents .cell_" + selectedCellNo).css({'background-position':'0px 0px'});
				$(".body_contents .cell_" + selectedCellNo).css({'background-size':'100% 100%'});
				$(".body_contents .cell_" + selectedCellNo).css({'background-image':'url(../websrc/img/main/lb_editor_layer_widgets_weather_01.png)'});				
			});
		});
		$("#lay_editor_layer .widgets .news .bottom_btn .apply").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
				cellKind[selectedCellNo] = "widgets_news";
				popclose("lay_editor_layer");
				// 실제 cell에 적용하기
				$(".body_contents .cell_" + selectedCellNo).css({'background-position':'0px 0px'});
				$(".body_contents .cell_" + selectedCellNo).css({'background-size':'100% 100%'});
				$(".body_contents .cell_" + selectedCellNo).css({'background-image':'url(../websrc/img/main/lb_editor_layer_widgets_news_01.png)'});				
			});
		});
		$("#lay_editor_layer .widgets .currencies .bottom_btn .apply").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
				cellKind[selectedCellNo] = "widgets_currencies";
				popclose("lay_editor_layer");
				// 실제 cell에 적용하기
				$(".body_contents .cell_" + selectedCellNo).css({'background-position':'0px 0px'});
				$(".body_contents .cell_" + selectedCellNo).css({'background-size':'100% 100%'});
				$(".body_contents .cell_" + selectedCellNo).css({'background-image':'url(../websrc/img/main/lb_editor_layer_widgets_currencies_01.png)'});				
			});
		});
		*/
		
		// 1-f-4. 공통 - bottom button 클릭 이벤트 - Images
		$("#lay_editor_layer .images .contents .bottom_btn .apply").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){			    
				
				// 팝업창 닫기
				popclose("lay_editor_layer");
				
				// find the first order of five images
				theFirstOrderFiveImages = 0;
				for(var i=1; i<=5; i++){
					if(String(urlOfCellImage[i]) != "" &&  String(urlOfCellImage[i]) != "undefined" && String(urlOfCellImage[i]) != "null"){
						
						theFirstOrderFiveImages = i;
						break;
					}
				}
				console.log("------------------------------------------------------------------------------------");
				console.log("apply / theFirstOrderFiveImages : " + theFirstOrderFiveImages);
				console.log("apply / urlOfCellImage[" + theFirstOrderFiveImages + "] : " + urlOfCellImage[theFirstOrderFiveImages]);
				
				// 실제 cell에 적용하기
				for(var i=1; i<=5; i++){
					if(isFiveImageSetted[i]){						
						// image 크기를 맞춰서 적용한다.
						var cellWidth = (originalEditKind.cell[selectedCellNo].x * 230);
						imageInEditWidth[i] = (cellWidth * imageInCellWidth[i]) / activeCellWidth[i];
						imageInEditHeight[i] = (cellWidth * imageInCellHeight[i]) / activeCellWidth[i];
						imageInEditPercentage[i] = (imageInEditWidth[i] * 100) / cellWidth;
						
						// imageInCellLeft, imageInCellTop 정하기
						var targetImage = $("#lay_editor_layer .images .contents .image_preview_" + i + " .imageInCell img");
						imageInCellTop[i] = parseInt($(targetImage).css("top"));
						imageInCellLeft[i] = parseInt($(targetImage).css("left"));
						
						// image 위치를 맞춰서 적용한다.
						imageInEditPositionX[i] = -(activeCellLeft[i] - imageInCellLeft[i]) * (imageInEditWidth[i] / imageInCellWidth[i]);
						imageInEditPositionY[i] = -(activeCellTop[i] - imageInCellTop[i]) * (imageInEditHeight[i] / imageInCellHeight[i]);
					}
				}
				
				// 저장하기 위한 변수 설정
				for(var i=1; i<=5; i++) {
					// 저장하기 위한 변수 설정					
					originalEditKind.cell[selectedCellNo].image.theFirstOrderFiveImages = theFirstOrderFiveImages;
					originalEditKind.cell[selectedCellNo].image.selectedFiveImageNo = selectedFiveImageNo;						
					originalEditKind.cell[selectedCellNo].image.url[i] = urlOfCellImage[i];
					originalEditKind.cell[selectedCellNo].image.imageInCellPercentage[i] = imageInCellPercentage[i];
					originalEditKind.cell[selectedCellNo].image.imageInCellTop[i] = imageInCellTop[i];
					originalEditKind.cell[selectedCellNo].image.imageInCellLeft[i] = imageInCellLeft[i];
					originalEditKind.cell[selectedCellNo].image.imageInCellWidth[i] = imageInCellWidth[i];
					originalEditKind.cell[selectedCellNo].image.imageInCellHeight[i] = imageInCellHeight[i];
					originalEditKind.cell[selectedCellNo].image.imageInEditPercentage[i] = imageInEditPercentage[i];
					originalEditKind.cell[selectedCellNo].image.imageInEditPositionX[i] = imageInEditPositionX[i];
					originalEditKind.cell[selectedCellNo].image.imageInEditPositionY[i] = imageInEditPositionY[i];
					
					underEditKind.cell[selectedCellNo].image.theFirstOrderFiveImages = theFirstOrderFiveImages;
					underEditKind.cell[selectedCellNo].image.selectedFiveImageNo = selectedFiveImageNo;						
					underEditKind.cell[selectedCellNo].image.url[i] = urlOfCellImage[i];
					underEditKind.cell[selectedCellNo].image.imageInCellPercentage[i] = imageInCellPercentage[i];
					underEditKind.cell[selectedCellNo].image.imageInCellTop[i] = imageInCellTop[i];
					underEditKind.cell[selectedCellNo].image.imageInCellLeft[i] = imageInCellLeft[i];
					underEditKind.cell[selectedCellNo].image.imageInCellWidth[i] = imageInCellWidth[i];
					underEditKind.cell[selectedCellNo].image.imageInCellHeight[i] = imageInCellHeight[i];
					underEditKind.cell[selectedCellNo].image.imageInEditPercentage[i] = imageInEditPercentage[i];
					underEditKind.cell[selectedCellNo].image.imageInEditPositionX[i] = imageInEditPositionX[i];
					underEditKind.cell[selectedCellNo].image.imageInEditPositionY[i] = imageInEditPositionY[i];
					
					appliedEditKind = JSON.parse(JSON.stringify(underEditKind));
	
					
					// 디버깅용 프린트
					console.log("------------------------APPLY-------------------------------------");							
					console.log("imageInCellPercentage[" + i + "] : " + imageInCellPercentage[i]);
					console.log("imageInCellTop[" + i + "] : " + imageInCellTop[i]);
					console.log("imageInCellLeft[" + i + "] : " + imageInCellLeft[i]);
					console.log("imageInCellWidth[" + i + "] : " + imageInCellWidth[i]);
					console.log("imageInCellHeight[" + i + "] : " + imageInCellHeight[i]);					
					console.log("imageInEditPercentage[" + i + "] : " + imageInEditPercentage[i]);
					console.log("imageInEditWidth[" + i + "] : " + imageInEditWidth[i]);
					console.log("imageInEditHeight[" + i + "] : " + imageInEditHeight[i]);
					console.log("imageInEditPositionX[" + i + "] : " + imageInEditPositionX[i]);
					console.log("imageInEditPositionY[" + i + "] : " + imageInEditPositionY[i]);				
					console.log("activeCellTop[" + i + "] : " + activeCellTop[i]);
					console.log("activeCellLeft[" + i + "] : " + activeCellLeft[i]);
					console.log("activeCellWidth[" + i + "] : " + activeCellWidth[i]);
					console.log("activeCellHeight[" + i + "] : " + activeCellHeight[i]);
					console.log("originalEditKind.cell[" + selectedCellNo + "].image.url[" + i + "] : " + originalEditKind.cell[selectedCellNo].image.url[i]);
				}
				
				// apply on the cell only one image with the first order.
				if(theFirstOrderFiveImages == 0){
					$("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img .cell_" + selectedCellNo + " .img_1").css({
						"background-image":"none"
					});
				}
				else {
					$("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img .cell_" + selectedCellNo + " .img_1").css({
						"background-image":"url(" + originalEditKind.cell[selectedCellNo].image.url[originalEditKind.cell[selectedCellNo].image.theFirstOrderFiveImages] + ")",
						"background-repeat":"no-repeat",
						"background-size":imageInEditPercentage[originalEditKind.cell[selectedCellNo].image.theFirstOrderFiveImages] + "%",
						"background-position-x":(imageInEditPositionX[originalEditKind.cell[selectedCellNo].image.theFirstOrderFiveImages]) + "px",
						"background-position-y":(imageInEditPositionY[originalEditKind.cell[selectedCellNo].image.theFirstOrderFiveImages]) + "px"
					});
				}
			});
		});
		
		
		$("#lay_editor_layer .images .bottom_btn .cancel").click(function(){
			//underEditKind = JSON.parse(JSON.stringify(appliedEditKind));
			for(var i=1; i<=5; i++){
				// 이미지 원래 대로 복구
				$("#lay_editor_layer .images .contents .image_preview_" + i + " .imageInCell img").attr("src",  originalEditKind.cell[selectedCellNo].image.url[i]);
					
				var imageDepth = $("#lay_editor_layer .images .contents .image_preview_" + i + " .imageInCell img");
				imageDepth.css({
					'position':'relative',
					'width':originalEditKind.cell[selectedCellNo].image.imageInCellPercentage[i] + '%',
					'height':originalEditKind.cell[selectedCellNo].image.imageInCellPercentage[i] + '%',
					'top':0,
					'left':0
				});
				
				// 빈 이미지라면,
				if(String(originalEditKind.cell[selectedCellNo].image.url[i]) == "" || String(originalEditKind.cell[selectedCellNo].image.url[i]) == "undefined" || String(originalEditKind.cell[selectedCellNo].image.url[i]) == "null"){
					// 빈 이미지라는 변수 설정
					isFiveImageSetted[i] = false;
					
					// disableCell 표시 없애기
					$("#lay_editor_layer .image_preview .image_preview_" + i + " .disableCell_1").hide();
					$("#lay_editor_layer .image_preview .image_preview_" + i + " .disableCell_2").hide();
					$("#lay_editor_layer .image_preview .image_preview_" + i + " .cell_size").hide();
				}
			}
			
			// 체크 표시 마지막으로 되돌리기			
			selectedFiveImageNo = originalEditKind.cell[selectedCellNo].image.selectedFiveImageNo;			
			if(selectedFiveImageNo == 0)$("#lay_editor_layer .images .contents .image_preview .image_selected").hide();
			else {
				$("#lay_editor_layer .images .contents .image_preview .image_selected").css({
					top:"125px",
					left:(((selectedFiveImageNo - 1) * 131) + 343) + "px"
				});
			}
		});
		
		// 1-f-5. 공통 - bottom button 클릭 이벤트 - Text
		$("#lay_editor_layer .text .contents .bottom_btn .apply").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
				popclose("lay_editor_layer");
				
				// 실제 cell에 적용하기
				modified_font_size = Number((230/256) * underEditKind.cell[selectedCellNo].text.font_size);
				if((underEditKind.cell[selectedCellNo].text.contents) != "undefined")
					$("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img .cell_" + selectedCellNo + " .vertical-align").text(underEditKind.cell[selectedCellNo].text.contents);
				
				appliedEditKind = JSON.parse(JSON.stringify(underEditKind)); 
				$("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img .cell_" + selectedCellNo).css({					
					"background-image":"none",
					"background-color":appliedEditKind.cell[selectedCellNo].text.font_back_color
				});
				$("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img .cell_" + selectedCellNo + " .vertical-align").css({
					//"width":"230px",
					"height":Number((230/256) * appliedEditKind.cell[selectedCellNo].text.font_size) + "px",
					"font-size":modified_font_size +"px",
					"color":appliedEditKind.cell[selectedCellNo].text.font_color,
					"font-family":appliedEditKind.cell[selectedCellNo].text.font_family,
					"text-align":appliedEditKind.cell[selectedCellNo].text.font_align,
					"font-weight":appliedEditKind.cell[selectedCellNo].text.font_weight					
				});
				runTextVerticalAlign("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img .cell_" + selectedCellNo + " .vertical-align", appliedEditKind.cell[selectedCellNo].text.font_vertical);
				
			});
		});
		$("#lay_editor_layer .text .contents .bottom_btn .cancel").click(function(){			
			underEditKind = JSON.parse(JSON.stringify(appliedEditKind));
			$('#lay_editor_layer .text .contents .text_input #input_text_input').val(appliedEditKind.cell[selectedCellNo].text.contents);
			$('#lay_editor_layer .text .contents .text_input #input_text_input').text(appliedEditKind.cell[selectedCellNo].text.contents);			
		});
		
		
		// 1-f-6. 공통 - bottom button 클릭 이벤트 - Cancel_layer
		$("#lay_editor_layer .cancel_layer .contents .bottom_btn .apply").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){ 
				popclose("lay_editor_layer");				
			});
		});
		
		
		// 1-f-7. 공통 - bottom button 클릭 이벤트 - Save
		$("#lay_editor_layer .save .contents .bottom_btn .apply").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
				runSave();				
				popclose("lay_editor_layer");				
			});
		});
		
		
		// 1-f-8. 공통 - bottom button 클릭 이벤트 - Publish
		$("#lay_editor_layer .publish .contents .bottom_btn .apply").click(function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
				runPublish();
				popclose("lay_editor_layer");
			});
		});
		
		
		// 1-g. 공통 - left button 클릭 이벤트
		// 1-g-1. 공통 - left button 클릭 이벤트 - "Cancel" 클릭 이벤트
		$("#lay_editor_layer .left_btn .leftBtn_cancel").click(function(){
			//if(enabledKey){
			//	enabledKey = false;
				//readyForBackPage = "editLayer_cancel";
				
				// cursor
				$("#lay_editor_layer .left_btn .left_selected").animate( {top:parseInt($("#lay_editor_layer .left_btn .left_cancel").css("top"))-13+"px"}, 500, 'easeInOutQuint', function(){
					display_edit_layer("cancel_layer", "", "");
				});
			//}
		});

		
		// 1-g-2. 공통 - left button 클릭 이벤트 - "Save" 클릭 이벤트
		$("#lay_editor_layer .left_btn .leftBtn_save").click(function(){
            //if(enabledKey){
				//enabledKey = false;
				//readyForBackPage = "editLayer_save";
				
				// cursor		
				$("#lay_editor_layer .left_btn .left_selected").animate( {top:parseInt($("#lay_editor_layer .left_btn .left_save").css("top"))-13+"px"}, 500, 'easeInOutQuint', function(){
					display_edit_layer("save", "", "");
					
					Date.prototype.yyyymmdd = function() {
						var yyyy = this.getFullYear().toString();
						var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
						var dd = this.getDate().toString();
						var timeHour = this.getHours().toString();
						var timeMin = this.getMinutes().toString();
						var timeSec = this.getSeconds().toString();
						return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]) + "_" + (timeHour[1]?timeHour:"0"+timeHour[0]) + (timeMin[1]?timeMin:"0"+timeMin[0]) + (timeSec[1]?timeSec:"0"+timeSec[0]);
					};

					var tmp = new Date();
					saveFileName = tmp.yyyymmdd();
					$("#lay_editor_layer .save .input_project_name #input_project_name_date").val(saveFileName);
				});
			//}
		});

		
		// 1-g-3. 공통 - left button 클릭 이벤트 - "Publish" 클릭 이벤트
		$("#lay_editor_layer .left_btn .leftBtn_publish").click(function(){
           // if(enabledKey){
			//	enabledKey = false;
				//readyForBackPage = "editLayer_publish";
			
				// cursor		
				$("#lay_editor_layer .left_btn .left_selected").animate( {top:parseInt($("#lay_editor_layer .left_btn .left_publish").css("top"))-13+"px"}, 500, 'easeInOutQuint', function(){
					display_edit_layer("publish", "", "");
				});
			//}
		});


		// 1-g-4. 공통 - left button 클릭 이벤트 - "Backgrounds" 클릭 이벤트
		$("#lay_editor_layer .left_btn .leftBtn_backgrounds").click(function(){
           // if(enabledKey){
				//enabledKey = false;
				//readyForBackPage = "editLayer_backgrounds";
				
				// cursor		
				$("#lay_editor_layer .left_btn .left_selected").animate( {top:parseInt($("#lay_editor_layer .left_btn .left_backgrounds").css("top"))-13+"px"}, 500, 'easeInOutQuint', function(){
					if(underEditKind.background.kind == "color")display_edit_layer("backgrounds", "color", "1");
					else if(underEditKind.background.kind == "image")display_edit_layer("backgrounds", "image", "2");
					else display_edit_layer("backgrounds", "color", "1");
				});
			//}
		});


		// 1-g-5. 공통 - left button 클릭 이벤트 - "Widgets" 클릭 이벤트		
		$("#lay_editor_layer .left_btn .leftBtn_widgets").click(function(){
			//if(enabledKey){
				//enabledKey = false;
				//readyForBackPage = "editLayer_widgets";
				
				if(!lnbWidgetsProhibit){
					// left - cursor		
					$("#lay_editor_layer .left_btn .left_selected").animate( {top:parseInt($("#lay_editor_layer .left_btn .left_widgets").css("top"))-13+"px"}, 500, 'easeInOutQuint', function(){
						display_edit_layer("widgets", "clock", "4");
					});
				}
			//}
		});
		

		// 1-g-6. 공통 - left button 클릭 이벤트 - "Images" 클릭 이벤트
		$("#lay_editor_layer .left_btn .leftBtn_images").click(function(){
            //if(enabledKey){
				//enabledKey = false;
				//readyForBackPage = "editLayer_images";
				
				if(!lnbImagesProhibit){
					// cursor		
					$("#lay_editor_layer .left_btn .left_selected").animate( {top:parseInt($("#lay_editor_layer .left_btn .left_images").css("top"))-13+"px"}, 500, 'easeInOutQuint', function(){
						display_edit_layer("images", "", "");
					});
				}
			//}
		});


		// 1-g-7. 공통 - left button 클릭 이벤트 - "Text" 클릭 이벤트
		$("#lay_editor_layer .left_btn .leftBtn_text").click(function(){
           // if(enabledKey){
				//enabledKey = false;
				//readyForBackPage = "editLayer_text";
				
				if(!lnbTextProhibit){
					// cursor		
					$("#lay_editor_layer .left_btn .left_selected").animate( {top:parseInt($("#lay_editor_layer .left_btn .left_text").css("top"))-13+"px"}, 500, 'easeInOutQuint', function(){
						display_edit_layer("text", "", "");
						preview_text_trigger();
					});
				}
			//}
		});


		// 1-g-8. 공통 - left button 클릭 이벤트 - left navigation 효과
		function left_navigation(cursor){
			// "Cancel"
			if(cursor == "cancel_layer"){
				// cursor
				$("#lay_editor_layer .left_btn .left_selected").animate( {top:"180px"}, 500, 'easeInOutQuint', function(){
					//enabledKey = true;
				});
				// top
				$("#lay_editor_layer .left_btn .left_widgets").animate( {top:"55px", left:"33px", opacity:"0.4"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_widgets").css({'background-size':'75% 75%'});
				$("#lay_editor_layer .left_btn .left_images").animate( {top:"100px", left:"33px",opacity:"0.6"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_images").css({'background-size':'80% 80%'});
				$("#lay_editor_layer .left_btn .left_text").animate( {top:"148px", left:"33px",opacity:"0.8"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_text").css({'background-size':'85% 85%'});
				// middle
                $("#lay_editor_layer .left_btn .left_cancel").animate( {top:"193px", left:"33px",opacity:"1.0"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_cancel").css({'background-size':'100% 100%'});
				// bottom
				$("#lay_editor_layer .left_btn .left_save").animate( {top:"241px", left:"33px",opacity:"0.8"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_save").css({'background-size':'85% 85%'});
				$("#lay_editor_layer .left_btn .left_publish").animate( {top:"289px", left:"33px",opacity:"0.6"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_publish").css({'background-size':'80% 80%'});
				$("#lay_editor_layer .left_btn .left_backgrounds").animate( {top:"335px", left:"33px",opacity:"0.4"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_backgrounds").css({'background-size':'75% 75%'});
			}
			// "Save"
			else if(cursor == "save"){
				// cursor
				$("#lay_editor_layer .left_btn .left_selected").animate( {top:"180px"}, 500, 'easeInOutQuint', function(){
					//enabledKey = true;
				});
				// top
				$("#lay_editor_layer .left_btn .left_images").animate( {top:"55px", left:"33px",opacity:"0.4"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_images").css({'background-size':'75% 75%'});
				$("#lay_editor_layer .left_btn .left_text").animate( {top:"100px", left:"33px",opacity:"0.6"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_text").css({'background-size':'80% 80%'});
				$("#lay_editor_layer .left_btn .left_cancel").animate( {top:"148px", left:"33px",opacity:"0.8"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_cancel").css({'background-size':'85% 85%'});
				// middle
                $("#lay_editor_layer .left_btn .left_save").animate( {top:"193px", left:"33px",opacity:"1.0"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_save").css({'background-size':'100% 100%'});
				// bottom
				$("#lay_editor_layer .left_btn .left_publish").animate( {top:"241px", left:"33px",opacity:"0.8"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_publish").css({'background-size':'85% 85%'});
				$("#lay_editor_layer .left_btn .left_backgrounds").animate( {top:"289px", left:"33px",opacity:"0.6"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_backgrounds").css({'background-size':'80% 80%'});
				$("#lay_editor_layer .left_btn .left_widgets").animate( {top:"335px", left:"33px",opacity:"0.4"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_widgets").css({'background-size':'75% 75%'});
				
			}
			// "Publish"
			else if(cursor == "publish"){
				// cursor
				$("#lay_editor_layer .left_btn .left_selected").animate( {top:"180px"}, 500, 'easeInOutQuint', function(){
					//enabledKey = true;
				});
				// top
				$("#lay_editor_layer .left_btn .left_text").animate( {top:"55px", left:"33px",opacity:"0.4"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_text").css({'background-size':'75% 75%'});
				$("#lay_editor_layer .left_btn .left_cancel").animate( {top:"100px", left:"33px",opacity:"0.6"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_cancel").css({'background-size':'80% 80%'});
				$("#lay_editor_layer .left_btn .left_save").animate( {top:"148px", left:"33px",opacity:"0.8"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_save").css({'background-size':'85% 85%'});
				// middle
                $("#lay_editor_layer .left_btn .left_publish").animate( {top:"193px", left:"33px",opacity:"1.0"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_publish").css({'background-size':'100% 100%'});
				// bottom
				$("#lay_editor_layer .left_btn .left_backgrounds").animate( {top:"241px", left:"33px",opacity:"0.8"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_backgrounds").css({'background-size':'85% 85%'});
				$("#lay_editor_layer .left_btn .left_widgets").animate( {top:"289px", left:"33px",opacity:"0.6"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_widgets").css({'background-size':'80% 80%'});
				$("#lay_editor_layer .left_btn .left_images").animate( {top:"335px", left:"33px",opacity:"0.4"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_images").css({'background-size':'75% 75%'});
				
			}
			// "Backgrounds"
			else if(cursor == "backgrounds"){
				// cursor
				$("#lay_editor_layer .left_btn .left_selected").animate( {top:"180px"}, 500, 'easeInOutQuint', function(){
					//enabledKey = true;
				});
				// top
				$("#lay_editor_layer .left_btn .left_cancel").animate( {top:"55px", left:"33px",opacity:"0.4"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_cancel").css({'background-size':'75% 75%'});
				$("#lay_editor_layer .left_btn .left_save").animate( {top:"100px", left:"33px",opacity:"0.6"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_save").css({'background-size':'80% 80%'});
				$("#lay_editor_layer .left_btn .left_publish").animate( {top:"148px", left:"33px",opacity:"0.8"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_publish").css({'background-size':'85% 85%'});
				// middle
                $("#lay_editor_layer .left_btn .left_backgrounds").animate( {top:"193px", left:"33px",opacity:"1.0"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_backgrounds").css({'background-size':'100% 100%'});
				// bottom
				$("#lay_editor_layer .left_btn .left_widgets").animate( {top:"241px", left:"33px",opacity:"0.8"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_widgets").css({'background-size':'85% 85%'});
				$("#lay_editor_layer .left_btn .left_images").animate( {top:"289px", left:"33px",opacity:"0.6"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_images").css({'background-size':'80% 80%'});
				$("#lay_editor_layer .left_btn .left_text").animate( {top:"335px", left:"33px",opacity:"0.4"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_text").css({'background-size':'75% 75%'});
				
			}
			// "Widgets"
			else if(cursor == "widgets"){
				// left - cursor
				$("#lay_editor_layer .left_btn .left_selected").animate( {top:"180px"}, 500, 'easeInOutQuint', function(){
					//enabledKey = true;
				});
				// left- top
				$("#lay_editor_layer .left_btn .left_save").animate( {top:"55px", left:"33px",opacity:"0.4"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_save").css({'background-size':'75% 75%'});
				$("#lay_editor_layer .left_btn .left_publish").animate( {top:"100px", left:"33px",opacity:"0.6"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_publish").css({'background-size':'80% 80%'});
				$("#lay_editor_layer .left_btn .left_backgrounds").animate( {top:"148px", left:"33px",opacity:"0.8"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_backgrounds").css({'background-size':'85% 85%'});
				// left - middle
                $("#lay_editor_layer .left_btn .left_widgets").animate( {top:"193px", left:"33px",opacity:"1.0"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_widgets").css({'background-size':'100% 100%'});
				// left- bottom
				$("#lay_editor_layer .left_btn .left_images").animate( {top:"241px", left:"33px",opacity:"0.8"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_images").css({'background-size':'85% 85%'});
				$("#lay_editor_layer .left_btn .left_text").animate( {top:"289px", left:"33px",opacity:"0.6"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_text").css({'background-size':'80% 80%'});
				$("#lay_editor_layer .left_btn .left_cancel").animate( {top:"335px", left:"33px",opacity:"0.4"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_cancel").css({'background-size':'75% 75%'});
				
			}
			// "Images"
			else if(cursor == "images"){
				// cursor
				$("#lay_editor_layer .left_btn .left_selected").animate( {top:"180px"}, 500, 'easeInOutQuint', function(){
					//enabledKey = true;
				});
				// top
				$("#lay_editor_layer .left_btn .left_publish").animate( {top:"55px", left:"33px",opacity:"0.4"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_publish").css({'background-size':'75% 75%'});
				$("#lay_editor_layer .left_btn .left_backgrounds").animate( {top:"100px", left:"33px",opacity:"0.6"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_backgrounds").css({'background-size':'80% 80%'});
				$("#lay_editor_layer .left_btn .left_widgets").animate( {top:"148px", left:"33px",opacity:"0.8"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_widgets").css({'background-size':'85% 85%'});
				// middle
                $("#lay_editor_layer .left_btn .left_images").animate( {top:"193px", left:"33px",opacity:"1.0"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_images").css({'background-size':'100% 100%'});
				// bottom
				$("#lay_editor_layer .left_btn .left_text").animate( {top:"241px", left:"33px",opacity:"0.8"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_text").css({'background-size':'85% 85%'});
				$("#lay_editor_layer .left_btn .left_cancel").animate( {top:"289px", left:"33px",opacity:"0.6"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_cancel").css({'background-size':'80% 80%'});
				$("#lay_editor_layer .left_btn .left_save").animate( {top:"335px", left:"33px",opacity:"0.4"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_save").css({'background-size':'75% 75%'});
				
			}
			// "Text"
			else if(cursor == "text"){
				// cursor
				$("#lay_editor_layer .left_btn .left_selected").animate( {top:"180px"}, 500, 'easeInOutQuint', function(){
					//enabledKey = true;
				});
				// top
				$("#lay_editor_layer .left_btn .left_backgrounds").animate( {top:"55px", left:"33px",opacity:"0.4"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_backgrounds").css({'background-size':'75% 75%'});
				$("#lay_editor_layer .left_btn .left_widgets").animate( {top:"100px", left:"33px",opacity:"0.6"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_widgets").css({'background-size':'80% 80%'});
				$("#lay_editor_layer .left_btn .left_images").animate( {top:"148px", left:"33px",opacity:"0.8"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_images").css({'background-size':'85% 85%'});
				// middle
                $("#lay_editor_layer .left_btn .left_text").animate( {top:"193px", left:"33px",opacity:"1.0"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_text").css({'background-size':'100% 100%'});
				// bottom
				$("#lay_editor_layer .left_btn .left_cancel").animate( {top:"241px", left:"33px",opacity:"0.8"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_cancel").css({'background-size':'85% 85%'});
				$("#lay_editor_layer .left_btn .left_save").animate( {top:"289px", left:"33px",opacity:"0.6"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_save").css({'background-size':'80% 80%'});
				$("#lay_editor_layer .left_btn .left_publish").animate( {top:"335px", left:"33px",opacity:"0.4"}, 500, 'easeInOutQuint');
				$("#lay_editor_layer .left_btn .left_publish").css({'background-size':'75% 75%'});
				
			}
		}
		

		// 1-h. 공통 - 팝업 이벤트
		function popup(id_lay){	   
			$("#"+id_lay).show();
			$("body").append("<div id='"+id_lay+"_block' class='disabled_left'></div>");
			$("#"+id_lay+"_block").css("z-index", $("#"+id_lay).css("z-index")-1);
			$("#"+id_lay+"_block").height($(document).height());
		}
		function popclose(id_lay){
			$("#"+id_lay).hide();
			$("#"+id_lay+"_block").remove();
		}


		// 2. Backgrounds
		// 2-a. Backgrounds - Color
		// 2-a-1. Backgrounds - Color - color 리스트 클릭 이벤트 
		$(".color_1").click(function(){
		    color_sub_list_reset();
		    $("#color_sub_list_1").show();
			$('#color_sub_list_1').animate( {top:"0px", opacity:"0.0"}, 0, 'easeInOutQuint', function(){
			    $('#color_sub_list_1').animate( {top:"0px", opacity:"1.0"}, 500, 'easeInOutQuint');			
			});
		});
		$(".color_2").click(function(){
		    color_sub_list_reset();		  
			$("#color_sub_list_2").show();
			$('#color_sub_list_2').animate( {top:"0px", opacity:"0.0"}, 0, 'easeInOutQuint', function(){
			    $('#color_sub_list_2').animate( {top:"0px", opacity:"1.0"}, 500, 'easeInOutQuint');			
			});
		});
		$(".color_3").click(function(){
		    color_sub_list_reset();
			$("#color_sub_list_3").show();
			$('#color_sub_list_3').animate( {top:"0px", opacity:"0.0"}, 0, 'easeInOutQuint', function(){
			    $('#color_sub_list_3').animate( {top:"0px", opacity:"1.0"}, 500, 'easeInOutQuint');			
			});
		});
		$(".color_4").click(function(){
		    color_sub_list_reset();
			$("#color_sub_list_4").show();
			$('#color_sub_list_4').animate( {top:"0px", opacity:"0.0"}, 0, 'easeInOutQuint', function(){
			    $('#color_sub_list_4').animate( {top:"0px", opacity:"1.0"}, 500, 'easeInOutQuint');			
			});
		});
		$(".color_5").click(function(){
		    color_sub_list_reset();
			$("#color_sub_list_5").show();
			$('#color_sub_list_5').animate( {top:"0px", opacity:"0.0"}, 0, 'easeInOutQuint', function(){
			    $('#color_sub_list_5').animate( {top:"0px", opacity:"1.0"}, 500, 'easeInOutQuint');			
			});
		});
		$(".color_6").click(function(){
		    color_sub_list_reset();
			$("#color_sub_list_6").show();
			$('#color_sub_list_6').animate( {top:"0px", opacity:"0.0"}, 0, 'easeInOutQuint', function(){
			    $('#color_sub_list_6').animate( {top:"0px", opacity:"1.0"}, 500, 'easeInOutQuint');			
			});
		});
		$(".color_7").click(function(){
		    color_sub_list_reset();
			$("#color_sub_list_7").show();
			$('#color_sub_list_7').animate( {top:"0px", opacity:"0.0"}, 0, 'easeInOutQuint', function(){
			    $('#color_sub_list_7').animate( {top:"0px", opacity:"1.0"}, 500, 'easeInOutQuint');			
			});
		});
		$(".color_8").click(function(){
		    color_sub_list_reset();
			$("#color_sub_list_8").show();
			$('#color_sub_list_8').animate( {top:"0px", opacity:"0.0"}, 0, 'easeInOutQuint', function(){
			    $('#color_sub_list_8').animate( {top:"0px", opacity:"1.0"}, 500, 'easeInOutQuint');			
			});
		});
		$(".color_9").click(function(){
		    color_sub_list_reset();
			$("#color_sub_list_9").show();
			$('#color_sub_list_9').animate( {top:"0px", opacity:"0.0"}, 0, 'easeInOutQuint', function(){
			    $('#color_sub_list_9').animate( {top:"0px", opacity:"1.0"}, 500, 'easeInOutQuint');			
			});
		});
		$(".color_10").click(function(){
		    color_sub_list_reset();
			$("#color_sub_list_10").show();
			$('#color_sub_list_10').animate( {top:"0px", opacity:"0.0"}, 0, 'easeInOutQuint', function(){
			    $('#color_sub_list_10').animate( {top:"0px", opacity:"1.0"}, 500, 'easeInOutQuint');			
			});
		});	


        // 2-a-2. Backgrounds - Color - sub color 리스트 클릭 이벤트 
        // 2-a-2-(1). color_1 리스트
		$("#color_sub_list_1 #1").click(function(){		        
		    color_selected_effect("1","#000");
		});
	    $("#color_sub_list_1 #2").click(function(){		        
		    color_selected_effect("1","#0f0f0f");	
		});
		$("#color_sub_list_1 #3").click(function(){		        
		    color_selected_effect("1","#1c1c1c");	
		});
		$("#color_sub_list_1 #4").click(function(){
            color_selected_effect("1","#202020");		
		});
		$("#color_sub_list_1 #5").click(function(){		        
		    color_selected_effect("1","#2f2f2f");
		});
		$("#color_sub_list_1 #6").click(function(){		        
		    color_selected_effect("1","#333333");
		});							
		// 2-a-2-(2). color_2 리스트
		$("#color_sub_list_2 #1").click(function(){
		    color_selected_effect("2","#444");
		});
		$("#color_sub_list_2 #2").click(function(){
		    color_selected_effect("2","#555");
		});
		$("#color_sub_list_2 #3").click(function(){
		    color_selected_effect("2","#666");
		});
		$("#color_sub_list_2 #4").click(function(){
		    color_selected_effect("2","#777");
		});
		$("#color_sub_list_2 #5").click(function(){
		    color_selected_effect("2","#888");
		});
		$("#color_sub_list_2 #6").click(function(){
		    color_selected_effect("2","#999");
		});		
		// 2-a-2-(3). color_3 리스트
		$("#color_sub_list_3 #1").click(function(){
		    color_selected_effect("3","#aaa");
		});
		$("#color_sub_list_3 #2").click(function(){
		    color_selected_effect("3","#bbb");
		});
		$("#color_sub_list_3 #3").click(function(){
		    color_selected_effect("3","#ccc");
		});
		$("#color_sub_list_3 #4").click(function(){
		    color_selected_effect("3","#ddd");
		});
		$("#color_sub_list_3 #5").click(function(){
		    color_selected_effect("3","#eee");
		});
		$("#color_sub_list_3 #6").click(function(){
		    color_selected_effect("3","#fff");
		});	
		// 2-a-2-(4). color_4 리스트
		$("#color_sub_list_4 #1").click(function(){
		    color_selected_effect("4","#b3c7df");
		});
		$("#color_sub_list_4 #2").click(function(){
		    color_selected_effect("4","#7f91cb");
		});
		$("#color_sub_list_4 #3").click(function(){
		    color_selected_effect("4","#436e93");
		});
		$("#color_sub_list_4 #4").click(function(){
		    color_selected_effect("4","#1f497d");
		});
		$("#color_sub_list_4 #5").click(function(){
		    color_selected_effect("4","#173559");
		});
		$("#color_sub_list_4 #6").click(function(){
		    color_selected_effect("4","#0d1d31");
		});
		// 2-a-2-(5). color_5 리스트
		$("#color_sub_list_5 #1").click(function(){
		    color_selected_effect("5","#c9daef");
		});
		$("#color_sub_list_5 #2").click(function(){
		    color_selected_effect("5","#98b6db");
		});
		$("#color_sub_list_5 #3").click(function(){
		    color_selected_effect("5","#749ccc");
		});
		$("#color_sub_list_5 #4").click(function(){
		    color_selected_effect("5","#4f81bd");
		});
		$("#color_sub_list_5 #5").click(function(){
		    color_selected_effect("5","#2e4c70");
		});
		$("#color_sub_list_5 #6").click(function(){
		    color_selected_effect("5","#182a3f");
		});
		// 2-a-2-(6). color_6 리스트
		$("#color_sub_list_6 #1").click(function(){
		    color_selected_effect("6","#ecc2c1");
		});
		$("#color_sub_list_6 #2").click(function(){
		    color_selected_effect("6","#d79492");
		});
		$("#color_sub_list_6 #3").click(function(){
		    color_selected_effect("6","#cf6f6c");
		});
		$("#color_sub_list_6 #4").click(function(){
		    color_selected_effect("6","#c0504d");
		});
		$("#color_sub_list_6 #5").click(function(){
		    color_selected_effect("6","#7b3230");
		});
		$("#color_sub_list_6 #6").click(function(){
		    color_selected_effect("6","#401a19");
		});
		// 2-a-2-(7). color_7 리스트
		$("#color_sub_list_7 #1").click(function(){
		    color_selected_effect("7","#bac0ad");
		});
		$("#color_sub_list_7 #2").click(function(){
		    color_selected_effect("7","#a9b88a");
		});
		$("#color_sub_list_7 #3").click(function(){
		    color_selected_effect("7","#90b96d");
		});
		$("#color_sub_list_7 #4").click(function(){
		    color_selected_effect("7","#9bbb59");
		});
		$("#color_sub_list_7 #5").click(function(){
		    color_selected_effect("7","#637738");
		});
		$("#color_sub_list_7 #6").click(function(){
		    color_selected_effect("7","#3d4b22");
		});
		// 2-a-2-(8). color_8 리스트
		$("#color_sub_list_8 #1").click(function(){
		    color_selected_effect("8","#e5e0ec");
		});
		$("#color_sub_list_8 #2").click(function(){
		    color_selected_effect("8","#ccc1d9");
		});
		$("#color_sub_list_8 #3").click(function(){
		    color_selected_effect("8","#b292c7");
		});
		$("#color_sub_list_8 #4").click(function(){
		    color_selected_effect("8","#8064a2");
		});
		$("#color_sub_list_8 #5").click(function(){
		    color_selected_effect("8","#5f497a");
		});
		$("#color_sub_list_8 #6").click(function(){
		    color_selected_effect("8","#3f3151");
		});
		// 2-a-2-(9). color_9 리스트
		$("#color_sub_list_9 #1").click(function(){
		    color_selected_effect("9","#bee1eb");
		});
		$("#color_sub_list_9 #2").click(function(){
		    color_selected_effect("9","#98cedd");
		});
		$("#color_sub_list_9 #3").click(function(){
		    color_selected_effect("9","#77c296");
		});
		$("#color_sub_list_9 #4").click(function(){
		    color_selected_effect("9","#4bacc6");
		});
		$("#color_sub_list_9 #5").click(function(){
		    color_selected_effect("9","#2b6574");
		});
		$("#color_sub_list_9 #6").click(function(){
		    color_selected_effect("9","#17363e");
		});
		// 2-a-2-(10). color_10 리스트
		$("#color_sub_list_10 #1").click(function(){
		    color_selected_effect("10","#f7d7bd");
		});
		$("#color_sub_list_10 #2").click(function(){
		    color_selected_effect("10","#f4c197");
		});
		$("#color_sub_list_10 #3").click(function(){
		    color_selected_effect("10","#f7af73");
		});
		$("#color_sub_list_10 #4").click(function(){
		    color_selected_effect("10","#f79646");
		});
		$("#color_sub_list_10 #5").click(function(){
		    color_selected_effect("10","#ba7135");
		});
		$("#color_sub_list_10 #6").click(function(){
		    color_selected_effect("10","#794922");
		});
		
		
		// 2-a-3. Backgrounds - Color - color list 선택한 경우 효과 (color 적용 + 체크 이미지 출현)
        function color_selected_effect(color_column, color_selected_no){
		    var check_x;
			underEditKind.background.color = color_selected_no;
			if(color_column == "1")check_x=348;
			else if(color_column == "2")check_x=414;
			else if(color_column == "3")check_x=481;
			else if(color_column == "4")check_x=548;
			else if(color_column == "5")check_x=614;
			else if(color_column == "6")check_x=681;
			else if(color_column == "7")check_x=748;
			else if(color_column == "8")check_x=815;
			else if(color_column == "9")check_x=881;
			else if(color_column == "10")check_x=955;
			$("#lay_editor_layer .backgrounds .color_list .color_" + color_column).css("background-color", underEditKind.background.color);    
			$("#color_sub_list_" + color_column).hide();
			$("#lay_editor_layer .backgrounds .color_selected").css("top", "202px");
			$("#lay_editor_layer .backgrounds .color_selected").css("left", check_x + "px");
			
		}
		
		
		// 2-a-4. Backgrounds - Color - color 종료 이벤트
		function color_sub_list_reset(){
		    $("#color_sub_list_1").hide();
			$("#color_sub_list_2").hide();
			$("#color_sub_list_3").hide();
			$("#color_sub_list_4").hide();
			$("#color_sub_list_5").hide();
			$("#color_sub_list_6").hide();
			$("#color_sub_list_7").hide();
			$("#color_sub_list_8").hide();
			$("#color_sub_list_9").hide();
			$("#color_sub_list_10").hide();
		}
		
		// 2-b. Backgrounds - Image
		// 2-b-1. Backgrounds - Image - "select an image" 문장 클릭 이벤트
		$("#lay_editor_layer .backgrounds .image .image_preview .image_preview_1").click(function(){
		    // 뒷 배경 dimmed 처리
			$("#lay_editor_layer .backgrounds .image").append("<div id='select_an_image_block' class='disabled_left'></div>");
	        $("#select_an_image_block").css("z-index", $("#lay_editor_layer .image .select_an_image").css("z-index")-1);
		    $("#select_an_image_block").height($(document).height());
			
			// select_an_image 창 보이기
			$("#lay_editor_layer .backgrounds .image .select_an_image").show();
			$('#lay_editor_layer .backgrounds .image .select_an_image').animate( {top:"14px", opacity:"0.0"}, 0, 'easeInOutQuint', function(){
			    $('#lay_editor_layer .backgrounds .image .select_an_image').animate( {top:"14px", opacity:"1.0"}, 500, 'easeInOutQuint');			
			});
			
			// google app engine 연동 : 이미지 로드 호출
			body_dimmed_open();
			window.open("./load_background", "POPON Image load", "left=-100, top=-100, width=1, height=1, titlebar=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, copyhistory=yes, resizable=no");
				
			
			// my Image 불러오기
			// complete // maxSelectBackgroundImageMyImages = localStorage.getItem("maxSelectBackgroundImageMyImages");			
			// complete // if(String(maxSelectBackgroundImageMyImages) == "null" || String(maxSelectBackgroundImageMyImages) == "undefined") maxSelectBackgroundImageMyImages = 0;
			// complete // console.log("[load]maxSelectBackgroundImageMyImages : " + maxSelectBackgroundImageMyImages);
			
			// complete // for(var i=1; i<= maxSelectBackgroundImageMyImages; i++){
			// complete // 	selectBackgroundImage.myImages.fileName[i] = localStorage.getItem("selectBackgroundImage.myImages.fileName[" + i + "]");
			// complete // 	selectBackgroundImage.myImages.url[i] = rootURL + "/websrc/img/background_myImages/" + selectBackgroundImage.myImages.fileName[i];
			// complete // 	console.log("[load]selectBackgroundImage.myImages.url[" + i + "] : " + selectBackgroundImage.myImages.url[i]);
			// complete // }
												
			// my Image 불러온 것 적용
			// complete // loadSelectBackgroundImageInfo();
			// complete // makeSelectBackgroundImage.category = "background";
			// complete // makeSelectBackgroundImage.wrapper = "#lay_editor_layer .backgrounds .image .select_an_image .list_item_container_outer .list_item_container";
			// complete // makeSelectBackgroundImage.top = 47;
			// complete // makeSelectBackgroundImage.left = 25;
			
			// complete // makeSelectBackgroundImage.maxMyImages = maxSelectBackgroundImageMyImages;
			// complete // makeSelectBackgroundImage.max_digitalAndArt = maxSelectBackgroundImage_digitalAndArt;
			// complete // makeSelectBackgroundImage.max_plantsAndFlowers = maxSelectBackgroundImage_plantsAndFlowers;
			// complete // makeSelectBackgroundImage.max_placesAndLandscape = maxSelectBackgroundImage_placesAndLandscape;
			// complete // makeSelectBackgroundImage.max_natureAndAnimals = maxSelectBackgroundImage_natureAndAnimals;
	
			// complete // makeSelectBackgroundImage.build("myImages");
			// complete // makeSelectBackgroundImage.build("digitalAndArt");
			// complete // makeSelectBackgroundImage.build("plantsAndFlowers");
			// complete // makeSelectBackgroundImage.build("placesAndLandscape");
			// complete // makeSelectBackgroundImage.build("natureAndAnimals");
			
			// 우측 scroll 생성
			// complete // myBackgroundImageScroll = new scr("backgroundImage");
			
			// complete // $(".backgroundImage.scr-cont").css({"top":"0px"});
			
			// 이미 선택된 이미지가 있는 경우 체크 이미지등 처리해주기
			//backgrounds_selected_image_process();
		});
		
		
		// 2-b-2. Backgrounds - Image - image list 클릭 이벤트
		$("#lay_editor_layer .backgrounds .image .select_an_image .myImagesImg").live('click', function(event) {
			// 선택한것 또 선택했으면 default 값으로 변환
			if(selectedImageKind == "myImages" && selectedMyImagesNo == $(this).attr("id")){
				backgrounds_image_list_reset();				
			}
			
			// 선택한것 업데이트
			else {
				selectedImageKind = "myImages";
				selectedMyImagesNo = $(this).attr("id");
				
				selectedCheckImageIconX = parseInt($(this).css('left')) + 5;
				selectedCheckImageIconY = parseInt($(this).css('top')) + 5;			
				
				backgrounds_image_select_effect();
			}
		});
						
		$("#lay_editor_layer .backgrounds .image .select_an_image .digitalAndArtImg").live('click', function(event) {
			// 선택한것 또 선택했으면 default 값으로 변환
			if(selectedImageKind == "digitalAndArt" && selectedDigitalAndArtNo == $(this).attr("id")){
				backgrounds_image_list_reset();				
			}
			
			// 선택한것 업데이트
			else {
				selectedImageKind = "digitalAndArt";
				selectedDigitalAndArtNo = $(this).attr("id");
				
				selectedCheckImageIconX = parseInt($(this).css('left')) + 5;
				selectedCheckImageIconY = parseInt($(this).css('top')) + 5;			
			
				backgrounds_image_select_effect();
			}
		});
		
		$("#lay_editor_layer .backgrounds .image .select_an_image .plantsAndFlowersImg").live('click', function(event) {
			// 선택한것 또 선택했으면 default 값으로 변환
			if(selectedImageKind == "plantsAndFlowers" && selectedPlantsAndFlowersNo == $(this).attr("id")){
				backgrounds_image_list_reset();				
			}
			
			// 선택한것 업데이트
			else {
				selectedImageKind = "plantsAndFlowers";
				selectedPlantsAndFlowersNo = $(this).attr("id");
				
				selectedCheckImageIconX = parseInt($(this).css('left')) + 5;
				selectedCheckImageIconY = parseInt($(this).css('top')) + 5;			
			
				backgrounds_image_select_effect();
			}
		});
		
		$("#lay_editor_layer .backgrounds .image .select_an_image .placesAndLandscapeImg").live('click', function(event) {
			// 선택한것 또 선택했으면 default 값으로 변환
			if(selectedImageKind == "placesAndLandscape" && selectedPlacesAndLandscapeNo == $(this).attr("id")){
				backgrounds_image_list_reset();				
			}
			
			// 선택한것 업데이트
			else {
				selectedImageKind = "placesAndLandscape";
				selectedPlacesAndLandscapeNo = $(this).attr("id");
				
				selectedCheckImageIconX = parseInt($(this).css('left')) + 5;
				selectedCheckImageIconY = parseInt($(this).css('top')) + 5;			
			
				backgrounds_image_select_effect();
			}
		});
		
		$("#lay_editor_layer .backgrounds .image .select_an_image .natureAndAnimalsImg").live('click', function(event) {
			// 선택한것 또 선택했으면 default 값으로 변환
			if(selectedImageKind == "natureAndAnimals" && selectedNatureAndAnimalsNo == $(this).attr("id")){
				backgrounds_image_list_reset();				
			}
			
			// 선택한것 업데이트
			else {
				selectedImageKind = "natureAndAnimals";
				selectedNatureAndAnimalsNo = $(this).attr("id");
				
				selectedCheckImageIconX = parseInt($(this).css('left')) + 5;
				selectedCheckImageIconY = parseInt($(this).css('top')) + 5;			
			
				backgrounds_image_select_effect();
			}
		});
		
		// Backgrounds - Image - image list 선택한 경우 효과 (select or delete 판단 후, 이미지 선택 체크 or 해제)
        function backgrounds_image_select_effect(image_id){            
			// select 모드
			if(backgrounds_image_click_mode == "select"){    		
			   // 변수 값 업데이트
				isImageChecked = true;
					
				// select된 이미지 처리 함수
				backgrounds_selected_image_process();
			}			
			
			// delete 모드
			else if(backgrounds_image_click_mode == "delete"){			
				// google app engine 연동 : 이미지 삭제 호출
				body_dimmed_open();
				window.open("./delete_background/?selectedMyImagesNo=" + selectedMyImagesNo, "POPON Image delete", "left=-100, top=-100, width=1, height=1, titlebar=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, copyhistory=yes, resizable=no");
							
				// 이미지 지우기
				// complete // for(var i=selectedMyImagesNo; i<=maxSelectBackgroundImageMyImages; i++){
				// complete // $("#lay_editor_layer .backgrounds .image .select_an_image #myImagesId_" + i).remove();
				// complete // }				
				
				// 변수값 업데이트				
				// complete // maxSelectBackgroundImageMyImages--;
				// complete // localStorage.setItem("maxSelectBackgroundImageMyImages", maxSelectBackgroundImageMyImages);				
				
				
				// 파일이름 재정렬 및 업데이트				
				// complete // for(var i=selectedMyImagesNo; i <= maxSelectBackgroundImageMyImages; i++){					
				// complete // 	selectBackgroundImage.myImages.fileName[Number(i)] = selectBackgroundImage.myImages.fileName[Number(i)+1];
				// complete // 	localStorage.setItem("selectBackgroundImage.myImages.fileName[" + i + "]", selectBackgroundImage.myImages.fileName[i]);
				// complete // 	selectBackgroundImage.myImages.url[Number(i)] = selectBackgroundImage.myImages.url[Number(i)+1];
				// complete // }			
				// complete // selectBackgroundImage.myImages.fileName[maxSelectBackgroundImageMyImages+1] = undefined;
				// complete // selectBackgroundImage.myImages.url[maxSelectBackgroundImageMyImages+1] = undefined;				
				 
				// UI 업데이트
				// complete // makeSelectBackgroundImage.category = "background";
				// complete // makeSelectBackgroundImage.wrapper = "#lay_editor_layer .backgrounds .image .select_an_image .list_item_container_outer .list_item_container";
				// complete // makeSelectBackgroundImage.top = 47;
				// complete // makeSelectBackgroundImage.left = 25;			
				// complete // makeSelectBackgroundImage.maxMyImages = maxSelectBackgroundImageMyImages;
				// complete // makeSelectBackgroundImage.build("myImages");
				
				// my Image UI  줄 변환 시, nature 이하 행 변환
				// complete // if(maxSelectBackgroundImageMyImages > 1) {
				// complete // 	//if(parseInt($(".myImages_" + (maxSelectBackgroundImageMyImages - 1)).css('top')) != parseInt($(".myImages_" + maxSelectBackgroundImageMyImages).css('top'))) {						
				// complete // 	if(maxSelectBackgroundImageMyImages % 4 ==0 ) {
				// complete // 		// digitalAndArt
				// complete // 		$("#lay_editor_layer .select_an_image .title_digitalAndArt").css({top:"-=107"});
				// complete // 		for(var i=1; i <= maxSelectBackgroundImage_digitalAndArt; i++) $(".digitalAndArt_" + i).css({top:"-=107"});
				// complete // 		
				// complete // 		// plantsAndFlowers
				// complete // 		$("#lay_editor_layer .select_an_image .title_plantsAndFlowers").css({top:"-=107"});
				// complete // 		for(var i=1; i <= maxSelectBackgroundImage_plantsAndFlowers; i++) $(".plantsAndFlowers_" + i).css({top:"-=107"});
				// complete // 		
				// complete // 		// placesAndLandscape
				// complete // 		$("#lay_editor_layer .select_an_image .title_placesAndLandscape").css({top:"-=107"});
				// complete // 		for(var i=1; i <= maxSelectBackgroundImage_placesAndLandscape; i++) $(".placesAndLandscape_" + i).css({top:"-=107"});
						
				// complete // 		// natureAndAnimals
				// complete // 		$("#lay_editor_layer .select_an_image .title_natureAndAnimals").css({top:"-=107"});
				// complete // 		for(var i=1; i <= maxSelectBackgroundImage_natureAndAnimals; i++) $(".natureAndAnimals_" + i).css({top:"-=107"});
				// complete // 		
				// complete // 		myBackgroundImageScroll.setup();
				// complete // 	}
				// complete // }
				
				// complete // // - 표시 나타나기
				// complete // $("#lay_editor_layer .backgrounds .image .select_an_image .myImagesImg .delete").show();
				
				// complete // selectedImageKind = null;
				// complete // selectedMyImagesNo = null;
			}
		}

		// Backgrounds - Image - select된 이미지 처리 함수
		function backgrounds_selected_image_process(){		   
		    // 이미지 위에 V 체크			
			$("#lay_editor_layer .backgrounds .image .select_an_image .image_selected").show();
			$("#lay_editor_layer .backgrounds .image .select_an_image .image_selected").css("top", selectedCheckImageIconY + "px");
		    $("#lay_editor_layer .backgrounds .image .select_an_image .image_selected").css("left", selectedCheckImageIconX + "px");	
			
			// 우측 상단 버튼 이미지 "+" -> "V"  바꿈
			$("#lay_editor_layer .backgrounds .image .select_an_image .plus").css({'background-position':'0 -23px'});
			
			// 우측 상단 버튼 이미지 "-" 제거
			$("#lay_editor_layer .backgrounds .image .select_an_image .minus").hide();
		}
		
		
        // Backgrounds - Image - 우측 상단 버튼 클릭 이벤트		
	    // "+", "V" 버튼		
		$("#lay_editor_layer .backgrounds .image .select_an_image .plus").click(function(){		    
			// "+" 버튼
			if(!isImageChecked){
				// google app engine 연동 : 이미지 업로드 호출
				body_dimmed_open();
				window.open("./upload_background", "POPON Image upload", "left=300, top=300, width=547, height=294, titlebar=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, copyhistory=yes, resizable=no");
				
				// file dialog 창 나옴
				modeOpenFile = "backgroundsImage";
				//$("#lay_editor_layer .backgrounds .image .select_an_image .input_file_img").click();
			   
				// 우측 상단 버튼 이미지 "-" 다시 나타남
				$("#lay_editor_layer .backgrounds .image .select_an_image .minus").show();
		    }			
			// "V" 버튼
			else{
				// 선택 모드에서 V 클릭시 
				if(backgrounds_image_click_mode == "select") {
					$('#lay_editor_layer .backgrounds .image .select_an_image').animate( {top:"14px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){			    
						// "-" 버튼 제거
						$("#lay_editor_layer .backgrounds .image .select_an_image .delete").hide();
					   
						// 미리 보기에 적용하기				   
						if(selectedImageKind == "myImages")urlOfBackgroundImage = selectBackgroundImage.myImages.url[selectedMyImagesNo];
						else if(selectedImageKind == "digitalAndArt")urlOfBackgroundImage = selectBackgroundImage.digitalAndArt.url[selectedDigitalAndArtNo];
						else if(selectedImageKind == "plantsAndFlowers")urlOfBackgroundImage = selectBackgroundImage.plantsAndFlowers.url[selectedPlantsAndFlowersNo];		
						else if(selectedImageKind == "placesAndLandscape")urlOfBackgroundImage = selectBackgroundImage.placesAndLandscape.url[selectedPlacesAndLandscapeNo];		
						else if(selectedImageKind == "natureAndAnimals")urlOfBackgroundImage = selectBackgroundImage.natureAndAnimals.url[selectedNatureAndAnimalsNo];		
						$('#lay_editor_layer .backgrounds .image .image_preview_1').css({'background-image':'url(' + urlOfBackgroundImage + ')'});
					   
						// 창 닫기
						$("#lay_editor_layer .backgrounds .image .select_an_image").hide();
					   
						// 뒷 배경 dimmed 처리 제거
						$("#select_an_image_block").remove();
					   
						// image 종료 이벤트
						backgrounds_image_list_reset();						
					});
				}
				
				// 제거 모드에서 V 클릭시 
				else {
					// 우측 상단 버튼 이미지 "-" 표시
					$("#lay_editor_layer .backgrounds .image .select_an_image .minus").show();
					
					// 우측 상단 버튼 이미지 "V" -> "+"  바꿈
					isImageChecked = false;
					$("#lay_editor_layer .backgrounds .image .select_an_image .plus").css({'background-position':'0 0'});								
				}
			}
			// 클릭 : 선택 모드 (deault)
			backgrounds_image_click_mode = "select";
			
			// 이미지 위에 "-" 버튼 제거
		    $("#lay_editor_layer .backgrounds .image .select_an_image .delete").hide();
		});
				
        // "-" 버튼
		$("#lay_editor_layer .backgrounds .image .select_an_image .minus").click(function(){
			// 클릭 : 삭제 모드
			backgrounds_image_click_mode = "delete";
			
			// 이미지 위에 "-" 버튼 생성
           	$("#lay_editor_layer .backgrounds .image .select_an_image .myImagesImg .delete").show();
			
			// 우측 상단 버튼 이미지 "-" 제거
			$("#lay_editor_layer .backgrounds .image .select_an_image .minus").hide();
			
			// 우측 상단 버튼 이미지 "+" -> "V"  바꿈
			isImageChecked = true;
			$("#lay_editor_layer .backgrounds .image .select_an_image .plus").css({'background-position':'0 -23px'});			
		});	

		
		// 2-b-5-(3) "X" 버튼
		$("#lay_editor_layer .backgrounds .image .select_an_image .close").click(function(){			
			$('#lay_editor_layer .backgrounds .image .select_an_image').animate( {top:"14px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){			
				// 클릭 : 선택 모드 (deault)
				backgrounds_image_click_mode = "select";
				
				// 이미지 위에 "-" 버튼 제거
				$("#lay_editor_layer .backgrounds .image .select_an_image .delete").hide();
				
				// 우측 상단 버튼 이미지 "-" 생성
				$("#lay_editor_layer .backgrounds .image .select_an_image .minus").show();	
				
				// 창 닫기
				$("#lay_editor_layer .backgrounds .image .select_an_image").hide();
				
				// 뒷 배경 dimmed 처리 제거
				$("#select_an_image_block").remove();
				
				// image 종료 이벤트
				backgrounds_image_list_reset();
			});			
		});		
		
		
		// Backgrounds - Image - image 종료 이벤트
		function backgrounds_image_list_reset(){		    
			// 체크 이미지 제거
			$("#lay_editor_layer .backgrounds .image .select_an_image .image_selected").hide();
		
			// 우측 상단 버튼 리셋
			isImageChecked = false;
			$("#lay_editor_layer .backgrounds .image .select_an_image .plus").css({'background-position':'0 0px'});
			
			// 우측 상단 버튼 이미지 "-" 표시
			$("#lay_editor_layer .backgrounds .image .select_an_image .minus").show();			
						
			selectedImageKind = null;
			selectedMyImagesNo = null;
			selectedDigitalAndArtNo = null;
			selectedPlantsAndFlowersNo = null;
			selectedPlacesAndLandscapeNo = null;
			selectedNatureAndAnimalsNo = null;
		}			


        // 2-c. Backgrounds - Video
		// 2-c-1. Backgrounds - Video - "select an video" 문장 클릭 이벤트
		$("#lay_editor_layer .backgrounds .video .video_preview #1").click(function(){
			// file dialog 창 나옴
			modeOpenFile = "backgroundsVideo";
			$("#lay_editor_layer .backgrounds .video .video_preview .input_file_img").click();
		});
		
		
		// 2-d. Backgrounds - TV
		// 2-d-1. Backgrounds - TV - "select an tv" 문장 클릭 이벤트
		$("#lay_editor_layer .backgrounds .tv .tv_preview #1").click(function(){
			// file dialog 창 나옴
			modeOpenFile = "backgroundsTV";
			$("#lay_editor_layer .backgrounds .tv .tv_preview .input_file_img").click();
		});
		
		
		// 3.a. Widgets - TV
		// 3-a-1. Widgets - TV - "select an tv" 문장 클릭 이벤트
		$("#lay_editor_layer .widgets .tv .tv_preview #1").click(function(){
			// file dialog 창 나옴
			$("#lay_editor_layer .widgets .tv .tv_preview .input_file_img").click();
		});
		
		
		// 3.b. Widgets - Video
		// 3-b-1. Widgets - Video - "select an video" 문장 클릭 이벤트
		$("#lay_editor_layer .widgets .video .video_preview #1").click(function(){
			// file dialog 창 나옴
			modeOpenFile = "widgetsVideo";
			$("#lay_editor_layer .widgets .video .video_preview .input_file_img").click();
		});
		
		
		// 3.c. Widgets - Music
		
		
		// 3.d. Widgets - Clock
		
		
		// 3.e. Widgets - Weather
		
		
		// 3.f. Widgets - News
		
		
		// 3.g. Widgets - Currencies
				

		// 4. Images
		// 4-a. Images - 기본 창
		// 4-a-1. Images - 기본 창 - preview 클릭 이벤트
		/*
		$("#lay_editor_layer .images .contents .image_preview #1").click(function(){
			selectedFiveImageNo= 1;
			images_open_select_an_image();
		});
		$("#lay_editor_layer .images .contents .image_preview #2").click(function(){	    
			selectedFiveImageNo= 2;
			images_open_select_an_image();
		});
		$("#lay_editor_layer .images .contents .image_preview #3").click(function(){
			selectedFiveImageNo= 3;
			images_open_select_an_image();
		});
		$("#lay_editor_layer .images .contents .image_preview #4").click(function(){
			selectedFiveImageNo= 4;
			images_open_select_an_image();
		});
		$("#lay_editor_layer .images .contents .image_preview #5").click(function(){
			selectedFiveImageNo= 5;
			images_open_select_an_image();
		});
		*/
		$("#lay_editor_layer .images .contents .image_preview .cellTarget").click(function(){
			selectedFiveImageNo= $(this).attr('id');			
			
			//if(selectedSlideListKind == "theme"){
				if(!isFiveImageSetted[selectedFiveImageNo] || selectedImageContorlNo == selectedFiveImageNo){
					setupActiveDisableCell(selectedFiveImageNo);
					
					// disableCell 보이기
					$("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo+ " .disableCell_1").show();
					$("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo+ " .disableCell_2").show();
					
					// cell 정보 보이기
					$("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo+ " .cell_size").show();
					images_open_select_an_image();
				}
				else {
					selectedImageContorlNo = selectedFiveImageNo;					
					$("#lay_editor_layer .images .contents .image_preview .image_selected").show();
					$("#lay_editor_layer .images .contents .image_preview .image_selected").css({
						top:"125px",
						left:(((selectedFiveImageNo - 1) * 131) + 343) + "px"
					});
				}
			//}				
			
		});
		
		function setupActiveDisableCell(order){
			// cell unit 계산
			var previewCellLength;
			if(originalEditKind.cell[selectedCellNo].x * 1.778 > originalEditKind.cell[selectedCellNo].y * 1){
				previewCellLength = parseInt(114 / (originalEditKind.cell[selectedCellNo].x * 1.778));					
			}
			else {
				previewCellLength = parseInt(114 / (originalEditKind.cell[selectedCellNo].y * 1));
			}
			
			console.log("setup / order : " + order);
			
			// activeCell 영역 정의
			if(originalEditKind.cell[selectedCellNo].x * 1.778 > originalEditKind.cell[selectedCellNo].y * 1){
				activeCellWidth[order] = 114;
				activeCellHeight[order] = previewCellLength * originalEditKind.cell[selectedCellNo].y * 1;
				activeCellTop[order] = parseInt((114 - activeCellHeight[order]) / 2);
				activeCellLeft[order] = 0;					
			}
			else {
				activeCellWidth[order] = previewCellLength * originalEditKind.cell[selectedCellNo].x * 1.778;
				activeCellHeight[order] = 114;
				activeCellTop[order] = 0;
				activeCellLeft[order] = parseInt((114 - activeCellWidth[order]) / 2);
			}				
			
			// disableCell 영역 정의
			if(originalEditKind.cell[selectedCellNo].x * 1.778 > originalEditKind.cell[selectedCellNo].y * 1){					
				$("#lay_editor_layer .image_preview .image_preview_" + order+ " .disableCell_1").css({
					"background-color" : "rgba(255, 255, 255, 0.5)",
					top : 0,
					left : 0,
					"width" : "114px",
					"height" : parseInt((114 - activeCellHeight[order]) / 2) + "px"
				});
				$("#lay_editor_layer .image_preview .image_preview_" + order+ " .disableCell_2").css({
					"background-color" : "rgba(255, 255, 255, 0.5)",
					top : parseInt((114 + activeCellHeight[order]) / 2) + "px",
					left : 0,
					"width" : "114px",
					"height" : parseInt((114 - activeCellHeight[order]) / 2) + "px"
				});				
			}
			else{					
				$("#lay_editor_layer .image_preview .image_preview_" + order+ " .disableCell_1").css({
					"background-color" : "rgba(255, 255, 255, 0.5)",
					top : 0,
					left : 0,
					"width" : parseInt((114 - activeCellWidth[order]) / 2) + "px",
					"height" : "114px"
				});
				$("#lay_editor_layer .image_preview .image_preview_" + order+ " .disableCell_2").css({
					"background-color" : "rgba(255, 255, 255, 0.5)",
					top : 0,
					left : parseInt((114 + activeCellWidth[order]) / 2) + "px",
					"width" : parseInt((114 - activeCellWidth[order]) / 2) + "px",
					"height" : "114px"
				});				
			}
			
			// sell size 정의
			$("#lay_editor_layer .image_preview .image_preview_" + order+ " .cell_size .pix").text((originalEditKind.cell[selectedCellNo].x * 256) + " x " + (originalEditKind.cell[selectedCellNo].y * 144));
					
			/*
			console.log("originalEditKind.cell[selectedCellNo].x : " + originalEditKind.cell[selectedCellNo].x );
			console.log("originalEditKind.cell[selectedCellNo].y : " + originalEditKind.cell[selectedCellNo].y);
			console.log("previewCellLength : " + previewCellLength);
			console.log("top : " + activeCellTop);
			console.log("left : " + activeCellLeft);
			console.log("width : " + previewCellLength * originalEditKind.cell[selectedCellNo].x * 1.778);
			console.log("height : " + previewCellLength * originalEditKind.cell[selectedCellNo].y * 1);
			
			console.log("Cell size : " + (originalEditKind.cell[selectedCellNo].x * 256) + " x " + (originalEditKind.cell[selectedCellNo].y * 144));
			*/
		}
		
		// 4-a-2. Images - 기본 창 - Select an image 창 열기 함수
		function images_open_select_an_image(){
			// 뒷 배경 dimmed 처리
			$("#lay_editor_layer").append("<div id='select_an_image_block' class='disabled_left'></div>");
	        $("#select_an_image_block").css("z-index", $("#lay_editor_layer .images .contents .select_an_image").css("z-index")-1);
		    $("#select_an_image_block").height($(document).height());
			
			// select_an_image 창 보이기
			$("#lay_editor_layer .images .contents .select_an_image").show();			
			$('#lay_editor_layer .images .contents .select_an_image').animate( {top:"14px", opacity:"0.0"}, 0, 'easeInOutQuint', function(){
			    $('#lay_editor_layer .images .contents .select_an_image').animate( {top:"14px", opacity:"1.0"}, 500, 'easeInOutQuint');			
			});

			// google app engine 연동 : 이미지 로드 호출
			body_dimmed_open();
			window.open("./load_cell", "POPON Image load", "left=-100, top=-100, width=1, height=1, titlebar=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, copyhistory=yes, resizable=no");
							
			// my Image 불러오기
			// complete // maxSelectCellImageMyImages = localStorage.getItem("maxSelectCellImageMyImages");			
			// complete // if(String(maxSelectCellImageMyImages) == "null" || String(maxSelectCellImageMyImages) == "undefined") maxSelectCellImageMyImages = 0;
			// complete // console.log("[load]maxSelectCellImageMyImages : " + maxSelectCellImageMyImages);
			
			// complete // for(var i=1; i<= maxSelectCellImageMyImages; i++){
			// complete // 	selectCellImage.myImages.fileName[i] = localStorage.getItem("selectCellImage.myImages.fileName[" + i + "]");
			// complete // 	selectCellImage.myImages.url[i] = rootURL + "/websrc/img/image_myImages/" + selectCellImage.myImages.fileName[i];
			// complete // 	console.log("[load]selectCellImage.myImages.url[" + i + "] : " + selectCellImage.myImages.url[i]);
			// complete // }
												
			// my Image 불러온 것 적용
			// complete // loadSelectCellImageInfo();			
			// complete // makeSelectCellImage.category = "cell";
			// complete // makeSelectCellImage.wrapper = "#lay_editor_layer .images .select_an_image .list_item_container_outer .list_item_container";
			// complete // makeSelectCellImage.top = 47;
			// complete // makeSelectCellImage.left = 25;
			// complete // makeSelectCellImage.maxMyImages = maxSelectCellImageMyImages;
			// complete // makeSelectCellImage.build("myImages");	
			
			// 우측 scroll 생성
			// complete // myCellImageScroll = new scr("cellImage");
			
			// complete // $(".cellImage.scr-cont").css({"top":"0px"});
			// 이미 선택된 이미지가 있는 경우 체크 이미지등 처리해주기
			//images_selected_image_process();
		}
		

		// Images - Selected an image 창
		// Images - Select an image 창 - image list 클릭 이벤트		
		$("#lay_editor_layer .images .contents .select_an_image .myImagesImg").live('click', function(event) {
			// 선택한것 또 선택했으면 default 값으로 변환
			if(selectedImageKind == "myImages" && selectedMyImagesNo == $(this).attr("id")){
				images_image_list_reset();				
			}
			
			// 선택한것 업데이트
			else {
				selectedImageKind = "myImages";
				selectedMyImagesNo = $(this).attr("id");
				
				selectedCheckImageIconX = parseInt($(this).css('left')) + 5;
				selectedCheckImageIconY = parseInt($(this).css('top')) + 5;
			
				images_image_select_effect();
			}
		});
		
		// Images - Select an image 창 - image list 선택한 경우 효과 (select or delete 판단 후, 이미지 선택 체크 or 해제)
        function images_image_select_effect(){
            
			// select 모드
			if(images_image_click_mode == "select"){
				// 변수 값 업데이트
				isImageChecked = true;
				
				// select된 이미지 처리 함수
				images_selected_image_process();
			}
			
			// delete 모드
			else if(images_image_click_mode == "delete"){
				// google app engine 연동 : 이미지 삭제 호출
				body_dimmed_open();
				window.open("./delete_cell/?selectedMyImagesNo=" + selectedMyImagesNo, "POPON Image delete", "left=-100, top=-100, width=1, height=1, titlebar=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, copyhistory=yes, resizable=no");
					
				// 이미지 지우기
				// complete // for(var i=selectedMyImagesNo; i<=maxSelectCellImageMyImages; i++){
				// complete // 	$("#lay_editor_layer .images .contents .select_an_image #myImagesId_" + i).remove();
				// complete // }				
				
				// 변수값 업데이트
				// complete // maxSelectCellImageMyImages--;
				// complete // localStorage.setItem("maxSelectCellImageMyImages", maxSelectCellImageMyImages);				
			
				
				// 파일이름 재정렬 및 업데이트				
				// complete // for(var i=selectedMyImagesNo; i <= maxSelectCellImageMyImages; i++){					
				// complete // 	selectCellImage.myImages.fileName[Number(i)] = selectCellImage.myImages.fileName[Number(i)+1];
				// complete // 	localStorage.setItem("selectCellImage.myImages.fileName[" + i + "]", selectCellImage.myImages.fileName[i]);
				// complete // 	selectCellImage.myImages.url[Number(i)] = selectCellImage.myImages.url[Number(i)+1];
				// complete // }			
				// complete // selectCellImage.myImages.fileName[maxSelectCellImageMyImages+1] = undefined;
				// complete // selectCellImage.myImages.url[maxSelectCellImageMyImages+1] = undefined;				
				 
				// UI 업데이트
				// complete // makeSelectCellImage.category = "cell";
				// complete // makeSelectCellImage.wrapper = "#lay_editor_layer .images .select_an_image .list_item_container_outer .list_item_container";
				// complete // makeSelectCellImage.top = 47;
				// complete // makeSelectCellImage.left = 25;
				// complete // makeSelectCellImage.maxMyImages = maxSelectCellImageMyImages;
				// complete // makeSelectCellImage.build("myImages");
				
				// - 표시 나타나기
				// complete // $("#lay_editor_layer .images .contents .select_an_image .myImagesImg .delete").show();

				// complete // selectedImageKind = null;
				// complete // selectedMyImagesNo = null;				
			}
		}

		// 4-b-4. Images - Select an image 창 - select된 이미지 처리 함수
		function images_selected_image_process(){
		
		    // 4-b-4-(1). 이미지 위에 V 체크			
			$("#lay_editor_layer .images .contents .select_an_image .image_selected").show();
			$("#lay_editor_layer .images .contents .select_an_image .image_selected").css("top", selectedCheckImageIconY + "px");
		    $("#lay_editor_layer .images .contents .select_an_image .image_selected").css("left", selectedCheckImageIconX + "px");	
			
			// 4-b-4-(2). 우측 상단 버튼 이미지 "+" -> "V"  바꿈
			$("#lay_editor_layer .images .contents .select_an_image .plus").css({'background-position':'0 -23px'});
			
			// 4-b-4-(3).우측 상단 버튼 이미지 "-" 제거
			$("#lay_editor_layer .images .contents .select_an_image .minus").hide();
		}
		
		
		
		
		// 선택된 이미지 편집 (공통)
		var interval = 0;
		var imageInCellMoveInterval = 10;		
		
		$("#lay_editor_layer .images .contents .buttons").bind('mouseup mouseleave', function() {
			targetImage = $("#lay_editor_layer .images .contents .image_preview_" + selectedFiveImageNo + " .imageInCell img");
			imageInCellInfoView();
			
			imageInCellWidth[selectedFiveImageNo] = parseInt(targetImage.css('width'));
			imageInCellHeight[selectedFiveImageNo] = parseInt(targetImage.css('height'));
		});
		
		// 선택된 이미지 편집 (up)
		$("#lay_editor_layer .images .contents .buttons .image_up").mousedown(function() {
			interval = setInterval(function(){imageInCellMove("up");}, imageInCellMoveInterval);
		}).bind('mouseup mouseleave', function() {
			clearInterval(interval); 			
		});
		$("#lay_editor_layer .images .contents .buttons .image_up").click(function(){
			imageInCellMove("up");
		});
		
		// 선택된 이미지 편집 (down)
		$("#lay_editor_layer .images .contents .buttons .image_down").mousedown(function() {
			interval = setInterval(function(){imageInCellMove("down");}, imageInCellMoveInterval);
		}).bind('mouseup mouseleave', function() {
			clearInterval(interval);
		});
		$("#lay_editor_layer .images .contents .buttons .image_down").click(function(){
			imageInCellMove("down");
		});
		
		// 선택된 이미지 편집 (left)
		$("#lay_editor_layer .images .contents .buttons .image_left").mousedown(function() {
			interval = setInterval(function(){imageInCellMove("left");}, imageInCellMoveInterval);
		}).bind('mouseup mouseleave', function() {
			clearInterval(interval);
		});
		$("#lay_editor_layer .images .contents .buttons .image_left").click(function(){
			imageInCellMove("left");
		});
		
		// 선택된 이미지 편집 (right)
		$("#lay_editor_layer .images .contents .buttons .image_right").mousedown(function() {
			interval = setInterval(function(){imageInCellMove("right");}, imageInCellMoveInterval);
		}).bind('mouseup mouseleave', function() {
			clearInterval(interval);
		});
		$("#lay_editor_layer .images .contents .buttons .image_right").click(function(){
			imageInCellMove("right");
		});
		
		function imageInCellMove(kind) {
			targetImage = $("#lay_editor_layer .images .contents .image_preview_" + selectedFiveImageNo + " .imageInCell img");
			switch(kind) {
				case "up" :
					if(parseInt(targetImage.css('height')) - activeCellTop[selectedFiveImageNo] - activeCellHeight[selectedFiveImageNo] > -parseInt(targetImage.css('top')))
						targetImage.css({'top':'-=1px'});
						imageInCellTop[selectedFiveImageNo] = parseInt($(targetImage).css("top"));
					break;
				case "down" :
					if(activeCellTop[selectedFiveImageNo] > parseInt(targetImage.css('top')))
						targetImage.css({'top':'+=1px'});
						imageInCellTop[selectedFiveImageNo] = parseInt($(targetImage).css("top"));
					break;
				case "left" :
					if(parseInt(targetImage.css('width')) - activeCellLeft[selectedFiveImageNo] - activeCellWidth[selectedFiveImageNo] > -parseInt(targetImage.css('left')))
						targetImage.css({'left':'-=1px'});
						imageInCellLeft[selectedFiveImageNo] = parseInt($(targetImage).css("left"));
					break;
				case "right" :
					if(activeCellLeft[selectedFiveImageNo] > parseInt(targetImage.css('left')))
						targetImage.css({'left':'+=1px'});
						imageInCellLeft[selectedFiveImageNo] = parseInt($(targetImage).css("left"));
					break;
				default :
					break;
			}
		}
		
		
		// 선택된 이미지 편집 (확대)
		var imageInCellZoomInterval = 10;
		
		$("#lay_editor_layer .images .contents .buttons .image_plus").mousedown(function() {
			interval = setInterval(function(){imageInCellZoom("in");}, imageInCellZoomInterval);
		}).bind('mouseup mouseleave', function() {
			clearInterval(interval);
		});
		$("#lay_editor_layer .images .contents .buttons .image_plus").click(function(){
			imageInCellZoom("in");
		});
		
		$("#lay_editor_layer .images .contents .buttons .image_minus").mousedown(function() {
			interval = setInterval(function(){imageInCellZoom("out");}, imageInCellZoomInterval);
		}).bind('mouseup mouseleave', function() {
			clearInterval(interval);
		});
		$("#lay_editor_layer .images .contents .buttons .image_minus").click(function(){
			imageInCellZoom("out");
		});
		
		function imageInCellZoom(kind) {
			targetImage = $("#lay_editor_layer .images .contents .image_preview_" + selectedFiveImageNo + " .imageInCell img");
			switch(kind) {
				case "in" :
					if(1000 > imageInCellPercentage[selectedFiveImageNo]){
						imageInCellPercentage[selectedFiveImageNo]++;					
						targetImage.css({
							'width':imageInCellPercentage[selectedFiveImageNo] + '%',
							'height':imageInCellPercentage[selectedFiveImageNo] + '%',
						});
					}
					break;
				case "out" :
					if(limitImageInCellPercentage < imageInCellPercentage[selectedFiveImageNo] && 
					   parseInt(targetImage.css('width')) - activeCellLeft[selectedFiveImageNo] - activeCellWidth[selectedFiveImageNo] > -parseInt(targetImage.css('left')) &&
					   parseInt(targetImage.css('height')) - activeCellTop[selectedFiveImageNo] - activeCellHeight[selectedFiveImageNo] > -parseInt(targetImage.css('top'))){
						imageInCellPercentage[selectedFiveImageNo]--;
						targetImage.css({
							'width':imageInCellPercentage[selectedFiveImageNo] + '%',
							'height':imageInCellPercentage[selectedFiveImageNo] + '%',
						});
					}
					break;
				default :
					break;	
			}
		}
		
		function imageInCellInfoView() {
			console.log("********** imageInCellInfoView **********");
			console.log("imageInCellPercentage[" + selectedFiveImageNo + "] : " + imageInCellPercentage[selectedFiveImageNo]);
			console.log("top : " + parseInt(targetImage.css('top')));
			console.log("left : " + targetImage.css('left'));
			console.log("width : " + targetImage.css('width'));
			console.log("height : " + targetImage.css('height'));
			console.log("activeCellTop : " + activeCellTop[selectedFiveImageNo]);
			console.log("activeCellLeft : " + activeCellLeft[selectedFiveImageNo]);
			console.log("activeCellWidth : " + activeCellWidth[selectedFiveImageNo]);
			console.log("activeCellHeight : " + activeCellHeight[selectedFiveImageNo]);
		}	
	
		
        // Images - Select an image 창 - 우측 상단 버튼 클릭 이벤트		
	    // "+", "V" 버튼		
		$("#lay_editor_layer .images .contents .select_an_image .plus").click(function(){
			// "+" 버튼
			if(!isImageChecked){
				// google app engine 연동 : 이미지 업로드 호출
				body_dimmed_open();
				window.open("./upload_cell", "POPON Image upload", "left=300, top=300, width=547, height=294, titlebar=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, copyhistory=yes, resizable=no");
							   
				// file dialog 창 나옴
				modeOpenFile = "images";
				//$("#lay_editor_layer .images .contents .select_an_image .input_file_img").click();
			   
				// 우측 상단 버튼 이미지 "-" 다시 나타남
				$("#lay_editor_layer .images .contents .select_an_image .minus").show();
		    }			
			// "V" 버튼
			else{
				// 선택 모드에서 V 클릭시 
				if(backgrounds_image_click_mode == "select") {
					$('#lay_editor_layer .images .contents .select_an_image').animate( {top:"14px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){			    
						// 변수 설정					
						isFiveImageSetted[selectedFiveImageNo] = true;					
						selectedImageContorlNo = selectedFiveImageNo;
						
						// 확대, 축소, 이미지 이동 편집을 위한 체크 아이콘 출현					
						$("#lay_editor_layer .images .contents .image_preview .image_selected").show();
						$("#lay_editor_layer .images .contents .image_preview .image_selected").css({
							top:"125px",
							left:(((selectedFiveImageNo - 1) * 131) + 343) + "px"
						});			
						
						// "-" 버튼 제거
						$("#lay_editor_layer .images .contents .select_an_image .delete").hide();
						
						// 기존 이미지 지우기
						//$("#lay_editor_layer .images .contents .image_preview_" + selectedFiveImageNo + " .imageInCell img").remove();
						
						// 새로운 이미지 미리 보기에 적용하기					
						if(selectedImageKind == "myImages")urlOfCellImage[selectedFiveImageNo] = selectCellImage.myImages.url[selectedMyImagesNo];				
						$("#lay_editor_layer .images .contents .image_preview_" + selectedFiveImageNo + " .imageInCell img").remove();
						$("#lay_editor_layer .images .contents .image_preview_" + selectedFiveImageNo + " .imageInCell").prepend("<img src='" + urlOfCellImage[selectedFiveImageNo] + "'></img>");
						console.log("urlOfCellImage[" + selectedFiveImageNo + "] : " + urlOfCellImage[selectedFiveImageNo]);
						
						var image = $("#lay_editor_layer .images .contents .image_preview_" + selectedFiveImageNo + " .imageInCell");
						image.css('width', 'auto');
						image.css('height', 'auto');
						console.log("image.css / selectedFiveImageNo : " + selectedFiveImageNo);
						setTimeout(function(){
							// Get the width here
							var realWidth = image.width();
							var realHeight = image.height();
							
							var fitHeight = (114 * realHeight) / realWidth;
							var fitWidth = (114 * realWidth) / realHeight;
							
							if(fitHeight < fitWidth) {
								imageInCellPercentage[selectedFiveImageNo] = (114 * 100) / fitHeight;					
							}
							else imageInCellPercentage[selectedFiveImageNo] = 100;		
							
							limitImageInCellPercentage = imageInCellPercentage[selectedFiveImageNo];
							
							console.log("selectedFiveImageNo : " + selectedFiveImageNo);
							console.log("realWidth : " + realWidth);
							console.log("realHeight : " + realHeight);
							console.log("fitHeight : " + fitHeight);
							console.log("fitWidth : " + fitWidth);
							console.log("imageInCellPercentage[" + selectedFiveImageNo + "] : " + imageInCellPercentage[selectedFiveImageNo]);
							
							var imageDepth = $("#lay_editor_layer .images .contents .image_preview_" + selectedFiveImageNo + " .imageInCell img");
							imageDepth.css({
								'position':'relative',
								'width':imageInCellPercentage[selectedFiveImageNo] + '%',
								'height':imageInCellPercentage[selectedFiveImageNo] + '%',
								'top':0,
								'left':0
							});
							imageInCellWidth[selectedFiveImageNo] = parseInt(imageDepth.css('width'));
							imageInCellHeight[selectedFiveImageNo] = parseInt(imageDepth.css('height'));
							//targetImageLeft[selectedFiveImageNo] = parseInt(imageDepth.css('left'));
						},100);
						
						// 창 닫기
						$("#lay_editor_layer .images .contents .select_an_image").hide();
					
						// 뒷 배경 dimmed 처리 제거
						$("#select_an_image_block").remove();
						
						// image 종료 이벤트
						images_image_list_reset();
					});
				}
				
				// 제거 모드에서 V 클릭시 
				else {
					// 우측 상단 버튼 이미지 "-" 표시
					$("#lay_editor_layer .images .contents .select_an_image .minus").show();
					
					// 우측 상단 버튼 이미지 "V" -> "+"  바꿈
					isImageChecked = false;
					$("#lay_editor_layer .images .contents .select_an_image .plus").css({'background-position':'0 0'});								
				}
			}
			// 클릭 : 선택 모드 (deault)
			images_image_click_mode = "select";
			
			// 이미지 위에 "-" 버튼 제거
		    $("#lay_editor_layer .images .contents .select_an_image .delete").hide();			   
		});		
		
		
        // 4-b-5-(2) "-" 버튼
		$("#lay_editor_layer .images .contents .select_an_image .minus").click(function(){
			// 클릭 : 삭제 모드
			images_image_click_mode = "delete";
			
			// 이미지 위에 "-" 버튼 생성
			$("#lay_editor_layer .images .contents .select_an_image .delete").show();
			
            // 우측 상단 버튼 이미지 "-" 제거
			$("#lay_editor_layer .images .contents .select_an_image .minus").hide();
		});	

		
		// 4-b-5-(3) "X" 버튼
		$("#lay_editor_layer .images .contents .select_an_image .close").click(function(){
		    $('#lay_editor_layer .images .contents .select_an_image').animate( {top:"14px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
				// cell size 관련 정보 삭제
				deleteCellSizeInfo();
				
			    // 클릭 : 선택 모드 (deault)
			    images_image_click_mode = "select";
			    
			    // 배경화면 (프리뷰) 초기화
			    $("#lay_editor_layer .images .contents .image_preview_" + selectedFiveImageNo + " .imageInCell img").attr("src" ,"");
												
				// disableCell 삭제
				$("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo+ " .disableCell_1").hide();
				$("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo+ " .disableCell_2").hide();
				
				// 이미지 위에 "-" 버튼 제거
				$("#lay_editor_layer .images .contents .select_an_image .delete").hide();
				
				// 우측 상단 버튼 이미지 "-" 생성
			    $("#lay_editor_layer .images .contents .select_an_image .minus").show();	
			    
				// 변수 설정
				// 처음부터 빈 영역이라면, 변수 설정 할 필요 없다.
				if(isFiveImageSetted[selectedFiveImageNo] == false){
				}
				else {
					isFiveImageSetted[selectedFiveImageNo] = false;
					urlOfCellImage[selectedFiveImageNo] = undefined;
					imageInCellPercentage[selectedFiveImageNo] = 100;
					imageInEditPercentage[selectedFiveImageNo] = 100;
					imageInEditPositionX[selectedFiveImageNo] = 0;
					imageInEditPositionY[selectedFiveImageNo] = 0;
					selectedFiveImageNo = 0;					
				}				
				
				// 체크 이미지 제거				
				$("#lay_editor_layer .images .contents .image_preview .image_selected").hide();
								
				// 창 닫기
			    $("#lay_editor_layer .images .contents .select_an_image").hide();
			    
	            // 뒷 배경 dimmed 처리 제거
			    $("#select_an_image_block").remove();
			    									
				// image 종료 이벤트
				images_image_list_reset();
			});
		});	

		// 4-b-6. Images - Select an image 창 - image 종료 이벤트
		function images_image_list_reset(){		    
			// 체크 이미지 제거
			$("#lay_editor_layer .images .contents .select_an_image .image_selected").hide();
			
			// 우측 상단 버튼 리셋
			isImageChecked = false;
			$("#lay_editor_layer .images .contents .select_an_image .plus").css({'background-position':'0 0px'});
			
			// 우측 상단 버튼 이미지 "-" 표시
			$("#lay_editor_layer .images .contents .select_an_image .minus").show();			
						
			selectedImageKind = null;
			selectedMyImagesNo = null;
			selectedDigitalAndArtNo = null;
			selectedPlantsAndFlowersNo = null;
			selectedPlacesAndLandscapeNo = null;
			selectedNatureAndAnimalsNo = null;
		}
		
		function deleteCellSizeInfo() {			
			// preview 배경 원래대로 되돌리기
			$("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo).css({
				"background-image":"url(../websrc/img/main/lb_editor_layer_images_15.png)"
			});
			
			// disableCell 삭제
			$("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo+ " .disableCell_1").hide();
			$("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo+ " .disableCell_2").hide();
			
			// "cell size" 텍스트 이미지 삭제
			$("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo+ " .cell_size").hide();
			
			// cell size 실제 값 삭제			
			$("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo+ " .cell_size .pix").text(null);
		}
		
		// 5개 이미지 Rotation 기능
		
		

		// 5. Text
		
		// font family 버튼
		$("#lay_editor_layer .text .contents .text_font").click(function(){
			text_popup_all_close();
			$("#lay_editor_layer .text .contents .text_font_list").show();
		});
		$("#lay_editor_layer .text .contents .text_font_list .list_1").click(function(){
			underEditKind.cell[selectedCellNo].text.font_family = "굴림체";			
			$("#lay_editor_layer .text .contents .text_font_list").hide();			
			preview_text_style_change();
			textEditIconUpdate();
		});
		$("#lay_editor_layer .text .contents .text_font_list .list_2").click(function(){
			underEditKind.cell[selectedCellNo].text.font_family = "궁서체";
			$("#lay_editor_layer .text .contents .text_font_list").hide();
			preview_text_style_change();
			textEditIconUpdate();
		});
		$("#lay_editor_layer .text .contents .text_font_list .list_3").click(function(){
			underEditKind.cell[selectedCellNo].text.font_family = "돋움체";
			$("#lay_editor_layer .text .contents .text_font_list").hide();
			preview_text_style_change();
			textEditIconUpdate();
		});
		$("#lay_editor_layer .text .contents .text_font_list .list_4").click(function(){
			underEditKind.cell[selectedCellNo].text.font_family = "바탕체";
			$("#lay_editor_layer .text .contents .text_font_list").hide();
			preview_text_style_change();
			textEditIconUpdate();
		});
		$("#lay_editor_layer .text .contents .text_font_list .list_5").click(function(){
			underEditKind.cell[selectedCellNo].text.font_family = "휴먼엽서체";
			$("#lay_editor_layer .text .contents .text_font_list").hide();
			preview_text_style_change();
			textEditIconUpdate();
		});
		
		// font size 버튼
		$("#lay_editor_layer .text .contents .text_size").click(function(){
		    text_popup_all_close();
			$("#lay_editor_layer .text .contents .text_size_list").show();
		});
		$("#lay_editor_layer .text .contents .text_size_list .list_1").click(function(){
		    underEditKind.cell[selectedCellNo].text.font_size = 48;
			$("#lay_editor_layer .text .contents .text_size_list").hide();
			preview_text_style_change();
			textEditIconUpdate();
		});
		$("#lay_editor_layer .text .contents .text_size_list .list_2").click(function(){
		    underEditKind.cell[selectedCellNo].text.font_size = 64;
			$("#lay_editor_layer .text .contents .text_size_list").hide();
			preview_text_style_change();
			textEditIconUpdate();
		});
		$("#lay_editor_layer .text .contents .text_size_list .list_3").click(function(){
		    underEditKind.cell[selectedCellNo].text.font_size = 72;
			$("#lay_editor_layer .text .contents .text_size_list").hide();
			preview_text_style_change();
			textEditIconUpdate();
		});
		$("#lay_editor_layer .text .contents .text_size_list .list_4").click(function(){
		    underEditKind.cell[selectedCellNo].text.font_size = 100;
			$("#lay_editor_layer .text .contents .text_size_list").hide();
			preview_text_style_change();
			textEditIconUpdate();
		});
		$("#lay_editor_layer .text .contents .text_size_list .list_5").click(function(){
		    underEditKind.cell[selectedCellNo].text.font_size = 120;
			$("#lay_editor_layer .text .contents .text_size_list").hide();
			preview_text_style_change();
			textEditIconUpdate();
		});

		
		// font color 버튼
		$("#lay_editor_layer .text .contents .text_color").click(function(){
		    $("#lay_editor_layer .text .contents .text_font_list").hide();
			$("#lay_editor_layer .text .contents .text_size_list").hide();			
			text_font_color_trigger[selectedCellNo]++;
			if(text_font_color_trigger[selectedCellNo] >= 2)text_font_color_trigger[selectedCellNo] = 0;
			if(text_font_color_trigger[selectedCellNo] == 1){
				$("#lay_editor_layer .text .contents .text_color").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_07.png)'});
				$("#lay_editor_layer .text .contents .text_color_list").show();
				$("#lay_editor_layer .text .contents .text_color_list").css({'left':'681px'});
			}
			else{
				$("#lay_editor_layer .text .contents .text_color").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_06.png)'});
				$("#lay_editor_layer .text .contents .text_color_list").hide();				
			}
		});
		$("#lay_editor_layer .text .contents .text_color_list .palette").find('div').click(function(){
			var myClass = $(this).attr("class");
			var substr = myClass.split('_');
			var color_code = text_color_list[Number(substr[1])];
			if(text_font_color_trigger[selectedCellNo] == 1){
				underEditKind.cell[selectedCellNo].text.font_color = color_code;
				preview_text_style_change();
				textEditIconUpdate();
				text_font_color_trigger[selectedCellNo] = 0;
				$("#lay_editor_layer .text .contents .text_color_list").hide();
				$("#lay_editor_layer .text .contents .text_color").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_06.png)'});				
			}
			else if(text_font_back_color_trigger[selectedCellNo] == 1){
				underEditKind.cell[selectedCellNo].text.font_back_color = color_code;
				//$("#lay_editor_layer .text .contents .text_back_color .status").css({'background-color':color_code});
				//$("#lay_editor_layer .text .contents .text_preview .text_preview_img").css({'background-color':color_code});
				textEditIconUpdate();
				text_font_back_color_trigger[selectedCellNo] = 0;
				$("#lay_editor_layer .text .contents .text_color_list").hide();
				$("#lay_editor_layer .text .contents .text_back_color").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_06.png)'});				
			}
		});
		
		// font weight 버튼
		$("#lay_editor_layer .text .contents .text_weight").click(function(){
		    text_popup_all_close();
			if(underEditKind.cell[selectedCellNo].text.font_weight == "normal") underEditKind.cell[selectedCellNo].text.font_weight = "bold";
			else underEditKind.cell[selectedCellNo].text.font_weight = "normal";
									
			preview_text_style_change();
			textEditIconUpdate();
		});
		
		// font back color 버튼
		$("#lay_editor_layer .text .contents .text_back_color").click(function(){
		    $("#lay_editor_layer .text .contents .text_font_list").hide();
			$("#lay_editor_layer .text .contents .text_size_list").hide();			
			text_font_back_color_trigger[selectedCellNo]++;
			if(text_font_back_color_trigger[selectedCellNo] >= 2)text_font_back_color_trigger[selectedCellNo] = 0;
			if(text_font_back_color_trigger[selectedCellNo] == 1){
				$("#lay_editor_layer .text .contents .text_back_color").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_07.png)'});
				$("#lay_editor_layer .text .contents .text_color_list").show();
				$("#lay_editor_layer .text .contents .text_color_list").css({'left':'753px'});
			}
			else{
				$("#lay_editor_layer .text .contents .text_back_color").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_06.png)'});
				$("#lay_editor_layer .text .contents .text_color_list").hide();				
			}
		});
		
		// 정렬 버튼
		$("#lay_editor_layer .text .contents .text_align_left").click(function(){
		    text_popup_all_close();
			underEditKind.cell[selectedCellNo].text.font_align = "left";
			preview_text_style_change();
			textEditIconUpdate();
		});
		$("#lay_editor_layer .text .contents .text_align_center").click(function(){
		    text_popup_all_close();
			underEditKind.cell[selectedCellNo].text.font_align = "center";
			preview_text_style_change();
			textEditIconUpdate();
		});
		$("#lay_editor_layer .text .contents .text_align_right").click(function(){
		    text_popup_all_close();
			underEditKind.cell[selectedCellNo].text.font_align = "right";
			preview_text_style_change();
			textEditIconUpdate();
		});
		$("#lay_editor_layer .text .contents .text_align_top").click(function(){
		    text_popup_all_close();
			underEditKind.cell[selectedCellNo].text.font_vertical = "top";			
			preview_text_style_change();
			textEditIconUpdate();
		});
		$("#lay_editor_layer .text .contents .text_align_middle").click(function(){
		    text_popup_all_close();
			underEditKind.cell[selectedCellNo].text.font_vertical = "middle";
			preview_text_style_change();
			textEditIconUpdate();
		});
		$("#lay_editor_layer .text .contents .text_align_bottom").click(function(){
		    text_popup_all_close();
			underEditKind.cell[selectedCellNo].text.font_vertical = "bottom";
			preview_text_style_change();
			textEditIconUpdate();
		});
		
		
		$("#lay_editor_layer .text .contents .text_window").click(function(){
			text_popup_all_close();
		});
		
		function preview_text_trigger(){
			var max_x = 466;
			var max_y = 147;
			var margin_top = 20;
			var margin_right = 20;
			var margin_down = 20;
			var margin_left = 20;
			var pannel_x = max_x - margin_left - margin_right;
			var pannel_y = max_y - margin_top - margin_down;
			var modified_x = new Number;
			var modified_y = new Number;
			
			
			// cell 배경색 preview 적용
			$("#lay_editor_layer .text .contents .text_preview .text_preview_img").css({'background-color':originalEditKind.cell[selectedCellNo].text.font_back_color});
			
			// cell 안의 text size 적용
			if(cellSizeX[selectedCellNo] - pannel_x <=0 && cellSizeY[selectedCellNo] - pannel_y <=0){
				text_preview_gain = 1;
			}
			else {
				text_preview_gain_x = pannel_x / cellSizeX[selectedCellNo];
				text_preview_gain_y = pannel_y / cellSizeY[selectedCellNo];
				if(text_preview_gain_x < text_preview_gain_y) text_preview_gain = text_preview_gain_x;
				else text_preview_gain = text_preview_gain_y;
			}	
			
			// cell 배경크기 preview 적용
			modified_x = cellSizeX[selectedCellNo] * text_preview_gain;
			modified_y = cellSizeY[selectedCellNo] * text_preview_gain;
			modified_font_size = Number((230/256) * underEditKind.cell[selectedCellNo].text.font_size) * text_preview_gain;
			
			$("#lay_editor_layer .text .contents .text_preview .text_preview_img").css({
				top:(max_y-modified_y)/2 + 'px',
				left:(max_x-modified_x)/2 + 'px',
				'width':cellSizeX[selectedCellNo] * text_preview_gain + 'px',
				'height':cellSizeY[selectedCellNo] * text_preview_gain + 'px'
			});
					
			// cell 안의 text style 적용
			preview_text_style_change();
			
			// cell 안의 text preview 적용
			if((underEditKind.cell[selectedCellNo].text.contents != "undefined"))$('.text_preview_img .vertical-align').text(underEditKind.cell[selectedCellNo].text.contents);
			
			// text Edit 아이콘 업데이트
			textEditIconUpdate();
		}
		
		function preview_text_style_change(){
			$("#lay_editor_layer .text .contents .text_preview .text_preview_img .vertical-align").css({
				"width":cellSizeX[selectedCellNo] * text_preview_gain + 'px',
				"height":Number(modified_font_size) + "px",
				//"background-color":"#00f",
				'font-size':modified_font_size +'px',
				'color':underEditKind.cell[selectedCellNo].text.font_color,
				'font-family':underEditKind.cell[selectedCellNo].text.font_family,
				'text-align':underEditKind.cell[selectedCellNo].text.font_align,
				'font-weight':underEditKind.cell[selectedCellNo].text.font_weight
			});		
			runTextVerticalAlign("#lay_editor_layer .text .contents .text_preview .text_preview_img .vertical-align", underEditKind.cell[selectedCellNo].text.font_vertical);
			
		}
		
		$('#lay_editor_layer .text .contents .text_input #input_text_input').keyup(function () {
			underEditKind.cell[selectedCellNo].text.contents = $(this).val();
			$('.text_preview_img .vertical-align').text($(this).val());
		});
		
		
		function textEditIconUpdate(){
			// contents
			if((underEditKind.cell[selectedCellNo].text.contents) != "undefined")$('#lay_editor_layer .text .contents .text_input #input_text_input').text(underEditKind.cell[selectedCellNo].text.contents);
			
			// font_size
			$("#lay_editor_layer .text .contents .text_size").text(underEditKind.cell[selectedCellNo].text.font_size);
			modified_font_size = Number((230/256) * underEditKind.cell[selectedCellNo].text.font_size) * text_preview_gain;
			$("#lay_editor_layer .text .contents .text_preview .text_preview_img .vertical-align").css({'font-size':modified_font_size +'px'});
			
			// font_color
			$("#lay_editor_layer .text .contents .text_color .status").css({'color':underEditKind.cell[selectedCellNo].text.font_color});
			$('#lay_editor_layer .text .contents .text_input #input_text_input').css({'color':underEditKind.cell[selectedCellNo].text.font_color});
			
			// font_family			
			$("#lay_editor_layer .text .contents .text_font").text(underEditKind.cell[selectedCellNo].text.font_family);
			$("#lay_editor_layer .text .contents .text_font").css({'font-family':underEditKind.cell[selectedCellNo].text.font_family});
			$('#lay_editor_layer .text .contents .text_input #input_text_input').css({'font-family':underEditKind.cell[selectedCellNo].text.font_family});
			
			// font_align
			$("#lay_editor_layer .text .contents .text_align_left").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_25.png)'});
			$("#lay_editor_layer .text .contents .text_align_center").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_27.png)'});
			$("#lay_editor_layer .text .contents .text_align_right").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_29.png)'});
			switch(underEditKind.cell[selectedCellNo].text.font_align) {
				case "left" :
					$("#lay_editor_layer .text .contents .text_align_left").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_26.png)'});
					break;
				case "center" :
					$("#lay_editor_layer .text .contents .text_align_center").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_28.png)'});
					break;
				case "right" :
					$("#lay_editor_layer .text .contents .text_align_right").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_30.png)'});
					break;
			}
			
			// font_back_color
			$("#lay_editor_layer .text .contents .text_back_color .status").css({'background-color':underEditKind.cell[selectedCellNo].text.font_back_color});
			$("#lay_editor_layer .text .contents .text_preview .text_preview_img").css({'background-color':underEditKind.cell[selectedCellNo].text.font_back_color});
			
			// font_weight
			$("#lay_editor_layer .text .contents .text_weight .status").css({'font-weight':underEditKind.cell[selectedCellNo].text.font_weight});
			$('#lay_editor_layer .text .contents .text_input #input_text_input').css({'font-weight':underEditKind.cell[selectedCellNo].text.font_weight});
			switch(underEditKind.cell[selectedCellNo].text.font_weight) {
				case "normal" :
					$("#lay_editor_layer .text .contents .text_weight").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_06.png)'});
					break;
				case "bold" :
					$("#lay_editor_layer .text .contents .text_weight").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_07.png)'});
					break;
			}			
			
			// font_vertical
			$("#lay_editor_layer .text .contents .text_align_top").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_31.png)'});
			$("#lay_editor_layer .text .contents .text_align_middle").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_33.png)'});
			$("#lay_editor_layer .text .contents .text_align_bottom").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_35.png)'});
			switch(underEditKind.cell[selectedCellNo].text.font_vertical) {
				case "top" :
					$("#lay_editor_layer .text .contents .text_align_top").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_32.png)'});
					break;
				case "middle" :
					$("#lay_editor_layer .text .contents .text_align_middle").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_34.png)'});
					break;
				case "bottom" :
					$("#lay_editor_layer .text .contents .text_align_bottom").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_36.png)'});
					break;
			}
		}
		
		function text_popup_all_close(){
			$("#lay_editor_layer .text .contents .text_font_list").hide();
			$("#lay_editor_layer .text .contents .text_size_list").hide();
			$("#lay_editor_layer .text .contents .text_color_list").hide();
			text_font_color_trigger[selectedCellNo] = 0;
			text_font_back_color_trigger[selectedCellNo] = 0;
			$("#lay_editor_layer .text .contents .text_color").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_06.png)'});
			$("#lay_editor_layer .text .contents .text_back_color").css({'background-image':'url(../websrc/img/main/lb_editor_layer_text_06.png)'});
		}
		
		function build_text_color_list(){
			var i;
			for(i=0; i<=67; i++){
				$("#lay_editor_layer .text .contents .text_color_list .palette .list_" + i).css("background-color", text_color_list[i]);
			}
		}
		
		
		
		// 6. Cancel
		
		// 7. Save
		// 7-a. Save - 새로 저장하기 클릭 이벤트
		/*
		$("#lay_editor_layer .save .contents .save_radio_img#save_01").click(function(){
		    $("#lay_editor_layer .save .contents .save_dimmed").css({display:'none'});
		});
		*/
		
		// 7-b. Save - 덮어쓰기 클릭 이벤트
		/*
		$("#lay_editor_layer .save .contents .save_radio_img#save_02").click(function(){
			$("#lay_editor_layer .save .contents #input_project_name_date").remove();	
			$(".input_project_name").append('<input id="input_project_name_date" type="text" placeHolder="2014.01.01 00:00:00" rel="project_name"></input>');			
			$("#lay_editor_layer .save .contents .save_dimmed").css({display:'block'});
		});
		*/
		// 8. Publish
		
	}	
	
	
	function runSave() {
		if(window.localStorage) {
			var saveMode = $(':radio[name="save_list"]:checked').val();
			console.log(saveMode);
			/*
			switch(saveMode) {
				case "new" :
					publishEditMode = "saveNew";								
					break;
				case "over" :
					publishEditMode = "publishEveryone";							
					break;			
			}*/
			publishEditMode = "save";
			
			runWriteLocalStorage();
		}
		else {
			alert("로컬 저장소를 사용할 수 없는 브라우저 입니다.");
		}	
	}
	
	
	function runPublish() {		
		/*
		if(window.localStorage) {
			var publishMode = $(':radio[name="publish_list"]:checked').val();
			console.log(publishMode);
		
			switch(publishMode) {
				case "me" :
					publishEditMode = "publishMe";								
					break;
				case "everyone" :
					publishEditMode = "publishEveryone";							
					break;			
			}			
			runWriteLocalStorage();
		}
		else {
			alert("로컬 저장소를 사용할 수 없는 브라우저 입니다.");
		}
		*/		
		var upload_parameter = new String;
		
		// url paramerter 전송시 #은 전송이 안 되므로, #부분을 제외한 color값 추출 (예:#ffffff -> ffffff)
		var str = appliedEditKind.background.color;
		var backgroundColorForPhp = str.split("#");
		
		upload_parameter = "?publishName=playlist" + 		
							"&divided=" + appliedEditKind.divided +							
							"&background_kind=" + appliedEditKind.background.kind +
							"&background_color=" + backgroundColorForPhp[1] +
							"&background_image_url=" + appliedEditKind.background.image.url;
		
		
		
		
		for(var i=1; i<=25; i++) {
			if(appliedEditKind.cell[i].kind){
				upload_parameter += "&cell_kind_" + i + "=" + appliedEditKind.cell[i].kind +
										"&cell_x_" + i + "=" + appliedEditKind.cell[i].x +
										"&cell_y_" + i + "=" + appliedEditKind.cell[i].y;
					
				switch(appliedEditKind.cell[i].kind) {
					case "image":
						upload_parameter += "&cell_image_theFirstOrderFiveImages_" + i + "=" + appliedEditKind.cell[i].image.theFirstOrderFiveImages +
											"&cell_image_selectedFiveImageNo_" + i + "=" + appliedEditKind.cell[i].image.selectedFiveImageNo;
										
						for(var j=1; j<=5; j++) {
							if(appliedEditKind.cell[i].image.url[j]) {
								upload_parameter += "&cell_image_url_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.url[j] +
													
													"&cell_image_imageInCellPercentage_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellPercentage[j] +
													"&cell_image_imageInCellTop_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellTop[j] +
													"&cell_image_imageInCellLeft_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellLeft[j] +
													"&cell_image_imageInCellWidth_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellWidth[j] +
													"&cell_image_imageInCellHeight_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellHeight[j] +
													"&cell_image_imageInEditPercentage_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInEditPercentage[j] +
													"&cell_image_imageInEditPositionX_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInEditPositionX[j] +
													"&cell_image_imageInEditPositionY_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInEditPositionY[j];								
							}
						}
						break;
					case "text":
						upload_parameter += "&cell_text_contents_" + i + "=" + appliedEditKind.cell[i].text.contents +
											"&cell_text_font_size_" + i + "=" + appliedEditKind.cell[i].text.font_size +
											"&cell_text_font_color_" + i + "=" + appliedEditKind.cell[i].text.font_color +
											"&cell_text_font_family_" + i + "=" + appliedEditKind.cell[i].text.font_family +
											"&cell_text_font_align_" + i + "=" + appliedEditKind.cell[i].text.font_align +
											"&cell_text_font_back_color_" + i + "=" + appliedEditKind.cell[i].text.font_back_color +
											"&cell_text_font_weight_" + i + "=" + appliedEditKind.cell[i].text.font_weight +
											"&cell_text_font_vertical_" + i + "=" + appliedEditKind.cell[i].text.font_vertical;						
						break;
					default :
						break;
				}
			}
		}
		
		// google app engine 연동 : publish 업로드 호출
		body_dimmed_open();
		window.open("./upload_publish/" + upload_parameter, "POPON Image load", "left=-100, top=-100, width=1, height=1, titlebar=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, copyhistory=yes, resizable=no");
				
	}
	
	/*
	function runWriteLocalStorage() {
		orderTmp = localStorage.getItem(publishEditMode + ".order");
		if(!orderTmp || orderTmp == 0) {
			orderTmp = 1;	
		}		
		
		console.log("\n****** appliedEditKind ******");
		console.log(appliedEditKind);
		
		// save
		localStorage.setItem(publishEditMode + "_" +  Number(orderTmp) + ".divided", appliedEditKind.divided);
		localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".background.kind", appliedEditKind.background.kind);
		localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".background.color", appliedEditKind.background.color);
		localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".background.image.url", appliedEditKind.background.image.url);			
		for(var i=1; i<=25; i++) {
			if(appliedEditKind.cell[i].kind){
				localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].kind", appliedEditKind.cell[i].kind);
				localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].x", appliedEditKind.cell[i].x);
				localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].y", appliedEditKind.cell[i].y);
				
				switch(appliedEditKind.cell[i].kind) {
					case "image":
						localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].image.theFirstOrderFiveImages", appliedEditKind.cell[i].image.theFirstOrderFiveImages);
						localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].image.selectedFiveImageNo", appliedEditKind.cell[i].image.selectedFiveImageNo);
						
						for(var j=1; j<=5; j++) {
							if(appliedEditKind.cell[i].image.url[j]) {
								localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].image.url[" + j + "]", appliedEditKind.cell[i].image.url[j]);
								
								localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].image.imageInCellPercentage[" + j + "]", appliedEditKind.cell[i].image.imageInCellPercentage[j]);							
								localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].image.imageInCellTop[" + j + "]", appliedEditKind.cell[i].image.imageInCellTop[j]);
								localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].image.imageInCellLeft[" + j + "]", appliedEditKind.cell[i].image.imageInCellLeft[j]);
								localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].image.imageInCellWidth[" + j + "]", appliedEditKind.cell[i].image.imageInCellWidth[j]);
								localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].image.imageInCellHeight[" + j + "]", appliedEditKind.cell[i].image.imageInCellHeight[j]);
								localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].image.imageInEditPercentage[" + j + "]", appliedEditKind.cell[i].image.imageInEditPercentage[j]);
								localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].image.imageInEditPositionX[" + j + "]", appliedEditKind.cell[i].image.imageInEditPositionX[j]);
								localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].image.imageInEditPositionY[" + j + "]", appliedEditKind.cell[i].image.imageInEditPositionY[j]);
							}
						}
						break;
					case "text":
						localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].text.contents", appliedEditKind.cell[i].text.contents);
						localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].text.font_size", appliedEditKind.cell[i].text.font_size);
						localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].text.font_color", appliedEditKind.cell[i].text.font_color);
						localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].text.font_family", appliedEditKind.cell[i].text.font_family);
						localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].text.font_align", appliedEditKind.cell[i].text.font_align);
						localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].text.font_back_color", appliedEditKind.cell[i].text.font_back_color);
						localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].text.font_weight", appliedEditKind.cell[i].text.font_weight);
						localStorage.setItem(publishEditMode + "_" + Number(orderTmp) + ".cell[" + i + "].text.font_vertical", appliedEditKind.cell[i].text.font_vertical);
						break;
					default :
						break;
				}
			}
		}
		localStorage.setItem(publishEditMode + ".order", ++orderTmp);		
	}
	*/
	
	/* grid 에디터 네비게이션 */
	var cell_x = 1;
	var cell_y = 1;
	$(".grid_navigation #up").click(function(){	    
		if(cell_y>1){
		    $('.grid_cursor').animate( {height:"-=128px"}, 200, 'swing');
			cell_y--;
		}
	});	
	$(".grid_navigation #right").click(function(){	    
		if(cell_x<5){
		    $('.grid_cursor').animate( {width:"+=228px"}, 200, 'swing');
		    cell_x++;
		}
	});	
	$(".grid_navigation #left").click(function(){	    
		if(cell_x>1){
		    $('.grid_cursor').animate( {width:"-=228px"}, 200, 'swing');
			cell_x--;
		}
	});
	$(".grid_navigation #down").click(function(){
	    if(cell_y<5){
		    $('.grid_cursor').animate( {height:"+=128px"}, 200, 'swing');
			cell_y++;
		}
	});
	$(".grid_navigation #ok").click(function(){			
		popup("lay_editor_layer");
		$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 0, 'easeInOutQuint', function(){
			$('#lay_editor_layer').animate( {top:"129px", opacity:"1.0"}, 500, 'easeInOutQuint');			
		});
	});	
});


function php_complete_background_images_upload() {	
	//  url 업데이트
	//selectBackgroundImage.myImages.url[maxSelectBackgroundImageMyImages] = reader.result;
	
	// my Image UI 추가
	makeSelectBackgroundImage.build("myImages");
	
	// my Image UI 추가에 따른 줄 변환 시, nature 이하 행 변환
	if(maxSelectBackgroundImageMyImages > 1) {
		if(parseInt($(".myImages_" + (maxSelectBackgroundImageMyImages - 1)).css('top')) != parseInt($(".myImages_" + maxSelectBackgroundImageMyImages).css('top'))) {						
			// digitalAndArt
			$("#lay_editor_layer .select_an_image .title_digitalAndArt").css({top:"+=107"});
			for(var i=1; i <= maxSelectBackgroundImage_digitalAndArt; i++) $(".digitalAndArt_" + i).css({top:"+=107"});
			
			// plantsAndFlowers
			$("#lay_editor_layer .select_an_image .title_plantsAndFlowers").css({top:"+=107"});
			for(var i=1; i <= maxSelectBackgroundImage_plantsAndFlowers; i++) $(".plantsAndFlowers_" + i).css({top:"+=107"});
			
			// placesAndLandscape
			$("#lay_editor_layer .select_an_image .title_placesAndLandscape").css({top:"+=107"});
			for(var i=1; i <= maxSelectBackgroundImage_placesAndLandscape; i++) $(".placesAndLandscape_" + i).css({top:"+=107"});
			
			// natureAndAnimals
			$("#lay_editor_layer .select_an_image .title_natureAndAnimals").css({top:"+=107"});
			for(var i=1; i <= maxSelectBackgroundImage_natureAndAnimals; i++) $(".natureAndAnimals_" + i).css({top:"+=107"});
			
			myBackgroundImageScroll.setup();
		}
	}	
}


function php_complete_cell_images_upload() {	
	//  url 업데이트
	//selectCellImage.myImages.url[maxSelectCellImageMyImages] = reader.result;

	// my Image 불러온 것 적용	
	makeSelectCellImage.build("myImages");	
	
	// my Image UI 추가에 따른 줄 변환 시, nature 이하 행 변환
	if(maxSelectCellImageMyImages > 1) {
		if(parseInt($(".myImages_" + (maxSelectCellImageMyImages - 1)).css('top')) != parseInt($(".myImages_" + maxSelectCellImageMyImages).css('top'))) {						
			//$("#lay_editor_layer .select_an_image .title_nature").css({top:"+=107"});
			//for(var i=1; i <= maxSelectCellImageNature; i++) $(".nature_" + i).css({top:"+=107"});						
			myCellImageScroll.setup();
		}
	}	
}


function php_load_number_of_background_images(maxNumber) {
	maxSelectBackgroundImageMyImages = maxNumber;
	makeSelectBackgroundImage.maxMyImages = maxSelectBackgroundImageMyImages;
	
	console.log("maxSelectBackgroundImageMyImages : " + maxSelectBackgroundImageMyImages);
}


function php_load_number_of_cell_images(maxNumber) {
	maxSelectCellImageMyImages = maxNumber;
	makeSelectCellImage.maxMyImages = maxSelectCellImageMyImages;
	console.log("maxSelectBackgroundImageMyImages : " + maxSelectCellImageMyImages);
}


function php_load_background_images_url(orderNumber, image_file_name, image_url) {	
	selectBackgroundImage.myImages.fileName[orderNumber] = image_file_name;
	selectBackgroundImage.myImages.url[orderNumber] = image_url;
	
	console.log("selectBackgroundImage.myImages.fileName[" + orderNumber + "] : " + selectBackgroundImage.myImages.fileName[orderNumber]);
	console.log("selectBackgroundImage.myImages.url[" + orderNumber + "] : " + selectBackgroundImage.myImages.url[orderNumber]);
}


function php_load_cell_images_url(orderNumber, image_file_name, image_url) {	
	selectCellImage.myImages.fileName[orderNumber] = image_file_name;
	selectCellImage.myImages.url[orderNumber] = image_url;
	
	console.log("selectCellImage.myImages.fileName[" + orderNumber + "] : " + selectCellImage.myImages.fileName[orderNumber]);
	console.log("selectCellImage.myImages.url[" + orderNumber + "] : " + selectCellImage.myImages.url[orderNumber]);
}


function php_complete_background_images_load() {	
	// my Image 불러온 것 적용	
	loadSelectBackgroundImageInfo();
	makeSelectBackgroundImage.category = "background";
	makeSelectBackgroundImage.wrapper = "#lay_editor_layer .backgrounds .image .select_an_image .list_item_container_outer .list_item_container";
	makeSelectBackgroundImage.top = 47;
	makeSelectBackgroundImage.left = 25;
	
	makeSelectBackgroundImage.maxMyImages = maxSelectBackgroundImageMyImages;
	makeSelectBackgroundImage.max_digitalAndArt = maxSelectBackgroundImage_digitalAndArt;
	makeSelectBackgroundImage.max_plantsAndFlowers = maxSelectBackgroundImage_plantsAndFlowers;
	makeSelectBackgroundImage.max_placesAndLandscape = maxSelectBackgroundImage_placesAndLandscape;
	makeSelectBackgroundImage.max_natureAndAnimals = maxSelectBackgroundImage_natureAndAnimals;
	
	makeSelectBackgroundImage.build("myImages");
	makeSelectBackgroundImage.build("digitalAndArt");
	makeSelectBackgroundImage.build("plantsAndFlowers");
	makeSelectBackgroundImage.build("placesAndLandscape");
	makeSelectBackgroundImage.build("natureAndAnimals");
	
	// 우측 scroll 생성
	myBackgroundImageScroll = new scr("backgroundImage");
	
	$(".backgroundImage.scr-cont").css({"top":"0px"});
	
	//myFaqScroll = new scr("faq");
	//myFaqScroll.setup();	
}


function php_complete_cell_images_load() {	
	// my Image 불러온 것 적용
	loadSelectCellImageInfo();			
	makeSelectCellImage.category = "cell";
	makeSelectCellImage.wrapper = "#lay_editor_layer .images .select_an_image .list_item_container_outer .list_item_container";
	makeSelectCellImage.top = 47;
	makeSelectCellImage.left = 25;
	makeSelectCellImage.maxMyImages = maxSelectCellImageMyImages;
	makeSelectCellImage.build("myImages");	
	
	// 우측 scroll 생성
	myCellImageScroll = new scr("cellImage");
	
	$(".cellImage.scr-cont").css({"top":"0px"});
}


function php_complete_background_images_delete() {
	// 이미지 지우기
	for(var i=selectedMyImagesNo; i<=maxSelectBackgroundImageMyImages; i++){
		$("#lay_editor_layer .backgrounds .image .select_an_image #myImagesId_" + i).remove();
	}				
	
	// 변수값 업데이트				
	maxSelectBackgroundImageMyImages--;	
	
	// 파일이름 재정렬 및 업데이트				
	for(var i=selectedMyImagesNo; i <= maxSelectBackgroundImageMyImages; i++){					
		selectBackgroundImage.myImages.fileName[Number(i)] = selectBackgroundImage.myImages.fileName[Number(i)+1];// under // 	localStorage.setItem("selectBackgroundImage.myImages.fileName[" + i + "]", selectBackgroundImage.myImages.fileName[i]);
		selectBackgroundImage.myImages.url[Number(i)] = selectBackgroundImage.myImages.url[Number(i)+1];
	}			
	selectBackgroundImage.myImages.fileName[maxSelectBackgroundImageMyImages+1] = undefined;
	selectBackgroundImage.myImages.url[maxSelectBackgroundImageMyImages+1] = undefined;				
	 
	// UI 업데이트
	makeSelectBackgroundImage.category = "background";
	makeSelectBackgroundImage.wrapper = "#lay_editor_layer .backgrounds .image .select_an_image .list_item_container_outer .list_item_container";
	makeSelectBackgroundImage.top = 47;
	makeSelectBackgroundImage.left = 25;			
	makeSelectBackgroundImage.maxMyImages = maxSelectBackgroundImageMyImages;
	makeSelectBackgroundImage.build("myImages");
	
	// my Image UI  줄 변환 시, nature 이하 행 변환
	if(maxSelectBackgroundImageMyImages > 1) {
		//if(parseInt($(".myImages_" + (maxSelectBackgroundImageMyImages - 1)).css('top')) != parseInt($(".myImages_" + maxSelectBackgroundImageMyImages).css('top'))) {						
		if(maxSelectBackgroundImageMyImages % 4 ==0 ) {
			// digitalAndArt
			$("#lay_editor_layer .select_an_image .title_digitalAndArt").css({top:"-=107"});
			for(var i=1; i <= maxSelectBackgroundImage_digitalAndArt; i++) $(".digitalAndArt_" + i).css({top:"-=107"});
			
			// plantsAndFlowers
			$("#lay_editor_layer .select_an_image .title_plantsAndFlowers").css({top:"-=107"});
			for(var i=1; i <= maxSelectBackgroundImage_plantsAndFlowers; i++) $(".plantsAndFlowers_" + i).css({top:"-=107"});
			
			// placesAndLandscape
			$("#lay_editor_layer .select_an_image .title_placesAndLandscape").css({top:"-=107"});
			for(var i=1; i <= maxSelectBackgroundImage_placesAndLandscape; i++) $(".placesAndLandscape_" + i).css({top:"-=107"});
			
			// natureAndAnimals
			$("#lay_editor_layer .select_an_image .title_natureAndAnimals").css({top:"-=107"});
			for(var i=1; i <= maxSelectBackgroundImage_natureAndAnimals; i++) $(".natureAndAnimals_" + i).css({top:"-=107"});
			
			myBackgroundImageScroll.setup();
		}
	}
	
	// - 표시 나타나기
	$("#lay_editor_layer .backgrounds .image .select_an_image .myImagesImg .delete").show();
	
	selectedImageKind = null;
	selectedMyImagesNo = null;				
}



function php_complete_cell_images_delete() {
	// 이미지 지우기
	for(var i=selectedMyImagesNo; i<=maxSelectCellImageMyImages; i++){
		$("#lay_editor_layer .images .contents .select_an_image #myImagesId_" + i).remove();
	}				
	
	// 변수값 업데이트
	maxSelectCellImageMyImages--;
	localStorage.setItem("maxSelectCellImageMyImages", maxSelectCellImageMyImages);				

	
	// 파일이름 재정렬 및 업데이트				
	for(var i=selectedMyImagesNo; i <= maxSelectCellImageMyImages; i++){					
	 	selectCellImage.myImages.fileName[Number(i)] = selectCellImage.myImages.fileName[Number(i)+1];
	 	localStorage.setItem("selectCellImage.myImages.fileName[" + i + "]", selectCellImage.myImages.fileName[i]);
	 	selectCellImage.myImages.url[Number(i)] = selectCellImage.myImages.url[Number(i)+1];
	}			
	selectCellImage.myImages.fileName[maxSelectCellImageMyImages+1] = undefined;
	selectCellImage.myImages.url[maxSelectCellImageMyImages+1] = undefined;				
	 
	// UI 업데이트
	makeSelectCellImage.category = "cell";
	makeSelectCellImage.wrapper = "#lay_editor_layer .images .select_an_image .list_item_container_outer .list_item_container";
	makeSelectCellImage.top = 47;
	makeSelectCellImage.left = 25;
	makeSelectCellImage.maxMyImages = maxSelectCellImageMyImages;
	makeSelectCellImage.build("myImages");
	
	// - 표시 나타나기
	$("#lay_editor_layer .images .contents .select_an_image .myImagesImg .delete").show();

	selectedImageKind = null;
	selectedMyImagesNo = null;				
}