<?php
    $tags = get_meta_tags('index_novo.php');
?>

<!DOCTYPE html>
<html>



        <!-- 
          GRIDS

          .col-xl    extra large
          .col-lg    large
          .col-md    medium
          .col-sm    small
          .col-xs    extra small

          Extra small (xs) – below 576px
          Small (sm) – between 576px and 768px
          Medium (md) – between 768px and 992px
          Large (lg) – between 992px and 1200px
          Extra Large (xl) – over 1200px

 
        FLEX

        .flex-items-xs-left
        .flex-items-xs-center
        .flex-items-xs-right
        .flex-items-xs-around
        .flex-items-xs-between
        
        .flex-items-xs-middle
        .flex-items-xs-bottom
        .flex-items-xs-top

        .flex-xs-middle
        .flex-xs-bottom
        .flex-xs-top


        .flex-xs-first – Displayed first.
        .flex-xs-last – Displayed last.
        .flex-xs-unordered – Displayed between first and last.


        TEXTO

        .text-xs-left         Left aligned text on all viewport sizes.
        .text-xs-center       Center aligned text on all viewport sizes.
        .text-xs-right        Right aligned text on all viewport sizes.

        .text-sm-left         Left aligned text on viewports sized SM (small) or wider.
        .text-md-left         Left aligned text on viewports sized MD (medium) or wider.
        .text-xl-left         Left aligned text on viewports sized XL (extra-large) or wider.

        .text-lowercase       Lowercased text.
        .text-uppercase       Uppercased text.
        .text-capitalize      CapiTaliZed text.

        .font-weight-bold     Bold text.
        .font-weight-normal   Normal weight text.
        .font-italic          Italic text.

        .text-justify         justificado
        .text-nowrap          sem wrap

        ESPAÇAMENTO

        .no-pad        sem padding , aplicando na row todos os filhos col não terão padding
                        aplicando em col somente este ficara sem padding

        -->


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
</body>

</html>
