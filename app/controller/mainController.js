/**
 * @author Thaer Aldwaik <t_dwaik@hotmail.com>
 */

app.controller('mainController', ['$rootScope', function($rootScope) {

    $rootScope.alerts = [];

    $rootScope.pushAlert = function(type, message) {
        $rootScope.alerts.push({type: type, message: message});
    };

    $rootScope.closeAlert = function(index) {
        $rootScope.alerts.slice(1, index);
    };

}]);