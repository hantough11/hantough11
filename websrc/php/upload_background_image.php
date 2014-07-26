<?php
	include 'get_user_email.php';
	
	require_once 'google/appengine/api/cloud_storage/CloudStorageTools.php';
	use google\appengine\api\cloud_storage\CloudStorageTools;

	$options = [ 'gs_bucket_name' => 'popon-lg/'.$user_email.'/background_images' ];
	$upload_url = CloudStorageTools::createUploadUrl('/upload_background_image_completed.php', $options);
	
	//echo "Test Upload ver 0.17";
	//echo "<br><br>";
	
	//var_dump($_FILES);
	//echo $upload_url;
	
	//echo "<br><br>";
		
	require_once("../../html/upload.html");
	
	//var_dump($_FILES);
	//echo $upload_url;
	//$gs_name = $_FILES['uploaded_files']['tmp_name'];
	//move_uploaded_file($gs_name, 'gs://popon-lg/'.$user_email.'/back_01.jpg');
?>


