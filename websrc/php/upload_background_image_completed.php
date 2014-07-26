<?php	
	include 'get_user_email.php';
	
	var_dump($_FILES);
	echo "<br><br>";	
	
	// 빈파일이라면 exit
	if(!$_FILES['uploaded_files']['name']){
		// body_dimmed 닫기		
		echo("<script language='javascript'>opener.window.body_dimmed_close();</script>");	
		
		// 창닫기		
		echo("<script language='javascript'>window.opener = window.location.href; self.close();</script>");	
		
		// 종료
		exit();
	}
	
	// 파일 이름 원래이름으로 변환
	$file_name = $_FILES['uploaded_files']['name'];
	$gs_name = $_FILES['uploaded_files']['tmp_name'];
	
	$new_file_name = 'gs://popon-lg/'.$user_email.'/background_images/'.$file_name;
	move_uploaded_file($gs_name, $new_file_name);
	
	// url 주소 알아내기
	require_once 'google/appengine/api/cloud_storage/CloudStorageTools.php';
	use google\appengine\api\cloud_storage\CloudStorageTools;
	$new_url_name = CloudStorageTools::getImageServingUrl($new_file_name, ['crop' => false]);
	
	echo ($file_name);
	echo "<br><br>";
	
	echo ($new_file_name);
	echo "<br><br>";
	
	echo ($new_url_name);
	echo "<br><br>";
	
	// json 읽기
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
			$object_image_url[$i] = CloudStorageTools::getImageServingUrl($object_image_file[$i], ['crop' => false]);	
			
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
		
		echo "No file";
		echo "<br><br>";
	}
	
	// json 정보 업데이트
	$inserFileName = array("filename" => $file_name);
	array_push($file_list_json["background_images_list"], $inserFileName);
	$object_image_file[$number_of_background_images] = $new_file_name;
	$object_image_url[$number_of_background_images] = $new_url_name;
	
	echo ($file_name);
	echo "<br>";
	echo ($object_image_file[$number_of_background_images]);
	echo "<br>";
	echo ($object_image_url[$number_of_background_images]);
	echo "<br>";
	
	$number_of_background_images++;
	
	// json 업로드
	$handle = fopen("gs://popon-lg/".$user_email."/background_images/background_images_list.json", "w");
	$write_handle = json_encode($file_list_json);
	echo $write_handle;
	$handle = fwrite($handle, $write_handle);		
	fclose($handle);		
	
	// number_of_background_images 전달
	echo("<script language='javascript'>opener.window.php_load_number_of_background_images(\"$number_of_background_images\");</script>");
	
	// background_images URL 전달
	for($i=0; $i < $number_of_background_images; $i++){
		$j = $i + 1;
		echo("<script language='javascript'>opener.window.php_load_background_images_url(\"$j\", \"$object_image_file[$i]\", \"$object_image_url[$i]\");</script>");
	}
	
	// background_images 업로드 완료 이벤트 전달
	echo("<script language='javascript'>opener.window.php_complete_background_images_upload();</script>");
	
	// body_dimmed 닫기
	echo("<script language='javascript'>opener.window.body_dimmed_close();</script>");
	
	// 창닫기
	echo("<script language='javascript'>window.opener = window.location.href; self.close();</script>");
	
	//<? echo("<script language='javascript'>test_call($php_type);</script>");
	//<? echo("<script language='javascript'>test_call(\"".$php_type."\");</script>");
?>





