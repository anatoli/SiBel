"use strict";
/**
 * Created by Anatoli on 16.09.2016.
 */
angular.module('siBelApp')
  .controller('HeaderCtrl',['$scope', '$rootScope', '$state', '$translate',  function ($scope, $rootScope, $state, $translate) {
    $scope.by=false;
    $scope.ru=true;
    $scope.en=false;
    $scope.tabActive = $state.current.name;
    $translate.use('ru');
    console.log($translate)

    $scope.changeLanguage = function (key) {
      if(key === 'by'){
        $scope.by=true;
        $scope.ru=false;
        $scope.en=false;
      }else
      if(key === 'ru'){
        $scope.by=false;
        $scope.ru=true;
        $scope.en=false;
      }else
      if(key === 'en'){
        $scope.by=false;
        $scope.ru=false;
        $scope.en=true;
      };
      $translate.use(key);
    };

    // $scope.changeLanguage = function (key) {
    //
    // };
    $rootScope.$on('$translateChangeSuccess', function () {
      // $translate('HOME').then(function (translation) {
      //   $scope.HOME = translation;
      // });
      // $translate('FOO').then(function (translation) {
      //   $scope.FOO = translation;
      // });
    });

    // $scope.Start = function(data){
    //
    //   $translate('TITLE').then(function (result) {
    //     $scope.fruitName = result;
    //   });
    // }


    $scope.stateGo = function (data) {
      if(data !=='#/'){
        $state.go(data);
      }
      $scope.tabActive = data;
    };

  }]);
