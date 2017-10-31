/**
 * @author Thaer Aldwaik <t_dwaik@hotmail.com>
 */

app.controller('homeController', ['$scope', '$timeout', 'alerts', 'whatCarService', function($scope, $timeout, alerts, whatCarService) {

    $scope.answers = [];
    $scope.question = null;
    $scope.result = null;
    $scope.checkboxModel = {};
    $scope.loading = true;
    $scope.showThanks = false;

    var whatCarLogId = null;

    $scope.getQuestion = function () {
        $scope.loading = true;
        whatCarService.getQuestion($scope.answers).then(function(response) {
            if(response.status === 200) {
                $scope.question = response.data;
                if($scope.question.type !== undefined && $scope.question.type === 'multiple_choice') {
                    $scope.question.answers.forEach(function (answer) {
                        this[answer.value] = false;
                    }, $scope.checkboxModel);
                }
                $scope.loading = false;
            }else if(response.status === 201) {
                $scope.result = response.data.result;
                $scope.loading = false;
                whatCarLogId = response.data.whatCarLogId;
            }else {
                alerts.oops();
            }
        }, function(response) {
            alerts.oops();
        });
    };

    $scope.submitAnswer = function (questionName, answer) {
        $scope.answers[questionName] = answer;
        $scope.getQuestion();
    };

    $scope.submitCheckboxModel = function (questionName) {
        $scope.answers[questionName] = $scope.getCheckedBoxesValue();
        $scope.checkboxModel = {};
        $scope.getQuestion();
    };

    $scope.getCheckedBoxesValue = function() {
        console.log($scope.checkboxModel);
        var CheckedBoxes = [];
        angular.forEach($scope.checkboxModel, function (value, key) {
            if(value === true) {
                this.push(key);
            }
        }, CheckedBoxes);

        return CheckedBoxes.join(',');
    };

    $scope.init = function() {
        $scope.answers = [];
        $scope.question = null;
        $scope.result = null;
        $scope.checkboxModel = {};
        $scope.loading = true;

        $scope.isHelpful.show = true;
        $scope.isHelpful.loading = false;

        $scope.feedback.show = false;
        $scope.feedback.loading = false;
        $scope.feedback.value = null;

        $scope.showThanks = false;

        $scope.getQuestion();
    };

    $scope.tryAgain = function() {
        $scope.init();
    };

    $scope.isHelpful = {
        "show": true,
        "loading": false,
        "send": function (isHelpful) {
            $scope.isHelpful.loading = true;
            whatCarService.sendIsHelpful(whatCarLogId, isHelpful).then(function(response) {
                $scope.isHelpful.loading = false;
                $scope.isHelpful.show = false;
                $scope.feedback.show = true;
            }, function (response) {
                alerts.oops();
            });
        }
    };

    $scope.feedback = {
        "show": false,
        "loading": false,
        "value": null,
        "send": function () {
            $scope.feedback.loading = true;
            whatCarService.sendFeedback(whatCarLogId, $scope.feedback.value).then(function(response) {
                $scope.feedback.loading = false;
                $scope.feedback.show = false;

                $scope.showThanks = true;
                $timeout(function() {
                    $scope.showThanks = false;
                }, 1000);

            }, function (response) {
                alerts.oops();
            });
        }
    }

}]);
