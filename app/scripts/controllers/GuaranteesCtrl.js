/**
 * Created by Anatoliy Arinovich on 18.11.2016.
 */
'use strict';
angular.module('siBelApp')
  .controller('GuaranteesCtrl',[ '$scope', '$rootScope', '$translate', '$uibModal', function ($scope, $rootScope, $translate, $uibModal) {
    $rootScope.$on('$translateChangeSuccess', function () {
      // $translate('Error.Title_1').then(function (translation) {
      //   $scope.Error_Title_1 = translation;
      // });

    });
    $translate.use($translate.proposedLanguage()).then(function () {});

    $scope.state = 'all';

    $scope.Filter = function (data) {
      if( $scope.state === data){
        $scope.state = 'all';
      }else{
        $scope.state = data;
      }
    };

    $scope.DetailsOpen = function (data) {
      $scope.first= false;
      $scope.second= false;
      $scope.third = false;
      $scope.fourth = false;
      $scope.fifth = false;
      $scope.sixth = false;
      $scope.seventh = false;
      $scope.eighth = false;
      $scope.ninth = false;
      if(data==='first'){
        $scope.first= !$scope.first;
      }else if(data==='second'){
        $scope.second= !$scope.second;
      }else if(data==='third') {
        $scope.third = !$scope.third;
      }else if(data==='fourth') {
        $scope.fourth = !$scope.fourth;
      }else if(data==='fifth') {
        $scope.fifth = !$scope.fifth;
      }else if(data==='sixth') {
        $scope.sixth = !$scope.sixth;
      }else if(data==='seventh') {
        $scope.seventh = !$scope.seventh;
      }else if(data==='eighth') {
        $scope.eighth = !$scope.eighth;
      }else if(data==='ninth') {
        $scope.ninth = !$scope.ninth;
      }
    };
    $scope.Email = function (data) {
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
              lang: $translate.proposedLanguage()
            };
          }
        },
        controller: 'EmailCtrl'
      });
    };


  }]);
