var enabledKey = true;
var isBackBtnMode = false;
var isTopBarMode = false;
var isCancelEditMode = false;
var isSaveEditMode = false;
var isPublishEditMode = false;
var isBackgroundsEditMode = false;
var isWidgetsEditMode = false;
var isImagesEditMode = false;
var isTextEditMode = false;
var focusedEditMapCellNo = 1;
var focusedEditMapCellPrevNo = 1;

function KeyLocation() {
	this.vertical = 1;
	this.horizon = 1;
}

// top bar
topBarKeyLocation = new KeyLocation();

// 메뉴
mainKeyLocation = new KeyLocation();
mainKeyLocation.vertical = 2;

// 팝업창
featuredPreviewKeyLocation = new KeyLocation();
playlistsPreviewKeyLocation = new KeyLocation();
themePreviewKeyLocation = new KeyLocation();
myprojectsPreviewKeyLocation = new KeyLocation();

// 에디터창
editLayerLeftKeyLocation = new KeyLocation();
editLayerCancelKeyLocation = new KeyLocation();
editLayerSaveKeyLocation = new KeyLocation();
editLayerPublishKeyLocation = new KeyLocation();
editLayerBackgroundsKeyLocation = new KeyLocation();
	editLayerBackgrounds_colorSubListKeyLocation = new KeyLocation();
	editLayerBackgrounds_colorSubListKeyLocation.vertical = 4;
editLayerWidgetsKeyLocation = new KeyLocation();
editLayerImagesKeyLocation = new KeyLocation();
	editLayerImages_selectAnImagesKeyLocation = new KeyLocation();
editLayerTextKeyLocation = new KeyLocation();
	editLayerText_textFontKeyLocation = new KeyLocation();
	editLayerText_textSizeKeyLocation = new KeyLocation();
	editLayerText_textColorKeyLocation = new KeyLocation();
	editLayerText_textBackColorKeyLocation = new KeyLocation();



function processKeyDown(e) {	
	if (window.event) {       // IE
		keycode = e.keyCode;
	} else if (e.which) {     // Netscape/Firefox/Opera
		keycode = e.which;
	}	
	
	
	// Edit Layer - Cancel Mode
	/*if ($('#lay_editor_layer').is(':visible') && isCancelEditMode) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					releaseEditLayerLeftVertical();
					$(".body_back").click();
					break;
				case VK_ENTER:
					runCancelEditMode();
					break;
				case VK_LEFT:
					editLayerCancelKeyLocation.horizon--;
					focusCancelHorizon();					
					break;
				case VK_RIGHT:
					editLayerCancelKeyLocation.horizon++;
					focusCancelHorizon();	
					break;
				case VK_UP:
					break;
				case VK_DOWN:
					break;
			}
		}
	}
	
	
	// Edit Layer - Save Mode
	else if ($('#lay_editor_layer').is(':visible') && isSaveEditMode) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					releaseEditLayerLeftVertical();
					$(".body_back").click();
					break;
				case VK_ENTER:
					runSaveEditMode();
					break;
				case VK_LEFT:
					editLayerSaveKeyLocation.horizon--;
					focusSaveHorizon();					
					break;
				case VK_RIGHT:
					editLayerSaveKeyLocation.horizon++;
					focusSaveHorizon();	
					break;
				case VK_UP:
					//editLayerSaveKeyLocation.vertical--;	
					//focusSaveVertical();
					break;
				case VK_DOWN:
					//editLayerSaveKeyLocation.vertical--;	
					//focusSaveVertical();
					break;
			}
		}
	}
	
	
	// Edit Layer - Publish Mode
	else if ($('#lay_editor_layer').is(':visible') && isPublishEditMode) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					releaseEditLayerLeftVertical();
					$(".body_back").click();
					break;
				case VK_ENTER:
					runPublishEditMode();
					break;
				case VK_LEFT:
					editLayerPublishKeyLocation.horizon--;
					focusPublishHorizon();					
					break;
				case VK_RIGHT:
					editLayerPublishKeyLocation.horizon++;
					focusPublishHorizon();	
					break;
				case VK_UP:
					editLayerPublishKeyLocation.vertical--;	
					focusPublishVertical();
					break;
				case VK_DOWN:
					editLayerPublishKeyLocation.vertical--;	
					focusPublishVertical();
					break;
			}
		}
	}
	
	
	// Edit Layer - Background Mode
	else if ($('#lay_editor_layer').is(':visible') && isBackgroundsEditMode && !$('.colorSubList').is(':visible')) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					releaseEditLayerLeftVertical();
					$(".body_back").click();
					break;
				case VK_ENTER:
					runBackgroundsEditMode();
					break;
				case VK_LEFT:
					editLayerBackgroundsKeyLocation.horizon--;
					focusBackgroundsHorizon();
					break;
				case VK_RIGHT:
					editLayerBackgroundsKeyLocation.horizon++;
					focusBackgroundsHorizon();
					break;
				case VK_UP:
					editLayerBackgroundsKeyLocation.vertical--;	
					focusBackgroundsVertical();
					break;
				case VK_DOWN:					
					editLayerBackgroundsKeyLocation.vertical++;	
					focusBackgroundsVertical();
					break;
			}
		}
	}
	

	// Edit Layer - Background Mode - color sub list
	else if ($('#lay_editor_layer').is(':visible') && isBackgroundsEditMode && $('.colorSubList').is(':visible')) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					$(".colorSubList .color_sub_1").removeClass("focus");
					$(".colorSubList .color_sub_2").removeClass("focus");
					$(".colorSubList .color_sub_3").removeClass("focus");
					$(".colorSubList .color_sub_4").removeClass("focus");
					$(".colorSubList .color_sub_5").removeClass("focus");
					$(".colorSubList .color_sub_6").removeClass("focus");
					$(".colorSubList .color_sub_7").removeClass("focus");
					$(".colorSubList .color_sub_8").removeClass("focus");
					$(".colorSubList .color_sub_9").removeClass("focus");
					$(".colorSubList .color_sub_10").removeClass("focus");
					 $('.colorSubList').hide();
					break;
				case VK_ENTER:
					runBackgrounds_colorSubListEditMode();
					break;
				case VK_LEFT:					
					break;
				case VK_RIGHT:
					break;
				case VK_UP:
					editLayerBackgrounds_colorSubListKeyLocation.vertical--;	
					focusBackgrounds_colorSubListVertical();
					break;
				case VK_DOWN:					
					editLayerBackgrounds_colorSubListKeyLocation.vertical++;	
					focusBackgrounds_colorSubListVertical();
					break;
			}
		}
	}
	
	
	// Edit Layer - Widgets Mode
	else if ($('#lay_editor_layer').is(':visible') && isWidgetsEditMode) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					releaseEditLayerLeftVertical();
					$(".body_back").click();
					break;
				case VK_ENTER:
					runWidgetsEditMode();
					break;
				case VK_LEFT:
					editLayerWidgetsKeyLocation.horizon--;
					focusWidgetsHorizon();					
					break;
				case VK_RIGHT:
					editLayerWidgetsKeyLocation.horizon++;
					focusWidgetsHorizon();	
					break;
				case VK_UP:
					editLayerWidgetsKeyLocation.vertical--;	
					focusWidgetsVertical();
					break;
				case VK_DOWN:
					editLayerWidgetsKeyLocation.vertical--;	
					focusWidgetsVertical();
					break;
			}
		}
	}
	
	
	// Edit Layer - Images Mode
	else if ($('#lay_editor_layer').is(':visible') && isImagesEditMode && !$('.images .select_an_image').is(':visible')) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					releaseEditLayerLeftVertical();
					$(".body_back").click();
					break;
				case VK_ENTER:
					runImagesEditMode();
					break;
				case VK_LEFT:
					editLayerImagesKeyLocation.horizon--;
					focusImagesHorizon();					
					break;
				case VK_RIGHT:
					editLayerImagesKeyLocation.horizon++;
					focusImagesHorizon();	
					break;
				case VK_UP:
					editLayerImagesKeyLocation.vertical--;	
					focusImagesVertical();
					break;
				case VK_DOWN:
					editLayerImagesKeyLocation.vertical++;	
					focusImagesVertical();
					break;
			}
		}
	}
	
	
	// Edit Layer - Images Mode - select an images
	else if ($('#lay_editor_layer').is(':visible') && isImagesEditMode && $('.images .select_an_image').is(':visible')) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					$("#lay_editor_layer .select_an_image .plus").removeClass("focus");
					$("#lay_editor_layer .select_an_image .minus").removeClass("focus");
					$("#lay_editor_layer .select_an_image .close").removeClass("focus");
					$("#lay_editor_layer .images .contents .select_an_image .close").click();
					break;
				case VK_ENTER:
					runImages_selectAnImagesEditMode();
					break;
				case VK_LEFT:
					editLayerImages_selectAnImagesKeyLocation.horizon--;
					focusImages_selectAnImagesHorizon();
					break;
				case VK_RIGHT:
					editLayerImages_selectAnImagesKeyLocation.horizon++;
					focusImages_selectAnImagesHorizon();
					break;
				case VK_UP:
					editLayerImages_selectAnImagesKeyLocation.vertical--;
					focusImages_selectAnImagesVertical();
					break;
				case VK_DOWN:					
					editLayerImages_selectAnImagesKeyLocation.vertical++;	
					focusImages_selectAnImagesVertical();
					break;
			}
		}
	}
	
	
	// Edit Layer - Text Mode
	else if ($('#lay_editor_layer').is(':visible') && isTextEditMode && !$('.text_font_list').is(':visible') && !$('.text_size_list').is(':visible') && !$('.text_color_list').is(':visible')) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					releaseEditLayerLeftVertical();
					$(".body_back").click();
					break;
				case VK_ENTER:
					runTextEditMode();
					break;
				case VK_LEFT:
					editLayerTextKeyLocation.horizon--;
					focusTextHorizon();					
					break;
				case VK_RIGHT:
					editLayerTextKeyLocation.horizon++;
					focusTextHorizon();	
					break;
				case VK_UP:
					editLayerTextKeyLocation.vertical--;	
					focusTextVertical();
					break;
				case VK_DOWN:
					editLayerTextKeyLocation.vertical++;	
					focusTextVertical();
					break;
			}
		}
	}
	
	
	// Edit Layer - Text Mode - text font list
	else if ($('#lay_editor_layer').is(':visible') && isTextEditMode && $('.text_font_list').is(':visible')) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					$("#lay_editor_layer .text .contents .text_font_list .list_1").removeClass("focus");
					$("#lay_editor_layer .text .contents .text_font_list .list_2").removeClass("focus");
					$("#lay_editor_layer .text .contents .text_font_list .list_3").removeClass("focus");
					$("#lay_editor_layer .text .contents .text_font_list .list_4").removeClass("focus");
					$("#lay_editor_layer .text .contents .text_font_list .list_5").removeClass("focus");
					$("#lay_editor_layer .text .contents .text_font_list .list_6").removeClass("focus");
					$('#lay_editor_layer .text .contents .text_font_list').hide();
					break;
				case VK_ENTER:
					runText_textFontEditMode();
					break;
				case VK_LEFT:					
					break;
				case VK_RIGHT:
					break;
				case VK_UP:
					editLayerText_textFontKeyLocation.vertical--;	
					focusText_textFontVertical();
					break;
				case VK_DOWN:					
					editLayerText_textFontKeyLocation.vertical++;	
					focusText_textFontVertical();
					break;
			}
		}
	}
	

	// Edit Layer - Text Mode - text size list
	else if ($('#lay_editor_layer').is(':visible') && isTextEditMode && $('.text_size_list').is(':visible')) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					$("#lay_editor_layer .text .contents .text_size_list .list_1").removeClass("focus");
					$("#lay_editor_layer .text .contents .text_size_list .list_2").removeClass("focus");
					$("#lay_editor_layer .text .contents .text_size_list .list_3").removeClass("focus");
					$("#lay_editor_layer .text .contents .text_size_list .list_4").removeClass("focus");
					$("#lay_editor_layer .text .contents .text_size_list .list_5").removeClass("focus");
					$('#lay_editor_layer .text .contents .text_size_list').hide();
					break;
				case VK_ENTER:
					runText_textSizeEditMode();
					break;
				case VK_LEFT:					
					break;
				case VK_RIGHT:
					break;
				case VK_UP:
					editLayerText_textSizeKeyLocation.vertical--;	
					focusText_textSizeVertical();
					break;
				case VK_DOWN:					
					editLayerText_textSizeKeyLocation.vertical++;	
					focusText_textSizeVertical();
					break;
			}
		}
	}
			
	
	// Edit Layer - Text Mode - text color list
	else if ($('#lay_editor_layer').is(':visible') && isTextEditMode && $('.text_color_list').is(':visible')) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					for(var i=0; i<=67; i++)$("#lay_editor_layer .text .contents .text_color_list .palette .list_" + i).removeClass("focus");
					$("#lay_editor_layer .text .contents .text_color_list").hide();
					break;
				case VK_ENTER:
					runText_textColorEditMode();
					break;
				case VK_LEFT:
					editLayerText_textColorKeyLocation.horizon--;	
					focusText_textColorHorizon();
					break;
				case VK_RIGHT:
					editLayerText_textColorKeyLocation.horizon++;	
					focusText_textColorHorizon();
					break;
				case VK_UP:
					editLayerText_textColorKeyLocation.vertical--;	
					focusText_textColorVertical();
					break;
				case VK_DOWN:					
					editLayerText_textColorKeyLocation.vertical++;	
					focusText_textColorVertical();
					break;
			}
		}
	}

	
	// Edit Layer 화면
	else if ($('#lay_editor_layer').is(':visible')) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					releaseEditLayerLeftVertical();
					$(".body_back").click();
					break;
				case VK_ENTER:
					if(editLayerLeftKeyLocation.vertical == 1) $("#lay_editor_layer .left_btn .leftBtn_cancel").click();
					else if(editLayerLeftKeyLocation.vertical == 2) $("#lay_editor_layer .left_btn .leftBtn_save").click();
					else if(editLayerLeftKeyLocation.vertical == 3) $("#lay_editor_layer .left_btn .leftBtn_publish").click();
					else if(editLayerLeftKeyLocation.vertical == 4) $("#lay_editor_layer .left_btn .leftBtn_backgrounds").click();
					else if(editLayerLeftKeyLocation.vertical == 5) $("#lay_editor_layer .left_btn .left_widgets").click();
					else if(editLayerLeftKeyLocation.vertical == 6) $("#lay_editor_layer .left_btn .leftBtn_images").click();
					else if(editLayerLeftKeyLocation.vertical == 7) $("#lay_editor_layer .left_btn .leftBtn_text").click();
					break;
				case VK_LEFT:
					if(readyForBackPage == "editLayer_cancel") focusInitCancelHorizon("left");
					else if(readyForBackPage == "editLayer_save") focusInitSaveHorizon("left");
					else if(readyForBackPage == "editLayer_publish") focusInitPublishHorizon("left");
					else if(readyForBackPage == "editLayer_backgrounds") focusInitBackgroundsHorizon("left");
					else if(readyForBackPage == "editLayer_widgets") focusInitWidgetsHorizon("left");
					else if(readyForBackPage == "editLayer_images") focusInitImagesHorizon("left");
					else if(readyForBackPage == "editLayer_text") focusInitTextHorizon("left");	
					break;				
				case VK_RIGHT:
					if(readyForBackPage == "editLayer_cancel") focusInitCancelHorizon("right");
					else if(readyForBackPage == "editLayer_save") focusInitSaveHorizon("right");
					else if(readyForBackPage == "editLayer_publish") focusInitPublishHorizon("right");
					else if(readyForBackPage == "editLayer_backgrounds") focusInitBackgroundsHorizon("right");
					else if(readyForBackPage == "editLayer_widgets") focusInitWidgetsHorizon("right");
					else if(readyForBackPage == "editLayer_images") focusInitImagesHorizon("right");
					else if(readyForBackPage == "editLayer_text") focusInitTextHorizon("right");	
					break;
				case VK_UP:
					editLayerLeftKeyLocation.vertical--;
					if(editLayerLeftKeyLocation.vertical <= 0) editLayerLeftKeyLocation.vertical = 7;
					adjustEditLayerLeft("up");
					
					//mainKeyLocation.horizon = 1;
					releaseEditLayerLeftVertical();
					focusEditLayerLeftVertical();
					break;
				case VK_DOWN:
					editLayerLeftKeyLocation.vertical++;
					if(editLayerLeftKeyLocation.vertical > 7) editLayerLeftKeyLocation.vertical = 1;
					adjustEditLayerLeft("down");
					
					//mainKeyLocation.horizon = 1;
					releaseEditLayerLeftVertical();
					focusEditLayerLeftVertical();
					break;
			}
		}
	}
	
	
	// Edit Map 화면
	else if ($('.editMap').is(':visible')) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					if(isTopBarMode){
						isTopBarMode = false;						
						topBarKeyLocation.horizon = 1;
						$(".gnb_logo").removeClass("focus");
						$(".gnb_log").removeClass("focus");
						$(".gnb_close").removeClass("focus");
					}
					
					$(".body_back").click();
					break;
				case VK_ENTER:
					$(".editMap .cell_" + focusedEditMapCellNo).click();
					break;
				case VK_LEFT:
					// top bar
					if(isTopBarMode){
						topBarKeyLocation.horizon--;
						if(topBarKeyLocation.horizon <= 0) topBarKeyLocation.horizon = 3;
						
						focusTopHorizon();
					}
					
					// cell 간 이동
					else {
						releaseEditMapCell(focusedEditMapCellNo);
						focusedEditMapCellPrevNo = focusedEditMapCellNo;
						
						do {						
							focusedEditMapCellNo--;
							if(focusedEditMapCellNo < 1) focusedEditMapCellNo = maxCellNo;
						} while(originalEditKind.cell[focusedEditMapCellNo].kind == "");
						
						focusEditMapCell(focusedEditMapCellNo);
					}
					break;
				case VK_RIGHT:	
					// top bar
					if(isTopBarMode){
						topBarKeyLocation.horizon++;
						if(topBarKeyLocation.horizon >= 4) topBarKeyLocation.horizon = 1;
						
						focusTopHorizon();						
					}
					
					// cell 간 이동
					else {
						releaseEditMapCell(focusedEditMapCellNo);
						focusedEditMapCellPrevNo = focusedEditMapCellNo;
						
						do {						
							focusedEditMapCellNo++;
							if(focusedEditMapCellNo > 25) focusedEditMapCellNo = 1;
						} while(originalEditKind.cell[focusedEditMapCellNo].kind == "");
						
						focusEditMapCell(focusedEditMapCellNo);
					}
					break;
				case VK_UP:
					// top bar
					if(isTopBarMode){
						isTopBarMode = false;
						
						topBarKeyLocation.horizon = 0;
						focusTopHorizon();
						
						focusEditMapCell(focusedEditMapCellNo);						
					}
					
					// cell 간 이동
					else {
						releaseEditMapCell(focusedEditMapCellNo);
						focusedEditMapCellPrevNo = focusedEditMapCellNo;
						
						do {
							focusedEditMapCellPrevNo -= 5;
							if(focusedEditMapCellPrevNo < 1) {
								focusedEditMapCellPrevNo += 25;
								isTopBarMode = true;
								break;
							}							
							console.log("focusedEditMapCellPrevNo : " + focusedEditMapCellPrevNo);
							console.log("originalEditKind.cell["+focusedEditMapCellPrevNo+"].belongTo : " + originalEditKind.cell[focusedEditMapCellPrevNo].belongTo);
							console.log("originalEditKind.cell["+focusedEditMapCellNo+"].belongTo : " + originalEditKind.cell[focusedEditMapCellNo].belongTo);
						} while(originalEditKind.cell[focusedEditMapCellPrevNo].belongTo == originalEditKind.cell[focusedEditMapCellNo].belongTo);					
						
						console.log("focusedEditMapCellPrevNo : " + focusedEditMapCellPrevNo);
						focusedEditMapCellNo = originalEditKind.cell[focusedEditMapCellPrevNo].belongTo;			
						focusEditMapCell(focusedEditMapCellNo);
						
						if(isTopBarMode){
							topBarKeyLocation.horizon = 1;
						
							releaseEditMapCell(focusedEditMapCellNo);
							focusTopHorizon();
						}
					}
					break;
				case VK_DOWN:
					// top bar
					if(isTopBarMode){
						isTopBarMode = false;
						
						topBarKeyLocation.horizon = 0;
						focusTopHorizon();
						
						focusEditMapCell(focusedEditMapCellNo);						
					}
					
					// cell 간 이동
					else {
						releaseEditMapCell(focusedEditMapCellNo);		
						focusedEditMapCellPrevNo = focusedEditMapCellNo;
						
						do {
							focusedEditMapCellPrevNo += 5;
							if(focusedEditMapCellPrevNo > 25) {
								focusedEditMapCellPrevNo -= 25;
								isTopBarMode = true;
								break;
							}
							console.log("originalEditKind.cell["+focusedEditMapCellPrevNo+"].belongTo : " + originalEditKind.cell[focusedEditMapCellPrevNo].belongTo);
							console.log("originalEditKind.cell["+focusedEditMapCellNo+"].belongTo : " + originalEditKind.cell[focusedEditMapCellNo].belongTo);
						} while(originalEditKind.cell[focusedEditMapCellPrevNo].belongTo == originalEditKind.cell[focusedEditMapCellNo].belongTo);					
						
						console.log("focusedEditMapCellPrevNo : " + focusedEditMapCellPrevNo);
						focusedEditMapCellNo = originalEditKind.cell[focusedEditMapCellPrevNo].belongTo;			
						focusEditMapCell(focusedEditMapCellNo);
						if(isTopBarMode){
							topBarKeyLocation.horizon = 1;
						
							releaseEditMapCell(focusedEditMapCellNo);
							focusTopHorizon();
						}
					}
					break;
			}
		}
	}
	
	
	// Featured Preview 팝업 화면
	else if ($('#body_featured .previewPopup_scene').is(':visible')) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					$(".previewPopup_button .cancel").click();
					break;
				case VK_ENTER:
					// edit
					if(featuredPreviewKeyLocation.horizon == 1){
						$(".previewPopup_button .edit").click();
					}
					// cancel
					else if(featuredPreviewKeyLocation.horizon == 2){
						$(".previewPopup_button .cancel").click();
					}
					break;
				case VK_LEFT:
					featuredPreviewKeyLocation.horizon--;
					if(featuredPreviewKeyLocation.horizon < 1)featuredPreviewKeyLocation.horizon = 2;
					
					focusFeaturedPreviewPopup();
					break;
				case VK_RIGHT:
					featuredPreviewKeyLocation.horizon++;
					if(featuredPreviewKeyLocation.horizon > 2)featuredPreviewKeyLocation.horizon = 1;
					
					focusFeaturedPreviewPopup();
					break;
			}
		}			
	}
	
	
	// Playlists Preview 팝업 화면
	else if ($('#body_playlists .previewPopup_scene').is(':visible')) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					$(".previewPopup_button .cancel").click();
					break;
				case VK_ENTER:					
					// play
					if(playlistsPreviewKeyLocation.horizon == 1){
					}
					// edit
					else if(playlistsPreviewKeyLocation.horizon == 2){
						$(".previewPopup_button .edit").click();
					}
					// cancel
					else if(playlistsPreviewKeyLocation.horizon == 3){
						$(".previewPopup_button .cancel").click();
					}
					break;
				case VK_LEFT:
					playlistsPreviewKeyLocation.horizon--;
					if(playlistsPreviewKeyLocation.horizon < 1)playlistsPreviewKeyLocation.horizon = 3;
					
					focusPlaylistsPreviewPopup();
					break;
				case VK_RIGHT:
					playlistsPreviewKeyLocation.horizon++;
					if(playlistsPreviewKeyLocation.horizon > 3)playlistsPreviewKeyLocation.horizon = 1;
					
					focusPlaylistsPreviewPopup();
					break;
			}
		}			
	}
	
	
	// Theme Preview 팝업 화면
	else if ($('#body_theme .previewPopup_scene').is(':visible')) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					$(".previewPopup_button .cancel").click();
					break;
				case VK_ENTER:
					// edit
					if(themePreviewKeyLocation.horizon == 1){
						$(".previewPopup_button .edit").click();
					}
					// cancel
					else if(themePreviewKeyLocation.horizon == 2){
						$(".previewPopup_button .cancel").click();
					}
					break;
				case VK_LEFT:
					themePreviewKeyLocation.horizon--;
					if(themePreviewKeyLocation.horizon < 1)themePreviewKeyLocation.horizon = 2;
					
					focusThemePreviewPopup();
					break;
				case VK_RIGHT:
					themePreviewKeyLocation.horizon++;
					if(themePreviewKeyLocation.horizon > 2)themePreviewKeyLocation.horizon = 1;
					
					focusThemePreviewPopup();
					break;
			}
		}			
	}
	
	
	// My Projects Preview 팝업 화면
	else if ($('#body_myprojects .previewPopup_scene').is(':visible')) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					$(".previewPopup_button .cancel").click();
					break;
				case VK_ENTER:
					// edit
					if(myprojectsPreviewKeyLocation.horizon == 1){
					}
					// cancel
					else if(myprojectsPreviewKeyLocation.horizon == 2){
						$(".previewPopup_button .cancel").click();
					}
					break;
				case VK_LEFT:
					myprojectsPreviewKeyLocation.horizon--;
					if(myprojectsPreviewKeyLocation.horizon < 1)myprojectsPreviewKeyLocation.horizon = 2;
					
					focusMyprojectsPreviewPopup();
					break;
				case VK_RIGHT:
					myprojectsPreviewKeyLocation.horizon++;
					if(myprojectsPreviewKeyLocation.horizon > 2)myprojectsPreviewKeyLocation.horizon = 1;
					
					focusMyprojectsPreviewPopup();
					break;
			}
		}			
	}
	
	
	// 메인 화면
	else if ($('#body_featured .body_title').is(':visible') || $('#body_playlists .body_title').is(':visible') || $('#body_playlists .body_title').is(':visible') || $('#body_editor .body_title').is(':visible') || $('#body_support .body_title').is(':visible') || $('#body_settings .body_title').is(':visible')) {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					//$(".body_back").click();
					break;
				case VK_ENTER:
					if(mainKeyLocation.vertical == 0) {
						// logo
						if(mainKeyLocation.vertical == 1) {
							$(".gnb_logo").click();
						}
						// log in
						else if(mainKeyLocation.vertical == 2) {
						}
						// close
						else if(mainKeyLocation.vertical == 3) {
							$(".gnb_close").click();
						}
						
					}
					
					else {
						// featured
						if(mainKeyLocation.vertical == 1) {						
							if(maxFeatured > 0) {
								$(".slideList").click();
								focusMainHorizon();
								
								featuredPreviewKeyLocation.horizon = 1;
								focusFeaturedPreviewPopup();
							}
						}
						// playlists
						else if(mainKeyLocation.vertical == 2) {
							if(maxPlaylist > 0 ) {
								$(".slideList").click();
								focusMainHorizon();
								
								playlistsPreviewKeyLocation.horizon = 1;
								focusPlaylistsPreviewPopup();
							}
						}
						// editor
						else if(mainKeyLocation.vertical == 3){
							// theme
							if(mainKeyLocation.horizon == 1) {
								$("#body_editor .slide_theme").click();
								mainKeyLocation.horizon = 1;
								focusMainHorizon();
							}
							// grid
							else if(mainKeyLocation.horizon == 2) {
							}
							// my projects
							else if(mainKeyLocation.horizon == 3) {						
								$("#body_editor .slide_myProjects").click();
								mainKeyLocation.horizon = 1;
								focusMainHorizon();
							}
						}
						// support
						else if(mainKeyLocation.vertical == 4) {
							// about
							if(mainKeyLocation.horizon == 1) {
								$("#body_support .slide_about").click();
							}
							// FAQ
							else if(mainKeyLocation.horizon == 2) {
								$("#body_support .slide_faq").click();
							}
							// forum
							else if(mainKeyLocation.horizon == 3) {
								$("#body_support .slide_forum").click();
							}
						}
						// settings
						else if(mainKeyLocation.vertical == 5) {
							// sign in
							if(mainKeyLocation.horizon == 1) {
								$("#body_settings .slide_signIn").click();
							}
							// sign up
							else if(mainKeyLocation.horizon == 2) {
								$("#body_settings .slide_signUp").click();
							}
						}
					}
					break;
				case VK_LEFT:
					// top bar
					if(mainKeyLocation.vertical == 0) {
						topBarKeyLocation.horizon--;
						if(topBarKeyLocation.horizon <= 0) topBarKeyLocation.horizon = 3;
						
						focusTopHorizon();
					}
					
					// slide 간 이동
					else $('.body_button_left').click();
					break;
				case VK_RIGHT:
					// top bar
					if(mainKeyLocation.vertical == 0) {
						topBarKeyLocation.horizon++;
						if(topBarKeyLocation.horizon >= 4) topBarKeyLocation.horizon = 1;
						
						focusTopHorizon();
					}
					
					// slide 간 이동
					else $('.body_button_right').click();
					break;
				case VK_UP:
					mainKeyLocation.vertical--;
					if(mainKeyLocation.vertical == 1)mainKeyLocation.vertical = 0;
					if(mainKeyLocation.vertical < 0)mainKeyLocation.vertical = maxVertical;
					
					mainKeyLocation.horizon = 1;
					focusMainVertical();
					break;				
				case VK_DOWN:				
					mainKeyLocation.vertical++;
					if(mainKeyLocation.vertical == 1)mainKeyLocation.vertical = 2;
					if(mainKeyLocation.vertical > maxVertical)mainKeyLocation.vertical = 0;
					
					mainKeyLocation.horizon = 1;
					focusMainVertical();				
					break;
			}
		}
	}
	
	
	// Theme 리스트 화면 
	else if ($('#body_theme .body_title').is(':visible')) {
		if(enabledKey){
			switch (keycode) {				
				case VK_HID_ESC:
				case VK_HID_BACK:
					$(".body_back").click();
					break;
				case VK_ENTER:
					if(maxTemplate > 0) {
						$(".slideList").click();
						focusMainHorizon();
						
						themePreviewKeyLocation.horizon = 1;
						focusThemePreviewPopup();
					}
					break;
				case VK_LEFT:
					//mainKeyLocation.horizon--;
					//if(mainKeyLocation.horizon < 1)mainKeyLocation.horizon = 1;
					
					$('.body_button_left').click();
					//focusMainHorizon();
					break;
				case VK_RIGHT:
					//mainKeyLocation.horizon++;
					//if(mainKeyLocation.horizon > slide_max)mainKeyLocation.horizon = slide_max;
					
					$('.body_button_right').click();				
					//focusMainHorizon();
					break;
				case VK_UP:
					break;				
				case VK_DOWN:
					break;
			}
		}
	}
	
	
	// My Projects 리스트 화면 
	else if ($('#body_myprojects .body_title').is(':visible')) {
		if(enabledKey){
			switch (keycode) {				
				case VK_HID_ESC:
				case VK_HID_BACK:
					$(".body_back").click();
					break;
				case VK_ENTER:
					if(maxMyproject > 0) {
						$(".slideList").click();
						focusMainHorizon();
						
						myprojectsPreviewKeyLocation.horizon = 1;
						focusMyprojectsPreviewPopup();
					}
					break;
				case VK_LEFT:
					//mainKeyLocation.horizon--;
					//if(mainKeyLocation.horizon < 1)mainKeyLocation.horizon = 1;
					
					$('.body_button_left').click();
					//focusMainHorizon();
					break;
				case VK_RIGHT:
					//mainKeyLocation.horizon++;
					//if(mainKeyLocation.horizon > slide_max)mainKeyLocation.horizon = slide_max;
					
					$('.body_button_right').click();				
					//focusMainHorizon();
					break;
				case VK_UP:
					break;				
				case VK_DOWN:
					break;
			}
		}
	}*/

	
	// 기타 다른 화면
	else {
		if(enabledKey){
			switch (keycode) {
				case VK_HID_ESC:
				case VK_HID_BACK:
					$(".body_back").click();
					break;
			}
		}
	}
}

function initializeFocus() {
	// 메인화면
	$(".body_contents_sub.list_1").addClass("focus");
	
	// featured preview 팝업화면
	$("#body_featured .previewPopup_button .edit").addClass("focus");
	
	// playlists preview 팝업화면
	$("#body_playlists .previewPopup_button .play").addClass("focus");
	
	// theme preview 팝업화면
	$("#body_theme .previewPopup_button .edit").addClass("focus");
	
	// myprojects preview 팝업화면
	$("#body_myprojects .previewPopup_button .edit").addClass("focus");
	
	// editMap 화면
	$("#body_theme .editMap .cell_" + focusedEditMapCellNo).css({
		"border":"3px solid #00d7ff",
		top:"-=2px",
		left:"-=2px",
		"z-index":5
	});
}


function setMouseHover() {
	// 메인화면
	$(".body_contents_sub_dimmed").hover(
		function(){
			for(var i=1; i<= slide_max; i++)$(".body_contents_sub.list_" + i).removeClass("focus");
		},
		function(){
			for(var i=1; i<=slide_max; i++)$(".body_contents_sub.list_" + i).removeClass("focus");
			$(".body_contents_sub.list_" + slide_current).addClass("focus");
		}
	);
	
	// featured preview 팝업화면
	$("#body_featured .previewPopup_button .edit").hover(
		function(){
			featuredPreviewKeyLocation.horizon = 1;
			$("#body_featured .previewPopup_button .edit").addClass("focus");
			$("#body_featured .previewPopup_button .cancel").removeClass("focus");
		},
		function(){			
		}
	);
	$("#body_featured .previewPopup_button .cancel").hover(
		function(){
			featuredPreviewKeyLocation.horizon = 2;
			$("#body_featured .previewPopup_button .edit").removeClass("focus");
			$("#body_featured .previewPopup_button .cancel").addClass("focus");
		},
		function(){			
		}
	);
	
	// playlists preview 팝업화면
	$("#body_playlists .previewPopup_button .play").hover(
		function(){
			playlistsPreviewKeyLocation.horizon = 1;
			$("#body_playlists .previewPopup_button .play").addClass("focus");
			$("#body_playlists .previewPopup_button .edit").removeClass("focus");
			$("#body_playlists .previewPopup_button .cancel").removeClass("focus");
		},
		function(){			
		}
	);
	$("#body_playlists .previewPopup_button .edit").hover(
		function(){
			playlistsPreviewKeyLocation.horizon = 2;
			$("#body_playlists .previewPopup_button .play").removeClass("focus");
			$("#body_playlists .previewPopup_button .edit").addClass("focus");
			$("#body_playlists .previewPopup_button .cancel").removeClass("focus");
		},
		function(){			
		}
	);
	$("#body_playlists .previewPopup_button .cancel").hover(
		function(){
			playlistsPreviewKeyLocation.horizon = 3;
			$("#body_playlists .previewPopup_button .play").removeClass("focus");
			$("#body_playlists .previewPopup_button .edit").removeClass("focus");
			$("#body_playlists .previewPopup_button .cancel").addClass("focus");
		},
		function(){			
		}
	);
	
	// theme preview 팝업화면
	$("#body_theme .previewPopup_button .edit").hover(
		function(){
			themePreviewKeyLocation.horizon = 1;
			$("#body_theme .previewPopup_button .edit").addClass("focus");
			$("#body_theme .previewPopup_button .cancel").removeClass("focus");
		},
		function(){			
		}
	);
	$("#body_theme .previewPopup_button .cancel").hover(
		function(){
			themePreviewKeyLocation.horizon = 2;
			$("#body_theme .previewPopup_button .edit").removeClass("focus");
			$("#body_theme .previewPopup_button .cancel").addClass("focus");
		},
		function(){			
		}
	);
	
	// myprojects preview 팝업화면
	$("#body_myprojects .previewPopup_button .edit").hover(
		function(){
			myprojectsPreviewKeyLocation.horizon = 1;
			$("#body_myprojects .previewPopup_button .edit").addClass("focus");
			$("#body_myprojects .previewPopup_button .cancel").removeClass("focus");
		},
		function(){			
		}
	);
	$("#body_myprojects .previewPopup_button .cancel").hover(
		function(){
			myprojectsPreviewKeyLocation.horizon = 2;
			$("#body_myprojects .previewPopup_button .edit").removeClass("focus");
			$("#body_myprojects .previewPopup_button .cancel").addClass("focus");
		},
		function(){			
		}
	);
	
	// Edit Map 화면
	for (var i=1; i<=25; i++){	
		$(".editMap .cell_" + i).hover(
			function(){				
				if(focusedEditMapCellNo != $(this).parent().attr('id')){					
					releaseEditMapCell(focusedEditMapCellNo);
					focusEditMapCell($(this).parent().attr('id'));
					
					focusedEditMapCellNo = $(this).parent().attr('id');
				}
			},
			function(){
				/*if(focusedEditMapCellNo != $(this).parent().attr('id')){
					focusEditMapCell($(this).parent().attr('id'));
				}*/
			}
		);
	}
}


function focusMainHorizon() {

	for(var i=1; i<=slide_max; i++)$(".body_contents_sub.list_" + i).removeClass("focus");
	$(".body_contents_sub.list_" + mainKeyLocation.horizon).addClass("focus");
/*
	if(mainKeyLocation.vertical == 1){					
		for(var i=1; i<=slide_max; i++)$("#body_featured .body_contents_sub.list_" + i).removeClass("focus");
		$("#body_featured .body_contents_sub.list_" + mainKeyLocation.horizon).addClass("focus");
	}
	else if(mainKeyLocation.vertical == 2){
		for(var i=1; i<=slide_max; i++)$("#body_playlists .body_contents_sub.list_" + i).removeClass("focus");
		$("#body_playlists .body_contents_sub.list_" + mainKeyLocation.horizon).addClass("focus");
	}
	else if(mainKeyLocation.vertical == 3){
		for(var i=1; i<=slide_max; i++)$("#body_editor .body_contents_sub.list_" + i).removeClass("focus");
		$("#body_editor .body_contents_sub.list_" + mainKeyLocation.horizon).addClass("focus");
	}
	if(mainKeyLocation.vertical == 4){
		for(var i=1; i<=slide_max; i++)$("#body_support .body_contents_sub.list_" + i).removeClass("focus");
		$("#body_support .body_contents_sub.list_" + mainKeyLocation.horizon).addClass("focus");
	}
	else if(mainKeyLocation.vertical == 5){					
		for(var i=1; i<=slide_max; i++)$("#body_settings .body_contents_sub.list_" + i).removeClass("focus");
		$("#body_settings .body_contents_sub.list_" + mainKeyLocation.horizon).addClass("focus");
	}*/

}


function focusMainVertical() {
	//if(enabledKey){
		if(mainKeyLocation.vertical == 0){
			mainKeyLocation.vertical = 0;
			
			$('.lnb_featured').css({
				'background-image':'url(../websrc/img/main/bn_main_featured_off_02.png)',
				'width':'133px'
			});
			$('.lnb_playlists').css({
				'background-image':'url(../websrc/img/main/bn_main_playlists_off_02.png)',
				'width':'133px'
			});
			$('.lnb_editor').css({
				'background-image':'url(../websrc/img/main/bn_main_editor_off_02.png)',
				'width':'133px'
			});
			$('.lnb_support').css({
				'background-image':'url(../websrc/img/main/bn_main_support_off_02.png)',
				'width':'133px'
			});
			$('.lnb_settings').css({
				'background-image':'url(../websrc/img/main/bn_main_settings_off_02.png)',
				'width':'133px'
			});
			$(".gnb_logo").addClass("focus");
		}
		else if(mainKeyLocation.vertical == 1){
			$("#lnb .btn_featured").click();
			/*for(var i=1; i<=slide_max; i++)$("#body_featured .body_contents_sub.list_" + i).removeClass("focus");
			$("#body_featured .body_contents_sub.list_1").addClass("focus");*/
		}
		else if(mainKeyLocation.vertical == 2){
			$("#lnb .btn_playlists").click();
			/*for(var i=1; i<=slide_max; i++)$("#body_playlists .body_contents_sub.list_" + i).removeClass("focus");
			$("#body_playlists .body_contents_sub.list_1").addClass("focus");*/
		}
		else if(mainKeyLocation.vertical == 3){
			$("#lnb .btn_editor").click();
			/*for(var i=1; i<=slide_max; i++)$("#body_editor .body_contents_sub.list_" + i).removeClass("focus");
			$("#body_editor .body_contents_sub.list_1").addClass("focus");*/
		}
		else if(mainKeyLocation.vertical == 4){
			$("#lnb .btn_support").click();
			/*for(var i=1; i<=slide_max; i++)$("#body_support .body_contents_sub.list_" + i).removeClass("focus");
			$("#body_support .body_contents_sub.list_1").addClass("focus");*/
		}
		else if(mainKeyLocation.vertical == 5){
			$("#lnb .btn_settings").click();
			/*for(var i=1; i<=slide_max; i++)$("#body_settings .body_contents_sub.list_" + i).removeClass("focus");
			$("#body_settings .body_contents_sub.list_1").addClass("focus");*/
		//}
	}
}

function focusTopHorizon() {
	//if(enabledKey){
		$(".gnb_logo").removeClass("focus");
		$(".gnb_log").removeClass("focus");
		$(".gnb_close").removeClass("focus");
		
		if(topBarKeyLocation.horizon == 1){
			$(".gnb_logo").addClass("focus");
		}
		else if(topBarKeyLocation.horizon == 2){
			$(".gnb_log").addClass("focus");
		}
		else if(topBarKeyLocation.horizon == 3){
			$(".gnb_close").addClass("focus");
		}
}


// "Focus Init" : cancel, save, publish, backgrounds, widgets(dimmed), images, text
function focusInitCancelHorizon(direction) {
	if(direction == "right") {
		var horizon = [null, 1];
		var initClass = [null, ".apply"];
	}
	else if(direction == "left") {
		var horizon = [null, 2];
		var initClass = [null, ".cancel"];
	}
	
	isCancelEditMode = true;
	releaseEditLayerLeftVertical();
	
	editLayerCancelKeyLocation.horizon = horizon[1];
	$("#lay_editor_layer .bottom_btn " + initClass[1]).addClass("focus");
}


function focusInitSaveHorizon(direction) {
	if(direction == "right") {
		var horizon = [null, 1];
		var initClass = [null, ".apply"];
	}
	else if(direction == "left") {
		var horizon = [null, 2];
		var initClass = [null, ".cancel"];
	}
	
	isSaveEditMode = true;
	releaseEditLayerLeftVertical();
	
	editLayerSaveKeyLocation.horizon = horizon[1];
	$("#lay_editor_layer .bottom_btn " + initClass[1]).addClass("focus");
}


function focusInitPublishHorizon(direction) {
	if(direction == "right") {
		var horizon = [null, 1, 1];
		var initClass = [null, "#publish_01", ".apply"];
	}
	else if(direction == "left") {
		var horizon = [null, 2, 2];
		var initClass = [null, "#publish_02", ".cancel"];
	}
	
	isPublishEditMode = true;
	releaseEditLayerLeftVertical();
	
	// Only to me, To everyone
	if(editLayerPublishKeyLocation.vertical == 1){
		editLayerPublishKeyLocation.horizon = horizon[1];
		$("#lay_editor_layer .publish .contents .publish_radio_img" + initClass[1] + "+label").addClass("focus");
	}
	// apply, cancel
	else if(editLayerPublishKeyLocation.vertical == 2){
		editLayerPublishKeyLocation.horizon = horizon[2];
		$("#lay_editor_layer .bottom_btn "  + initClass[2]).addClass("focus");
	}
}


function focusInitBackgroundsHorizon(direction) {
	if(direction == "right") {
		var horizon = [null, 1, 1, 1];
		var initClass = [null, ".color_btn", ".color_1", ".apply"];
	}
	else if(direction == "left") {
		var horizon = [null, 3, 10, 2];
		var initClass = [null, ".video_btn", ".color_10", ".cancel"];
	}
	
	isBackgroundsEditMode = true;
	releaseEditLayerLeftVertical();
	
	// color, image, video
	if(editLayerBackgroundsKeyLocation.vertical == 1){
		editLayerBackgroundsKeyLocation.horizon = horizon[1];
		$("#lay_editor_layer .backgrounds .top_btn " + initClass[1]).addClass("focus");
	}
	// color list
	else if(editLayerBackgroundsKeyLocation.vertical == 2){
		editLayerBackgroundsKeyLocation.horizon = horizon[2];
		$("#lay_editor_layer .backgrounds .color_list "  + initClass[2]).addClass("focus");
	}
	// apply, cancel
	else if(editLayerBackgroundsKeyLocation.vertical == 3){
		editLayerBackgroundsKeyLocation.horizon = horizon[3];
		$("#lay_editor_layer .bottom_btn "  + initClass[3]).addClass("focus");
	}
}


function focusInitImagesHorizon(direction) {
	if(direction == "right") {
		var horizon = [null, 1, 1, 1];
		var initClass = [null, ".image_preview_1", ".image_left", ".apply"];
	}
	else if(direction == "left") {
		var horizon = [null, 5, 7, 2];
		var initClass = [null, ".image_preview_5", ".image_minus", ".cancel"];
	}
	
	isImagesEditMode = true;
	releaseEditLayerLeftVertical();
	
	// 5 images
	if(editLayerImagesKeyLocation.vertical == 1){
		editLayerImagesKeyLocation.horizon = horizon[1];
		$("#lay_editor_layer .images .contents " + initClass[1]).addClass("focus");
	}
	// adjust
	else if(editLayerImagesKeyLocation.vertical == 2){
		editLayerImagesKeyLocation.horizon = horizon[2];
		$("#lay_editor_layer .images .contents .buttons "  + initClass[2]).addClass("focus");
	}
	// apply, cancel
	else if(editLayerImagesKeyLocation.vertical == 3){
		editLayerImagesKeyLocation.horizon = horizon[3];
		$("#lay_editor_layer .bottom_btn "  + initClass[3]).addClass("focus");
	}
}


function focusInitTextHorizon(direction) {
	if(direction == "right") {
		var horizon = [null, 1, 1, 1];
		var initClass = [null, ".text_input", ".text_font", ".apply"];
	}
	else if(direction == "left") {
		var horizon = [null, 1, 11, 2];
		var initClass = [null, ".text_input", ".text_align_bottom", ".cancel"];
	}
	
	isTextEditMode = true;
	releaseEditLayerLeftVertical();
	
	// text edit
	if(editLayerTextKeyLocation.vertical == 1){
		editLayerTextKeyLocation.horizon = horizon[1];
		$("#lay_editor_layer .text .contents " + initClass[1]).addClass("focus");
	}
	// text style
	else if(editLayerTextKeyLocation.vertical == 2){
		editLayerTextKeyLocation.horizon = horizon[2];
		$("#lay_editor_layer .text .contents " + initClass[2]).addClass("focus");
	}
	// apply, cancel
	else if(editLayerTextKeyLocation.vertical == 3){
		editLayerTextKeyLocation.horizon = horizon[3];
		$("#lay_editor_layer .bottom_btn "  + initClass[3]).addClass("focus");
	}
}


// "Focus Vertical" : , , publish, backgrounds, widgets(dimmed), images, text
function focusPublishVertical() {
	editLayerPublishKeyLocation.horizon = 1;
					
	if(editLayerPublishKeyLocation.vertical <= 0) editLayerPublishKeyLocation.vertical = 2;
	else if(editLayerPublishKeyLocation.vertical >= 3) editLayerPublishKeyLocation.vertical = 1;	
	
	if(editLayerPublishKeyLocation.vertical == 1){
		$("#lay_editor_layer .publish .contents .publish_radio_img#publish_01+label").addClass("focus");
				
		$("#lay_editor_layer  .bottom_btn .apply").removeClass("focus");
		$("#lay_editor_layer  .bottom_btn .cancel").removeClass("focus");
	}	
	else if(editLayerPublishKeyLocation.vertical == 2){
		$("#lay_editor_layer .publish .contents .publish_radio_img#publish_01+label").removeClass("focus");
		$("#lay_editor_layer .publish .contents .publish_radio_img#publish_02+label").removeClass("focus");
				
		$("#lay_editor_layer .bottom_btn .apply").addClass("focus");	
	}
}


function focusBackgroundsVertical() {
	editLayerBackgroundsKeyLocation.horizon = 1;
					
	if(editLayerBackgroundsKeyLocation.vertical <= 0) editLayerBackgroundsKeyLocation.vertical = 3;
	else if(editLayerBackgroundsKeyLocation.vertical >= 4) editLayerBackgroundsKeyLocation.vertical = 1;	
	
	if(editLayerBackgroundsKeyLocation.vertical == 1){
		$("#lay_editor_layer .backgrounds .top_btn .color_btn").addClass("focus");
		
		if($("#lay_editor_layer .backgrounds .color").is(':visible')){
			for(var i=1; i<=10; i++)$("#lay_editor_layer .backgrounds .color_list .color_" + i).removeClass("focus");
		}
		else if($("#lay_editor_layer .backgrounds .image").is(':visible')) $("#lay_editor_layer .backgrounds .image .image_preview_1").removeClass("focus");
		else if($("#lay_editor_layer .backgrounds .video").is(':visible')) $("#lay_editor_layer .backgrounds .video .video_preview_1").removeClass("focus");
		
		$("#lay_editor_layer  .bottom_btn .apply").removeClass("focus");
		$("#lay_editor_layer  .bottom_btn .cancel").removeClass("focus");
	}
	else if(editLayerBackgroundsKeyLocation.vertical == 2){
		$("#lay_editor_layer .backgrounds .top_btn .color_btn").removeClass("focus");
		$("#lay_editor_layer .backgrounds .top_btn .image_btn").removeClass("focus");
		$("#lay_editor_layer .backgrounds .top_btn .video_btn").removeClass("focus");
		
		if($("#lay_editor_layer .backgrounds .color").is(':visible')) $("#lay_editor_layer .backgrounds .color_list .color_1").addClass("focus");
		else if($("#lay_editor_layer .backgrounds .image").is(':visible')) $("#lay_editor_layer .backgrounds .image .image_preview_1").addClass("focus");
		else if($("#lay_editor_layer .backgrounds .video").is(':visible')) $("#lay_editor_layer .backgrounds .video .video_preview_1").addClass("focus");
		
		$("#lay_editor_layer .bottom_btn .apply").removeClass("focus");
		$("#lay_editor_layer .bottom_btn .cancel").removeClass("focus");
	}
	else if(editLayerBackgroundsKeyLocation.vertical == 3){
		$("#lay_editor_layer .backgrounds .top_btn .color_btn").removeClass("focus");
		$("#lay_editor_layer .backgrounds .top_btn .image_btn").removeClass("focus");
		$("#lay_editor_layer .backgrounds .top_btn .video_btn").removeClass("focus");
		
		if($("#lay_editor_layer .backgrounds .color").is(':visible')){
			for(var i=1; i<=10; i++)$("#lay_editor_layer .backgrounds .color_list .color_" + i).removeClass("focus");
		}
		else if($("#lay_editor_layer .backgrounds .image").is(':visible')) $("#lay_editor_layer .backgrounds .image .image_preview_1").removeClass("focus");
		else if($("#lay_editor_layer .backgrounds .video").is(':visible')) $("#lay_editor_layer .backgrounds .video .video_preview_1").removeClass("focus");
				
		$("#lay_editor_layer .bottom_btn .apply").addClass("focus");	
	}
}


function focusImagesVertical() {
	editLayerImagesKeyLocation.horizon = 1;
					
	if(editLayerImagesKeyLocation.vertical <= 0) editLayerImagesKeyLocation.vertical = 3;
	else if(editLayerImagesKeyLocation.vertical >= 4) editLayerImagesKeyLocation.vertical = 1;	
	
	if(editLayerImagesKeyLocation.vertical == 1){
		$("#lay_editor_layer .images .contents .image_preview_1").addClass("focus");
		
		$("#lay_editor_layer .images .contents .buttons .image_left").removeClass("focus");
		$("#lay_editor_layer .images .contents .buttons .image_right").removeClass("focus");
		$("#lay_editor_layer .images .contents .buttons .image_up").removeClass("focus");
		$("#lay_editor_layer .images .contents .buttons .image_down").removeClass("focus");
		$("#lay_editor_layer .images .contents .buttons .image_plus").removeClass("focus");
		$("#lay_editor_layer .images .contents .buttons .image_minus").removeClass("focus");
		
		$("#lay_editor_layer  .bottom_btn .apply").removeClass("focus");
		$("#lay_editor_layer  .bottom_btn .cancel").removeClass("focus");
	}
	else if(editLayerImagesKeyLocation.vertical == 2){
		$("#lay_editor_layer .images .contents .image_preview_1").removeClass("focus");
		$("#lay_editor_layer .images .contents .image_preview_2").removeClass("focus");
		$("#lay_editor_layer .images .contents .image_preview_3").removeClass("focus");
		$("#lay_editor_layer .images .contents .image_preview_4").removeClass("focus");
		$("#lay_editor_layer .images .contents .image_preview_5").removeClass("focus");
		
		$("#lay_editor_layer .images .contents .buttons .image_left").addClass("focus");
		
		$("#lay_editor_layer .bottom_btn .apply").removeClass("focus");
		$("#lay_editor_layer .bottom_btn .cancel").removeClass("focus");
	}
	else if(editLayerImagesKeyLocation.vertical == 3){
		$("#lay_editor_layer .images .contents .image_preview_1").removeClass("focus");
		$("#lay_editor_layer .images .contents .image_preview_2").removeClass("focus");
		$("#lay_editor_layer .images .contents .image_preview_3").removeClass("focus");
		$("#lay_editor_layer .images .contents .image_preview_4").removeClass("focus");
		$("#lay_editor_layer .images .contents .image_preview_5").removeClass("focus");
		
		$("#lay_editor_layer .images .contents .buttons .image_left").removeClass("focus");
		$("#lay_editor_layer .images .contents .buttons .image_right").removeClass("focus");
		$("#lay_editor_layer .images .contents .buttons .image_up").removeClass("focus");
		$("#lay_editor_layer .images .contents .buttons .image_down").removeClass("focus");
		$("#lay_editor_layer .images .contents .buttons .image_plus").removeClass("focus");
		$("#lay_editor_layer .images .contents .buttons .image_minus").removeClass("focus");
		
		$("#lay_editor_layer .bottom_btn .apply").addClass("focus");	
	}
}


function focusTextVertical() {
	editLayerTextKeyLocation.horizon = 1;
					
	if(editLayerTextKeyLocation.vertical <= 0) editLayerTextKeyLocation.vertical = 3;
	else if(editLayerTextKeyLocation.vertical >= 4) editLayerTextKeyLocation.vertical = 1;	
	
	if(editLayerTextKeyLocation.vertical == 1){
		$("#lay_editor_layer .text .contents .text_input").addClass("focus");
		
		$("#lay_editor_layer .text .contents .text_font").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_size").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_color").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_weight").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_back_color").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_left").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_center").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_right").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_top").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_middle").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_bottom").removeClass("focus");
		
		$("#lay_editor_layer  .bottom_btn .apply").removeClass("focus");
		$("#lay_editor_layer  .bottom_btn .cancel").removeClass("focus");
	}
	else if(editLayerTextKeyLocation.vertical == 2){
		$("#lay_editor_layer .text .contents .text_input").removeClass("focus");
		
		$("#lay_editor_layer .text .contents .text_font").addClass("focus");
		
		$("#lay_editor_layer .bottom_btn .apply").removeClass("focus");
		$("#lay_editor_layer .bottom_btn .cancel").removeClass("focus");
	}
	else if(editLayerTextKeyLocation.vertical == 3){
		$("#lay_editor_layer .text .contents .text_input").removeClass("focus");
		
		$("#lay_editor_layer .text .contents .text_font").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_size").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_color").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_weight").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_back_color").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_left").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_center").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_right").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_top").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_middle").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_bottom").removeClass("focus");
		
		$("#lay_editor_layer .bottom_btn .apply").addClass("focus");	
	}
}


// "Focus Horizon" : cancel, save, publish, backgrounds, widgets(dimmed), images, text
function focusCancelHorizon() {
	if(editLayerCancelKeyLocation.horizon <= -1 ) editLayerCancelKeyLocation.horizon = 2;
	else if(editLayerCancelKeyLocation.horizon >= 3 ) editLayerCancelKeyLocation.horizon = 0;
	
	$("#lay_editor_layer .bottom_btn .apply").removeClass("focus");
	$("#lay_editor_layer .bottom_btn .cancel").removeClass("focus");
	
	if(editLayerCancelKeyLocation.horizon == 0) {
		isCancelEditMode = false;
		editLayerLeftKeyLocation.vertical = 1;
		$("#lay_editor_layer .left_btn .left_cancel").addClass("focus");
		$("#lay_editor_layer .left_btn .left_cancel").css({top:"-=2"});
		$("#lay_editor_layer .left_btn .left_cancel").css({left:"-=2"});
	}
	else if(editLayerCancelKeyLocation.horizon == 1) $("#lay_editor_layer .bottom_btn .apply").addClass("focus");
	else if(editLayerCancelKeyLocation.horizon == 2) $("#lay_editor_layer .bottom_btn .cancel").addClass("focus");
}


function focusSaveHorizon() {
	if(editLayerSaveKeyLocation.horizon <= -1 ) editLayerSaveKeyLocation.horizon = 2;
	else if(editLayerSaveKeyLocation.horizon >= 3 ) editLayerSaveKeyLocation.horizon = 0;
	
	$("#lay_editor_layer .bottom_btn .apply").removeClass("focus");
	$("#lay_editor_layer .bottom_btn .cancel").removeClass("focus");
	
	if(editLayerSaveKeyLocation.horizon == 0) {
		isSaveEditMode = false;
		editLayerLeftKeyLocation.vertical = 2;
		$("#lay_editor_layer .left_btn .left_save").addClass("focus");
		$("#lay_editor_layer .left_btn .left_save").css({top:"-=2"});
		$("#lay_editor_layer .left_btn .left_save").css({left:"-=2"});
	}
	else if(editLayerSaveKeyLocation.horizon == 1) $("#lay_editor_layer .bottom_btn .apply").addClass("focus");
	else if(editLayerSaveKeyLocation.horizon == 2) $("#lay_editor_layer .bottom_btn .cancel").addClass("focus");
}


function focusPublishHorizon() {
	// Only to me, To everyone
	if(editLayerPublishKeyLocation.vertical == 1) {
		if(editLayerPublishKeyLocation.horizon <= -1) editLayerPublishKeyLocation.horizon = 2;
		else if(editLayerPublishKeyLocation.horizon >= 3) editLayerPublishKeyLocation.horizon = 0;
		
		$("#lay_editor_layer .publish .contents .publish_radio_img#publish_01+label").removeClass("focus");
		$("#lay_editor_layer .publish .contents .publish_radio_img#publish_02+label").removeClass("focus");
		
		if(editLayerPublishKeyLocation.horizon == 0) {
			isPublishEditMode = false;
			editLayerLeftKeyLocation.vertical = 3;
			$("#lay_editor_layer .left_btn .left_publish").addClass("focus");
			$("#lay_editor_layer .left_btn .left_publish").css({top:"-=2"});
			$("#lay_editor_layer .left_btn .left_publish").css({left:"-=2"});
		}
		else if(editLayerPublishKeyLocation.horizon == 1) $("#lay_editor_layer .publish .contents .publish_radio_img#publish_01+label").addClass("focus");
		else if(editLayerPublishKeyLocation.horizon == 2) $("#lay_editor_layer .publish .contents .publish_radio_img#publish_02+label").addClass("focus");
	}
	
	// apply, cancel
	else if(editLayerPublishKeyLocation.vertical == 2) {
		if(editLayerPublishKeyLocation.horizon <= -1) editLayerPublishKeyLocation.horizon = 2;
		else if(editLayerPublishKeyLocation.horizon >= 3) editLayerPublishKeyLocation.horizon = 0;
		
		$("#lay_editor_layer .bottom_btn .apply").removeClass("focus");
		$("#lay_editor_layer .bottom_btn .cancel").removeClass("focus");		
		
		if(editLayerPublishKeyLocation.horizon == 0) {
			isPublishEditMode = false;
			editLayerLeftKeyLocation.vertical = 3;
			$("#lay_editor_layer .left_btn .left_publish").addClass("focus");
			$("#lay_editor_layer .left_btn .left_publish").css({top:"-=2"});
			$("#lay_editor_layer .left_btn .left_publish").css({left:"-=2"});
		}
		else if(editLayerPublishKeyLocation.horizon == 1) $("#lay_editor_layer .bottom_btn .apply").addClass("focus");
		else if(editLayerPublishKeyLocation.horizon == 2) $("#lay_editor_layer .bottom_btn .cancel").addClass("focus");
	}
}


function focusBackgroundsHorizon() {
	// color, image, video
	if(editLayerBackgroundsKeyLocation.vertical == 1) {
		if(editLayerBackgroundsKeyLocation.horizon <= -1) editLayerBackgroundsKeyLocation.horizon = 3;
		else if(editLayerBackgroundsKeyLocation.horizon >= 4) editLayerBackgroundsKeyLocation.horizon = 0;
		
		$("#lay_editor_layer .backgrounds .top_btn .color_btn").removeClass("focus");
		$("#lay_editor_layer .backgrounds .top_btn .image_btn").removeClass("focus");
		$("#lay_editor_layer .backgrounds .top_btn .video_btn").removeClass("focus");
		
		if(editLayerBackgroundsKeyLocation.horizon == 0) {
			isBackgroundsEditMode = false;
			editLayerLeftKeyLocation.vertical = 4;
			$("#lay_editor_layer .left_btn .left_backgrounds").addClass("focus");
			$("#lay_editor_layer .left_btn .left_backgrounds").css({top:"-=2"});
			$("#lay_editor_layer .left_btn .left_backgrounds").css({left:"-=2"});
		}
		else if(editLayerBackgroundsKeyLocation.horizon == 1) $("#lay_editor_layer .backgrounds .top_btn .color_btn").addClass("focus");
		else if(editLayerBackgroundsKeyLocation.horizon == 2) $("#lay_editor_layer .backgrounds .top_btn .image_btn").addClass("focus");
		else if(editLayerBackgroundsKeyLocation.horizon == 3) $("#lay_editor_layer .backgrounds .top_btn .video_btn").addClass("focus");
	}
	
	// color list
	else if(editLayerBackgroundsKeyLocation.vertical == 2) {
		if(editLayerBackgroundsKeyLocation.horizon <= -1) editLayerBackgroundsKeyLocation.horizon = 10;
		if(editLayerBackgroundsKeyLocation.horizon >= 11) editLayerBackgroundsKeyLocation.horizon = 0;
		
		for(var i=1; i<=10; i++)$("#lay_editor_layer .backgrounds .color_list .color_" + i).removeClass("focus");
		
		if(editLayerBackgroundsKeyLocation.horizon == 0) {
			isBackgroundsEditMode = false;
			editLayerLeftKeyLocation.vertical = 4;
			$("#lay_editor_layer .left_btn .left_backgrounds").addClass("focus");
			$("#lay_editor_layer .left_btn .left_backgrounds").css({top:"-=2"});
			$("#lay_editor_layer .left_btn .left_backgrounds").css({left:"-=2"});
			
		}
		else {
			$("#lay_editor_layer .backgrounds .color_list .color_" + editLayerBackgroundsKeyLocation.horizon).addClass("focus");
		}
	}
	
	// apply, cancel
	else if(editLayerBackgroundsKeyLocation.vertical == 3) {
		if(editLayerBackgroundsKeyLocation.horizon <= -1) editLayerBackgroundsKeyLocation.horizon = 2;
		else if(editLayerBackgroundsKeyLocation.horizon >= 3) editLayerBackgroundsKeyLocation.horizon = 0;
		
		$("#lay_editor_layer .bottom_btn .apply").removeClass("focus");
		$("#lay_editor_layer .bottom_btn .cancel").removeClass("focus");		
		
		if(editLayerBackgroundsKeyLocation.horizon == 0) {
			isBackgroundsEditMode = false;
			editLayerLeftKeyLocation.vertical = 4;
			$("#lay_editor_layer .left_btn .left_backgrounds").addClass("focus");
			$("#lay_editor_layer .left_btn .left_backgrounds").css({top:"-=2"});
			$("#lay_editor_layer .left_btn .left_backgrounds").css({left:"-=2"});
		}
		else if(editLayerBackgroundsKeyLocation.horizon == 1) $("#lay_editor_layer .bottom_btn .apply").addClass("focus");
		else if(editLayerBackgroundsKeyLocation.horizon == 2) $("#lay_editor_layer .bottom_btn .cancel").addClass("focus");
	}
}


function focusImagesHorizon() {
	// 5 images
	if(editLayerImagesKeyLocation.vertical == 1) {
		if(editLayerImagesKeyLocation.horizon <= -1) editLayerImagesKeyLocation.horizon = 5;
		else if(editLayerImagesKeyLocation.horizon >= 6) editLayerImagesKeyLocation.horizon = 0;
		
		$("#lay_editor_layer .images .contents .image_preview_1").removeClass("focus");
		$("#lay_editor_layer .images .contents .image_preview_2").removeClass("focus");
		$("#lay_editor_layer .images .contents .image_preview_3").removeClass("focus");
		$("#lay_editor_layer .images .contents .image_preview_4").removeClass("focus");
		$("#lay_editor_layer .images .contents .image_preview_5").removeClass("focus");
		
		if(editLayerImagesKeyLocation.horizon == 0) {
			isImagesEditMode = false;
			editLayerLeftKeyLocation.vertical = 5;
			$("#lay_editor_layer .left_btn .left_images").addClass("focus");
			$("#lay_editor_layer .left_btn .left_images").css({top:"-=2"});
			$("#lay_editor_layer .left_btn .left_images").css({left:"-=2"});
		}
		else if(editLayerImagesKeyLocation.horizon == 1) $("#lay_editor_layer .images .contents .image_preview_1").addClass("focus");
		else if(editLayerImagesKeyLocation.horizon == 2) $("#lay_editor_layer .images .contents .image_preview_2").addClass("focus");
		else if(editLayerImagesKeyLocation.horizon == 3) $("#lay_editor_layer .images .contents .image_preview_3").addClass("focus");
		else if(editLayerImagesKeyLocation.horizon == 4) $("#lay_editor_layer .images .contents .image_preview_4").addClass("focus");
		else if(editLayerImagesKeyLocation.horizon == 5) $("#lay_editor_layer .images .contents .image_preview_5").addClass("focus");
	}
	
	// adjust
	else if(editLayerImagesKeyLocation.vertical == 2) {
		if(editLayerImagesKeyLocation.horizon <= -1) editLayerImagesKeyLocation.horizon = 6;
		if(editLayerImagesKeyLocation.horizon >= 7) editLayerImagesKeyLocation.horizon = 0;
		
		$("#lay_editor_layer .images .contents .buttons .image_left").removeClass("focus");
		$("#lay_editor_layer .images .contents .buttons .image_right").removeClass("focus");
		$("#lay_editor_layer .images .contents .buttons .image_up").removeClass("focus");
		$("#lay_editor_layer .images .contents .buttons .image_down").removeClass("focus");
		$("#lay_editor_layer .images .contents .buttons .image_plus").removeClass("focus");
		$("#lay_editor_layer .images .contents .buttons .image_minus").removeClass("focus");
		
		if(editLayerImagesKeyLocation.horizon == 0) {
			isImagesEditMode = false;
			editLayerLeftKeyLocation.vertical = 5;
			$("#lay_editor_layer .left_btn .left_images").addClass("focus");
			$("#lay_editor_layer .left_btn .left_images").css({top:"-=2"});
			$("#lay_editor_layer .left_btn .left_images").css({left:"-=2"});
			
		}
		else if(editLayerImagesKeyLocation.horizon == 1) $("#lay_editor_layer .images .contents .buttons .image_left").addClass("focus");
		else if(editLayerImagesKeyLocation.horizon == 2) $("#lay_editor_layer .images .contents .buttons .image_right").addClass("focus");
		else if(editLayerImagesKeyLocation.horizon == 3) $("#lay_editor_layer .images .contents .buttons .image_up").addClass("focus");
		else if(editLayerImagesKeyLocation.horizon == 4) $("#lay_editor_layer .images .contents .buttons .image_down").addClass("focus");
		else if(editLayerImagesKeyLocation.horizon == 5) $("#lay_editor_layer .images .contents .buttons .image_plus").addClass("focus");
		else if(editLayerImagesKeyLocation.horizon == 6) $("#lay_editor_layer .images .contents .buttons .image_minus").addClass("focus");
	}
	
	// apply, cancel
	else if(editLayerImagesKeyLocation.vertical == 3) {
		if(editLayerImagesKeyLocation.horizon <= -1) editLayerImagesKeyLocation.horizon = 2;
		else if(editLayerImagesKeyLocation.horizon >= 3) editLayerImagesKeyLocation.horizon = 0;
		
		$("#lay_editor_layer .bottom_btn .apply").removeClass("focus");
		$("#lay_editor_layer .bottom_btn .cancel").removeClass("focus");		
		
		if(editLayerImagesKeyLocation.horizon == 0) {
			isImagesEditMode = false;
			editLayerLeftKeyLocation.vertical = 5;
			$("#lay_editor_layer .left_btn .left_images").addClass("focus");
			$("#lay_editor_layer .left_btn .left_images").css({top:"-=2"});
			$("#lay_editor_layer .left_btn .left_images").css({left:"-=2"});
		}
		else if(editLayerImagesKeyLocation.horizon == 1) $("#lay_editor_layer .bottom_btn .apply").addClass("focus");
		else if(editLayerImagesKeyLocation.horizon == 2) $("#lay_editor_layer .bottom_btn .cancel").addClass("focus");
	}
}


function focusTextHorizon() {
	// text input 
	if(editLayerTextKeyLocation.vertical == 1) {
		if(editLayerTextKeyLocation.horizon <= -1) editLayerTextKeyLocation.horizon = 1;
		else if(editLayerTextKeyLocation.horizon >= 2) editLayerTextKeyLocation.horizon = 0;
		
		$("#lay_editor_layer .text .contents .text_input").removeClass("focus");
		
		if(editLayerTextKeyLocation.horizon == 0) {
			isTextEditMode = false;
			editLayerLeftKeyLocation.vertical = 6;
			$("#lay_editor_layer .left_btn .left_text").addClass("focus");
			$("#lay_editor_layer .left_btn .left_text").css({top:"-=2"});
			$("#lay_editor_layer .left_btn .left_text").css({left:"-=2"});
		}
		else if(editLayerTextKeyLocation.horizon == 1) $("#lay_editor_layer .text .contents .text_input").addClass("focus");
	}
	
	// text style
	else if(editLayerTextKeyLocation.vertical == 2) {
		if(editLayerTextKeyLocation.horizon <= -1) editLayerTextKeyLocation.horizon = 11;
		if(editLayerTextKeyLocation.horizon >= 12) editLayerTextKeyLocation.horizon = 0;
		
		$("#lay_editor_layer .text .contents .text_font").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_size").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_color").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_weight").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_back_color").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_left").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_center").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_right").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_top").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_middle").removeClass("focus");
		$("#lay_editor_layer .text .contents .text_align_bottom").removeClass("focus");
		
		if(editLayerTextKeyLocation.horizon == 0) {
			isTextEditMode = false;
			editLayerLeftKeyLocation.vertical = 6;
			$("#lay_editor_layer .left_btn .left_text").addClass("focus");
			$("#lay_editor_layer .left_btn .left_text").css({top:"-=2"});
			$("#lay_editor_layer .left_btn .left_text").css({left:"-=2"});
			
		}		
		else if(editLayerTextKeyLocation.horizon == 1) $("#lay_editor_layer .text .contents .text_font").addClass("focus");
		else if(editLayerTextKeyLocation.horizon == 2) $("#lay_editor_layer .text .contents .text_size").addClass("focus");
		else if(editLayerTextKeyLocation.horizon == 3) $("#lay_editor_layer .text .contents .text_color").addClass("focus");
		else if(editLayerTextKeyLocation.horizon == 4) $("#lay_editor_layer .text .contents .text_weight").addClass("focus");
		else if(editLayerTextKeyLocation.horizon == 5) $("#lay_editor_layer .text .contents .text_back_color").addClass("focus");
		else if(editLayerTextKeyLocation.horizon == 6) $("#lay_editor_layer .text .contents .text_align_left").addClass("focus");
		else if(editLayerTextKeyLocation.horizon == 7) $("#lay_editor_layer .text .contents .text_align_center").addClass("focus");
		else if(editLayerTextKeyLocation.horizon == 8) $("#lay_editor_layer .text .contents .text_align_right").addClass("focus");
		else if(editLayerTextKeyLocation.horizon == 9) $("#lay_editor_layer .text .contents .text_align_top").addClass("focus");
		else if(editLayerTextKeyLocation.horizon == 10) $("#lay_editor_layer .text .contents .text_align_middle").addClass("focus");
		else if(editLayerTextKeyLocation.horizon == 11) $("#lay_editor_layer .text .contents .text_align_bottom").addClass("focus");
	}
	
	// apply, cancel
	else if(editLayerTextKeyLocation.vertical == 3) {
		if(editLayerTextKeyLocation.horizon <= -1) editLayerTextKeyLocation.horizon = 2;
		else if(editLayerTextKeyLocation.horizon >= 3) editLayerTextKeyLocation.horizon = 0;
		
		$("#lay_editor_layer .bottom_btn .apply").removeClass("focus");
		$("#lay_editor_layer .bottom_btn .cancel").removeClass("focus");		
		
		if(editLayerTextKeyLocation.horizon == 0) {
			isTextEditMode = false;
			editLayerLeftKeyLocation.vertical = 6;
			$("#lay_editor_layer .left_btn .left_text").addClass("focus");
			$("#lay_editor_layer .left_btn .left_text").css({top:"-=2"});
			$("#lay_editor_layer .left_btn .left_text").css({left:"-=2"});
		}
		else if(editLayerTextKeyLocation.horizon == 1) $("#lay_editor_layer .bottom_btn .apply").addClass("focus");
		else if(editLayerTextKeyLocation.horizon == 2) $("#lay_editor_layer .bottom_btn .cancel").addClass("focus");
	}
}


// "Focus 2 depth Vertical" : backgrounds, text
function focusBackgrounds_colorSubListVertical() {
	//editLayerBackgrounds_colorSubListKeyLocation.horizon = 1;
					
	if(editLayerBackgrounds_colorSubListKeyLocation.vertical <= 0) editLayerBackgrounds_colorSubListKeyLocation.vertical = 6;
	else if(editLayerBackgrounds_colorSubListKeyLocation.vertical >= 7) editLayerBackgrounds_colorSubListKeyLocation.vertical = 1;	
	
	$(".colorSubList .color_sub_1").removeClass("focus");
	$(".colorSubList .color_sub_2").removeClass("focus");
	$(".colorSubList .color_sub_3").removeClass("focus");
	$(".colorSubList .color_sub_4").removeClass("focus");
	$(".colorSubList .color_sub_5").removeClass("focus");
	$(".colorSubList .color_sub_6").removeClass("focus");
	$(".colorSubList .color_sub_7").removeClass("focus");
	$(".colorSubList .color_sub_8").removeClass("focus");
	$(".colorSubList .color_sub_9").removeClass("focus");
	$(".colorSubList .color_sub_10").removeClass("focus");
	$(".colorSubList .color_sub_" + editLayerBackgrounds_colorSubListKeyLocation.vertical).addClass("focus");
}


function focusImages_selectAnImagesVertical() {
}


function focusImages_selectAnImagesHorizon() {
	if(editLayerImages_selectAnImagesKeyLocation.horizon <= 0) editLayerImages_selectAnImagesKeyLocation.horizon = 3;
	else if(editLayerImages_selectAnImagesKeyLocation.horizon >= 4) editLayerImages_selectAnImagesKeyLocation.horizon = 1;	
	
	$("#lay_editor_layer .select_an_image .plus").removeClass("focus");
	$("#lay_editor_layer .select_an_image .minus").removeClass("focus");
	$("#lay_editor_layer .select_an_image .close").removeClass("focus");
	
	if(editLayerImages_selectAnImagesKeyLocation.horizon == 1) $("#lay_editor_layer .select_an_image .plus").addClass("focus");
	else if(editLayerImages_selectAnImagesKeyLocation.horizon == 2) $("#lay_editor_layer .select_an_image .minus").addClass("focus");
	else if(editLayerImages_selectAnImagesKeyLocation.horizon == 3) $("#lay_editor_layer .select_an_image .close").addClass("focus");
}


function focusText_textFontVertical() {
	//editLayerText_textFontKeyLocation.horizon = 1;
					
	if(editLayerText_textFontKeyLocation.vertical <= 0) editLayerText_textFontKeyLocation.vertical = 5;
	else if(editLayerText_textFontKeyLocation.vertical >= 6) editLayerText_textFontKeyLocation.vertical = 1;	
	
	$("#lay_editor_layer .text .contents .text_font_list .list_1").removeClass("focus");
	$("#lay_editor_layer .text .contents .text_font_list .list_2").removeClass("focus");
	$("#lay_editor_layer .text .contents .text_font_list .list_3").removeClass("focus");
	$("#lay_editor_layer .text .contents .text_font_list .list_4").removeClass("focus");
	$("#lay_editor_layer .text .contents .text_font_list .list_5").removeClass("focus");
	$("#lay_editor_layer .text .contents .text_font_list .list_6").removeClass("focus");
	$("#lay_editor_layer .text .contents .text_font_list .list_" + editLayerText_textFontKeyLocation.vertical).addClass("focus");
}


function focusText_textSizeVertical() {
	//editLayerText_textSizeKeyLocation.horizon = 1;
					
	if(editLayerText_textSizeKeyLocation.vertical <= 0) editLayerText_textSizeKeyLocation.vertical = 5;
	else if(editLayerText_textSizeKeyLocation.vertical >= 6) editLayerText_textSizeKeyLocation.vertical = 1;	
	
	$("#lay_editor_layer .text .contents .text_size_list .list_1").removeClass("focus");
	$("#lay_editor_layer .text .contents .text_size_list .list_2").removeClass("focus");
	$("#lay_editor_layer .text .contents .text_size_list .list_3").removeClass("focus");
	$("#lay_editor_layer .text .contents .text_size_list .list_4").removeClass("focus");
	$("#lay_editor_layer .text .contents .text_size_list .list_5").removeClass("focus");
	$("#lay_editor_layer .text .contents .text_size_list .list_" + editLayerText_textSizeKeyLocation.vertical).addClass("focus");
}


function focusText_textColorVertical() {
	//editLayerText_textSizeKeyLocation.horizon = 1;
					
	if(editLayerText_textColorKeyLocation.vertical <= -1) editLayerText_textColorKeyLocation.vertical = 3;
	else if(editLayerText_textColorKeyLocation.vertical >= 4) editLayerText_textColorKeyLocation.vertical = 0;	
	
	for(var i=0; i<=67; i++)$("#lay_editor_layer .text .contents .text_color_list .palette .list_" + i).removeClass("focus");
	
	var colorAddress = (editLayerText_textColorKeyLocation.vertical * 17) + (editLayerText_textColorKeyLocation.horizon - 1);
	
	$("#lay_editor_layer .text .contents .text_color_list .palette .list_" + colorAddress).addClass("focus");
}


function focusText_textColorHorizon() {
	//editLayerText_textSizeKeyLocation.horizon = 1;
					
	if(editLayerText_textColorKeyLocation.horizon <= 0) editLayerText_textColorKeyLocation.horizon = 17;
	else if(editLayerText_textColorKeyLocation.horizon >= 18) editLayerText_textColorKeyLocation.horizon = 1;	
	
	for(var i=0; i<=67; i++)$("#lay_editor_layer .text .contents .text_color_list .palette .list_" + i).removeClass("focus");
	
	var colorAddress = (editLayerText_textColorKeyLocation.vertical * 17) + (editLayerText_textColorKeyLocation.horizon - 1);
	
	$("#lay_editor_layer .text .contents .text_color_list .palette .list_" + colorAddress).addClass("focus");
}


// run edit mode : cancel, save, publish, backgrounds, widgets(dimmed), images, text
function runCancelEditMode() {
	// apply, cancel
	if(editLayerCancelKeyLocation.vertical == 1) {
		switch(editLayerCancelKeyLocation.horizon) {
			// apply
			case 1 :
				$("#lay_editor_layer .cancel_layer .contents .bottom_btn .apply").click();
				break;
			// cancel
			case 2 :
				$("#lay_editor_layer .cancel_layer .contents .bottom_btn .cancel").click();
				break;
		}
	}
}


function runSaveEditMode() {
	// apply, cancel
	if(editLayerSaveKeyLocation.vertical == 1) {
		switch(editLayerSaveKeyLocation.horizon) {
			// apply
			case 1 :
				$("#lay_editor_layer .save .contents .bottom_btn .apply").click();
				break;
			// cancel
			case 2 :
				$("#lay_editor_layer .save .contents .bottom_btn .cancel").click();
				break;
		}
	}
}


function runPublishEditMode() {
	// Only to me, To everyone
	if(editLayerPublishKeyLocation.vertical == 1) {
		switch(editLayerPublishKeyLocation.horizon) {
			// Only to me (playlists)
			case 1 :
				$("#lay_editor_layer .publish .contents .publish_radio_img#publish_01+label").click();
				break;
			// To everyone (featured)
			case 2 :
				$("#lay_editor_layer .publish .contents .publish_radio_img#publish_02+label").click();
				break;
		}
	}
	
	// apply, cancel
	else if(editLayerPublishKeyLocation.vertical == 2) {
		switch(editLayerPublishKeyLocation.horizon) {
			// apply
			case 1 :
				$("#lay_editor_layer .publish .contents .bottom_btn .apply").click();
				break;
			// cancel
			case 2 :
				$("#lay_editor_layer .publish .contents .bottom_btn .cancel").click();
				break;
		}
	}
}


function runBackgroundsEditMode() {
	// top bar : color, image, video
	 if(editLayerBackgroundsKeyLocation.vertical == 1) {
		switch(editLayerBackgroundsKeyLocation.horizon) {
			// color
			case 1 :
				$("#lay_editor_layer .backgrounds .top_btn #1").click();
				break;
			// image
			case 2 :
				$("#lay_editor_layer .backgrounds .top_btn #2").click();
				break;
			// video
			case 3 :
				$("#lay_editor_layer .backgrounds .top_btn #3").click();
				break;
		}
	}
	
	// color list, image preview, video preview
	else if(editLayerBackgroundsKeyLocation.vertical == 2) {
		// color list
		if($("#lay_editor_layer .backgrounds .color").is(':visible')){			
			$("#lay_editor_layer .backgrounds  .color_list .color_" + editLayerBackgroundsKeyLocation.horizon).click();
			editLayerBackgrounds_colorSubListKeyLocation.vertical = 4;
			$(".colorSubList .color_sub_4").addClass("focus");
		}
		
		// image preview
		else if($("#lay_editor_layer .backgrounds .image").is(':visible')){
			$("#lay_editor_layer .backgrounds .image .image_preview_1").click();		
		}
		
		// video preview
		else if($("#lay_editor_layer .backgrounds .video").is(':visible')){
			$("#lay_editor_layer .backgrounds .video .video_preview_1").click();		
		}
		
	}
	
	// apply, cancel
	else if(editLayerBackgroundsKeyLocation.vertical == 3) {
		switch(editLayerBackgroundsKeyLocation.horizon) {
			// apply
			case 1 :
				$("#lay_editor_layer .backgrounds .contents .bottom_btn .apply").click();
				break;
			// cancel
			case 2 :
				$("#lay_editor_layer .backgrounds .contents .bottom_btn .cancel").click();
				break;
		}
	}
}


function runImagesEditMode() {
	// 5 images
	if(editLayerImagesKeyLocation.vertical == 1) {
		selectedFiveImageNo = editLayerImagesKeyLocation.horizon;
		$("#lay_editor_layer .images .contents .image_preview_" + editLayerImagesKeyLocation.horizon).click();
		
		$("#lay_editor_layer .select_an_image .plus").addClass("focus");
		editLayerImages_selectAnImagesKeyLocation.horizon = 1;
	}
	
	// adjust
	else if(editLayerImagesKeyLocation.vertical == 2) {
		switch(editLayerImagesKeyLocation.horizon) {
			// image left
			case 1 :
				$("#lay_editor_layer .images .contents .buttons .image_left").click();
				//imageInCellMove("left");
				break;
			// image right
			case 2 :
				$("#lay_editor_layer .images .contents .buttons .image_right").click();
				//imageInCellMove("right");
				break;
			// image up
			case 3 :
				$("#lay_editor_layer .images .contents .buttons .image_up").click();
				break;
			// image down
			case 4 :
				$("#lay_editor_layer .images .contents .buttons .image_down").click();
				break;
			// image plus
			case 5 :
				$("#lay_editor_layer .images .contents .buttons .image_plus").click();
				break;
			// image minus
			case 6 :
				$("#lay_editor_layer .images .contents .buttons .image_minus").click();
				break;
		}
	}
	
	// apply, cancel
	else if(editLayerImagesKeyLocation.vertical == 3) {
		switch(editLayerImagesKeyLocation.horizon) {
			// apply
			case 1 :
				$("#lay_editor_layer .images .contents .bottom_btn .apply").click();
				break;
			// cancel
			case 2 :
				$("#lay_editor_layer .images .contents .bottom_btn .cancel").click();
				break;
		}
	}
}


function runImages_selectAnImagesEditMode() {
	// plus
	if(editLayerImages_selectAnImagesKeyLocation.horizon == 1) {
	}
	
	// minus
	else if(editLayerImages_selectAnImagesKeyLocation.horizon == 2) {
	}
	
	// close
	else if(editLayerImages_selectAnImagesKeyLocation.horizon == 3) {
		$("#lay_editor_layer .images .contents .select_an_image .close").click();
	}
}

function runTextEditMode() {
	// text edit
	if(editLayerTextKeyLocation.vertical == 1) {
		$("#lay_editor_layer .text .contents .text_input textarea").click();
	}
	// text style
	else if(editLayerTextKeyLocation.vertical == 2) {
		switch(editLayerTextKeyLocation.horizon) {
			// text_font
			case 1 :
				$("#lay_editor_layer .text .contents .text_font").click();
				editLayerText_textFontKeyLocation.vertical = 4;
				$("#lay_editor_layer .text .contents .text_font_list .list_4").addClass("focus");
				break;
			// text_size
			case 2 :
				$("#lay_editor_layer .text .contents .text_size").click();
				editLayerText_textSizeKeyLocation.vertical = 4;
				$("#lay_editor_layer .text .contents .text_size_list .list_4").addClass("focus");
				break;
			// text_color
			case 3 :
				$("#lay_editor_layer .text .contents .text_color").click();
				editLayerText_textColorKeyLocation.vertical = 0;
				editLayerText_textColorKeyLocation.horizon = 1;
				$("lay_editor_layer .text .contents .text_color_list .palette .list_0").addClass("focus");
				break;
			// text_weight
			case 4 :
				$("#lay_editor_layer .text .contents .text_weight").click();
				break;
			// text_back_color
			case 5 :
				$("#lay_editor_layer .text .contents .text_back_color").click();
				editLayerText_textColorKeyLocation.vertical = 1;
				editLayerText_textColorKeyLocation.horizon = 1;
				$("lay_editor_layer .text .contents .text_color_list .palette .list_0").addClass("focus");
				break;
			// text_align_left
			case 6 :
				$("#lay_editor_layer .text .contents .text_align_left").click();
				break;
			// text_align_center
			case 7 :
				$("#lay_editor_layer .text .contents .text_align_center").click();
				break;
			// text_align_right
			case 8 :
				$("#lay_editor_layer .text .contents .text_align_right").click();
				break;
			// text_align_top
			case 9 :
				$("#lay_editor_layer .text .contents .text_align_top").click();
				break
			// text_align_middle
			case 10 :
				$("#lay_editor_layer .text .contents .text_align_middle").click();
				break;
			// text_align_bottom
			case 11 :
				$("#lay_editor_layer .text .contents .text_align_bottom").click();
				break;	
		}
	}
	// apply, cancel
	else if(editLayerTextKeyLocation.vertical == 3) {
		switch(editLayerTextKeyLocation.horizon) {
			// apply
			case 1 :
				$("#lay_editor_layer .text .contents .bottom_btn .apply").click();
				break;
			// cancel
			case 2 :
				$("#lay_editor_layer .text .contents .bottom_btn .cancel").click();
				break;
		}
	}
}


// run 2 depth edit mode : backgrounds, text
function runBackgrounds_colorSubListEditMode() {
	$("#color_sub_list_" + editLayerBackgroundsKeyLocation.horizon + " #" + editLayerBackgrounds_colorSubListKeyLocation.vertical).click();
}


function runText_textFontEditMode() {
	$("#lay_editor_layer .text .contents .text_font_list .list_" + editLayerText_textFontKeyLocation.vertical).click();
}


function runText_textSizeEditMode() {
	$("#lay_editor_layer .text .contents .text_size_list .list_" + editLayerText_textSizeKeyLocation.vertical).click();
}


function runText_textColorEditMode() {
	var colorAddress = (editLayerText_textSizeKeyLocation.vertical * 17) + (editLayerText_textSizeKeyLocation.horizon - 1);
	$("#lay_editor_layer .text .contents .text_color_list .list_" + colorAddress).click();
}


// Preview Popup
function focusFeaturedPreviewPopup() {
	$("#body_featured .previewPopup_button .edit").removeClass("focus");
	$("#body_featured .previewPopup_button .cancel").removeClass("focus");
	
	if(featuredPreviewKeyLocation.horizon == 1)$("#body_featured .previewPopup_button .edit").addClass("focus");
	else if(featuredPreviewKeyLocation.horizon == 2)$("#body_featured .previewPopup_button .cancel").addClass("focus");
}


function focusPlaylistsPreviewPopup() {
	$("#body_playlists .previewPopup_button .play").removeClass("focus");
	$("#body_playlists .previewPopup_button .edit").removeClass("focus");
	$("#body_playlists .previewPopup_button .cancel").removeClass("focus");
	
	if(playlistsPreviewKeyLocation.horizon == 1)$("#body_playlists .previewPopup_button .play").addClass("focus");
	else if(playlistsPreviewKeyLocation.horizon == 2)$("#body_playlists .previewPopup_button .edit").addClass("focus");
	else if(playlistsPreviewKeyLocation.horizon == 3)$("#body_playlists .previewPopup_button .cancel").addClass("focus");
}


function focusThemePreviewPopup() {
	$("#body_theme .previewPopup_button .edit").removeClass("focus");
	$("#body_theme .previewPopup_button .cancel").removeClass("focus");
	
	if(themePreviewKeyLocation.horizon == 1)$("#body_theme .previewPopup_button .edit").addClass("focus");
	else if(themePreviewKeyLocation.horizon == 2)$("#body_theme .previewPopup_button .cancel").addClass("focus");
}


function focusMyprojectsPreviewPopup() {
	$("#body_myprojects .previewPopup_button .edit").removeClass("focus");
	$("#body_myprojects .previewPopup_button .cancel").removeClass("focus");
	
	if(myprojectsPreviewKeyLocation.horizon == 1)$("#body_myprojects .previewPopup_button .edit").addClass("focus");
	else if(myprojectsPreviewKeyLocation.horizon == 2)$("#body_myprojects .previewPopup_button .cancel").addClass("focus");
}


// edit map CELL
function focusEditMapCell(cellNumber) {
	$("#body_theme .editMap .cell_" + cellNumber).css({
		"border":"3px solid #00d7ff",
		top:"-=2px",
		left:"-=2px",
		"z-index":5
	});
}


function releaseEditMapCell(cellNumber) {
	$("#body_theme .editMap .cell_" + cellNumber).css({
		"border":"1px solid #ddd",
		top:"+=2px",
		left:"+=2px",
		"z-index":0
	});
}


// edit layer LNB
function adjustEditLayerLeft(direction) {
	switch(originalEditKind.cell[focusedEditMapCellNo].kind) {
		case "image" :
			// Widgets
			if(editLayerLeftKeyLocation.vertical == 5) {
				if(direction == "up") editLayerLeftKeyLocation.vertical = 4;            // Backgrounds
				else if(direction == "down") editLayerLeftKeyLocation.vertical = 6;     // Images
			}
			
			// Text
			else if(editLayerLeftKeyLocation.vertical == 7) {
				if(direction == "up") editLayerLeftKeyLocation.vertical = 6;            // Images
				else if(direction == "down") editLayerLeftKeyLocation.vertical = 1;     // Cancel
			}			
			break;
		case "text" :
			// Widgets
			if(editLayerLeftKeyLocation.vertical == 5) {
				if(direction == "up") editLayerLeftKeyLocation.vertical = 4;            // Backgrounds
				else if(direction == "down") editLayerLeftKeyLocation.vertical = 7;     // Text
			}			
			
			// Images
			else if(editLayerLeftKeyLocation.vertical == 6) {
				if(direction == "up") editLayerLeftKeyLocation.vertical = 4;            // Backgrounds
				else if(direction == "down") editLayerLeftKeyLocation.vertical = 7;     // Text
			}			
			break;
			
		case "empty" :
			// Widgets
			if(editLayerLeftKeyLocation.vertical == 5) {
				if(direction == "up") editLayerLeftKeyLocation.vertical = 4;            // Backgrounds
				else if(direction == "down") editLayerLeftKeyLocation.vertical = 1;     // Cancel
			}			
			
			// Images
			else if(editLayerLeftKeyLocation.vertical == 6) {
				if(direction == "up") editLayerLeftKeyLocation.vertical = 4;            // Backgrounds
				else if(direction == "down") editLayerLeftKeyLocation.vertical = 1;     // Cancel
			}
			
			// Text
			else if(editLayerLeftKeyLocation.vertical == 7) {
				if(direction == "up") editLayerLeftKeyLocation.vertical = 4;            // Backgrounds
				else if(direction == "down") editLayerLeftKeyLocation.vertical = 1;     // Cancel
			}
			break;
	}
}	


function focusEditLayerLeftVertical() {
	var targetLeftBtn = new Object;
	
	if(editLayerLeftKeyLocation.vertical == 1) targetLeftBtn = $("#lay_editor_layer .left_btn .left_cancel");
	else if(editLayerLeftKeyLocation.vertical == 2) targetLeftBtn = $("#lay_editor_layer .left_btn .left_save");
	else if(editLayerLeftKeyLocation.vertical == 3) targetLeftBtn = $("#lay_editor_layer .left_btn .left_publish");
	else if(editLayerLeftKeyLocation.vertical == 4)	targetLeftBtn = $("#lay_editor_layer .left_btn .left_backgrounds");
	else if(editLayerLeftKeyLocation.vertical == 5)	targetLeftBtn = $("#lay_editor_layer .left_btn .left_widgets");
	else if(editLayerLeftKeyLocation.vertical == 6)	targetLeftBtn = $("#lay_editor_layer .left_btn .left_images");
	else if(editLayerLeftKeyLocation.vertical == 7) targetLeftBtn = $("#lay_editor_layer .left_btn .left_text");
	
	targetLeftBtn.addClass("focus");
	targetLeftBtn.css({top:"-=2"});
	targetLeftBtn.css({left:"-=2"});
}


function releaseEditLayerLeftVertical() {
	var targetLeftBtn = new Object;
	
	if ($("#lay_editor_layer .left_btn .left_cancel").hasClass ("focus")) targetLeftBtn = $("#lay_editor_layer .left_btn .left_cancel");
	else if ($("#lay_editor_layer .left_btn .left_save").hasClass ("focus")) targetLeftBtn = $("#lay_editor_layer .left_btn .left_save");
	else if ($("#lay_editor_layer .left_btn .left_publish").hasClass ("focus")) targetLeftBtn = $("#lay_editor_layer .left_btn .left_publish");
	else if ($("#lay_editor_layer .left_btn .left_backgrounds").hasClass ("focus")) targetLeftBtn = $("#lay_editor_layer .left_btn .left_backgrounds");
	else if ($("#lay_editor_layer .left_btn .left_widgets").hasClass ("focus")) targetLeftBtn = $("#lay_editor_layer .left_btn .left_widgets");
	else if ($("#lay_editor_layer .left_btn .left_images").hasClass ("focus")) targetLeftBtn = $("#lay_editor_layer .left_btn .left_images");
	else if ($("#lay_editor_layer .left_btn .left_text").hasClass ("focus")) targetLeftBtn = $("#lay_editor_layer .left_btn .left_text");
	
	targetLeftBtn.removeClass("focus");
	targetLeftBtn.css({top:"+=2"});
	targetLeftBtn.css({left:"+=2"});
	
	/*$("#lay_editor_layer .left_btn .left_cancel").removeClass("focus");
	$("#lay_editor_layer .left_btn .left_save").removeClass("focus");
	$("#lay_editor_layer .left_btn .left_publish").removeClass("focus");
	$("#lay_editor_layer .left_btn .left_backgrounds").removeClass("focus");	
	$("#lay_editor_layer .left_btn .left_widgets").removeClass("focus");
	$("#lay_editor_layer .left_btn .left_images").removeClass("focus");
	$("#lay_editor_layer .left_btn .left_text").removeClass("focus");*/
	
}