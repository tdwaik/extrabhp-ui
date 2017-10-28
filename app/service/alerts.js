app.service('alerts', ['$rootScope', '$timeout', function($rootScope, $timeout) {

    $rootScope.alerts = [];
    var alertTypes = {success: 'Success!', info: 'Info!', warning: 'Warning!', danger: 'Oh no!'};

    $rootScope.pushAlert = function(type, message) {
        $rootScope.alerts.push({type: type, message: message});
    };

    $rootScope.closeAlert = function(index) {
        $rootScope.alerts.slice(1, index);
    };

    $rootScope.$on('$routeChangeStart', function() {
        $rootScope.alerts = [];
    });

    var push = function(type, message) {
        // $rootScope.alerts.push({type: type, message: message, icn: alertTypes[type]});
        $rootScope.alerts.push({type: type, message: message, icn: ''});
    };

    this.success = function (message) {
        push('success', message);
    };

    this.info = function (message) {
        push('info', message);
    };

    this.warning = function (message) {
        push('warning', message);
    };

    this.danger = function (message) {
        push('danger', message);
    };

    this.oops = function() {
        push('danger', 'Something went wrong !!');
    };

}]);