// 변수 선언
var maxVertical = 5;
var maxEditor = 3;
var maxSupport = 3;
var maxSettings = 4;
var maxCellNo = new Number;

var currentPage = "playlists";   // 현재 페이지
var readyForBackPage = new String // 이전 페이지 대기 (현재 페이지로 봐도 무방)
var selectedTemplateNo;
//var slide_max = maxFeatured;    // 최대 슬라이드 갯수
var slide_max = new Number;    // 최대 슬라이드 갯수
var slide_current = 1;          // 현재 보여지는 슬라이드 번호
var slide_value = 546;          // 슬라이드할때 움직이는 x 픽셀값
var slide_break_dx = 150;       // overflow 될때의 움직이는 x 픽셀값
var time_break_dx = 200;        // overflow 될때 움직이는 시간

// 현재 accounts 등급
var account_current = "light";

$(document).ready(function(){
	alert("version 2.25");
	
	// Webkit (works in Safari and Chrome Canary)
	//element.webkitRequestFullScreen(); 
	//document.webkitCancelFullScreen();
	
	// 화면 꽉차게
	window.parent.document.body.style.zoom = ($(document).width() / 1280);

	// TTA에서 지정한 초기값
	//system.init(0x25f, true);
	
	// 최대 슬라이드 갯수
	slide_max = maxPlaylist;    
	
	// load_slide_max_marginLeft 설정
	load_slide_max_marginLeft();
	
	// 현재 accounts 등급 불러와서 표시
	load_account_current();
		
	// google app engine 연동 : publish  호출
	body_dimmed_open();
	window.open("./load_number_of_publish", "POPON Image load", "left=-100, top=-100, width=1, height=1, titlebar=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, copyhistory=yes, resizable=no");
	
	
	// 메인 Back 버튼 클릭 이벤트
	$(".body_back").click(function(){	
		//if(enabledKey){
			//enabledKey = false;
			isBackBtnMode = true;			
			
			switch(readyForBackPage) {
				// editor
				case "theme" :
					mainKeyLocation.vertical = 3;
					mainKeyLocation.horizon = 1;
					break;
				case "myProjects" :
					mainKeyLocation.vertical = 3;
					mainKeyLocation.horizon = 1;
					break;					
				
				// support
				case "about" :
					mainKeyLocation.vertical = 4;
					mainKeyLocation.horizon = 1;
					break;
				case "faq" :
					mainKeyLocation.vertical = 4;
					mainKeyLocation.horizon = 1;
					$('.lnb_support').css({
						'background-image':'url(../websrc/img/main/bn_main_support_on_02.png)',
						'width':'133px'
					});				
					break;
				case "forum" :
					mainKeyLocation.vertical = 4;
					mainKeyLocation.horizon = 1;
					break;				

				// settings
				case "signIn" :
					mainKeyLocation.vertical = 5;
					mainKeyLocation.horizon = 1;
					break;
				case "signUp" :
					mainKeyLocation.vertical = 5;
					mainKeyLocation.horizon = 1;
					break;
				case "myAccount" :
					mainKeyLocation.vertical = 5;
					mainKeyLocation.horizon = 1;
					break;
					
				// edit map - theme
				case "editMap_theme" :					
					//if(enabledKey) {
						//enabledKey = false;
						currentPage = "theme";						
						
						$("#body_" + selectedSlideListKind + " .editMap").hide();
						for(var i=1; i<=slide_max; i++)$("#body_" + selectedSlideListKind + " .editMap_scene_" + i + "_img").show();
						$("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img").hide();
							
						$("#body_" + selectedSlideListKind + " .body_back_btn").animate( {marginLeft:"-=1000", opacity:"1.0"}, 500, 'easeInOutQuint');			
						$("#body_" + selectedSlideListKind + " .body_title").animate( {marginLeft:"-=1000", opacity:"1.0"}, 500, 'easeInOutQuint');			
						$("#body_" + selectedSlideListKind + " .body_contents").animate( {marginLeft:"-=1000", opacity:"1.0"}, 500, 'easeInOutQuint');
						$("#body_" + selectedSlideListKind + " .body_widget").animate( {marginLeft:"-=1000", opacity:"1.0"}, 500, 'easeInOutQuint');
						$("#body_" + selectedSlideListKind + " .body_button").animate( {marginLeft:"-=1000", opacity:"1.0"}, 500, 'easeInOutQuint', function(){				
							readyForBackPage = "theme";
							enabledKey = true;
							appear_left();
						});
					//}
					return;
				
				// edit layer
				case "editLayer_images" :
					//if(enabledKey) {
						//enabledKey = false;						
						$("#lay_editor_layer .images .bottom_btn .cancel").click();
					//}
					return;
				case "editLayer_text" :
					//if(enabledKey) {
						//enabledKey = false;							
						$("#lay_editor_layer .text .contents .bottom_btn .cancel").click();
					//}
					return;
				case "editLayer_backgrounds" :
					//if(enabledKey) {
						//enabledKey = false;	
						$("#lay_editor_layer .backgrounds .contents .color .bottom_btn .cancel").click();
					//}
					return;
				
				case "editLayer_cancel" :
				case "editLayer_save" :
				case "editLayer_publish" :
				case "editLayer_widgets" :
					//if(enabledKey) {
						//enabledKey = false;						
						$('#lay_editor_layer').animate( {top:"129px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){							
							
							$("#lay_editor_layer").hide();	   
							$("#lay_editor_layer_block").remove();							
							
							readyForBackPage = "editMap_theme";
							//enabledKey = true;
						});
					//}
					return;
			}		
			
			popclose("body_" + selectedSlideListKind + " #previewPopupBackBorder");
			active_left();
					
			//enabledKey = true;
					
			featuredPreviewKeyLocation.horizon = 1;		
			playlistsPreviewKeyLocation.horizon = 1;
			
			focusMainVertical();
			//focusMainHorizon();
			//focusFeaturedPreviewPopup();
			//focusPlaylistsPreviewPopup();
		//}
	});

	
	// 메인 로고 클릭 이벤트
	$(".gnb_logo,.editMap_back").click(function(){		
		//document.location.href = "../html/main.html";
		//localStorage.setItem("isIntroSkip", "true");
		location.reload();		
	});
	
	
	// 로그 아웃 클릭 이벤트
	$(".gnb_log").click(function(){	
		document.location.href = "./signout";
	});	
		
	
	// 화면 슬라이드 효과 - (Next) 오른쪽 방향
 	$('.body_button_right').click(function() {
		//if(enabledKey){
			//enabledKey = false;
			if(slide_current < slide_max){
				slideTarget(slide_value);
				slide_current++;
				mainKeyLocation.horizon++;
				/*
				if(slide_current == slide_max){
					$(".body_contents_sub_dimmed").stop().animate({opacity:"0.0"}, 250, 'swing', function(){
						$(".body_contents_sub_dimmed").stop().animate({opacity:"0.0"}, 250, 'swing', function(){
							enabledKey = true;
						});
					});
				}
				else {
					$(".body_contents_sub_dimmed").stop().animate({opacity:"0.0"}, 250, 'swing', function(){
						$(".body_contents_sub_dimmed").stop().animate({opacity:"1.0"}, 250, 'swing', function(){
							enabledKey = true;
						});
					});
				}
				*/
				
				//focusMainHorizon();
			}			
			//else enabledKey = true;
		//}
    });


	// 화면 슬라이드 효과 - (Previous) 왼쪽 방향
	$('.body_button_left').click(function() {		
		//if(enabledKey){
			//enabledKey = false;
			if(slide_current > 1){
				slideTarget(-slide_value);			
				slide_current--;
				mainKeyLocation.horizon--;
				/*
				$(".body_contents_sub_dimmed").stop().animate({opacity:"0.0"}, 250, 'swing' ,function(){
					$(".body_contents_sub_dimmed").stop().animate({opacity:"1.0"}, 250, 'swing', function(){
						enabledKey = true;
					});
				});
				*/
				//focusMainHorizon();
			}
			else enabledKey = true;
		//}
    });
    function  slideTarget(n){
	    var dx = Number(n);
		$('.body_contents_sub').animate({marginLeft:"-=" + dx}, 500, 'swing');
    }
	
	
	// 화면 슬라이드 점프 효과 - (back 버튼 클릭하였을 때)
	function pageSlideJump(direction, times) {
		//$('.body_contents_sub').css({marginLeft:'0px'});
		switch(direction) {
			case "left" :
				if(slide_current > 1){
					var dx = -slide_value * times;
					$('.body_contents_sub').css({marginLeft:"-=" + dx});
					slide_current -= times;
				}
				break;
			case "right" :
				if(slide_current < slide_max){
					var dx = slide_value * times;
					//$('.body_contents_sub').animate({marginLeft:"-=" + dx}, 0, 'swing');
					$('.body_contents_sub').css({marginLeft:"-=" + dx}, 0, 'swing');
					slide_current += times;			
				}
				//if(slide_current == slide_max)$(".body_contents_sub_dimmed").css({opacity:"0.0"});
		}		
	}
	
	
	// Featured 버튼 클릭 이벤트
	$("#lnb .btn_featured").click(function(){		
		if(currentPage != "featured"){
			mainKeyLocation.vertical = 1;
			
			$(".gnb_logo").removeClass("focus");
			$(".gnb_log").removeClass("focus");
			$(".gnb_close").removeClass("focus");
		
			page_shift_for_left("featured");
			page_shift_for_contents("featured");
			//$(".body_contents_sub_dimmed").stop().animate( {opacity:"1.0"}, 250, 'swing');
			slide_max = maxFeatured;
			
			// load_slide_max_marginLeft 설정
			load_slide_max_marginLeft();
			currentPage = "featured";
			
			//enabledKey = false;
		}		
	});
	
	
	// Playlists 버튼 클릭 이벤트
	$("#lnb .btn_playlists").click(function(){
		if(currentPage != "playlists"){			
			mainKeyLocation.vertical = 2;
			
			$(".gnb_logo").removeClass("focus");
			$(".gnb_log").removeClass("focus");
			$(".gnb_close").removeClass("focus");
			
			page_shift_for_left("playlists");
			page_shift_for_contents("playlists");
			//$(".body_contents_sub_dimmed").stop().animate( {opacity:"1.0"}, 250, 'swing');
			slide_max = maxPlaylist;
			
			// load_slide_max_marginLeft 설정
			load_slide_max_marginLeft();
			currentPage = "playlists";
			
			//enabledKey = false;
		}
		else {
			$(".gnb_logo").removeClass("focus");
			page_shift_for_left("playlists");
		}
	});
	
	
	// Editor 버튼 클릭 이벤트
	$("#lnb .btn_editor").click(function(){
		if(currentPage != "editor"){
			mainKeyLocation.vertical = 3;
			
			$(".gnb_logo").removeClass("focus");
			$(".gnb_log").removeClass("focus");
			$(".gnb_close").removeClass("focus");
			
			page_shift_for_left("editor");
			page_shift_for_contents("editor");
			//$(".body_contents_sub_dimmed").stop().animate( {opacity:"1.0"}, 250, 'swing');
			//slide_current = 1;
			slide_max = maxEditor;
			
			// load_slide_max_marginLeft 설정
			//load_slide_max_marginLeft();
			currentPage = "editor";
			
			//enabledKey = false;
		}
	});	
	
	
	// Support 버튼 클릭 이벤트
	$("#lnb .btn_support").click(function(){
		if(currentPage != "support"){
			mainKeyLocation.vertical = 4;
			
			$(".gnb_logo").removeClass("focus");
			$(".gnb_log").removeClass("focus");
			$(".gnb_close").removeClass("focus");
			
			page_shift_for_left("support");
			page_shift_for_contents("support");
			//$(".body_contents_sub_dimmed").stop().animate( {opacity:"1.0"}, 250, 'swing');
			//slide_current = 1;
			slide_max = maxSupport;
			
			// load_slide_max_marginLeft 설정
			//load_slide_max_marginLeft();
			currentPage = "support";
			
			//enabledKey = false;
		}
	});
	
	
	// Settings 버튼 클릭 이벤트
	$("#lnb .btn_settings").click(function(){	
		if(currentPage != "settings"){
			mainKeyLocation.vertical = 5;
			
			$(".gnb_logo").removeClass("focus");
			$(".gnb_log").removeClass("focus");
			$(".gnb_close").removeClass("focus");
			
			page_shift_for_left("settings");
			page_shift_for_contents("settings");
			//$(".body_contents_sub_dimmed").stop().animate( {opacity:"1.0"}, 250, 'swing');
			//slide_current = 1;
			slide_max = maxSettings;
			
			// load_slide_max_marginLeft 설정
			//load_slide_max_marginLeft();
			currentPage = "settings";
			
			//enabledKey = false;
		}
	});	
	
		
	// 메인 페이지 이동 효과 - lnb 변화
	function page_shift_for_left(newPage){
		$('.lnb_' + currentPage).css({
			'background-image':'url(../websrc/img/main/bn_main_' + currentPage + '_off_02.png)',
			'width':'133px'
		});
		
	    $('.lnb_' + newPage).css({
			'background-image':'url(../websrc/img/main/bn_main_' + newPage + '_on_02.png)',
			'background-position':'0 0px',
			'width':'151px'
		});
				
		//$('.lnb_' + currentPage + ':hover').css({'background-position':'0 -87px'});
		//$('.lnb_' + currentPage + ':focus').css({'background-position':'0 -87px'});
		
		$('.lnb_' + currentPage).hover(function(){
			$(this).css('background-position', '0 -87px');
		}, function(){
			$(this).css('background-position', '0 0px');
		});
		
		$('.lnb_' + newPage).hover(function(){
			$(this).css('background-position', '0 0px');
		}, function(){
			$(this).css('background-position', '0 0px');
		});		
	}

	
	// 3-c. 메인 페이지 이동 효과 - 컨텐츠 shift 효과
	// 3-c-1. 메인 페이지 이동 효과 - 컨텐츠 shift 효과 - lnb 없이 shift
	function page_shift_for_contents(newPage){		
		$("#body_" + currentPage).stop().animate({left:"1000px", opacity:"0.0"}, 400, 'easeInOutQuint', function(){
		    // 새로운 페이지 왼쪽에서 나타나는 효과
			$("#body_" + newPage).show();
			$("#body_" + newPage).css({left:"-500px", opacity:"0.0"});
			$("#body_" + newPage).animate({left:"0", opacity:"1.0"}, 400, 'easeInOutQuint', function(){
				// key 준비
				//enabledKey = true;
			});
			
			// 이전 페이지는 원래대로 reset
			$(this).hide();
			$(this).css({left:"0", opacity:"1.0"});
			currentPage = newPage;
			
			if(isBackBtnMode) {
				$('.body_contents_sub').css({marginLeft:"+=" + (slide_current-1)*slide_value + "px"});
				pageSlideJump("right", mainKeyLocation.horizon - 1);
				slide_current = mainKeyLocation.horizon;
				//pageSlideJump("right", slide_current - 1);
				console.log("pageSlideJump (Back) / mainKeyLocation.horizon : " + mainKeyLocation.horizon);
				console.log("pageSlideJump (Back) / slide_current : " + slide_current);
				isBackBtnMode = false;
			}
			else {
				$('.body_contents_sub').css({marginLeft:"+=" + (slide_current-1)*slide_value + "px"});
				slide_current = 1
				mainKeyLocation.horizon = 1;
				console.log("pageSlideJump (not Back) / mainKeyLocation.horizon : " + mainKeyLocation.horizon);
				console.log("pageSlideJump (not Back) / slide_current : " + slide_current);
				
			}

			if(newPage == "faq") {
				load_faq_scroll();
			}
		});
	}


	// 3-c-2. 메인 페이지 이동 효과 - 컨텐츠 shift 효과 - lnb 함께 shift
	function page_shift_for_big_contents_editMap(){
		$("#body_" + selectedSlideListKind + " .body_back_btn").animate( {marginLeft:"+=1000", opacity:"0.0"}, 500, 'easeInOutQuint');			
		$("#body_" + selectedSlideListKind + " .body_title").animate( {marginLeft:"+=1000", opacity:"0.0"}, 500, 'easeInOutQuint');			
		$("#body_" + selectedSlideListKind + " .body_contents").animate( {marginLeft:"+=1000", opacity:"0.0"}, 500, 'easeInOutQuint');
		$("#body_" + selectedSlideListKind + " .body_widget").animate( {marginLeft:"+=1000", opacity:"0.0"}, 500, 'easeInOutQuint');
		$("#body_" + selectedSlideListKind + " .body_button").animate( {marginLeft:"+=1000", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
			// 새로운 컨텐츠 왼쪽에서 나타나는 효과
			$("#body_" + selectedSlideListKind + " .editMap").show();
			for(var i=1; i<=slide_max; i++)$("#body_" + selectedSlideListKind + " .editMap_scene_" + i + "_img").hide();
			$("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img").show();
		});
       
		/*
		else if(page_name == "grid"){
		    $("#body").prepend("<div class='body_title_appear'><span><img src='../websrc/img/main/bg_editor_grid_02.png'></span></div>");		
		    $('.body_back_btn').animate( {marginLeft:"+=1000", opacity:"0.0"}, 500, 'easeInOutQuint');			
			$('.body_title').animate( {marginLeft:"+=1000", opacity:"0.0"}, 500, 'easeInOutQuint');			
	    	$('.body_contents').animate( {marginLeft:"+=1000", opacity:"0.0"}, 500, 'easeInOutQuint');
		    $('.body_button').animate( {marginLeft:"+=1000", opacity:"0.0"}, 500, 'easeInOutQuint');
		    $('.body_widget').animate( {marginLeft:"+=1000", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
		        // 새로운 컨텐츠 왼쪽에서 나타나는 효과				
			    $('.body_title_appear').css({'margin-top':-43});
			    $('.body_title_appear').animate( {marginLeft:"+=72", opacity:"1.0"}, 300, 'easeInOutQuint', function(){
    	            document.location.href = "../html/" + goto_url;
	    	    });
		    });		
        }
		*/
	}
	
	function page_shift_for_big_contents_play(){
		$("#body_" + selectedSlideListKind + " .body_back_btn").animate( {marginLeft:"+=1000", opacity:"0.0"}, 500, 'easeInOutQuint');			
		$("#body_" + selectedSlideListKind + " .body_title").animate( {marginLeft:"+=1000", opacity:"0.0"}, 500, 'easeInOutQuint');			
		$("#body_" + selectedSlideListKind + " .body_contents").animate( {marginLeft:"+=1000", opacity:"0.0"}, 500, 'easeInOutQuint');
		$("#body_" + selectedSlideListKind + " .body_widget").animate( {marginLeft:"+=1000", opacity:"0.0"}, 500, 'easeInOutQuint');
		$("#body_" + selectedSlideListKind + " .body_button").animate( {marginLeft:"+=1000", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
			// 새로운 컨텐츠 왼쪽에서 나타나는 효과
			$("#body_" + selectedSlideListKind + " .player").show();
			for(var i=1; i<=slide_max; i++)$("#body_" + selectedSlideListKind + " .player_scene_" + i + "_img").hide();
			$("#body_" + selectedSlideListKind + " .player_scene_" + selectedSlideListNo + "_img").show();
			
			// transition of 5 images
			for(var i=1; i<=25; i++){
				if(playlist[selectedSlideListNo].cell[i].kind=="image"){
					animateImages = new ImageTransition();	
					animateImages.transitionTime = 1000;
					animateImages.viewTime = 5000;
					animateImages.object = ".player_scene_" + selectedSlideListNo + "_img .cell_"+ i + " .img";			
					animateImages.url = playlist[selectedSlideListNo].cell[i].image.url;
					animateImages.percentage = playlist[selectedSlideListNo].cell[i].image.imageInEditPercentage;
					animateImages.positionX = (playlist[selectedSlideListNo].cell[i].image.imageInEditPositionX);
					animateImages.positionY = (playlist[selectedSlideListNo].cell[i].image.imageInEditPositionY);
							
					console.log("************************** animateImages **************************");
					console.log("selectedSlideListNo : " + selectedSlideListNo);
					console.log("animateImages.url[1] : " + animateImages.url[1]);
					console.log("animateImages.url[2] : " + animateImages.url[2]);
					console.log("animateImages.url[3] : " + animateImages.url[3]);
					console.log("animateImages.url[4] : " + animateImages.url[4]);
					console.log("animateImages.url[5] : " + animateImages.url[5]);
					console.log("playlist[" + selectedSlideListNo + "].cell[" + i + "].image.imageInEditPositionX :" + playlist[selectedSlideListNo].cell[i].image.imageInEditPositionX);
					console.log("playlist[" + selectedSlideListNo + "].cell[" + i + "].image.imageInEditPositionY :" + playlist[selectedSlideListNo].cell[i].image.imageInEditPositionY);
					
					animateImages.run();
				}
			}
			// gnb삭제
			$("#gnb").hide();
		});
	}
	
	// 전체 화면 취소
	$(".player").click(function(){
		//$("#gnb").show();
		animateImages.abort();
		//document.location.href = "../html/main.html";
		location.reload();
	});
	
	
	// Editor	
	$("#body_editor .slide_theme").click(function(){
		readyForBackPage = "theme";
		slide_max = maxTemplate;
		
		// load_slide_max_marginLeft 설정
		load_slide_max_marginLeft();
		
		dimmed_left("editor");
		page_shift_for_contents("theme");
		
		mainKeyLocation.horizon = 1;
				
		//focusMainHorizon();
	});
	/*
	$("#body_editor #2.poplink").click(function(){
		dimmed_left("editor");
		page_shift_for_contents("grid", "editor/editor_grid.html");
	});*/
	$("#body_editor .slide_myProjects").click(function(){
		readyForBackPage = "myProjects";
		slide_max = maxMyproject;
		
		// load_slide_max_marginLeft 설정
		load_slide_max_marginLeft();

		dimmed_left("editor");
		page_shift_for_contents("myprojects");
		
		mainKeyLocation.horizon = 1;
		//focusMainHorizon();
	});
	$("#body_editor .slide_dimmed").click(function(){		    
		/*if(slide_current == 1){
			dimmed_left("editor");
			page_shift_for_contents("grid", "editor/editor_grid.html");
		}*/
		if(slide_current == 2){
			slide_max = maxMyproject;
			
			// load_slide_max_marginLeft 설정
			load_slide_max_marginLeft();
			readyForBackPage = "myProjects";			
			dimmed_left("editor");					 
			page_shift_for_contents("myprojects");
		}
	});
	
		
	// Support	
	$("#body_support .slide_about").click(function(){
		readyForBackPage = "about";
		dimmed_left("support");
		page_shift_for_contents("about");
	});
	$("#body_support .slide_faq").click(function(){
		readyForBackPage = "faq";
		dimmed_left("support");
		page_shift_for_contents("faq");
	});
	$("#body_support .slide_forum").click(function(){
		readyForBackPage = "forum";
		dimmed_left("support");
		page_shift_for_contents("forum");
	});
	$("#body_support .slide_dimmed").click(function(){		    
		if(slide_current == 1){
			readyForBackPage = "faq";
			dimmed_left("support");
			page_shift_for_contents("faq");
		}
		else if(slide_current == 2){
			readyForBackPage = "forum";
			dimmed_left("support");
			page_shift_for_contents("forum");
		}
	});
	
	// Settings (Accounts 로 변경됨)
	$("#body_settings .body_contents .accounts_light").click(function(){
		account_current = "light";
		load_account_current();
	});
	$("#body_settings .body_contents .accounts_premium").click(function(){
		account_current = "premium";
		load_account_current();
	});
	$("#body_settings .body_contents .accounts_professional").click(function(){
		account_current = "professional";	
		load_account_current();
	});
	$("#body_settings .body_contents .accounts_enterprise").click(function(){
		account_current = "enterprise";		
		load_account_current();
	});
	
	/*$("#body_settings .slide_signIn").click(function(){
		readyForBackPage = "signIn";
		dimmed_left("settings");
		page_shift_for_contents("signin");
	});
	$("#body_settings .slide_signUp").click(function(){
		readyForBackPage = "signUp";
		dimmed_left("settings");
		page_shift_for_contents("signup");
	});
	$("#body_settings #3.poplink").click(function(){
		readyForBackPage = "myAccount";
		dimmed_left("settings");
		page_shift_for_contents("myaccount");
	});
	$("#body_settings .slide_dimmed").click(function(){		    
		if(slide_current == 1){
			readyForBackPage = "signUp";
			dimmed_left("settings");
			page_shift_for_contents("signup");
		}
	});
	*/


	// 4-b. 서브 페이지 이동 효과 - lnb dimmed 효과
	function dimmed_left(page_name){		
		$(".lnb_featured").css({opacity:"0.3"});
	    $(".lnb_playlists").css({opacity:"0.3"});
	    $(".lnb_editor").css({opacity:"0.3"});
	    $(".lnb_support").css({opacity:"0.3"});
	    $(".lnb_settings").css({opacity:"0.3"});
		
		$(".lnbBlock").show();
	}
	function active_left(){
		$(".lnb_featured").css({opacity:"1.0"});
	    $(".lnb_playlists").css({opacity:"1.0"});
	    $(".lnb_editor").css({opacity:"1.0"});
	    $(".lnb_support").css({opacity:"1.0"});
	    $(".lnb_settings").css({opacity:"1.0"});
		
		$(".lnbBlock").hide();		
	}
	
	// 4-c. 서브 페이지 이동 효과 - lnb 사리지는 효과	
	function disappear_left(){
	    $('#lnb').animate( {marginLeft:"+=2000", opacity:"0.0"}, 500, 'easeInOutQuint');	
	}
	
	function appear_left(){
	    //$('#lnb').animate({"marginLeft":"0px", "opacity":"1.0"});	
		$('#lnb').css({marginLeft:"0px", "opacity":"1.0"});	
	}
		
		
	// 5. 팝업 이벤트 등록
	// 5-a. 팝업 이벤트 등록 - 팝업 open, close 효과
	function popup(id_lay){	   
	    $("#"+id_lay).show();
		//$("body").append("<div id='"+id_lay+"_block' class='disabled_left'></div>");
	    //$("#"+id_lay+"_block").css("z-index", $("#"+id_lay).css("z-index")-1);
		//$("#"+id_lay+"_block").height($(document).height());
		$("body").append("<div id='popup_block' class='disabled_left'></div>");
	    $("#popup_block").css("z-index", $("#"+id_lay).css("z-index")-1);
		$("#popup_block").height($(document).height());
    }	
    function popclose(id_lay){
	    $("#"+id_lay).hide();
	    //$("#"+id_lay+"_block").remove();
		$("#popup_block").remove();
	}
	

	// Slide List 클릭 이벤트
	$(".slideList").live('click', function(event) {
		//if(enabledKey){
			//enabledKey = false;
			
			// Featured
			if($('#body_featured').is(':visible')){
				selectedSlideListNo = $(this).attr('id');
				//selectedSlideListNo = slide_current;
				//if($(this).attr('id') != 0)selectedSlideListNo = slide_current;
				//else selectedSlideListNo = slide_current + 1;
				selectedSlideListKind = "featured";
			}
			// Playlist
			else if($('#body_playlists').is(':visible')){
				selectedSlideListNo = $(this).attr('id');
				//selectedSlideListNo = slide_current;
				alert(selectedSlideListNo + "번 슬라이드 선택.");
				selectedSlideListKind = "playlists";
			}
			// Theme
			else if($('#body_theme').is(':visible')){
				selectedSlideListNo = $(this).attr('id');
				//selectedSlideListNo = slide_current;
				alert(selectedSlideListNo + "번 슬라이드 선택.");
				selectedSlideListKind = "theme";
				
				console.log("selectedSlideListNo : " + selectedSlideListNo);
				console.log("slide_current : " + slide_current);
				console.log("mainKeyLocation.horizon : " + mainKeyLocation.horizon);
			}
			// My Projects
			else if($('#body_myprojects').is(':visible')){
				selectedSlideListNo = $(this).attr('id');
				//selectedSlideListNo = slide_current;
				selectedSlideListKind = "myprojects";
			}
			// 적용
			popup("body_" + selectedSlideListKind + " #previewPopupBackBorder");
			for(var i=1; i<=slide_max; i++)$("#body_" + selectedSlideListKind + " .previewPopup_scene_" + i + "_img").hide();
			$("#body_" + selectedSlideListKind + " .previewPopup_scene_" + selectedSlideListNo + "_img").show();

			$("#body_" + selectedSlideListKind + " #previewPopupBackBorder").animate( {top:"15px", opacity:"0.0"}, 0, 'swing', function(){
				$(this).animate( {top:"15px", opacity:"1.0"}, 500, 'swing', function(){
					//enabledKey = true;
				});			
			});
		//}
	});
	/*$("#body_playlists .body_contents_sub_dimmed").live('click', function(event) {
		$('#body_playlists .body_button_right').click();
		setTimeout('$("#body_playlists .slideList#" + (slide_current)).click()', 100);
	});*/
	
	// Forum 버튼 클릭 이벤트
	$("#body_forum .list").click(function(){
		popup("lay_forum");		
		$('#body_forum #lay_forum').animate( {top:"50px", opacity:"0.0"}, 0, 'swing', function(){
			$('#body_forum #lay_forum').animate( {top:"50px", opacity:"1.0"}, 500, 'swing');			
		});
	});
	$("#body_forum #lay_forum .lay_forum_button .xbox, #body_forum #lay_forum .lay_forum_button .write").click(function(){
		$('#body_forum #lay_forum').animate( {top:"50px", opacity:"0.0"}, 500, 'swing', function(){
			popclose("lay_forum");
		});
	});	
	$("#body_forum .newTopic").click(function(){
		popup("lay_new_topic");
		$('#body_forum #lay_new_topic').animate( {top:"138px", opacity:"0.0"}, 0, 'swing', function(){
			$('#body_forum #lay_new_topic').animate( {top:"138px", opacity:"1.0"}, 500, 'swing');			
		});
	});
	$("#body_forum #lay_new_topic .lay_new_topic_button .xbox, #body_forum #lay_new_topic .lay_new_topic_button .apply, .lay_new_topic_button .cancel").click(function(){
		$('#lay_new_topic').animate( {top:"138px", opacity:"0.0"}, 500, 'swing', function(){
			popclose("lay_new_topic");
		});
	});
	
	
	// Signin 버튼 클릭 이벤트
	$("#body_signin .poplink").click(function(){
		$("#body_signin #lay_forget").show();
		$('#body_signin #lay_forget').animate( {top:"184px", opacity:"0.0"}, 0, 'easeInOutQuint', function(){
			$('#body_signin #lay_forget').animate( {top:"184px", opacity:"1.0"}, 500, 'easeInOutQuint');			
		});
	});
	$("#body_signin .lay_forget_button .xbox, #body_signin .lay_forget_button .apply, .lay_forget_button .cancel").click(function(){
		$('#body_signin #lay_forget').animate( {top:"184px", opacity:"0.0"}, 500, 'easeInOutQuint', function(){
			$("#body_signin #lay_forget").hide();
		});
	});
	$("#body_signin .btnSignin").click(function(){
		document.location.href = "../html/main.html";	
	});
			
	
	// Signup 버튼 클릭 이벤트
	$("#body_signup .page_1 .body_next").click(function(){
		$("#body_signup .page_1").hide();
		$("#body_signup .page_2").show();
	});
	$("#body_signup .page_2 .body_next").click(function(){
		$("#body_signup .page_2").hide();
		$("#body_signup .page_3").show();
	});	
	
	
	// Preview Popup Edit 버튼 클릭 이벤트
	$(".previewPopup_button .edit").click(function(){
		//if(enabledKey){
			//enabledKey = false;
			// 적용
			$("#body_" + selectedSlideListKind + " #previewPopupBackBorder").animate( {top:"15px", opacity:"0.0"}, 500, 'swing', function(){
				//enabledKey = true;
				popclose("body_"+ selectedSlideListKind + " #previewPopupBackBorder");
				disappear_left();
				page_shift_for_big_contents_editMap();	
				
				// cell 정보 원본값과 편집값 정의하기		
				if(selectedSlideListKind == "featured")originalEditKind = featured[selectedSlideListNo];			
				else if(selectedSlideListKind == "playlists")originalEditKind = playlist[selectedSlideListNo];
				else if(selectedSlideListKind == "theme")originalEditKind = template[selectedSlideListNo];
				else if(selectedSlideListKind == "myprojects")originalEditKind = myproject[selectedSlideListNo];			
				underEditKind = JSON.parse(JSON.stringify(originalEditKind));
				appliedEditKind = JSON.parse(JSON.stringify(originalEditKind));
				
				// cell 최대 번호 알아내기
				/*
				for(var i=1; i<=25; i++) {
					if(originalEditKind.cell[i].kind != "") {
						maxCellNo = i;
						console.log("maxCellNo : " + maxCellNo);
					}
				}
				*/
				// back page를 위한 변수 저정
				switch(selectedSlideListKind) {
					case "theme" :
						readyForBackPage = "editMap_theme";
						console.log("readyForBackPage : " + readyForBackPage);
						break;
				}
				
			});
		//}
	});
	
	
	// Preview Popup delete 버튼 클릭 이벤트
	$(".previewPopup_button .delete").click(function(){
		// google app engine 연동 : publish 삭제 호출
		body_dimmed_open();
		window.open("./delete_publish/?selectedSlideListNo=" + selectedSlideListNo, "POPON Image delete", "left=-100, top=-100, width=1, height=1, titlebar=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, copyhistory=yes, resizable=no");
		
	});
	
	
	// Preview Popup Play 버튼 클릭 이벤트
	$(".previewPopup_button .play").click(function(){		
		// 적용
		$("#body_" + selectedSlideListKind + " #previewPopupBackBorder").animate( {top:"15px", opacity:"0.0"}, 500, 'swing', function(){
			popclose("body_"+ selectedSlideListKind + " #previewPopupBackBorder");
			disappear_left();
			page_shift_for_big_contents_play();
			
		});
	});
	
	
	// Preview Popup Cancel 버튼 클릭 이벤트
	$(".previewPopup_button .cancel").click(function(){		
		//if(enabledKey) {
		//	enabledKey = false;
			
			// 적용
			$("#body_" + selectedSlideListKind + " #previewPopupBackBorder").animate( {top:"15px", opacity:"0.0"}, 500, 'swing', function(){
				popclose("body_" + selectedSlideListKind + " #previewPopupBackBorder");
				enabledKey = true;
			});
		//}

	});
	
	
});


function load_slide_max_marginLeft() {
	for(var i=1; i<=slide_max; i++) {
		$(".body_contents_sub.list_" + i).css({"margin-left" : parseInt((533+13)*(i-1)) +"px"});
	}
}


function load_account_current() {
	$("#body_settings .body_contents_sub .account_current").hide();
	switch(account_current) {
		case "light" :
			$("#body_settings .body_contents_sub.list_1 .account_current").show();
			break;
		case "premium" :
			$("#body_settings .body_contents_sub.list_2 .account_current").show();
			break;
		case "professional" :
			$("#body_settings .body_contents_sub.list_3 .account_current").show();
			break;
		case "enterprise" :
			$("#body_settings .body_contents_sub.list_4 .account_current").show();
			break;
			
	}
}


function load_faq_scroll() {
	myFaqScroll = new scr("faq");
	myFaqScroll.setup();	
}


function loadCellTemplate(){
	var cell_mode = [
		"",       "images", "",           "", "", "widgets_clock",
				  "images", "", "widgets_tv", "", "",
						"", "",           "", "", "",
						"", "",           "", "", "",
			"widgets_news", "",           "", "", ""
	];
	var i;
	//localStorage.clear();		
	for(i=1; i<=25; i++){
		// cell mode 저장
		if(localStorage.getItem("cell_" + Number(i) + "_type") != null)cell_mode[i] = localStorage.getItem("cell_" + Number(i) + "_type");		
		
		// cell mode = images 경우
		if(cell_mode[i] == "images"){
			cell_fileName = localStorage.getItem("cell_" + Number(i) + "_fileName");
						
			// 실제 cell에 적용하기
			$(".body_contents_1_img .cell_" + Number(i)).css({'background-position':'0px 0px'});
			$(".body_contents_1_img .cell_" + Number(i)).css({'background-size':'100% 100%'});
			if(cell_fileName != 'null'){
				$(".body_contents_1_img .cell_" + Number(i)).css({'background-image':'url(../websrc/img/main/' + cell_fileName +')'});	
			}
			if(cell_fileName == null || cell_fileName == 'null'){
				if(i == 1)$(".body_contents_1_img .cell_1").css({'background-image':'url(../websrc/img/main/lb_editor_layer_background_34.png)'});
				else if(i == 6)$(".body_contents_1_img .cell_6").css({'background-image':'url(../websrc/img/main/lb_editor_layer_background_35.png)'});
			}
		}
		
		// cell mode = widgets_tv 경우
		else if(cell_mode[i] == "widgets_tv"){
			cell_fileName = localStorage.getItem("cell_" + Number(i) + "_fileName");
			
			// 실제 cell에 적용하기
			$(".body_contents_1_img .cell_" + Number(i)).css({'background-position':'0px 0px'});
			$(".body_contents_1_img .cell_" + Number(i)).css({'background-size':'100% 100%'});
			if(cell_fileName != null)$(".body_contents_1_img .cell_" + Number(i)).css({'background-image':'url(../websrc/img/main/' + cell_fileName + ')'});
			if(cell_fileName == null || cell_fileName == 'null'){
				if(i == 8)$(".body_contents_1_img .cell_8").css({'background-image':'url(../websrc/img/main/lb_editor_layer_widgets_tv_01.png)'});
			}
		}
		
		// cell mode = widgets_music 경우
		else if(cell_mode[i] == "widgets_music"){
			cell_fileName = localStorage.getItem("cell_" + Number(i) + "_fileName");
			
			// 실제 cell에 적용하기
			$(".body_contents_1_img .cell_" + Number(i)).css({'background-position':'0px 0px'});
			$(".body_contents_1_img .cell_" + Number(i)).css({'background-size':'100% 100%'});
			if(cell_fileName != null)$(".body_contents_1_img .cell_" + Number(i)).css({'background-image':'url(../websrc/img/main/' + cell_fileName + ')'});
			if(cell_fileName == null || cell_fileName == 'null'){
				// none
			}
		}
		
		// cell mode = widgets_clock 경우
		else if(cell_mode[i] == "widgets_clock"){
			cell_fileName = localStorage.getItem("cell_" + Number(i) + "_fileName");
			
			// 실제 cell에 적용하기
			$(".body_contents_1_img .cell_" + Number(i)).css({'background-position':'0px 0px'});
			$(".body_contents_1_img .cell_" + Number(i)).css({'background-size':'100% 100%'});				
			if(cell_fileName != null)$(".body_contents_1_img .cell_" + Number(i)).css({'background-image':'url(../websrc/img/main/' + cell_fileName + ')'});
			if(cell_fileName == null || cell_fileName == 'null'){
				if(i == 5)$(".body_contents_1_img .cell_5").css({'background-image':'url(../websrc/img/main/lb_editor_layer_widgets_clock_01.png)'});
			}				
		}
		
		// cell mode = widgets_weather 경우
		else if(cell_mode[i] == "widgets_weather"){
			cell_fileName = localStorage.getItem("cell_" + Number(i) + "_fileName");
			
			// 실제 cell에 적용하기
			$(".body_contents_1_img .cell_" + Number(i)).css({'background-position':'0px 0px'});
			$(".body_contents_1_img .cell_" + Number(i)).css({'background-size':'100% 100%'});
			if(cell_fileName != null)$(".body_contents_1_img .cell_" + Number(i)).css({'background-image':'url(../websrc/img/main/' + cell_fileName + ')'});
			if(cell_fileName == null || cell_fileName == 'null'){
				// none
			}
		}
		
		// cell mode = widgets_news 경우
		else if(cell_mode[i] == "widgets_news"){
			cell_fileName = localStorage.getItem("cell_" + Number(i) + "_fileName");
			
			// 실제 cell에 적용하기
			$(".body_contents_1_img .cell_" + Number(i)).css({'background-position':'0px 0px'});
			$(".body_contents_1_img .cell_" + Number(i)).css({'background-size':'100% 100%'});
			if(cell_fileName != null)$(".body_contents_1_img .cell_" + Number(i)).css({'background-image':'url(../websrc/img/main/' + cell_fileName + ')'});
			if(cell_fileName == null || cell_fileName == 'null'){
				if(i == 21)$(".body_contents_1_img .cell_21").css({'background-image':'url(../websrc/img/main/lb_editor_layer_widgets_news_01.png)'});
			}
		}
		
		// cell mode = widgets_currencies 경우
		else if(cell_mode[i] == "widgets_currencies"){
			cell_fileName = localStorage.getItem("cell_" + Number(i) + "_fileName");
			
			// 실제 cell에 적용하기
			$(".body_contents_1_img .cell_" + Number(i)).css({'background-position':'0px 0px'});
			$(".body_contents_1_img .cell_" + Number(i)).css({'background-size':'100% 100%'});
			if(cell_fileName != null)$(".body_contents_1_img .cell_" + Number(i)).css({'background-image':'url(../websrc/img/main/' + cell_fileName + ')'});
			if(cell_fileName == null || cell_fileName == 'null'){
				// none
			}
		}
		
		// cell mode = text 경우			
		else if(cell_mode[i] == "text"){
			text_contents[i] = localStorage.getItem("cell_" + Number(i) + "_text_contents");
			text_font_size[i] = localStorage.getItem("cell_" + Number(i) + "_text_font_size");
			text_font_color[i] = localStorage.getItem("cell_" + Number(i) + "_text_font_color");
			text_font_family[i] = localStorage.getItem("cell_" + Number(i) + "_text_font_family");
			text_font_align[i] = localStorage.getItem("cell_" + Number(i) + "_text_font_align");
			text_font_back_color[i] = localStorage.getItem("cell_" + Number(i) + "_text_font_back_color");
			text_font_weight[i] = localStorage.getItem("cell_" + Number(i) + "_text_font_weight");
			
			// 실제 cell에 적용하기
			$(".body_contents_1_img .cell_" + Number(i)).css({'font-size':text_font_size[i] + 'pt'});
			$(".body_contents_1_img .cell_" + Number(i)).css({'color':text_font_color[i]});				
			$(".body_contents_1_img .cell_" + Number(i)).css({'font-family':text_font_family[i]});
			$(".body_contents_1_img .cell_" + Number(i)).css({'text-align':text_font_align[i]});
			$(".body_contents_1_img .cell_" + Number(i)).css({'background-image':'none'});
			$(".body_contents_1_img .cell_" + Number(i)).css({'background-color':text_font_back_color[i]});
			if(text_font_weight[i] == 0)
				$(".body_contents_1_img .cell_" + Number(i)).css({'font-weight':'normal'});
			else
				$(".body_contents_1_img .cell_" + Number(i)).css({'font-weight':'bold'});
			
			$(".body_contents_1_img .cell_" + Number(i)).text(text_contents[i]);
		}
	}
}


function body_dimmed_open(){
	$("body").append("<div id='body_dimmed' class='disabled_left'><div class='loadMsg'>Loading....</div></div>");
	$("#body_dimmed").css("z-index", 10000);
	$("#body_dimmed").height($(document).height());
}


function body_dimmed_close(){		
	$("#body_dimmed").remove();
}
	
	
function php_update_user_email(user_email) {
	$("#gnb .user_email").text(user_email);
}


function php_complete_publish_delete() {
	//alert("php_complete_publish_delete");
	location.reload();
}


function php_load_number_of_publishMe(number_of_publishMe) {
	global_number_of_publishMe = number_of_publishMe;
}


function php_load_publishMe_divided(order, divided){		
	//console.log("divided : " + divided);
	//console.log("\n");
	global_divided[(parseInt(order)+1)] = divided;
	//alert("global_divided[" + (parseInt(order)+1) + "] : " + global_divided[(parseInt(order)+1)]);
}


function php_load_publishMe_background(order, background_kind, background_color, background_image_url){		
	//console.log("background_kind : " + background_kind);
	//console.log("background_color : " + background_color);
	//console.log("background_image_url : " + background_image_url);
	//console.log("\n");
	global_background_kind[(parseInt(order)+1)] = background_kind;
	global_background_color[(parseInt(order)+1)] = background_color;
	global_background_image_url[(parseInt(order)+1)] = background_image_url;
}


function php_load_publishMe_cell_info(order, cellNo, cell_kind, cell_x, cell_y, cell_image_theFirstOrderFiveImages, cell_image_selectedFiveImageNo){		
	//console.log("order : " + order);
	//console.log("cell_kind : " + cell_kind);
	//console.log("cell_x : " + cell_x);
	//console.log("cell_y : " + cell_y);
	//console.log("cell_image_theFirstOrderFiveImages : " + cell_image_theFirstOrderFiveImages);
	//console.log("cell_image_selectedFiveImageNo : " + cell_image_selectedFiveImageNo);
	//console.log("\n");
	global_cell_kind[cellNo][(parseInt(order)+1)] = cell_kind;
	global_cell_x[cellNo][(parseInt(order)+1)] = cell_x;
	global_cell_y[cellNo][(parseInt(order)+1)] = cell_y;
	global_cell_image_theFirstOrderFiveImages[cellNo][(parseInt(order)+1)] = cell_image_theFirstOrderFiveImages;
	global_cell_image_selectedFiveImageNo[cellNo][(parseInt(order)+1)] = cell_image_selectedFiveImageNo;	
}

function php_load_publishMe_cell_img_1(order, cellNo, 	
												cell_image_url_1, 
												cell_image_imageInCellPercentage_1, 
												cell_image_imageInCellTop_1, 
												cell_image_imageInCellLeft_1,
												cell_image_imageInCellWidth_1,
												cell_image_imageInCellHeight_1,
												cell_image_imageInEditPercentage_1,
												cell_image_imageInEditPositionX_1,
												cell_image_imageInEditPositionY_1){
	//console.log("order : " + order);
	//console.log("cell_image_url_1 : " + cell_image_url_1);
	//console.log("cell_image_imageInCellPercentage_1 : " + cell_image_imageInCellPercentage_1);
	//console.log("cell_image_imageInCellTop_1 : " + cell_image_imageInCellTop_1);
	//console.log("cell_image_imageInCellLeft_1 : " + cell_image_imageInCellLeft_1);
	//console.log("cell_image_imageInCellWidth_1 : " + cell_image_imageInCellWidth_1);
	//console.log("cell_image_imageInCellHeight_1 : " + cell_image_imageInCellHeight_1);
	//console.log("cell_image_imageInEditPercentage_1 : " + cell_image_imageInEditPercentage_1);
	//console.log("cell_image_imageInEditPositionX_1 : " + cell_image_imageInEditPositionX_1);
	//console.log("cell_image_imageInEditPositionY_1 : " + cell_image_imageInEditPositionY_1);
	//console.log("\n");
	
	global_cell_image_url_1[cellNo][(parseInt(order)+1)] = cell_image_url_1;
	global_cell_image_imageInCellPercentage_1[cellNo][(parseInt(order)+1)] = cell_image_imageInCellPercentage_1;
	global_cell_image_imageInCellTop_1[cellNo][(parseInt(order)+1)] = cell_image_imageInCellTop_1;
	global_cell_image_imageInCellLeft_1[cellNo][(parseInt(order)+1)] = cell_image_imageInCellLeft_1;
	global_cell_image_imageInCellWidth_1[cellNo][(parseInt(order)+1)] = cell_image_imageInCellWidth_1;
	global_cell_image_imageInCellHeight_1[cellNo][(parseInt(order)+1)] = cell_image_imageInCellHeight_1;
	global_cell_image_imageInEditPercentage_1[cellNo][(parseInt(order)+1)] = cell_image_imageInEditPercentage_1;
	global_cell_image_imageInEditPositionX_1[cellNo][(parseInt(order)+1)] = cell_image_imageInEditPositionX_1;
	global_cell_image_imageInEditPositionY_1[cellNo][(parseInt(order)+1)] = cell_image_imageInEditPositionY_1;
}

function php_load_publishMe_cell_img_2(order, 	cellNo, 
												cell_image_url_2, 
												cell_image_imageInCellPercentage_2, 
												cell_image_imageInCellTop_2, 
												cell_image_imageInCellLeft_2,
												cell_image_imageInCellWidth_2,
												cell_image_imageInCellHeight_2,
												cell_image_imageInEditPercentage_2,
												cell_image_imageInEditPositionX_2,
												cell_image_imageInEditPositionY_2){
	//console.log("order : " + order);
	//console.log("cell_image_url_2 : " + cell_image_url_2);
	//console.log("cell_image_imageInCellPercentage_2 : " + cell_image_imageInCellPercentage_2);
	//console.log("cell_image_imageInCellTop_2 : " + cell_image_imageInCellTop_2);
	//console.log("cell_image_imageInCellLeft_2 : " + cell_image_imageInCellLeft_2);
	//console.log("cell_image_imageInCellWidth_2 : " + cell_image_imageInCellWidth_2);
	//console.log("cell_image_imageInCellHeight_2 : " + cell_image_imageInCellHeight_2);
	//console.log("cell_image_imageInEditPercentage_2 : " + cell_image_imageInEditPercentage_2);
	//console.log("cell_image_imageInEditPositionX_2 : " + cell_image_imageInEditPositionX_2);
	//console.log("cell_image_imageInEditPositionY_2 : " + cell_image_imageInEditPositionY_2);
	//console.log("\n");
	
	global_cell_image_url_2[cellNo][(parseInt(order)+1)] = cell_image_url_2;
	global_cell_image_imageInCellPercentage_2[cellNo][(parseInt(order)+1)] = cell_image_imageInCellPercentage_2;
	global_cell_image_imageInCellTop_2[cellNo][(parseInt(order)+1)] = cell_image_imageInCellTop_2;
	global_cell_image_imageInCellLeft_2[cellNo][(parseInt(order)+1)] = cell_image_imageInCellLeft_2;
	global_cell_image_imageInCellWidth_2[cellNo][(parseInt(order)+1)] = cell_image_imageInCellWidth_2;
	global_cell_image_imageInCellHeight_2[cellNo][(parseInt(order)+1)] = cell_image_imageInCellHeight_2;
	global_cell_image_imageInEditPercentage_2[cellNo][(parseInt(order)+1)] = cell_image_imageInEditPercentage_2;
	global_cell_image_imageInEditPositionX_2[cellNo][(parseInt(order)+1)] = cell_image_imageInEditPositionX_2;
	global_cell_image_imageInEditPositionY_2[cellNo][(parseInt(order)+1)] = cell_image_imageInEditPositionY_2;
}

function php_load_publishMe_cell_img_3(order, 	cellNo, 
												cell_image_url_3, 
												cell_image_imageInCellPercentage_3, 
												cell_image_imageInCellTop_3, 
												cell_image_imageInCellLeft_3,
												cell_image_imageInCellWidth_3,
												cell_image_imageInCellHeight_3,
												cell_image_imageInEditPercentage_3,
												cell_image_imageInEditPositionX_3,
												cell_image_imageInEditPositionY_3){
	//console.log("order : " + order);
	//console.log("cell_image_url_3 : " + cell_image_url_3);
	//console.log("cell_image_imageInCellPercentage_3 : " + cell_image_imageInCellPercentage_3);
	//console.log("cell_image_imageInCellTop_3 : " + cell_image_imageInCellTop_3);
	//console.log("cell_image_imageInCellLeft_3 : " + cell_image_imageInCellLeft_3);
	//console.log("cell_image_imageInCellWidth_3 : " + cell_image_imageInCellWidth_3);
	//console.log("cell_image_imageInCellHeight_3 : " + cell_image_imageInCellHeight_3);
	//console.log("cell_image_imageInEditPercentage_3 : " + cell_image_imageInEditPercentage_3);
	//console.log("cell_image_imageInEditPositionX_3 : " + cell_image_imageInEditPositionX_3);
	//console.log("cell_image_imageInEditPositionY_3 : " + cell_image_imageInEditPositionY_3);
	//console.log("\n");
	
	global_cell_image_url_3[cellNo][(parseInt(order)+1)] = cell_image_url_3;
	global_cell_image_imageInCellPercentage_3[cellNo][(parseInt(order)+1)] = cell_image_imageInCellPercentage_3;
	global_cell_image_imageInCellTop_3[cellNo][(parseInt(order)+1)] = cell_image_imageInCellTop_3;
	global_cell_image_imageInCellLeft_3[cellNo][(parseInt(order)+1)] = cell_image_imageInCellLeft_3;
	global_cell_image_imageInCellWidth_3[cellNo][(parseInt(order)+1)] = cell_image_imageInCellWidth_3;
	global_cell_image_imageInCellHeight_3[cellNo][(parseInt(order)+1)] = cell_image_imageInCellHeight_3;
	global_cell_image_imageInEditPercentage_3[cellNo][(parseInt(order)+1)] = cell_image_imageInEditPercentage_3;
	global_cell_image_imageInEditPositionX_3[cellNo][(parseInt(order)+1)] = cell_image_imageInEditPositionX_3;
	global_cell_image_imageInEditPositionY_3[cellNo][(parseInt(order)+1)] = cell_image_imageInEditPositionY_3;
}

function php_load_publishMe_cell_img_4(order, 	cellNo, 
												cell_image_url_4, 
												cell_image_imageInCellPercentage_4, 
												cell_image_imageInCellTop_4, 
												cell_image_imageInCellLeft_4,
												cell_image_imageInCellWidth_4,
												cell_image_imageInCellHeight_4,
												cell_image_imageInEditPercentage_4,
												cell_image_imageInEditPositionX_4,
												cell_image_imageInEditPositionY_4){
	//console.log("order : " + order);
	//console.log("cell_image_url_4 : " + cell_image_url_4);
	//console.log("cell_image_imageInCellPercentage_4 : " + cell_image_imageInCellPercentage_4);
	//console.log("cell_image_imageInCellTop_4 : " + cell_image_imageInCellTop_4);
	//console.log("cell_image_imageInCellLeft_4 : " + cell_image_imageInCellLeft_4);
	//console.log("cell_image_imageInCellWidth_4 : " + cell_image_imageInCellWidth_4);
	//console.log("cell_image_imageInCellHeight_4 : " + cell_image_imageInCellHeight_4);
	//console.log("cell_image_imageInEditPercentage_4 : " + cell_image_imageInEditPercentage_4);
	//console.log("cell_image_imageInEditPositionX_4 : " + cell_image_imageInEditPositionX_4);
	//console.log("cell_image_imageInEditPositionY_4 : " + cell_image_imageInEditPositionY_4);
	//console.log("\n");
	
	global_cell_image_url_4[cellNo][(parseInt(order)+1)] = cell_image_url_4;
	global_cell_image_imageInCellPercentage_4[cellNo][(parseInt(order)+1)] = cell_image_imageInCellPercentage_4;
	global_cell_image_imageInCellTop_4[cellNo][(parseInt(order)+1)] = cell_image_imageInCellTop_4;
	global_cell_image_imageInCellLeft_4[cellNo][(parseInt(order)+1)] = cell_image_imageInCellLeft_4;
	global_cell_image_imageInCellWidth_4[cellNo][(parseInt(order)+1)] = cell_image_imageInCellWidth_4;
	global_cell_image_imageInCellHeight_4[cellNo][(parseInt(order)+1)] = cell_image_imageInCellHeight_4;
	global_cell_image_imageInEditPercentage_4[cellNo][(parseInt(order)+1)] = cell_image_imageInEditPercentage_4;
	global_cell_image_imageInEditPositionX_4[cellNo][(parseInt(order)+1)] = cell_image_imageInEditPositionX_4;
	global_cell_image_imageInEditPositionY_4[cellNo][(parseInt(order)+1)] = cell_image_imageInEditPositionY_4;
}

function php_load_publishMe_cell_img_5(order, 	cellNo, 
												cell_image_url_5, 
												cell_image_imageInCellPercentage_5, 
												cell_image_imageInCellTop_5, 
												cell_image_imageInCellLeft_5,
												cell_image_imageInCellWidth_5,
												cell_image_imageInCellHeight_5,
												cell_image_imageInEditPercentage_5,
												cell_image_imageInEditPositionX_5,
												cell_image_imageInEditPositionY_5){
	//console.log("order : " + order);
	//console.log("cell_image_url_5 : " + cell_image_url_5);
	//console.log("cell_image_imageInCellPercentage_5 : " + cell_image_imageInCellPercentage_5);
	//console.log("cell_image_imageInCellTop_5 : " + cell_image_imageInCellTop_5);
	//console.log("cell_image_imageInCellLeft_5 : " + cell_image_imageInCellLeft_5);
	//console.log("cell_image_imageInCellWidth_5 : " + cell_image_imageInCellWidth_5);
	//console.log("cell_image_imageInCellHeight_5 : " + cell_image_imageInCellHeight_5);
	//console.log("cell_image_imageInEditPercentage_5 : " + cell_image_imageInEditPercentage_5);
	//console.log("cell_image_imageInEditPositionX_5 : " + cell_image_imageInEditPositionX_5);
	//console.log("cell_image_imageInEditPositionY_5 : " + cell_image_imageInEditPositionY_5);
	//console.log("\n");
	
	global_cell_image_url_5[cellNo][(parseInt(order)+1)] = cell_image_url_5;
	global_cell_image_imageInCellPercentage_5[cellNo][(parseInt(order)+1)] = cell_image_imageInCellPercentage_5;
	global_cell_image_imageInCellTop_5[cellNo][(parseInt(order)+1)] = cell_image_imageInCellTop_5;
	global_cell_image_imageInCellLeft_5[cellNo][(parseInt(order)+1)] = cell_image_imageInCellLeft_5;
	global_cell_image_imageInCellWidth_5[cellNo][(parseInt(order)+1)] = cell_image_imageInCellWidth_5;
	global_cell_image_imageInCellHeight_5[cellNo][(parseInt(order)+1)] = cell_image_imageInCellHeight_5;
	global_cell_image_imageInEditPercentage_5[cellNo][(parseInt(order)+1)] = cell_image_imageInEditPercentage_5;
	global_cell_image_imageInEditPositionX_5[cellNo][(parseInt(order)+1)] = cell_image_imageInEditPositionX_5;
	global_cell_image_imageInEditPositionY_5[cellNo][(parseInt(order)+1)] = cell_image_imageInEditPositionY_5;
}

function php_load_publishMe_text(order, 	cellNo, 
											cell_text_contents,
											cell_text_font_size,
											cell_text_font_color,
											cell_text_font_family,
											cell_text_font_align,
											cell_text_font_back_color,
											cell_text_font_weight,
											cell_text_font_vertical){
	//console.log("order : " + order);
	//console.log("cell_text_contents : " + cell_text_contents);
	//console.log("cell_text_font_size : " + cell_text_font_size);
	//console.log("cell_text_font_color : " + cell_text_font_color);
	//console.log("cell_text_font_family : " + cell_text_font_family);
	//console.log("cell_text_font_align : " + cell_text_font_align);
	//console.log("cell_text_font_back_color : " + cell_text_font_back_color);
	//console.log("cell_text_font_weight : " + cell_text_font_weight);
	//console.log("cell_text_font_vertical : " + cell_text_font_vertical);
	//console.log("\n");
	
	global_cell_text_contents[cellNo][(parseInt(order)+1)] = cell_text_contents;
	global_cell_text_font_size[cellNo][(parseInt(order)+1)] = cell_text_font_size;
	global_cell_text_font_color[cellNo][(parseInt(order)+1)] = cell_text_font_color;
	global_cell_text_font_family[cellNo][(parseInt(order)+1)] = cell_text_font_family;
	global_cell_text_font_align[cellNo][(parseInt(order)+1)] = cell_text_font_align;
	global_cell_text_font_back_color[cellNo][(parseInt(order)+1)] = cell_text_font_back_color;
	global_cell_text_font_weight[cellNo][(parseInt(order)+1)] = cell_text_font_weight;
	global_cell_text_font_vertical[cellNo][(parseInt(order)+1)] = cell_text_font_vertical;
}


function php_complete_publishMe_load(){
	init_initializePlaylists();
}

function php_complete_number_of_publish_load(){

	// google app engine 연동 : publish 삭제 호출	
	for(i=0; i<global_number_of_publishMe; i++){
		//alert(i);
		window.open("./load_publish/?publishNo=" + i, i, "left=-100, top=-100, width=1, height=1, titlebar=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, copyhistory=yes, resizable=no");
	}
	
	if(global_number_of_publishMe == 0) init_initializePlaylists();
}