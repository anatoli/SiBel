/**
 * Created by Anatoliy Arinovich on 25.10.2016.
 */
angular.module('siBelApp')
  .controller('EmailPushCtrl',[
    '$scope',
    '$uibModalInstance',
    'dataModal',
    '$rootScope',
    '$translate',
    '$http',
    'FileUploader',
    '$uibModal',
    function ($scope, $uibModalInstance, dataModal, $rootScope, $translate, $http, FileUploader, $uibModal) {
      $scope.title = dataModal.data;
      $rootScope.$on('$translateChangeSuccess', function () {
        $translate('Modal.Alert_True').then(function (translation) {
          $scope.Modal_Alert_True = translation;
        });
        $translate('Modal.Alert_Error').then(function (translation) {
          $scope.Modal_Alert_Error = translation;
        });
      });
      if (dataModal.data.response){
        $scope.alertTrue = true;
      }else{
        $scope.alertTrue = false;
      }
      $translate.use(dataModal.lang).then(function () {});
    setTimeout(function () {
      $uibModalInstance.dismiss('cancel');
    }, 2500)
    }])
