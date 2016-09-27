'use strict';

angular.module('siBelApp')
  .controller('HomeCtrl',[ '$scope', '$uibModal', '$state', function ($scope, $uibModal, $state) {

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
    $scope.openDetails =function () {
      window.scrollTo(0, 0);
      $state.go('root.404')
    }
  }]);
