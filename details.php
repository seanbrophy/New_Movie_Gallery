<?php
	require_once('admin/includes/init.php');
	
	if(isset($_GET['id'])){
		$tbl = "tbl_movies";
		$col = "movies_id";
		$id = $_GET['id'];
		$getMovie = getSingle($tbl, $col, $id);
	}else{
		echo "Try again.";	
	}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Product Details....</title>
</head>
<body>
	
<?php
	if(!is_string($getMovie)) {
		while($row = mysqli_fetch_array($getMovie)) {
		echo "<h2>{$row['movies_title']}</h2>";
		echo "<p>{$row['movies_storyline']}</p><br>";
		echo "<a href=\"index.php\">Back...</a>";
		}
	}else{
		echo "<p>{$getMovie}</p>";
	}
	?>
</body>
</html>
