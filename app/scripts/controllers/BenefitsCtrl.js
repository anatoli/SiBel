/**
 * Created by Anatoliy Arinovich on 18.11.2016.
 */
'use strict';
angular.module('siBelApp')
  .controller('BenefitsCtrl',[ '$scope', '$rootScope', '$translate', '$location', '$state', '$uibModal',
    function ($scope, $rootScope, $translate, $location, $state, $uibModal) {
    $rootScope.$on('$translateChangeSuccess', function () {
      // $translate('Error.Title_1').then(function (translation) {
      //   $scope.Error_Title_1 = translation;
      // });

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
