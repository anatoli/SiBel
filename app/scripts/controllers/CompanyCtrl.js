"use strict";
/**
 * Created by Anatoli on 19.09.2016.
 */
/**
 * Created by Anatoli on 16.09.2016.
 */
angular.module('siBelApp')
  .controller('CompanyCtrl', ['$scope', '$uibModal', '$state', '$translate', '$rootScope',
    function ($scope, $uibModal, $state, $translate, $rootScope) {

    $scope.Go = function (data) {
      $state.go('root.company'+data);
    }
    $scope.$watch($state, function (nv,ov) {
    })



  }]);
