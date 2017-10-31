/**
 * @author Thaer Aldwaik <t_dwaik@hotmail.com>
 */

app.controller('homeController', ['$scope', 'alerts', 'whatCarService', function($scope, alerts, whatCarService) {

    $scope.answers = [];
    $scope.question = null;
    $scope.result = null;
    $scope.checkboxModel = {};
    $scope.loading = true;

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
                $scope.result = response.data;
                $scope.loading = false;
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
        $scope.getQuestion();
    };

    $scope.tryAgain = function() {
        $scope.answers = [];
        $scope.question = null;
        $scope.result = null;
        $scope.checkboxModel = {};
        $scope.loading = true;

        $scope.init();
    };

    $scope.isHelpful = {
        "show": true,
        "loading": false,
        "send": function (isHelpful) {
            $scope.isHelpful.loading = true;
            // TODO send feedback
        }
    };

}]);
