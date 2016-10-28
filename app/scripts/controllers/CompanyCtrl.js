"use strict";
/**
 * Created by Anatoli on 19.09.2016.
 */
/**
 * Created by Anatoli on 16.09.2016.
 */
angular.module('siBelApp')
  .controller('CompanyCtrl', ['$scope', '$uibModal', '$state', '$translate', '$rootScope', '$location',
    function ($scope, $uibModal, $state, $translate, $rootScope, $location) {

      var arr = $location.$$path.split('/');
      var n = arr.length-1;
      $scope.state = "."+arr[n];
      console.log($scope.state);

    $scope.Go = function (data) {
      $state.go('root.company'+data);
      $scope.state = data;
    }



  }]);
