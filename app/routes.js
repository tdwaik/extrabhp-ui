/**
 * @author Thaer Aldwaik <t_dwaik@hotmail.com>
 */

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/assets/view/homeView.html',
            controller: 'homeController'
        })
        .when('/petrolhead-101', {
            templateUrl: '/assets/view/petrolhead101View.html',
            controller: 'petrolhead101Controller'
        })
        .when('/cars-timeline', {
            templateUrl: '/assets/view/carsTimelineView.html',
            controller: 'carsTimelineController'
        })
        .when('/about', {
            templateUrl: '/assets/view/aboutView.html',
            controller: 'aboutController'
        })
        .when('/404', {
            templateUrl: '/assets/view/404.html'
        })
        .otherwise({
            templateUrl: '/assets/view/404.html'
        });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode({
        enabled: true
    });

}]);


