<?php $config = parse_ini_file('config.ini'); ?>
<!-----------------------------------------------------------------------------------------------
<?php /*       _______ ___  ___   __________ ______    ____           _____     ___    ___ _____        *
      /  ____/ \  \/  /  /___   ___//  ___ \  /    \         /  __  \  /  /   /  //  __  \      *
     /  /___    \    /      /  /   /  /__/ / /  /\  \       /  /_/  / /  /___/  //  /_/  /      *
    /  ____/    /    \     /  /   /  /  __/ /  /__\  \     /  __  /  /  /___/  //  __  /        *
   /  /___     /  /\  \   /  /   /  /  \   /  ______  \   /  /_/  \ /  /   /  //  /_/  \        *
  /______/    /__/  \__\ /__/   /__/ \__\ /__/      \__\ /________//__/   /__//________/        *


   ______ ___  ___ __________ ______       ____           _____     ___    ___ _____            *
  |  ___| \  \/  /|___   ___||   __  \    /    \         /  __  \  /  /   /  //  __  \          *
  |  |__   \    /    |  |    |  |__| |   /  /\  \       /  /_/  / /  /___/  //  /_/  /          *
  |  ___|  /    \    |  |    |  |   /   /  /__\  \     /  __  /  /  /___/  //  __  /            *
  |  |__  /  /\  \   |  |    |  |\  \  /  /____\  \   /  /_/  \ /  /   /  //  /_/  \            *
  |_____|/__/  \__\  |__|    |__| \__\/__/      \__\ /________//__/   /__//________/            *

*/ ?>
   ______ ___  ___ __________ ______       ____       ____   ___   ___ ____                     *
  |  ___| \  \/  /|___   ___||   __  \    /    \     |  __ \|  |  |  ||  __ \                   *
  |  |__   \    /    |  |    |  |__| |   /  /\  \    | /_/ /|  |__|  || /_/ /                   *
  |  ___|  /    \    |  |    |      /   /  /__\  \   |  __ \|   __   ||  __ \                   *
  |  |__  /  /\  \   |  |    |  |\  \  /   ____   \  | /_/ /|  |  |  || /_/ /                   *
  |_____|/__/  \__\  |__|    |__| \__\/__/      \__\ |____/ |__|  |__||____/                    *
                                                                                                *
-------------------------------------------------------------------------------------------------
  Engineered & Designed by Thaer Aldwaik <t_dwaik@hotmail.com>                                  *
------------------------------------------------------------------------------------------------>

<!DOCTYPE html>
<html lang="en" ng-app="app">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Extra BHP, Cars Enthusiasts Community" />
    <meta name="author" content="Thaer Aldwaik" />
    <meta name="fb:app_id" content="1959489680985703" />

    <base href="/" />

    <title>Extra BHP</title>

    <?php if($config['env'] == 'prod') { ?>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111472015-1"></script>
    <script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-111472015-1'); </script>
    <?php } ?>

    <!-- Bootstrap Core CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Artifika|Lato|Muli|Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

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

    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
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
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

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
