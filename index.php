<?php $config = parse_ini_file('config.ini'); ?>

<?php if(strpos($_SERVER['HTTP_USER_AGENT'], 'Chrome')) { ?>
<!-------------------------------------------------------------------------------
*   ______ ___  ___ __________ ______       ____       ____   ___   ___ ____    *
*  |  ___| \  \/  /|___   ___||   __  \    /    \     |  __ \|  |  |  ||  __ \  *
*  |  |__   \    /    |  |    |  |__| |   /  /\  \    | /_/ /|  |__|  || /_/ /  *
*  |  ___|  /    \    |  |    |      /   /  /__\  \   |  __ \|   __   ||   _/   *
*  |  |__  /  /\  \   |  |    |  |\  \  /   ____   \  | /_/ /|  |  |  ||  |     *
*  |_____|/__/  \__\  |__|    |__| \__\/__/      \__\ |____/ |__|  |__||__|     *
*                                                                               *
-------------------------------------------------------------------------------->
<?php } ?>
<?php /* 

   ______ ___  ___ __________ ______       ____           _____     ___    ___ ____             *
  |  ___| \  \/  /|___   ___||   __  \    /    \         /  __  \  /  /   /  //  __ \           *
  |  |__   \    /    |  |    |  |__| |   /  /\  \       /  /_/  / /  /___/  //  /_/ /           *
  |  ___|  /    \    |  |    |  |   /   /  /__\  \     /  __  /  /  /___/  //  __ /             *
  |  |__  /  /\  \   |  |    |  |\  \  /  /____\  \   /  /_/  \ /  /   /  //  /                 *
  |_____|/__/  \__\  |__|    |__| \__\/__/      \__\ /________//__/   /__//__/                  *
   ______ ___  ___ __________ ______       ____       ____   ___   ___ ____                     *
  |  ___| \  \/  /|___   ___||   __  \    /    \     |  __ \|  |  |  ||  __ \                   *
  |  |__   \    /    |  |    |  |__| |   /  /\  \    | /_/ /|  |__|  || /_/ /                   *
  |  ___|  /    \    |  |    |      /   /  /__\  \   |  __ \|   __   ||   _/                    *
  |  |__  /  /\  \   |  |    |  |\  \  /   ____   \  | /_/ /|  |  |  ||  |                      *
  |_____|/__/  \__\  |__|    |__| \__\/__/      \__\ |____/ |__|  |__||__|                      *

  *       _______ ___  ___   __________ ______    ____           _____     ___    ___ _____        *
*      /  ____/ \  \/  /  /___   ___//  ___ \  /    \         /  __  \  /  /   /  //  __ \       *
*     /  /___    \    /      /  /   /  /__/ / /  /\  \       /  /_/  / /  /___/  //  /_/ /       *
*    /  ____/    /    \     /  /   /  /  __/ /  /__\  \     /  __  /  /  /___/  //  __ /         *
*   /  /___     /  /\  \   /  /   /  /  \   /  ______  \   /  /_/  \ /  /   /  //  /             *
*  /______/    /__/  \__\ /__/   /__/ \__\ /__/      \__\ /________//__/   /__//__/              *
*                                                                                                *

*/ ?>
<!-----------------------------------------------------------------------
*    Engineered & Designed by Thaer Aldwaik, tdwaik@hotmail.com        *
------------------------------------------------------------------------>
<!DOCTYPE html>
<html lang="en" ng-app="app">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Extra BHP, Cars Enthusiasts Community" />
    <meta name="author" content="Thaer Aldwaik" />
    <meta name="fb:app_id" content="1959489680985703" />
    <meta name="theme-color" content="#000" />

    <base href="/" />

    <title>Extra BHP</title>

    <?php if($config['env'] == 'prod') { ?>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111472015-1"></script>
    <script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-111472015-1'); </script>
    <?php } ?>

    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

    <!-- Custom Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet" />

    <!-- Theme CSS -->
    <link type="text/css" href="/dist/css/main.min.css" rel="stylesheet" />

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script app="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script app="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- <script src="https://www.google.com/recaptcha/api.js" async defer></script> -->
</head>

<body id="page-top" ng-controller="mainController">

    <page-header></page-header>

    <div class="contaier-fluid main-view-container">
        <ng-view></ng-view>
    </div>

    <!-- Contact Modal -->
    <div id="generalModalContent"></div>

    <page-footer></page-footer>

    <script src="https://cdn.jsdelivr.net/scrollreveal.js/3.3.1/scrollreveal.min.js"></script>
    <div id="fb-root"></div>
    <script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

    <!-- Bootstrap -->
    <!-- <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script> -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    <!-- libs -->
    <script src="/dist/js/lib/underscore/underscore-min.js"></script>
    <!--<script src="https://www.google.com/recaptcha/api.js" async defer></script>-->

    <!-- AngularJs -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-cookies.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-sanitize.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-messages.min.js"></script>
    <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-scroll/1.0.2/angular-scroll.min.js"></script>-->

    <!-- App -->
    <script src="/dist/js/extrabhp.min.js"></script>

    <!--<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>-->
    <!--<script>-->
        <!--(adsbygoogle = window.adsbygoogle || []).push({-->
            <!--google_ad_client: "ca-pub-5129031815821490",-->
            <!--enable_page_level_ads: true-->
        <!--});-->
    <!--</script>-->

</body>

</html>
