/**
 * @author Thaer Aldwaik <t_dwaik@hotmail.com>
 */

app.controller('mainController', ['$rootScope', '$location', function($rootScope, $location) {

    $rootScope.alerts = [];

    $rootScope.pushAlert = function(type, message) {
        $rootScope.alerts.push({type: type, message: message});
    };

    $rootScope.closeAlert = function(index) {
        $rootScope.alerts.slice(1, index);
    };

    $rootScope.$on("$locationChangeStart", function() {
        $(window).off('.affix');
        $('#mainNav').removeData('bs.affix').removeClass('affix affix-top affix-bottom');

        $('#mainNav').affix({
            offset: {
                top: ($location.path() === '/')? 50 : -1
            }
        });
    });

    $scope.contactUs = {
        submit: function() {
            grecaptcha.execute();
        }
    }

}]);