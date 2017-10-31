/**
 * @author Thaer Aldwaik <t_dwaik@hotmail.com>
 */

var APIEndPoint = 'http://localhost:8080';

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

app.service('whatCarService', ['API', function(API) {
    this.getQuestion = function(answers) {
        return API.call('post', '/whatCar', answers);
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