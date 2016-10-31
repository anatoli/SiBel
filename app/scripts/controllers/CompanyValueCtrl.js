'use strict';
angular.module('siBelApp')
  .controller('CompanyValueCtrl', ['$scope', '$uibModal', '$state', '$translate', '$rootScope', function ($scope, $uibModal, $state, $translate, $rootScope) {

    $rootScope.$on('$translateChangeSuccess', function () {
      $translate('SecondPage.Value.Title_1').then(function (translation) {
        $scope.SecondPage_Value_Title_1 = translation;
      });
      $translate('SecondPage.Value.Title_2').then(function (translation) {
        $scope.SecondPage_Value_Title_2 = translation;
      });
      $translate('SecondPage.Value.Title_3').then(function (translation) {
        $scope.SecondPage_Value_Title_3 = translation;
      });
      $translate('SecondPage.Value.Title_4').then(function (translation) {
        $scope.SecondPage_Value_Title_4 = translation;
      });
      $translate('SecondPage.Value.Title_5').then(function (translation) {
        $scope.SecondPage_Value_Title_5 = translation;
      });
      $translate('SecondPage.Value.Title_6').then(function (translation) {
        $scope.SecondPage_Value_Title_6 = translation;
      });
      $translate('SecondPage.Value.Text_1').then(function (translation) {
        $scope.SecondPage_Value_Text_1 = translation;
      });
      $translate('SecondPage.Value.Text_2').then(function (translation) {
        $scope.SecondPage_Value_Text_2 = translation;
      });
      $translate('SecondPage.Value.Text_3').then(function (translation) {
        $scope.SecondPage_Value_Text_3 = translation;
      });
      $translate('SecondPage.Value.Text_4').then(function (translation) {
        $scope.SecondPage_Value_Text_4 = translation;
      });
      $translate('SecondPage.Value.Text_5').then(function (translation) {
        $scope.SecondPage_Value_Text_5 = translation;
      });
      $translate('SecondPage.Value.Text_6').then(function (translation) {
        $scope.SecondPage_Value_Text_6 = translation;
      });


    });
    $translate.use($translate.proposedLanguage()).then(function () {});

  }]);
