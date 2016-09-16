'use strict';

angular.module('siBelApp')
  .controller('HomeCtrl',[ '$scope', function ($scope) {

    $scope.by=false;
    $scope.ru=false;
    $scope.en=false;


    $scope.Active = function(data){
      console.log(data);
    }
  }]);
