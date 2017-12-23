/**
 * @author Thaer Aldwaik <t_dwaik@hotmail.com>
 */

var APIEndPoint = 'https://extrabhp.com:8443';
var UIEndPoint = 'https://extrabhp.com';

app.service('API', ['$http', function($http) {
	return {
		call: function(method, url, data, headers) {
			return $http({
				method: method,
				url: APIEndPoint + url,
				data: data,
                headers: headers
			});
		}
	}
}]);

app.service('UI', ['$http', function($http) {
    return {
        call: function(method, url, data, headers) {
            return $http({
                method: method,
                url: UIEndPoint + url,
                data: data,
                headers: headers
            });
        }
    }
}]);

app.service('whatCarService', ['API', function(API) {
    this.getQuestion = function(answers) {
        var headers = {'Content-Type': 'application/x-www-form-urlencoded'};
        return API.call('post', '/whatCar', answers, headers);
    };
    this.sendIsHelpful = function(whatCarLogId, isHelpful) {
    	var jsonRequest = {"whatCarLogId": whatCarLogId, "isHelpful": isHelpful};
    	var headers = {"Content-Type": "application/json"};
        return API.call('post', '/whatCar/isHelpful', JSON.stringify(jsonRequest), headers);
	};
	this.sendFeedback = function(whatCarLogId, feedback) {
        var jsonRequest = {"whatCarLogId": whatCarLogId, "feedback": feedback};
        var headers = {"Content-Type": "application/json"};
        return API.call('post', '/whatCar/feedback', JSON.stringify(jsonRequest), headers);
    };
}]);

app.service('UIService', ['UI', function(UI) {
    this.getModal = function(modalFileName) {
        return UI.call('get', '/assets/modal/' + modalFileName + '.html');
    };
}]);