'use strict';

angular.module('siBelApp')
  .controller('HomeCtrl',[ '$scope', '$uibModal', function ($scope, $uibModal) {

    $scope.by=false;
    $scope.ru=false;
    $scope.en=false;

    $scope.openModal = function (data) {
      $uibModal.open({
        backdropClass: 'backdrop',
        backdrop: 'static',
        animation: false,
        size: 'dialog',
        templateUrl: 'views/modals/email.html',
        resolve: {
          dataModal: function () {
            return {
              data: data,
              typeCase: null
            }
          }
        },
        controller: 'EmailCtrl'
      });
    };

    $scope.Active = function(data){
      console.log(data);
    }
  }]);
