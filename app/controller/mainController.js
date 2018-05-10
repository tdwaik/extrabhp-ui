/**
 * @author Thaer Aldwaik <t_dwaik@hotmail.com>
 */

app.controller('mainController', [
    '$rootScope',
    '$scope',
    '$location',
    '$anchorScroll',
    'feedbackService',
    '$timeout',
    function($rootScope, $scope, $location, $anchorScroll, feedbackService, $timeout) {

    $rootScope.alerts = [];

    $rootScope.pushAlert = function(type, message) {
        $rootScope.alerts.push({type: type, message: message});
    };

    $rootScope.closeAlert = function(index) {
        $rootScope.alerts.slice(1, index);
    };

    $rootScope.$on("$locationChangeStart", function() {
        // $(window).off('.affix');
        // $('#mainNav').removeData('bs.affix').removeClass('affix affix-top affix-bottom');
        //
        // $('#mainNav').affix({
        //     offset: {
        //         top: ($location.path() === '/')? 50 : -1
        //     }
        // });
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
        showThankYou: false,
        submitFailure: false, 
        submit: function () {
            $scope.feedback.loading = true;
            feedbackService.submitFeedback($scope.feedback.email, $scope.feedback.content).then(
                function (response) {
                    if(response.status === 201) {
                        $scope.feedback.submitSuccess();
                    }else {
                        $scope.feedback.submitFaild();
                    }
                },function() {
                    $scope.feedback.submitFaild();
                }
            );
        },
        submitSuccess: function() {
            $scope.feedback.loading = false;
            $scope.feedback.showThankYou = true;
            $scope.feedback.submitFailure = false;

            // hide modal after 1 sec
            $timeout(function() { $('#feedback').modal('hide'); }, 1000);

            // reset form after 4 sec
            $timeout(function() { $scope.feedback.resetForm(); }, 2500);
        },
        submitFaild: function() {
            $scope.feedback.loading = false;
            $scope.feedback.submitFailure = true;
        },
        resetForm: function() {
            $scope.feedback.email = null;
            $scope.feedback.content = null;
            $scope.feedback.loading = false;
            $scope.feedback.showThankYou = false;
            $scope.feedback.submitFailure = false;
        }
    }

}]);