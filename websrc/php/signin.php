<?php
	
	include 'signin_user_email.php';
	/*
	use google\appengine\api\users\User;
	use google\appengine\api\users\UserService;

	$user = UserService::getCurrentUser();
	
	$user_enjson = json_encode($user);
	$user_dejson = json_decode($user_enjson, true);
	
	echo "ver 0.3";
	echo "<br><br>";
	
	var_dump($user);
	echo "<br><br>";
	
	var_dump($user_enjson);
	echo "<br><br>";
	
	var_dump($user_dejson);
	echo "<br><br>";
	
	$user_email = $user_dejson["email"];
	*/
	var_dump($user_dejson);
	echo "<br><br>";
	echo $user_email;
	
	/*
	use google\appengine\api\users\User;
	use google\appengine\api\users\UserService;
	# Looks for current Google account session
	$user = UserService::getCurrentUser();
	
	
	if ($user) {
		var_dump($user);
		echo "<br><br>";
		echo 'Hello, ' . htmlspecialchars($user->getNickname());
	}
	else {
	  header('Location: ' . UserService::createLoginURL($_SERVER['REQUEST_URI']));
	}
	*/
	// when you are loggin	
	
	//require_once("./html/main.html");
	
	
?>