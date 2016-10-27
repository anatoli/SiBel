'use strict';
angular.module('siBelApp')
  .controller('CompanyTimeCtrl', ['$scope', '$uibModal', '$state', '$translate', '$rootScope', function ($scope, $uibModal, $state, $translate, $rootScope) {

    $rootScope.$on('$translateChangeSuccess', function () {
      $translate('HOME.TITLE').then(function (translation) {
        $scope.HOME_TITLE = translation;
      });

      $translate('HOME.ROW_1').then(function (translation) {
        $scope.HOME_ROW_1 = translation;
      });
      $translate('HOME.ROW_2').then(function (translation) {
        $scope.HOME_ROW_2 = translation;
      });$translate('HOME.ROW_3').then(function (translation) {
        $scope.HOME_ROW_3 = translation;
      });
      $translate('HOME.ROW_1_TITLE').then(function (translation) {
        $scope.HOME_ROW_1_TITLE = translation;
      });
      $translate('HOME.ROW_2_TITLE').then(function (translation) {
        $scope.HOME_ROW_2_TITLE = translation;
      });
      $translate('HOME.ROW_3_TITLE').then(function (translation) {
        $scope.HOME_ROW_3_TITLE = translation;
      });
      $translate('HOME.ROW_1_BTN').then(function (translation) {
        $scope.HOME_ROW_1_BTN = translation;
      });
      $translate('HOME.ROW_2_BTN').then(function (translation) {
        $scope.HOME_ROW_2_BTN = translation;
      });
      $translate('HOME.ROW_3_BTN').then(function (translation) {
        $scope.HOME_ROW_3_BTN = translation;
      });
      $translate('SLIDER.BTN_1').then(function (translation) {
        $scope.SLIDER_BTN_1 = translation;
      });
      $translate('SLIDER.BTN_2').then(function (translation) {
        $scope.SLIDER_BTN_2 = translation;
      });

      $translate('SLIDER.Slide_1_Title_1').then(function (translation) {
        $scope.SLIDER_Slide_1_Title_1 = translation;
      });
      $translate('SLIDER.Slide_1_Title_2').then(function (translation) {
        $scope.SLIDER_Slide_1_Title_2 = translation;
      });
      $translate('SLIDER.Slide_1_li.1').then(function (translation) {
        $scope.SLIDER_Slide_1_li_1 = translation;
      });
      // $translate('SLIDER.Slide_1_li.2').then(function (translation) {
      //   $scope.SLIDER_Slide_1_li_2 = translation;
      // });
      $translate('SLIDER.Slide_1_li.31').then(function (translation) {
        $scope.SLIDER_Slide_1_li_3_1 = translation;
      });
      $translate('SLIDER.Slide_1_li.32').then(function (translation) {
        $scope.SLIDER_Slide_1_li_3_2 = translation;
      });
      $translate('SLIDER.Slide_1_li.4').then(function (translation) {
        $scope.SLIDER_Slide_1_li_4 = translation;
      });

      $translate('SLIDER.Slide_2_Title_1').then(function (translation) {
        $scope.SLIDER_Slide_2_Title_1 = translation;
      });
      $translate('SLIDER.Slide_2_Title_2').then(function (translation) {
        $scope.SLIDER_Slide_2_Title_2 = translation;
      });
      $translate('SLIDER.Slide_2_li.1').then(function (translation) {
        $scope.SLIDER_Slide_2_li_1 = translation;
      });
      $translate('SLIDER.Slide_2_li.2').then(function (translation) {
        $scope.SLIDER_Slide_2_li_2 = translation;
      });
      $translate('SLIDER.Slide_2_li.3').then(function (translation) {
        $scope.SLIDER_Slide_2_li_3 = translation;
      });

      $translate('SLIDER.Slide_3_Title_1').then(function (translation) {
        $scope.SLIDER_Slide_3_Title_1 = translation;
      });
      $translate('SLIDER.Slide_3_li.1').then(function (translation) {
        $scope.SLIDER_Slide_3_li_1 = translation;
      });
      $translate('SLIDER.Slide_3_li.2').then(function (translation) {
        $scope.SLIDER_Slide_3_li_2 = translation;
      });
      $translate('SLIDER.Slide_3_li.3').then(function (translation) {
        $scope.SLIDER_Slide_3_li_3 = translation;
      });
      $translate('SLIDER.Slide_3_li.4').then(function (translation) {
        $scope.SLIDER_Slide_3_li_4 = translation;
      });

      $translate('Company.TITLE').then(function (translation) {
        $scope.Company_Title = translation;
      });
      $translate('Company.Name').then(function (translation) {
        $scope.Company_Name = translation;
      });
      $translate('Company.Name_description_1').then(function (translation) {
        $scope.Company_Name_description_1 = translation;
      });
      $translate('Company.Name_description_2').then(function (translation) {
        $scope.Company_Name_description_2 = translation;
      });
      $translate('Company.Comments').then(function (translation) {
        $scope.Company_Comments = translation;
      });
      $translate('Company.Btn_1').then(function (translation) {
        $scope.Company_Btn_1 = translation;
      });
      $translate('Company.Btn_2').then(function (translation) {
        $scope.Company_Btn_2 = translation;
      });

      $translate('Ideas.imgHeader_1').then(function (translation) {
        $scope.Ideas_imgHeader_1 = translation;
      });
      $translate('Ideas.imgHeader_2').then(function (translation) {
        $scope.Ideas_imgHeader_2 = translation;
      });
      $translate('Ideas.Title').then(function (translation) {
        $scope.Ideas_Title = translation;
      });
      $translate('Ideas.Description_1').then(function (translation) {
        $scope.Ideas_Description_1 = translation;
      });
      $translate('Ideas.Description_2').then(function (translation) {
        $scope.Ideas_Description_2 = translation;
      });
      $translate('Ideas.Btn_1').then(function (translation) {
        $scope.Ideas_Btn_1 = translation;
      });
      $translate('Ideas.Btn_2').then(function (translation) {
        $scope.Ideas_Btn_2 = translation;
      });
      $translate('Vendors.Title').then(function (translation) {
        $scope.Vendors_Title = translation;
      });

      $translate('Questions.Title').then(function (translation) {
        $scope.Questions_Title = translation;
      });
      $translate('Questions.Row_1_Title_1').then(function (translation) {
        $scope.Questions_Row_1_Title_1 = translation;
      });
      $translate('Questions.Row_1_Title_2').then(function (translation) {
        $scope.Questions_Row_1_Title_2= translation;
      });
      $translate('Questions.Row_2_Title').then(function (translation) {
        $scope.Questions_Row_2_Title= translation;
      });
      $translate('Questions.Btn_1').then(function (translation) {
        $scope.Questions_Btn_1= translation;
      });
      $translate('Questions.Btn_2').then(function (translation) {
        $scope.Questions_Btn_2= translation;
      });
      $translate('Questions.Min_Row_1_1').then(function (translation) {
        $scope.Questions_Min_Row_1_1= translation;
      });
      $translate('Questions.Min_Row_1_2').then(function (translation) {
        $scope.Questions_Min_Row_1_2= translation;
      });


    });
    $translate.use($translate.proposedLanguage()).then(function () {});

  }]);
