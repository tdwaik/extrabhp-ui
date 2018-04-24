/**
 * @author Thaer Aldwaik <t_dwaik@hotmail.com>
 */

app.controller('mainController', ['$rootScope', '$scope', '$location', '$anchorScroll', 'feedbackService', function($rootScope, $scope, $location, $anchorScroll, feedbackService) {

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
        var id = $location.hash();
        $location.hash(to);
        $anchorScroll();
        $location.hash(id);
    };

    $scope.contactUs = {
        submit: function() {
            grecaptcha.execute();
        }
    };

    $scope.feedback = {
        email: null,
        content: null,
        loading: false,
        submit: function () {
            $scope.feedback.loading = true;
            feedbackService.submitFeedback($scope.feedback.email, $scope.feedback.content).then(
                function (response) {
                    if(response.code === 201) {
                        $scope.feedback.loading = false;
                    }
                },
                function () {

                }
            );
        }
    }

}]);