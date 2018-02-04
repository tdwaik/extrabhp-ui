/**
 * @author Thaer Aldwaik <t_dwaik@hotmail.com>
 */

app.controller('mainController', ['$rootScope', '$scope', '$location', '$anchorScroll', function($rootScope, $scope, $location, $anchorScroll) {

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

    $rootScope.scrollTo = function (to) {
        $location.hash(to);
        $anchorScroll();
    };

    $scope.contactUs = {
        submit: function() {
            grecaptcha.execute();
        }
    }

}]);