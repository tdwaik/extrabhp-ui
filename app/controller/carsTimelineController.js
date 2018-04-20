/**
 * @author Thaer Aldwaik <t_dwaik@hotmail.com>
 */
app.controller('carsTimelineController', ['$scope', 'carsTimelineService', function($scope, carsTimelineService) {

    $scope.loading = true;
    $scope.timelineDate = null;

    $scope.isTimelineDate = function(date) {
        if($scope.timelineDate === null) {
            $scope.timelineDate = date;
        }else if($scope.timelineDate !== date) {
            $scope.timelineDate = date;
            return true;
        }else return false;
    };

    $scope.init = function() {
        carsTimelineService.getTimeline().then(function(response) {
            $scope.timeline = response.data;
            $scope.loading = false;
        }, function (response) {
            //alerts.oops();
        });
    };

    // $scope.shareFB = function (car) {
    //
    //     var ogUrl = 'http://extrabhp.com/car-timeline#' + car.code;
    //     if($('#og-url').attr('content')) {
    //         $('#og-url').attr('content', ogUrl);
    //     }else {
    //         $('head').append('<meta id="og-url" property="og:url" content="' + ogUrl + '" />');
    //     }
    //
    //     if($('#og-title').attr('content')) {
    //         $('#og-title').attr('content', car.title);
    //     }else {
    //         $('head').append('<meta id="og-title" property="og:title" content="' + car.title + '" />');
    //     }
    //
    //     if($('#og-description').attr('content')) {
    //         $('#og-description').attr('content', car.description);
    //     }else {
    //         $('head').append('<meta id="og-description" property="og:description" content="' + car.description + '" />');
    //     }
    //
    //     if($('#og-image').attr('content')) {
    //         $('#og-image').attr('content', car.img);
    //     }else {
    //         $('head').append('<meta id="og-image" property="og:image" content="' + car.img + '" />');
    //     }
    // }

}]);