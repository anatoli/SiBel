/**
 * Created by Anatoli on 23.09.2016.
 */
/**
 * Created by Anatoli on 16.09.2016.
 */
angular.module('siBelApp')
  .controller('EmailCtrl',[ '$scope', '$uibModalInstance', 'dataModal', function ($scope, $uibModalInstance, dataModal) {

    console.log(dataModal);
    if(dataModal.data){
      $scope.mod = dataModal.data
    }

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

  }]);
