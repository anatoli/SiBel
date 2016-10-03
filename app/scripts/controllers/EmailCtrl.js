"use strict";
/**
 * Created by Anatoli on 23.09.2016.
 */
/**
 * Created by Anatoli on 16.09.2016.
 */
angular.module('siBelApp')
  .controller('EmailCtrl',[ '$scope', '$uibModalInstance', 'dataModal', '$rootScope','$translate', function ($scope, $uibModalInstance, dataModal, $rootScope, $translate) {

    console.log('dataModal.lang');
    console.log(dataModal.lang);
    if(dataModal.data){
      $scope.mod = dataModal.data;
    }

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    $rootScope.$on('$translateChangeSuccess', function (data) {
      $translate('Modal.Header.1').then(function (translation) {
        $scope.Modal_Header_1 = translation;
      });
      $translate('Modal.Header.2').then(function (translation) {
        $scope.Modal_Header_2 = translation;
      });
      $translate('Modal.Header.3').then(function (translation) {
        $scope.Modal_Header_3 = translation;
      });
      $translate('Modal.Title.11').then(function (translation) {
        $scope.Modal_Title_11 = translation;
      });
      $translate('Modal.Title.12').then(function (translation) {
        $scope.Modal_Title_12 = translation;
      });

      $translate('Modal.Title.21').then(function (translation) {
        $scope.Modal_Title_21 = translation;
      });
      $translate('Modal.Title.22').then(function (translation) {
        $scope.Modal_Title_22 = translation;
      });
      $translate('Modal.Title.23').then(function (translation) {
        $scope.Modal_Title_23 = translation;
      });
      $translate('Modal.Title.31').then(function (translation) {
        $scope.Modal_Title_31 = translation;
      });
      $translate('Modal.Title.32').then(function (translation) {
        $scope.Modal_Title_32 = translation;
      });

      $translate('Modal.Btn_file').then(function (translation) {
        $scope.Modal_Btn_file = translation;
      });
      $translate('Modal.Btn_push').then(function (translation) {
        $scope.Modal_Btn_push = translation;
      });
      $translate('Modal.Description_1').then(function (translation) {
        $scope.Modal_Description_1 = translation;
      });
      $translate('Modal.Description_2').then(function (translation) {
        $scope.Modal_Description_2 = translation;
      });
      $translate('Modal.Name_plh').then(function (translation) {
        $scope.Modal_Name_plh = translation;
      });
      $translate('Modal.Phone_plh').then(function (translation) {
        $scope.Modal_Phone_plh = translation;
      });
      $translate('Modal.Datetime_plh').then(function (translation) {
        $scope.Modal_Datetime_plh = translation;
      });
      $translate('Modal.Company_plh').then(function (translation) {
        $scope.Modal_Company_plh = translation;
      });
      $translate('Modal.Area_plh').then(function (translation) {
        $scope.Modal_Area_plh = translation;
      });
      $translate('Modal.Select.Title').then(function (translation) {
        $scope.Modal_Select_Title = translation;
      });
      $translate('Modal.Select.1').then(function (translation) {
        $scope.Modal_Select_1 = translation;
      });$translate('Modal.Select.2').then(function (translation) {
        $scope.Modal_Select_2 = translation;
      });
    });
    $translate.use(dataModal.lang).then(function () {});

  }]);
