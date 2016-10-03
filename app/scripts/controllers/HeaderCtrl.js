"use strict";
/**
 * Created by Anatoli on 16.09.2016.
 */
angular.module('siBelApp')
  .controller('HeaderCtrl',['$scope', '$state', function ($scope, $state) {
    $scope.by=false;
    $scope.ru=true;
    $scope.en=false;
    $scope.tabActive = $state.current.name;


    $scope.Start = function(data){
      if(data === 'by'){
        $scope.by=true;
        $scope.ru=false;
        $scope.en=false;
      }else
      if(data === 'ru'){
        $scope.by=false;
        $scope.ru=true;
        $scope.en=false;
      }else
      if(data === 'en'){
        $scope.by=false;
        $scope.ru=false;
        $scope.en=true;
      }
    };


    $scope.stateGo = function (data) {
      if(data !=='#/'){
        $state.go(data);
      }
      $scope.tabActive = data;
    };

  }]);
