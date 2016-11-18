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

    $scope.opened1=false;

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
      }
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
      // $scope.tabActive = data;
    };

    function iconActive() {
      var arr = $location.$$path.split('/');
      var n = arr.length-1;
      if(arr[n]== 'company'){
        $state.go('root.company.about');
        $scope.state='.about'
      }else {
        $scope.state = "."+arr[n];
      }
    }

    $rootScope.$on('$stateChangeSuccess',
      function(event, toState, toParams, fromState, fromParams){
        $scope.tabActive = $state.current.name
      })

    $scope.MouseOut = function () {
      $scope.opened1=false
    };
    $scope.MouseOver = function () {
      $scope.opened1=true
    }

  }]);
