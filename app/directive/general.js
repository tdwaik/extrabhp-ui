// /**
//  * @author Thaer Aldwaik <t_dwaik@hotmail.com>
//  */
//
// app.service('generalModal', function () {
//
//     var controller = ['$rootScope', 'UIService', function($rootScope, UIService) {
//         $rootScope.generalModalLoad = function(modalFileName) {
//             UIService.getModal(modalFileName).then(function(response) {
//                 $rootScope.generalModalContent = response;
//             });
//         }
//     }];
//
//     app.service('generalModal', ['UI', function(UI) {
//         this.getModal = function(modalFileName) {
//             return UI.call('get', '/assets/' + modalFileName);
//         };
//     }]);