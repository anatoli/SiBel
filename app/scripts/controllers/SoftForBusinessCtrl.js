/**
 * Created by Anatoliy Arinovich on 18.11.2016.
 */
'use strict';
angular.module('siBelApp')
  .controller('SoftForBusinessCtrl',[ '$scope', '$rootScope', '$translate', '$state','$location', '$uibModal', function ($scope, $rootScope, $translate, $state, $location, $uibModal) {
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

    function iconActive() {
      var arr = $location.$$path.split('/');
      var n = arr.length-1;
      $scope.state = "."+arr[n];
    }

    iconActive();

    $rootScope.$on('$stateChangeSuccess',
      function(){
        iconActive();
      });



    $scope.Go = function (data) {
      $state.go('root.service.business'+data);
      $scope.state = data;
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
