/**
 * Created by Anatoliy Arinovich on 18.11.2016.
 */
'use strict';
angular.module('siBelApp')
  .controller('BenefitsCtrl',[ '$scope', '$rootScope', '$translate', '$location', '$state', '$uibModal',
    function ($scope, $rootScope, $translate, $location, $state, $uibModal) {
    $rootScope.$on('$translateChangeSuccess', function () {

      /// slider ///////
      $translate('SLIDER.BTN_2').then(function (translation) {
        $scope.SLIDER_BTN_2 = translation;
      });
      $translate('Benefits.Slider.Title').then(function (translation) {
        $scope.Benefits_Slider_Title = translation;
      });
      $translate('Benefits.Slider.Description').then(function (translation) {
        $scope.Benefits_Slider_Description = translation;
      });

      ///////// icons /////////
      $translate('Benefits.Icon.Title').then(function (translation) {
        $scope.Benefits_Icon_Title = translation;
      });
      $translate('Benefits.Icon.icon_1_title').then(function (translation) {
        $scope.Benefits_Icon_icon_1_title = translation;
      });
      $translate('Benefits.Icon.icon_1_description').then(function (translation) {
        $scope.Benefits_Icon_icon_1_description = translation;
      });
      $translate('Benefits.Icon.icon_1_btn').then(function (translation) {
        $scope.Benefits_Icon_icon_1_btn = translation;
      });
      $translate('Benefits.Icon.icon_2_title').then(function (translation) {
        $scope.Benefits_Icon_icon_2_title = translation;
      });
      $translate('Benefits.Icon.icon_2_description').then(function (translation) {
        $scope.Benefits_Icon_icon_2_description = translation;
      });
      $translate('Benefits.Icon.icon_2_btn').then(function (translation) {
        $scope.Benefits_Icon_icon_2_btn = translation;
      });
      $translate('Benefits.Icon.icon_3_title').then(function (translation) {
        $scope.Benefits_Icon_icon_3_title = translation;
      });
      $translate('Benefits.Icon.icon_3_description').then(function (translation) {
        $scope.Benefits_Icon_icon_3_description = translation;
      });
      $translate('Benefits.Icon.icon_3_btn').then(function (translation) {
        $scope.Benefits_Icon_icon_3_btn = translation;
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
      $state.go('root.benefits'+data);
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


    $scope.openModal = function (data) {
      $uibModal.open({
        backdropClass: 'backdrop',
        backdrop: 'static',
        animation: false,
        size: 'dialog',
        templateUrl: 'views/modals/certificate.html',
        resolve: {
          dataModal: function () {
            return {
              data: data,
              lang: $translate.proposedLanguage()
            };
          }
        },
        controller: function ($scope, $uibModalInstance, dataModal) {
           if(dataModal.lang === 'by'|| dataModal.lang ==='ru'){
             $scope.name_src = 'images/certificate_ru.png';
           }else{
             $scope.name_src = 'images/certificate_en.png';
           }
          $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };
        }
      });
    };
  }]);
