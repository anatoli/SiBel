/**
 * Created by Anatoliy Arinovich on 30.11.2016.
 */
/**
 * Created by Anatoliy Arinovich on 18.11.2016.
 */
'use strict';
angular.module('siBelApp')
  .controller('ImplementationCtrl',[
    '$scope',
    '$uibModal',
    '$state',
    '$translate',
    '$rootScope',
    '$location',
    function ($scope, $uibModal, $state, $translate, $rootScope) {
      $rootScope.$on('$translateChangeSuccess', function () {
        $translate('Error.Title_1').then(function (translation) {
          $scope.Error_Title_1 = translation;
        });
        $translate('Error.Title_2').then(function (translation) {
          $scope.Error_Title_2 = translation;
        });
        $translate('Error.Title_Color').then(function (translation) {
          $scope.Error_Title_Color = translation;
        });
        $translate('Error.Descriptions_1').then(function (translation) {
          $scope.Error_Descriptions_1 = translation;
        });
        $translate('Error.Descriptions_2').then(function (translation) {
          $scope.Error_Descriptions_2 = translation;
        });
        $translate('Error.Btn').then(function (translation) {
          $scope.Error_Btn = translation;
        });
        $translate('Error.Address_1').then(function (translation) {
          $scope.Error_Address_1 = translation;
        });
        $translate('Error.Address_2').then(function (translation) {
          $scope.Error_Address_2 = translation;
        });
      });
      $translate.use($translate.proposedLanguage()).then(function () {});



      // function iconActive() {
      //   var arr = $location.$$path.split('/');
      //   var n = arr.length-1;
      //   // if(arr[n]=== 'it'){
      //   //   $state.go('root.service.it.audit');
      //   //   $scope.state='.audit';
      //   // }else {
      //   $scope.state = "."+arr[n];
      //   // }
      // }

      $scope.state = 'all';

      // iconActive();

      // $rootScope.$on('$stateChangeSuccess',
      //   function(){
      //     iconActive();
      //   });

      $scope.Go = function (data) {
        $state.go('root.service'+data);

      };

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
        }
      };

    }]);
