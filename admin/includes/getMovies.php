<?php 
	ini_set('display_errors',1);
    error_reporting(E_ALL);
	include('connect.php');
	$jsonResult='[';
	//livesearch query
	if(isset($_GET['srch'])) {
		$srch = $_GET['srch'];
		$movieQuery = "SELECT movies_id,movies_title,movies_thumb,movies_year FROM tbl_movies WHERE movies_title LIKE '$srch%' ORDER BY movies_title ASC";
		$getMovies = mysqli_query($link, $movieQuery);
	//page filters results query
	}else if(isset($_GET['filter'])){
		$filter = $_GET['filter'];
        $filterQuery = "SELECT tbl_movies.movies_id, tbl_movies.movies_thumb, tbl_movies.movies_title, tbl_movies.movies_year FROM tbl_movies, tbl_cat, tbl_L_mc WHERE tbl_movies.movies_id = tbl_L_mc.movies_id AND tbl_cat.cat_id = tbl_L_mc.cat_id AND tbl_cat.cat_name = '{$filter}'";
        //echo $movieQuery;
        $getMovies = mysqli_query($link, $filterQuery);
    //gets info from on id
	}else if(isset($_GET['id'])){
		$id = $_GET['id'];
		$querySingle = "SELECT movies_title,movies_fimg,movies_storyline,movies_year FROM tbl_movies WHERE movies_id={$id}";
		$getMovies = mysqli_query($link, $querySingle);

	}else{
		$movieQuery = "SELECT movies_id,movies_title,movies_thumb,movies_year FROM tbl_movies ORDER BY movies_title ASC";
		$getMovies = mysqli_query($link, $movieQuery);
	}

	while($movResult = mysqli_fetch_assoc($getMovies)){
		$jsonResult .= json_encode($movResult).",";
	}
	$jsonResult .= "]";
	$jsonResult = substr_replace($jsonResult,'', -2, 1);
	echo $jsonResult;
?>
