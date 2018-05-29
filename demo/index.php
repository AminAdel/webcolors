<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
		  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>webcolors examples</title>
	
	<!-- bootstrap -->
	<link rel="stylesheet" href="bootstrap-4.1.0.min.css">
	
	<!-- jquery -->
	<script type="text/javascript" src="jquery-1.9.1.min.js"></script>
	
	<!-- webcolors -->
	<link rel="stylesheet" href="../dist/webcolors.min.css">
	<script type="text/javascript" src="../src/js/gradient.js?update=<?= filemtime('../src/js/gradient.js') ?>"></script>
	
	<!-- styles -->
	<style>
		.row {
			margin-top: 50px;
		}
		.box {
			padding: 30px;
			height: 200px;
			text-align: center;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col col-6 col-md-4 col-lg-3">
				<div class="box bg_red white">this is a box</div>
			</div>
			<div class="col col-6 col-md-4 col-lg-3">
				<div class="box bg_gradient" data-gradient="to bottom left, [orange_100], [orange_300]">this is a box</div>
			</div>
			<div class="col col-6 col-md-4 col-lg-3">
				<div class="box bg_gradient" data-gradient="to bottom left, [blue_100], [blue_400]">this is a box</div>
			</div>
			<div class="col col-6 col-md-4 col-lg-3">
				<div class="box bg_gradient" data-gradient='["217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%", "127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%", "336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%"]'>this is a box</div>
			</div>
		</div>
	</div>
</body>
</html>