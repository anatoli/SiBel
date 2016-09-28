'use strict';

angular.module('siBelApp')
  .controller('HomeCtrl',[ '$scope', '$uibModal', '$state', function ($scope, $uibModal, $state) {

    $scope.hpSrc = "../../images/vendors/hp_white.png";

    setTimeout(function () {
      $scope.iconFirs = true;
      $('#first-icon').addClass('flip');
    }, 2000);
    setTimeout(function () {
      $scope.iconFirs = true;
      $('#second-icon').addClass('flip');
    }, 3000);
    setTimeout(function () {
      $scope.iconFirs = true;
      $('#third-icon').addClass('flip');
    }, 4000);

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
    $scope.hpLeave=function () {
      $scope.hpSrc = "../../images/vendors/hp_white.png"
    }
    $scope.hpMove=function () {
      $scope.hpSrc = "../../images/vendors/hp.png"
    }

  }]);
