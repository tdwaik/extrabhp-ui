// app.controller('aboutController', [ '$scope', '$timeout', 'feedbackService', function ($scope, $timeout, feedbackService) {

//     $scope.contact = {
//         email: null,
//         content: null,
//         loading: false,
//         showThankYou: false,
//         submitFailure: false,
//         submit: function () {
//             $scope.contact.loading = true;
//             $scope.contact.showThankYou = false;
//             feedbackService.submitFeedback($scope.contact.email, $scope.contact.content).then(
//                 function (response) {
//                     if(response.status === 201) {
//                         $scope.contact.submitSuccess();
//                     }else {
//                         $scope.contact.submitFaild();
//                     }
//                 },function() {
//                     $scope.contact.submitFaild();
//                 }
//             );
//         },
//         submitSuccess: function() {
//             $scope.contact.loading = false;
//             $scope.contact.showThankYou = true;
//             $scope.contact.submitFailure = false;

//             // hide modal after 1 sec
//             $timeout(function() {
//                 $scope.contact.resetForm();
//             }, 1000);
//         },
//         submitFaild: function() {
//             $scope.contact.loading = false;
//             $scope.contact.submitFailure = true;
//         },
//         resetForm: function() {
//             $scope.contact.email = null;
//             $scope.contact.content = null;
//             $scope.contact.loading = false;
//             $scope.contact.submitFailure = false;
//         }
//     }

// }]);