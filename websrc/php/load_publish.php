<?php
	echo "load publishMe ver 0.1<br><br>";
	
	include 'get_user_email.php';	
	
	require_once 'google/appengine/api/cloud_storage/CloudStorageTools.php';
	use google\appengine\api\cloud_storage\CloudStorageTools;
	
	$publishMe_list = file_get_contents('gs://popon-lg/'.$user_email.'/publishMe/publishMe_list.json');	
	
	
	if($publishMe_list) {
		$publishMe_list_json = json_decode($publishMe_list, true);
		$number_of_publishMe = count($publishMe_list_json['publishMe_list']);
		
		$publishNo = $_GET['publishNo'];
		
		$publishMe_content = file_get_contents('gs://popon-lg/'.$user_email.'/publishMe/publishMe_'.$publishNo.'.json');
		$publishMe_content_json = json_decode($publishMe_content, true);
		
		var_dump($publishMe_content_json);
		echo "<br><br>";
		
		$divided = $publishMe_content_json["publishMe_list"][0]["divided"];
		$background_kind = $publishMe_content_json["publishMe_list"][1]["background"]["kind"];
		$background_color = $publishMe_content_json["publishMe_list"][1]["background"]["color"];
		$background_image_url = $publishMe_content_json["publishMe_list"][1]["background"]["image"]["url"];
		
		for($i=1; $i<=25; $i++){
			$cell_kind[$i] = $publishMe_content_json["publishMe_list"][2 + ($i-1)*3]["cell[$i]"]["kind"];
			$cell_x[$i] = $publishMe_content_json["publishMe_list"][2 + ($i-1)*3]["cell[$i]"]["x"];
			$cell_y[$i] = $publishMe_content_json["publishMe_list"][2 + ($i-1)*3]["cell[$i]"]["y"];
			
			$cell_image_theFirstOrderFiveImages[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["theFirstOrderFiveImages"];
			$cell_image_selectedFiveImageNo[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["selectedFiveImageNo"];
			$cell_image_url_1[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["url[1]"];
			$cell_image_imageInCellPercentage_1[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellPercentage[1]"];
			$cell_image_imageInCellTop_1[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellTop[1]"];
			$cell_image_imageInCellLeft_1[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellLeft[1]"];
			$cell_image_imageInCellWidth_1[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellWidth[1]"];
			$cell_image_imageInCellHeight_1[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellHeight[1]"];
			$cell_image_imageInEditPercentage_1[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInEditPercentage[1]"];
			$cell_image_imageInEditPositionX_1[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInEditPositionX[1]"];
			$cell_image_imageInEditPositionY_1[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInEditPositionY[1]"];
			
			$cell_image_theFirstOrderFiveImages[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["theFirstOrderFiveImages"];
			$cell_image_selectedFiveImageNo[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["selectedFiveImageNo"];
			$cell_image_url_2[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["url[2]"];
			$cell_image_imageInCellPercentage_2[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellPercentage[2]"];
			$cell_image_imageInCellTop_2[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellTop[2]"];
			$cell_image_imageInCellLeft_2[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellLeft[2]"];
			$cell_image_imageInCellWidth_2[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellWidth[2]"];
			$cell_image_imageInCellHeight_2[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellHeight[2]"];
			$cell_image_imageInEditPercentage_2[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInEditPercentage[2]"];
			$cell_image_imageInEditPositionX_2[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInEditPositionX[2]"];
			$cell_image_imageInEditPositionY_2[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInEditPositionY[2]"];
			
			$cell_image_theFirstOrderFiveImages[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["theFirstOrderFiveImages"];
			$cell_image_selectedFiveImageNo[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["selectedFiveImageNo"];
			$cell_image_url_3[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["url[3]"];
			$cell_image_imageInCellPercentage_3[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellPercentage[3]"];
			$cell_image_imageInCellTop_3[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellTop[3]"];
			$cell_image_imageInCellLeft_3[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellLeft[3]"];
			$cell_image_imageInCellWidth_3[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellWidth[3]"];
			$cell_image_imageInCellHeight_3[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellHeight[3]"];
			$cell_image_imageInEditPercentage_3[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInEditPercentage[3]"];
			$cell_image_imageInEditPositionX_3[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInEditPositionX[3]"];
			$cell_image_imageInEditPositionY_3[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInEditPositionY[3]"];
			
			$cell_image_theFirstOrderFiveImages[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["theFirstOrderFiveImages"];
			$cell_image_selectedFiveImageNo[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["selectedFiveImageNo"];
			$cell_image_url_4[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["url[4]"];
			$cell_image_imageInCellPercentage_4[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellPercentage[4]"];
			$cell_image_imageInCellTop_4[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellTop[4]"];
			$cell_image_imageInCellLeft_4[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellLeft[4]"];
			$cell_image_imageInCellWidth_4[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellWidth[4]"];
			$cell_image_imageInCellHeight_4[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellHeight[4]"];
			$cell_image_imageInEditPercentage_4[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInEditPercentage[4]"];
			$cell_image_imageInEditPositionX_4[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInEditPositionX[4]"];
			$cell_image_imageInEditPositionY_4[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInEditPositionY[4]"];
			
			$cell_image_theFirstOrderFiveImages[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["theFirstOrderFiveImages"];
			$cell_image_selectedFiveImageNo[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["selectedFiveImageNo"];
			$cell_image_url_5[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["url[5]"];
			$cell_image_imageInCellPercentage_5[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellPercentage[5]"];
			$cell_image_imageInCellTop_5[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellTop[5]"];
			$cell_image_imageInCellLeft_5[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellLeft[5]"];
			$cell_image_imageInCellWidth_5[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellWidth[5]"];
			$cell_image_imageInCellHeight_5[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInCellHeight[5]"];
			$cell_image_imageInEditPercentage_5[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInEditPercentage[5]"];
			$cell_image_imageInEditPositionX_5[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInEditPositionX[5]"];
			$cell_image_imageInEditPositionY_5[$i] = $publishMe_content_json["publishMe_list"][3 + ($i-1)*3]["cell[$i]"]["image"]["imageInEditPositionY[5]"];
			
			$cell_text_contents[$i] = $publishMe_content_json["publishMe_list"][4 + ($i-1)*3]["cell[$i]"]["text"]["contents"];
			$cell_text_font_size[$i] = $publishMe_content_json["publishMe_list"][4 + ($i-1)*3]["cell[$i]"]["text"]["font_size"];
			$cell_text_font_color[$i] = $publishMe_content_json["publishMe_list"][4 + ($i-1)*3]["cell[$i]"]["text"]["font_color"];
			$cell_text_font_family[$i] = $publishMe_content_json["publishMe_list"][4 + ($i-1)*3]["cell[$i]"]["text"]["font_family"];
			$cell_text_font_align[$i] = $publishMe_content_json["publishMe_list"][4 + ($i-1)*3]["cell[$i]"]["text"]["font_align"];
			$cell_text_font_back_color[$i] = $publishMe_content_json["publishMe_list"][4 + ($i-1)*3]["cell[$i]"]["text"]["font_back_color"];
			$cell_text_font_weight[$i] = $publishMe_content_json["publishMe_list"][4 + ($i-1)*3]["cell[$i]"]["text"]["font_weight"];
			$cell_text_font_vertical[$i] = $publishMe_content_json["publishMe_list"][4 + ($i-1)*3]["cell[$i]"]["text"]["font_vertical"];
		}
		
		echo $divided;
		echo "<br><br>";
		
		echo $background_kind;
		echo "<br>";		
		echo $background_color;
		echo "<br>";		
		echo $background_image_url;
		echo "<br><br>";
		
		echo $cell_kind[17];
		echo "<br>";		
		echo $cell_x[17];
		echo "<br>";		
		echo $cell_y[17];
		echo "<br><br>";
		
		echo $cell_image_theFirstOrderFiveImages[17];
		echo "<br>";		
		echo $cell_image_selectedFiveImageNo[17];
		echo "<br>";
		echo $cell_image_url_3[17];
		echo "<br>";
		echo $cell_image_imageInCellPercentage_3[17];
		echo "<br>";
		echo $cell_image_imageInCellTop_3[17];
		echo "<br>";
		echo $cell_image_imageInCellLeft_3[17];
		echo "<br>";
		echo $cell_image_imageInCellWidth_3[17];
		echo "<br>";
		echo $cell_image_imageInCellHeight_3[17];
		echo "<br>";
		echo $cell_image_imageInEditPercentage_3[17];
		echo "<br>";
		echo $cell_image_imageInEditPositionX_3[17];
		echo "<br>";
		echo $cell_image_imageInEditPositionY_3[17];
		echo "<br><br>";
		
		echo $cell_text_contents[17];
		echo "<br>";		
		echo $cell_text_font_size[17];
		echo "<br>";		
		echo $cell_text_font_color[17];
		echo "<br>";		
		echo $cell_text_font_family[17];
		echo "<br>";
		echo $cell_text_font_align[17];
		echo "<br>";	
		echo $cell_text_font_back_color[17];
		echo "<br>";
		echo $cell_text_font_weight[17];
		echo "<br>";
		echo $cell_text_font_vertical[17];
		echo "<br><br>";		
		
		echo "<br><br><br>";
		
		// publishMe 정보 전달
		echo("<script language='javascript'>opener.window.php_load_publishMe_divided(\"$publishNo\", \"$divided\");</script>");
		echo("<script language='javascript'>opener.window.php_load_publishMe_background(\"$publishNo\", \"$background_kind\", \"$background_color\", \"$background_image_url\");</script>");
		
		for($i=1; $i<=25; $i++){
			echo("<script language='javascript'>opener.window.php_load_publishMe_cell_info(
				\"$publishNo\",
				\"$i\", 
				
				\"$cell_kind[$i]\", 
				\"$cell_x[$i]\", 
				\"$cell_y[$i]\", 
				
				\"$cell_image_theFirstOrderFiveImages[$i]\", 
				\"$cell_image_selectedFiveImageNo[$i]\"
			);</script>");
			
			echo("<script language='javascript'>opener.window.php_load_publishMe_cell_img_1(
				\"$publishNo\",
				\"$i\", 
				
				\"$cell_image_url_1[$i]\",
				\"$cell_image_imageInCellPercentage_1[$i]\",
				\"$cell_image_imageInCellTop_1[$i]\",
				\"$cell_image_imageInCellLeft_1[$i]\",
				\"$cell_image_imageInCellWidth_1[$i]\",
				\"$cell_image_imageInCellHeight_1[$i]\",
				\"$cell_image_imageInEditPercentage_1[$i]\",
				\"$cell_image_imageInEditPositionX_1[$i]\",
				\"$cell_image_imageInEditPositionY_1[$i]\"
			);</script>");
			
			echo("<script language='javascript'>opener.window.php_load_publishMe_cell_img_2(
				\"$publishNo\",
				\"$i\", 
				
				\"$cell_image_url_2[$i]\",
				\"$cell_image_imageInCellPercentage_2[$i]\",
				\"$cell_image_imageInCellTop_2[$i]\",
				\"$cell_image_imageInCellLeft_2[$i]\",
				\"$cell_image_imageInCellWidth_2[$i]\",
				\"$cell_image_imageInCellHeight_2[$i]\",
				\"$cell_image_imageInEditPercentage_2[$i]\",
				\"$cell_image_imageInEditPositionX_2[$i]\",
				\"$cell_image_imageInEditPositionY_2[$i]\"
			);</script>");
			
			echo("<script language='javascript'>opener.window.php_load_publishMe_cell_img_3(
				\"$publishNo\",
				\"$i\", 
				
				\"$cell_image_url_3[$i]\",
				\"$cell_image_imageInCellPercentage_3[$i]\",
				\"$cell_image_imageInCellTop_3[$i]\",
				\"$cell_image_imageInCellLeft_3[$i]\",
				\"$cell_image_imageInCellWidth_3[$i]\",
				\"$cell_image_imageInCellHeight_3[$i]\",
				\"$cell_image_imageInEditPercentage_3[$i]\",
				\"$cell_image_imageInEditPositionX_3[$i]\",
				\"$cell_image_imageInEditPositionY_3[$i]\"
			);</script>");
			
			echo("<script language='javascript'>opener.window.php_load_publishMe_cell_img_4(
				\"$publishNo\",
				\"$i\", 
				
				\"$cell_image_url_4[$i]\",
				\"$cell_image_imageInCellPercentage_4[$i]\",
				\"$cell_image_imageInCellTop_4[$i]\",
				\"$cell_image_imageInCellLeft_4[$i]\",
				\"$cell_image_imageInCellWidth_4[$i]\",
				\"$cell_image_imageInCellHeight_4[$i]\",
				\"$cell_image_imageInEditPercentage_4[$i]\",
				\"$cell_image_imageInEditPositionX_4[$i]\",
				\"$cell_image_imageInEditPositionY_4[$i]\"
			);</script>");
			
			echo("<script language='javascript'>opener.window.php_load_publishMe_cell_img_5(
				\"$publishNo\",
				\"$i\", 
				
				\"$cell_image_url_5[$i]\",
				\"$cell_image_imageInCellPercentage_5[$i]\",
				\"$cell_image_imageInCellTop_5[$i]\",
				\"$cell_image_imageInCellLeft_5[$i]\",
				\"$cell_image_imageInCellWidth_5[$i]\",
				\"$cell_image_imageInCellHeight_5[$i]\",
				\"$cell_image_imageInEditPercentage_5[$i]\",
				\"$cell_image_imageInEditPositionX_5[$i]\",
				\"$cell_image_imageInEditPositionY_5[$i]\"
			);</script>");	

			echo("<script language='javascript'>opener.window.php_load_publishMe_text(
				\"$publishNo\",
				\"$i\", 
				
				\"$cell_text_contents[$i]\",
				\"$cell_text_font_size[$i]\",
				\"$cell_text_font_color[$i]\",
				\"$cell_text_font_family[$i]\",
				\"$cell_text_font_align[$i]\",
				\"$cell_text_font_back_color[$i]\",
				\"$cell_text_font_weight[$i]\",
				\"$cell_text_font_vertical[$i]\"
			);</script>");						
		}
	}	
	else {
		$number_of_publishMe = 0;
		$handle = fopen('gs://popon-lg/'.$user_email.'/publishMe/publishMe_list.json', "w");
		$handle = fwrite($handle, '{"publishMe_list":[]}');
		fclose($handle);
		
		echo "<br><br>json file is built<br><br>";
	}	
	
	// publishMe 로드 완료 이벤트 전달
	if($publishNo + 1 == $number_of_publishMe)
		echo("<script language='javascript'>opener.window.php_complete_publishMe_load();</script>");
		
	// 창 닫기
	echo("<script language='javascript'>window.opener = window.location.href; self.close();</script>");
?>
