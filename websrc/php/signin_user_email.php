<?php
	require_once 'google/appengine/api/users/User.php';
	require_once 'google/appengine/api/users/UserService.php';
	
	use google\appengine\api\users\User;
	use google\appengine\api\users\UserService;

	$user = UserService::getCurrentUser();
	
	$user_enjson = json_encode($user);
	$user_dejson = json_decode($user_enjson, true);	
	
	$user_email = $user_dejson["email"];
	
	
	if (isset($user)) {	
		echo "Loading....<br>";
		echo "set<br><br>";		
		echo "<script>document.location.href = './main';</script>";
	} 
	else {
		echo "Loading....<br>";
		echo "not set";
		$signin_url = UserService::createLoginUrl('/');
		echo "<script>document.location.href = '".$signin_url."';</script>";		
	}	
?>