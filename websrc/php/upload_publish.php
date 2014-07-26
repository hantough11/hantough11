<?php
	include 'get_user_email.php';
	
	echo "upload publish ver 0.1<br><br>";
	
	require_once 'google/appengine/api/cloud_storage/CloudStorageTools.php';
	use google\appengine\api\cloud_storage\CloudStorageTools;

	// publish 모드 불러오기
	//$publishEditMode = "publishMe";
	
	
	// publish 이름 불러오기
	$publishName = $_GET['publishName'];
	if(!$publishName)exit(0);
	
	
	// publish 번호 불러오기	
	$publishMe_list_forCount = file_get_contents('gs://popon-lg/'.$user_email.'/publishMe/publishMe_list.json');
	$publishMe_list_json_forCount = json_decode($publishMe_list_forCount, true);
	$number_of_publishMe = count($publishMe_list_json_forCount['publishMe_list']);
	
	$publishMe_list = '{"publishMe_list":[]}';
	$publishMe_list_json = json_decode($publishMe_list, true);
	

	// publish 정보 불러오기
	$divided = $_GET['divided'];
	
	$background_kind = $_GET['background_kind'];
	$background_color = $_GET['background_color'];
	$background_image_url = $_GET['background_image_url'];
	
	for($i=1; $i<=25; $i++){
		$cell_kind[$i] = $_GET['cell_kind_'.$i];
		$cell_x[$i] = $_GET['cell_x_'.$i];
		$cell_y[$i] =$_GET['cell_y_'.$i];
		
		$cell_image_theFirstOrderFiveImages[$i] = $_GET['cell_image_theFirstOrderFiveImages_'.$i];
		$cell_image_selectedFiveImageNo[$i] = $_GET['cell_image_selectedFiveImageNo_'.$i];
		
		$cell_image_url_1[$i] = $_GET['cell_image_url_1_'.$i];
		$cell_image_imageInCellPercentage_1[$i] = $_GET['cell_image_imageInCellPercentage_1_'.$i];
		$cell_image_imageInCellTop_1[$i] = $_GET['cell_image_imageInCellTop_1_'.$i];
		$cell_image_imageInCellLeft_1[$i] = $_GET['cell_image_imageInCellLeft_1_'.$i];
		$cell_image_imageInCellWidth_1[$i] = $_GET['cell_image_imageInCellWidth_1_'.$i];
		$cell_image_imageInCellHeight_1[$i] = $_GET['cell_image_imageInCellHeight_1_'.$i];
		$cell_image_imageInEditPercentage_1[$i] = $_GET['cell_image_imageInEditPercentage_1_'.$i];
		$cell_image_imageInEditPositionX_1[$i] = $_GET['cell_image_imageInEditPositionX_1_'.$i];
		$cell_image_imageInEditPositionY_1[$i] = $_GET['cell_image_imageInEditPositionY_1_'.$i];
		
		$cell_image_url_2[$i] = $_GET['cell_image_url_2_'.$i];
		$cell_image_imageInCellPercentage_2[$i] = $_GET['cell_image_imageInCellPercentage_2_'.$i];
		$cell_image_imageInCellTop_2[$i] = $_GET['cell_image_imageInCellTop_2_'.$i];
		$cell_image_imageInCellLeft_2[$i] = $_GET['cell_image_imageInCellLeft_2_'.$i];
		$cell_image_imageInCellWidth_2[$i] = $_GET['cell_image_imageInCellWidth_2_'.$i];
		$cell_image_imageInCellHeight_2[$i] = $_GET['cell_image_imageInCellHeight_2_'.$i];
		$cell_image_imageInEditPercentage_2[$i] = $_GET['cell_image_imageInEditPercentage_2_'.$i];
		$cell_image_imageInEditPositionX_2[$i] = $_GET['cell_image_imageInEditPositionX_2_'.$i];
		$cell_image_imageInEditPositionY_2[$i] = $_GET['cell_image_imageInEditPositionY_2_'.$i];
		
		$cell_image_url_3[$i] = $_GET['cell_image_url_3_'.$i];
		$cell_image_imageInCellPercentage_3[$i] = $_GET['cell_image_imageInCellPercentage_3_'.$i];
		$cell_image_imageInCellTop_3[$i] = $_GET['cell_image_imageInCellTop_3_'.$i];
		$cell_image_imageInCellLeft_3[$i] = $_GET['cell_image_imageInCellLeft_3_'.$i];
		$cell_image_imageInCellWidth_3[$i] = $_GET['cell_image_imageInCellWidth_3_'.$i];
		$cell_image_imageInCellHeight_3[$i] = $_GET['cell_image_imageInCellHeight_3_'.$i];
		$cell_image_imageInEditPercentage_3[$i] = $_GET['cell_image_imageInEditPercentage_3_'.$i];
		$cell_image_imageInEditPositionX_3[$i] = $_GET['cell_image_imageInEditPositionX_3_'.$i];
		$cell_image_imageInEditPositionY_3[$i] = $_GET['cell_image_imageInEditPositionY_3_'.$i];
		
		$cell_image_url_4[$i] = $_GET['cell_image_url_4_'.$i];
		$cell_image_imageInCellPercentage_4[$i] = $_GET['cell_image_imageInCellPercentage_4_'.$i];
		$cell_image_imageInCellTop_4[$i] = $_GET['cell_image_imageInCellTop_4_'.$i];
		$cell_image_imageInCellLeft_4[$i] = $_GET['cell_image_imageInCellLeft_4_'.$i];
		$cell_image_imageInCellWidth_4[$i] = $_GET['cell_image_imageInCellWidth_4_'.$i];
		$cell_image_imageInCellHeight_4[$i] = $_GET['cell_image_imageInCellHeight_4_'.$i];
		$cell_image_imageInEditPercentage_4[$i] = $_GET['cell_image_imageInEditPercentage_4_'.$i];
		$cell_image_imageInEditPositionX_4[$i] = $_GET['cell_image_imageInEditPositionX_4_'.$i];
		$cell_image_imageInEditPositionY_4[$i] = $_GET['cell_image_imageInEditPositionY_4_'.$i];
		
		$cell_image_url_5[$i] = $_GET['cell_image_url_5_'.$i];
		$cell_image_imageInCellPercentage_5[$i] = $_GET['cell_image_imageInCellPercentage_5_'.$i];
		$cell_image_imageInCellTop_5[$i] = $_GET['cell_image_imageInCellTop_5_'.$i];
		$cell_image_imageInCellLeft_5[$i] = $_GET['cell_image_imageInCellLeft_5_'.$i];
		$cell_image_imageInCellWidth_5[$i] = $_GET['cell_image_imageInCellWidth_5_'.$i];
		$cell_image_imageInCellHeight_5[$i] = $_GET['cell_image_imageInCellHeight_5_'.$i];
		$cell_image_imageInEditPercentage_5[$i] = $_GET['cell_image_imageInEditPercentage_5_'.$i];
		$cell_image_imageInEditPositionX_5[$i] = $_GET['cell_image_imageInEditPositionX_5_'.$i];
		$cell_image_imageInEditPositionY_5[$i] = $_GET['cell_image_imageInEditPositionY_5_'.$i];

		$cell_text_contents[$i] = $_GET['cell_text_contents_'.$i];
		$cell_text_font_size[$i] = $_GET['cell_text_font_size_'.$i];
		$cell_text_font_color[$i] = $_GET['cell_text_font_color_'.$i];
		$cell_text_font_family[$i] = $_GET['cell_text_font_family_'.$i];
		$cell_text_font_align[$i] = $_GET['cell_text_font_align_'.$i];
		$cell_text_font_back_color[$i] = $_GET['cell_text_font_back_color_'.$i];
		$cell_text_font_weight[$i] = $_GET['cell_text_font_weight_'.$i];
		$cell_text_font_vertical[$i] = $_GET['cell_text_font_vertical_'.$i];	
	}
	
	
	// json 정보 업데이트
	$insert_divided = array("divided" => (int)$divided);
	$insert_background = array("background" => 
							array("kind" => $background_kind, 
								"color" => $background_color, 
								"image" => array("url" => $background_image_url)));
	array_push($publishMe_list_json["publishMe_list"], $insert_divided);	
	array_push($publishMe_list_json["publishMe_list"], $insert_background);	
	
	for($i=1; $i<=25; $i++){
		//if($cell[$i]){
			$insert_cell = array("cell[$i]" => 
								array("kind" => $cell_kind[$i], 
									"x" => (int)$cell_x[$i], 
									"y" => (int)$cell_y[$i]
								)									
							);
			array_push($publishMe_list_json["publishMe_list"], $insert_cell);
			
			$insert_cell = array("cell[$i]" => 
								array("image" => 
									array("theFirstOrderFiveImages" => $cell_image_theFirstOrderFiveImages[$i], 
										"selectedFiveImageNo" => $cell_image_selectedFiveImageNo[$i],
										
										"url[1]" => $cell_image_url_1[$i],
										"imageInCellPercentage[1]"  => $cell_image_imageInCellPercentage_1[$i],
										"imageInCellTop[1]"  => $cell_image_imageInCellTop_1[$i],
										"imageInCellLeft[1]"  => $cell_image_imageInCellLeft_1[$i],
										"imageInCellWidth[1]"  => $cell_image_imageInCellWidth_1[$i],
										"imageInCellHeight[1]"  => $cell_image_imageInCellHeight_1[$i],
										"imageInEditPercentage[1]"  => $cell_image_imageInEditPercentage_1[$i],
										"imageInEditPositionX[1]"  => $cell_image_imageInEditPositionX_1[$i],
										"imageInEditPositionY[1]"  => $cell_image_imageInEditPositionY_1[$i],
		
										"url[2]" => $cell_image_url_2[$i],
										"imageInCellPercentage[2]"  => $cell_image_imageInCellPercentage_2[$i],
										"imageInCellTop[2]"  => $cell_image_imageInCellTop_2[$i],
										"imageInCellLeft[2]"  => $cell_image_imageInCellLeft_2[$i],
										"imageInCellWidth[2]"  => $cell_image_imageInCellWidth_2[$i],
										"imageInCellHeight[2]"  => $cell_image_imageInCellHeight_2[$i],
										"imageInEditPercentage[2]"  => $cell_image_imageInEditPercentage_2[$i],
										"imageInEditPositionX[2]"  => $cell_image_imageInEditPositionX_2[$i],
										"imageInEditPositionY[2]"  => $cell_image_imageInEditPositionY_2[$i],
										
										"url[3]" => $cell_image_url_3[$i],
										"imageInCellPercentage[3]"  => $cell_image_imageInCellPercentage_3[$i],
										"imageInCellTop[3]"  => $cell_image_imageInCellTop_3[$i],
										"imageInCellLeft[3]"  => $cell_image_imageInCellLeft_3[$i],
										"imageInCellWidth[3]"  => $cell_image_imageInCellWidth_3[$i],
										"imageInCellHeight[3]"  => $cell_image_imageInCellHeight_3[$i],
										"imageInEditPercentage[3]"  => $cell_image_imageInEditPercentage_3[$i],
										"imageInEditPositionX[3]"  => $cell_image_imageInEditPositionX_3[$i],
										"imageInEditPositionY[3]"  => $cell_image_imageInEditPositionY_3[$i],
										
										"url[4]" => $cell_image_url_4[$i],
										"imageInCellPercentage[4]"  => $cell_image_imageInCellPercentage_4[$i],
										"imageInCellTop[4]"  => $cell_image_imageInCellTop_4[$i],
										"imageInCellLeft[4]"  => $cell_image_imageInCellLeft_4[$i],
										"imageInCellWidth[4]"  => $cell_image_imageInCellWidth_4[$i],
										"imageInCellHeight[4]"  => $cell_image_imageInCellHeight_4[$i],
										"imageInEditPercentage[4]"  => $cell_image_imageInEditPercentage_4[$i],
										"imageInEditPositionX[4]"  => $cell_image_imageInEditPositionX_4[$i],
										"imageInEditPositionY[4]"  => $cell_image_imageInEditPositionY_4[$i],
										
										"url[5]" => $cell_image_url_5[$i],
										"imageInCellPercentage[5]"  => $cell_image_imageInCellPercentage_5[$i],
										"imageInCellTop[5]"  => $cell_image_imageInCellTop_5[$i],
										"imageInCellLeft[5]"  => $cell_image_imageInCellLeft_5[$i],
										"imageInCellWidth[5]"  => $cell_image_imageInCellWidth_5[$i],
										"imageInCellHeight[5]"  => $cell_image_imageInCellHeight_5[$i],
										"imageInEditPercentage[5]"  => $cell_image_imageInEditPercentage_5[$i],
										"imageInEditPositionX[5]"  => $cell_image_imageInEditPositionX_5[$i],
										"imageInEditPositionY[5]"  => $cell_image_imageInEditPositionY_5[$i])									
									)
								);										
									
			array_push($publishMe_list_json["publishMe_list"], $insert_cell);
									
			$insert_text = array("cell[$i]" => 
								array("text" => 
									array("contents" => $cell_text_contents[$i],
										"font_size" => $cell_text_font_size[$i],
										"font_color" => $cell_text_font_color[$i],
										"font_family" => $cell_text_font_family[$i],
										"font_align" => $cell_text_font_align[$i],
										"font_back_color" => $cell_text_font_back_color[$i],
										"font_weight" => $cell_text_font_weight[$i],
										"font_vertical" => $cell_text_font_vertical[$i])
									)
								);
			array_push($publishMe_list_json["publishMe_list"], $insert_text);		
		
			//}			
		//}
	}	
	echo "<br><br>";	
	var_dump ($publishMe_list_json);
	echo "<br><br>";			
	
	// publish_번호 json 서버에 업로드
	$handle = fopen('gs://popon-lg/'.$user_email.'/publishMe/publishMe_'.$number_of_publishMe.'.json', "w");	
	$write_handle = json_encode($publishMe_list_json);
	echo $write_handle;
	$handle = fwrite($handle, $write_handle);		
	fclose($handle);
	
	// publish 리스트 json 서버에 업로드
	$handle_2 = fopen("gs://popon-lg/".$user_email."/publishMe/publishMe_list.json", "w");
	$inserPublishName = array("publishName" => $publishName);
	array_push($publishMe_list_json_forCount["publishMe_list"], $inserPublishName);	
	
	$write_handle_2 = json_encode($publishMe_list_json_forCount);
	echo $write_handle;
	$handle_2 = fwrite($handle_2, $write_handle_2);		
	fclose($handle_2);		
		
	
	echo "<br><br>";	
	var_dump ($write_handle);
	echo "<br><br>";
	
	// body_dimmed 닫기
	echo("<script language='javascript'>opener.window.body_dimmed_close();</script>");
	
	// 창 닫기
	echo("<script language='javascript'>window.opener = window.location.href; self.close();</script>");
?>


