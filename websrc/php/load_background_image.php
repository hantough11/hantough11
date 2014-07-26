<?php	
	include 'get_user_email.php';
	
	echo "ver 0.29";
	echo "<br><br>";
	
	require_once 'google/appengine/api/cloud_storage/CloudStorageTools.php';
	use google\appengine\api\cloud_storage\CloudStorageTools;
	
	$file_list = file_get_contents('gs://popon-lg/'.$user_email.'/background_images/background_images_list.json');
	
	if($file_list) {
		$file_list_json = json_decode($file_list, true);
		var_dump($file_list_json);
		echo "<br><br>";
		
		$filename = array();
		$object_image_file = array();
		$object_image_url = array();
		
		$number_of_background_images = count($file_list_json['background_images_list']);
		echo "number_of_background_images : ".$number_of_background_images;
		echo "<br><br>";
		
		for($i=0; $i < $number_of_background_images; $i++){
			$filename[$i] = $file_list_json["background_images_list"][$i]["filename"];
			$object_image_file[$i] = "gs://popon-lg/".$user_email."/background_images/".$filename[$i];
			
			if(!file_get_contents($object_image_file[$i])) {
				$object_image_url[$i] = null;
			}
			else $object_image_url[$i] = CloudStorageTools::getImageServingUrl($object_image_file[$i], ['crop' => false]);	
			
			echo ($filename[$i]);
			echo "<br>";
			echo ($object_image_file[$i]);
			echo "<br>";
			echo ($object_image_url[$i]);
			echo "<br>";
			
			echo "<br><br>";	
		}
	}	
	else {
		$number_of_background_images = 0;
		$handle = fopen("gs://popon-lg/".$user_email."/background_images/background_images_list.json", "w");
		$handle = fwrite($handle, '{"background_images_list":[]}');		
		fclose($handle);
	}
	
		
	
	// number_of_background_images 전달
	echo("<script language='javascript'>opener.window.php_load_number_of_background_images(\"$number_of_background_images\");</script>");
	
	// background_images URL 전달
	for($i=0; $i < $number_of_background_images; $i++){
		$j = $i + 1;
		echo("<script language='javascript'>opener.window.php_load_background_images_url(\"$j\", \"$object_image_file[$i]\", \"$object_image_url[$i]\");</script>");
	}
	
	// background_images 로드 완료 이벤트 전달
	echo("<script language='javascript'>opener.window.php_complete_background_images_load();</script>");
	
	// body_dimmed 닫기
	echo("<script language='javascript'>opener.window.body_dimmed_close();</script>");
	
	// 창 닫기
	echo("<script language='javascript'>window.opener = window.location.href; self.close();</script>");
?>