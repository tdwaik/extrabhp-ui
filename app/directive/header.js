/**
 * @author Thaer Aldwaik <t_dwaik@hotmail.com>
 */

app.directive('pageHeader', function () {

	var controller = ['$scope', function($scope) {
		//
	}];

	return {
		restrict: 'E',
		templateUrl: '/assets/directive/header.html',
		controller: controller
	};
});

