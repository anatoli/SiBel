'use strict';
angular.module('siBelApp')
  .controller('CompanyAboutCtrl', ['$scope', '$uibModal', '$state', '$translate', '$rootScope', function ($scope, $uibModal, $state, $translate, $rootScope) {

    $rootScope.$on('$translateChangeSuccess', function () {
      $translate('SecondPage.About.Title_1').then(function (translation) {
        $scope.SecondPage_About_Title_1 = translation;
      });
      $translate('SecondPage.About.Text_1_1').then(function (translation) {
        $scope.SecondPage_About_Text_1_1 = translation;
      });
      $translate('SecondPage.About.Text_1_2').then(function (translation) {
        $scope.SecondPage_About_Text_1_2 = translation;
      });
      $translate('SecondPage.About.Title_2').then(function (translation) {
        $scope.SecondPage_About_Title_2 = translation;
      });
      $translate('SecondPage.About.Text_2_1').then(function (translation) {
        $scope.SecondPage_About_Text_2_1 = translation;
      });
      $translate('SecondPage.About.Text_2_2').then(function (translation) {
        $scope.SecondPage_About_Text_2_2 = translation;
      });
      $translate('SecondPage.About.Text_2_2_1').then(function (translation) {
        $scope.SecondPage_About_Text_2_2_1 = translation;
      });
      $translate('SecondPage.About.Text_2_2_2').then(function (translation) {
        $scope.SecondPage_About_Text_2_2_2 = translation;
      })
      ;$translate('SecondPage.About.Text_2_2_3').then(function (translation) {
        $scope.SecondPage_About_Text_2_2_3 = translation;
      });
      $translate('SecondPage.About.Title_3').then(function (translation) {
        $scope.SecondPage_About_Title_3 = translation;
      });
      $translate('SecondPage.About.Text_3_1').then(function (translation) {
        $scope.SecondPage_About_Text_3_1 = translation;
      });

    });
    $translate.use($translate.proposedLanguage()).then(function () {});


  }]);
