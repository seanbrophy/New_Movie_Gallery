<!doctype html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Welcome to the Finest Selection of Blu-rays on the internets!</title>
		<link rel="stylesheet" href="css/normalize.css" />
		<link rel="stylesheet" href="css/foundation.css" />
		<link rel="stylesheet" href="css/app.css" />
		<script src="js/vendor/modernizr.js"></script>
	</head>
	<body>
		<section id="header" class="row">
			<div class="small-12 medium-4 large-4 columns " id="searchBar">
				<form>
					<input id="srch" type="text" size="30" placeholder="SEARCH...">
					<div id="livesrch"></div>
				</form><br>
			</div>
			
		</section>

		<section class="row text-center" id-"body">
			<?php include('includes/nav.html'); ?>
				<div class="details text-center"></div>
				<div class="movies small-12 medium-4 large-12 columns text-center"></div>
			<?php include('includes/footer.html'); ?>
		</section>

		<script src="js/utility.js"></script>
		<script src="js/vendor/jquery.js"></script>
		<script src="js/foundation.min.js"></script>
		<script src="js/foundation/foundation.topbar.js"></script>
		<script>
		$(document).foundation();
		</script>
	</body>
</html>