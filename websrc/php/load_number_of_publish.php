<?php
	echo "load publishMe ver 0.1<br><br>";
	
	include 'get_user_email.php';	
	
	require_once 'google/appengine/api/cloud_storage/CloudStorageTools.php';
	use google\appengine\api\cloud_storage\CloudStorageTools;
	
	$publishMe_list = file_get_contents('gs://popon-lg/'.$user_email.'/publishMe/publishMe_list.json');	
	
	
	if($publishMe_list) {
		$publishMe_list_json = json_decode($publishMe_list, true);
		$number_of_publishMe = count($publishMe_list_json['publishMe_list']);		
	}	
	else {
		$number_of_publishMe = 0;
		$handle = fopen('gs://popon-lg/'.$user_email.'/publishMe/publishMe_list.json', "w");
		$handle = fwrite($handle, '{"publishMe_list":[]}');		
		fclose($handle);		
		
		echo "<br><br>json file is built<br><br>";
	}	
	
	// number_of_publishMe 전달
	echo("<script language='javascript'>opener.window.php_load_number_of_publishMe(\"$number_of_publishMe\");</script>");
	
	// publishMe 로드 완료 이벤트 전달
	echo("<script language='javascript'>opener.window.php_complete_number_of_publish_load();</script>");
	
	// body_dimmed 닫기
	echo("<script language='javascript'>opener.window.body_dimmed_close();</script>");
	
	// 창 닫기
	echo("<script language='javascript'>window.opener = window.location.href; self.close();</script>");	
?>
