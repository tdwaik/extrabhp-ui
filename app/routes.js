/**
 * @author Thaer Aldwaik <t_dwaik@hotmail.com>
 */

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    
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
        .when('/best-car-for-u', {
            templateUrl: '/assets/view/whatCar.html',
            controller: 'whatCarController'
        })
        // .when('/about', {
        //     templateUrl: '/assets/view/aboutView.html',
        //     controller: 'aboutController'
        // })
        .when('/404', {
            templateUrl: '/assets/view/404.html'
        })
        .otherwise({
            templateUrl: '/assets/view/404.html'
        });

}]);


