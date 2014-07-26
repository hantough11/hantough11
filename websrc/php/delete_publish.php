<?php	
	include 'get_user_email.php';
	
	// 지울 슬라이드 번호 불러오기
	$selectedSlideListNo = $_GET['selectedSlideListNo'];
	
	// publish 번호 불러오기	
	$publishMe_list_forCount = file_get_contents('gs://popon-lg/'.$user_email.'/publishMe/publishMe_list.json');
	$publishMe_list_json_forCount = json_decode($publishMe_list_forCount, true);
	$number_of_publishMe = count($publishMe_list_json_forCount['publishMe_list']);
	
	// json 삭제하기
	//$list = 'gs://popon-lg/'.$user_email.'/publishMe/publishMe_list.json';
	//unlink($list);		
	
	//for($i=0; $i<$number_of_publishMe; $i++) {
	//	$contents = 'gs://popon-lg/'.$user_email.'/publishMe/publishMe_'.$i.'.json';
	//	unlink($contents);		
	//}
	
	//$contents = 'gs://popon-lg/'.$user_email.'/publishMe/publishMe_'.($selectedSlideListNo - 1).'.json';	
	//unlink($contents);		
	
	// 해당 슬라이드 지우기
	$number_of_publishMe--;
	$deleted_contents = 'gs://popon-lg/'.$user_email.'/publishMe/publishMe_'.($selectedSlideListNo - 1).'.json';
	unlink($deleted_contents);

	// 슬라이드 번호 재정렬하기
	if($number_of_publishMe == 0) {
	}
	
	else {
		for($i = $selectedSlideListNo; $i <= $number_of_publishMe; $i++)
			rename('gs://popon-lg/'.$user_email.'/publishMe/publishMe_'.$i.'.json', 'gs://popon-lg/'.$user_email.'/publishMe/publishMe_'.($i - 1).'.json');
	}
	
	// json 개수 업데이트 하기
	array_pop($publishMe_list_json_forCount["publishMe_list"]);
	$handle = fopen('gs://popon-lg/'.$user_email.'/publishMe/publishMe_list.json', "w");
	$write_handle = json_encode($publishMe_list_json_forCount);
	$handle = fwrite($handle, $write_handle);		
	fclose($handle);		
	
	// number_of_publishMe 전달
	echo("<script language='javascript'>opener.window.php_load_number_of_publishMe(\"$number_of_publishMe\");</script>");
	
	// publish 삭제 완료 이벤트 전달
	echo("<script language='javascript'>opener.window.php_complete_publish_delete();</script>");
	
	// body_dimmed 닫기
	echo("<script language='javascript'>opener.window.body_dimmed_close();</script>");
	
	// 창 닫기
	echo("<script language='javascript'>window.opener = window.location.href; self.close();</script>");
?>