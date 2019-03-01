<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta id="csrf-token" name="csrf-token" content="{{ csrf_token() }}">
	<title>Nexus Home</title>
	<link href="{{ asset('panel/css/bootstrap.min.css') }}" rel="stylesheet">
	<link href="{{ asset('panel/css/font-awesome.min.css') }}" rel="stylesheet">
	<link href="{{ asset('panel/css/datepicker3.css') }}" rel="stylesheet">
	<link href="{{ asset('panel/css/styles.css') }}" rel="stylesheet">
	
	<!--Custom Font-->
	<link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
	<!--[if lt IE 9]>
	<script src="{{ asset('panel/js/html5shiv.js') }}"></script>
	<script src="{{ asset('panel/js/respond.min.js') }}"></script>
	<![endif]-->
</head>
<body>
	<div id="adminApp">
		<router-link to="/some">Some</router-link>
	</div>
	
	<script src="{{ asset('panel/js/jquery-1.11.1.min.js') }}"></script>
	<script src="{{ asset('panel/js/bootstrap.min.js') }}"></script>
	<script src="{{ asset('panel/js/chart.min.js') }}"></script>
	<script src="{{ asset('panel/js/chart-data.js') }}"></script>
	<script src="{{ asset('panel/js/easypiechart.js') }}"></script>
	<script src="{{ asset('panel/js/easypiechart-data.js') }}"></script>
	<script src="{{ asset('panel/js/bootstrap-datepicker.js') }}"></script>
	<script src="{{ asset('panel/js/custom.js') }}"></script>
	<script>
		window.onload = function () {
	var chart1 = document.getElementById("line-chart").getContext("2d");
	window.myLine = new Chart(chart1).Line(lineChartData, {
	responsive: true,
	scaleLineColor: "rgba(0,0,0,.2)",
	scaleGridLineColor: "rgba(0,0,0,.05)",
	scaleFontColor: "#c5c7cc"
	});
};
	</script>
	<script src="{{ asset('js/app.js') }}"></script>
	<script src="{{ asset('js/admin.js') }}"></script>
		
</body>
</html>