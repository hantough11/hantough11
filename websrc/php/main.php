<?php
	include 'get_user_email.php';
	
	require_once("../../html/main.html");
	
	echo("<script language='javascript'>php_update_user_email(\"$user_email\");</script>");
?>