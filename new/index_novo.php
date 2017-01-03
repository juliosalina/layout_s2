<?php
    $tags = get_meta_tags('index_novo.php');
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Dr. Consulta - S2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta content="Admin Dashboard" name="description" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="page-name" content="Dashboard">
    <link rel="shortcut icon" href="assets/images/favicon.ico">
    <!-- CSS usar somente rem-->
    <!-- Original Bootstrap -->
    <!-- O<link href="https://maxcdn.bootstrapcd
            n.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" rel="stylesheet" >-->
    <!-- Bootsrap With Flexbox Grid -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap-flex.min.css" rel="stylesheet">
    <link href="assets/css/icons.css" rel="stylesheet" type="text/css">
    <link href="assets/css/style.css" rel="stylesheet" type="text/css">

    <!-- Charts -->
    <link href="assets/charts/kendo.common.min.css" rel="stylesheet" type="text/css">
    <link href="assets/charts/kendo.default.min.css" rel="stylesheet" type="text/css">
</head>

<body class="menu-open">

    <!-- Begin page -->
    <div id="wrapper">

        <div class="overlay toggle-open"></div>

        <?php include "includes/header.php"; ?>
        
        <?php include "includes/menu.php"; ?>

        <div class="container-fluid">
            <div class="content">
                <div class="content-header"></div>
                <div class="content-body"></div>
            </div>
        </div>
    </div>

    <!-- jQuery  -->
    <script src="assets/js/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="assets/js/bootstrap.min.js"></script>
    <!-- Modernizr -->
    <script src="assets/js/modernizr.min.js"></script>
    <!-- Polyfill to remove click delays on browsers with touch UIs -->
    <script src="assets/js/fastclick.js"></script>
    <!-- Create a scrollbar on somethings div-->
    <script src="assets/js/jquery.slimscroll.js"></script>
    <!-- effects click google material design -->
    <script src="assets/js/waves.js"></script>
    <!-- nice scrollbars with a very similar ios/mobile style -->
    <script src="assets/js/jquery.nicescroll.js"></script>
    <script src="assets/js/jquery.scrollTo.min.js"></script>
    <!-- JS for funcions all system -->
    <script src="assets/js/app.js"></script>
    <script src="assets/js/select2.min.js"></script>
    <script src="assets/js/kendo.all.min.js"></script>
</body>

</html>
