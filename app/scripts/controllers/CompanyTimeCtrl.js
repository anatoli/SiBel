'use strict';
angular.module('siBelApp')
  .controller('CompanyTimeCtrl', ['$scope', '$uibModal', '$state', '$translate', '$rootScope', function ($scope, $uibModal, $state, $translate, $rootScope) {

    $rootScope.$on('$translateChangeSuccess', function () {
      $translate('SecondPage.Time.Title_1').then(function (translation) {
        $scope.SecondPage_Time_Title_1 = translation;
      });
      $translate('SecondPage.Time.Title_2').then(function (translation) {
        $scope.SecondPage_Time_Title_2 = translation;
      });
      $translate('SecondPage.Time.Text_1').then(function (translation) {
        $scope.SecondPage_Time_Text_1 = translation;
      });
      $translate('SecondPage.Time.Text_2').then(function (translation) {
        $scope.SecondPage_Time_Text_2 = translation;
      });
      $translate('SecondPage.Time.Head_li_1').then(function (translation) {
        $scope.SecondPage_Time_Head_li_1 = translation;
      });
      $translate('SecondPage.Time.Head_li_2').then(function (translation) {
        $scope.SecondPage_Time_Head_li_2 = translation;
      });
      $translate('SecondPage.Time.Head_li_3').then(function (translation) {
        $scope.SecondPage_Time_Head_li_3 = translation;
      });
      $translate('SecondPage.Time.Head_li_4').then(function (translation) {
        $scope.SecondPage_Time_Head_li_4 = translation;
      });
      $translate('SecondPage.Time.li_1').then(function (translation) {
        $scope.SecondPage_Time_li_1 = translation;
      });
      $translate('SecondPage.Time.li_2').then(function (translation) {
        $scope.SecondPage_Time_li_2 = translation;
      });
      $translate('SecondPage.Time.li_3').then(function (translation) {
        $scope.SecondPage_Time_li_3 = translation;
      });
      $translate('SecondPage.Time.li_4').then(function (translation) {
        $scope.SecondPage_Time_li_4 = translation;
      });
      $translate('SecondPage.Time.Descriptions_Text').then(function (translation) {
        $scope.SecondPage_Time_Descriptions_Text = translation;
      });
      $translate('SecondPage.Time.Btn').then(function (translation) {
        $scope.SecondPage_Time_Btn = translation;
      });



    });
    $translate.use($translate.proposedLanguage()).then(function () {});

  }]);
