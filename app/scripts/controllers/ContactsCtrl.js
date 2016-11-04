"use strict";
/**
 * Created by Anatoli on 19.09.2016.
 */
/**
 * Created by Anatoli on 16.09.2016.
 */
angular.module('siBelApp')
  .controller('ContactsCtrl', ['$scope', '$uibModal', '$state', '$translate', '$rootScope', '$location',
    function ($scope, $uibModal, $state, $translate, $rootScope, $location) {



    $scope.Go = function (data) {
      $state.go('root.company'+data);
      $scope.state = data;
    }

      // $scope.openModal = function (data) {
      //   $uibModal.open({
      //     backdropClass: 'backdrop',
      //     backdrop: 'static',
      //     animation: false,
      //     size: 'dialog',
      //     templateUrl: 'views/modals/email.html',
      //     resolve: {
      //       dataModal: function () {
      //         return {
      //           data: data,
      //           lang: $translate.proposedLanguage()
      //         };
      //       }
      //     },
      //     controller: 'EmailCtrl'
      //   });
      // };

      var mainMarker = {
        lat: 53.905902508833165,
        lng: 27.456910014152527,
        focus: false,
        message: "SiBEL",
        draggable: false
      };

      angular.extend($scope, {
        center: {
          lat:53.905902508833165,
          lng:27.456910014152527,
          zoom:17
        },
        markers: {
          mainMarker: angular.copy(mainMarker)
        },
        events: { // or just {} //all events
          markers:{
            enable: [ 'dragend' ]
            //logic: 'emit'
          }
        },
        controls: {
          custom: new L.Control.Fullscreen()
        },
        tiles: {
          name: 'Mapbox Comic',
        },
      });

      $scope.mapVisible = function () {
        $scope.map=true;
      }

    $rootScope.$on('$translateChangeSuccess', function () {
      $translate('SecondPage.Slider.Title').then(function (translation) {
        $scope.SecondPage_Slider_Title = translation;
      });
      $translate('SecondPage.Slider.Text').then(function (translation) {
        $scope.SecondPage_Slider_Text = translation;
      });
      $translate('SecondPage.Slider.Btn_1').then(function (translation) {
        $scope.SecondPage_Slider_Btn_1 = translation;
      });
      $translate('SecondPage.Slider.Btn_2').then(function (translation) {
        $scope.SecondPage_Slider_Btn_2 = translation;
      });

      $translate('SecondPage.Icons.Title').then(function (translation) {
        $scope.SecondPage_Icons_Title = translation;
      });
      $translate('SecondPage.Icons.Header_ICO_1').then(function (translation) {
        $scope.SecondPage_Icons_Header_ICO_1 = translation;
      });
      $translate('SecondPage.Icons.Header_ICO_2').then(function (translation) {
        $scope.SecondPage_Icons_Header_ICO_2 = translation;
      });
      $translate('SecondPage.Icons.Header_ICO_3').then(function (translation) {
        $scope.SecondPage_Icons_Header_ICO_3 = translation;
      });
      $translate('SecondPage.Icons.Text_ICO_1').then(function (translation) {
        $scope.SecondPage_Icons_Text_ICO_1 = translation;
      });
      $translate('SecondPage.Icons.Text_ICO_2').then(function (translation) {
        $scope.SecondPage_Icons_Text_ICO_2 = translation;
      });
      $translate('SecondPage.Icons.Text_ICO_3').then(function (translation) {
        $scope.SecondPage_Icons_Text_ICO_3 = translation;
      });
      $translate('SecondPage.Icons.Btn_ICO_1').then(function (translation) {
        $scope.SecondPage_Icons_Btn_ICO_1 = translation;
      });
      $translate('SecondPage.Icons.Btn_ICO_2').then(function (translation) {
        $scope.SecondPage_Icons_Btn_ICO_2 = translation;
      });
      $translate('SecondPage.Icons.Btn_ICO_3').then(function (translation) {
        $scope.SecondPage_Icons_Btn_ICO_3 = translation;
      });
      $translate('SecondPage.Comments.Title').then(function (translation) {
        $scope.SecondPage_Comments_Title = translation;
      });
      $translate('SecondPage.Comments.Descriptions').then(function (translation) {
        $scope.SecondPage_Comments_Descriptions = translation;
      });
      $translate('SecondPage.Comments.Text').then(function (translation) {
        $scope.SecondPage_Comments_Text = translation;
      });
      $translate('SecondPage.Comments.Btn_1').then(function (translation) {
        $scope.SecondPage_Comments_Btn_1 = translation;
      });
      $translate('SecondPage.Comments.Btn_2').then(function (translation) {
        $scope.SecondPage_Comments_Btn_2 = translation;
      });
      $translate('Error.Address_1').then(function (translation) {
        $scope.Error_Address_1 = translation;
      });
      $translate('Error.Address_2').then(function (translation) {
        $scope.Error_Address_2 = translation;
      });

    });

    $translate.use($translate.proposedLanguage()).then(function () {});


  }]);
