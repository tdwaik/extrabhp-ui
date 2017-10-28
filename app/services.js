/**
 * @author Thaer Aldwaik <t_dwaik@hotmail.com>
 */

var APIEndPoint = 'http://localhost:8080';

app.service('API', ['$http', function($http) {
	return {
		call: function(method, url, data) {
			return $http({
				method: method,
				url: APIEndPoint + url,
				data: data
			});
		}
	}
}]);

app.service('whatCarService', ['API', function(API) {
    this.getQuestion = function(answers) {
        return API.call('post', '/whatCar', answers);
    };
}]);