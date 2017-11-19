<?php 

//Store search input
$searchTerm = $_GET['searchTerm'];

//Keys and tokens
$consumer_key = '1gq7gjEATYgECvKAtnZtKXmW8';
$consumer_secret = '6QxgiMWOnJhxL25uDJ6KQoRNArfYn4e8GA5KjR9aYdjER9PtNN';
$access_token = '848007579443900418-2RyROAE4r1XY411KzvLpFPuJSkBIvHN';
$access_token_secret = 'YpQegaxxEpIAWOwvr4u1iT9cJQ6OtiOuNfkzU7wsoKMDH';

//Include Library
require "twitteroauth-master/autoload.php";
use Abraham\TwitterOAuth\TwitterOAuth;

//Connect to API 
$connection = new TwitterOAuth($consumer_key, $consumer_secret, $access_token, $access_token_secret);
$content = $connection->get("account/verify_credentials");

//Get Tweets 
$statuses = $connection->get("search/tweets", [q => "Bill Gates", "count" => 1, "result_type" => "popular"]);

print_r($statuses);
 ?>