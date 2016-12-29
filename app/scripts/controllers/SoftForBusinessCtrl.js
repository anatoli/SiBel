/**
 * Created by Anatoliy Arinovich on 18.11.2016.
 */
'use strict';
angular.module('siBelApp')
  .controller('SoftForBusinessCtrl',[ '$scope', '$rootScope', '$translate', '$state','$location', '$uibModal', '$anchorScroll', function ($scope, $rootScope, $translate, $state, $location, $uibModal,  $anchorScroll) {
    $rootScope.$on('$translateChangeSuccess', function () {

      /////////// Slider  ////////////
      $translate('Business.Slider.Title').then(function (translation) {
        $scope.Business_Slider_Title = translation;
      });
      $translate('Business.Slider.Description').then(function (translation) {
        $scope.Business_Slider_Description = translation;
      });
      $translate('SLIDER.BTN_2').then(function (translation) {
        $scope.SLIDER_BTN_2 = translation;
      });

      /////////// Icon  ////////////
      $translate('Business.Icon.Title').then(function (translation) {
        $scope.Business_Icon_Title = translation;
      });
      $translate('Business.Icon.icon_1_title').then(function (translation) {
        $scope.Business_Icon_icon_1_title = translation;
      });
      $translate('Business.Icon.icon_2_title').then(function (translation) {
        $scope.Business_Icon_icon_2_title = translation;
      });
      $translate('Business.Icon.icon_3_title').then(function (translation) {
        $scope.Business_Icon_icon_3_title = translation;
      });
      $translate('Business.Icon.icon_1_description').then(function (translation) {
        $scope.Business_Icon_icon_1_description = translation;
      });
      $translate('Business.Icon.icon_2_description').then(function (translation) {
        $scope.Business_Icon_icon_2_description = translation;
      });
      $translate('Business.Icon.icon_3_description').then(function (translation) {
        $scope.Business_Icon_icon_3_description = translation;
      });
      $translate('Business.Icon.icon_1_btn').then(function (translation) {
        $scope.Business_Icon_icon_1_btn = translation;
      });
      $translate('Business.Icon.icon_2_btn').then(function (translation) {
        $scope.Business_Icon_icon_2_btn = translation;
      });
      $translate('Business.Icon.icon_3_btn').then(function (translation) {
        $scope.Business_Icon_icon_3_btn = translation;
      });

      ///////// Implementation /////////////
      $translate('Business.Implementation.OrangeTitle_1').then(function (translation) {
        $scope.Business_Implementation_OrangeTitle_1 = translation;
      });
      $translate('Business.Implementation.OrangeTitle_2').then(function (translation) {
        $scope.Business_Implementation_OrangeTitle_2 = translation;
      });
      $translate('Business.Implementation.WhiteTitle_1_1').then(function (translation) {
        $scope.Business_Implementation_WhiteTitle_1_1 = translation;
      });
      $translate('Business.Implementation.WhiteTitle_1_2').then(function (translation) {
        $scope.Business_Implementation_WhiteTitle_1_2 = translation;
      });
      $translate('Business.Implementation.WhiteTitle_3_1').then(function (translation) {
        $scope.Business_Implementation_WhiteTitle_3_1 = translation;
      });
      $translate('Business.Implementation.WhiteTitle_3_2').then(function (translation) {
        $scope.Business_Implementation_WhiteTitle_3_2 = translation;
      });
      $translate('Business.Implementation.WhiteTitle_2_1').then(function (translation) {
        $scope.Business_Implementation_WhiteTitle_2_1 = translation;
      });
      $translate('Business.Implementation.WhiteTitle_4_1').then(function (translation) {
        $scope.Business_Implementation_WhiteTitle_4_1 = translation;
      });
      $translate('Business.Implementation.WhiteDescription_1').then(function (translation) {
        $scope.Business_Implementation_WhiteDescription_1 = translation;
      });
      $translate('Business.Implementation.WhiteDescription_2').then(function (translation) {
        $scope.Business_Implementation_WhiteDescription_2 = translation;
      });
      $translate('Business.Implementation.WhiteDescription_3').then(function (translation) {
        $scope.Business_Implementation_WhiteDescription_3 = translation;
      });
      $translate('Business.Implementation.WhiteDescription_4').then(function (translation) {
        $scope.Business_Implementation_WhiteDescription_4 = translation;
      });

      /////////// Accordion //////////
      $translate('Business.Accordion.Title').then(function (translation) {
        $scope.Business_Accordion_Title = translation;
      });
      $translate('Business.Accordion.li_1').then(function (translation) {
        $scope.Business_Accordion_li_1 = translation;
      });
      $translate('Business.Accordion.li_2').then(function (translation) {
        $scope.Business_Accordion_li_2 = translation;
      });
      $translate('Business.Accordion.li_3').then(function (translation) {
        $scope.Business_Accordion_li_3 = translation;
      })
      ;$translate('Business.Accordion.li_4').then(function (translation) {
        $scope.Business_Accordion_li_4 = translation;
      })
      ;$translate('Business.Accordion.li_5').then(function (translation) {
        $scope.Business_Accordion_li_5 = translation;
      })
      ;$translate('Business.Accordion.li_6').then(function (translation) {
        $scope.Business_Accordion_li_6 = translation;
      });
      $translate('Business.Accordion.li_7').then(function (translation) {
        $scope.Business_Accordion_li_7 = translation;
      });
      $translate('Business.Accordion.li_8').then(function (translation) {
        $scope.Business_Accordion_li_8 = translation;
      });

      ////// Automation ////////////

      $translate('Business.Automation.Blue.li_1').then(function (translation) {
        $scope.Business_Automation_Blue_li_1 = translation;
      });
      $translate('Business.Automation.Blue.li_2').then(function (translation) {
        $scope.Business_Automation_Blue_li_2 = translation;
      });
      $translate('Business.Automation.Blue.li_3').then(function (translation) {
        $scope.Business_Automation_Blue_li_3 = translation;
      });
      $translate('Business.Automation.Blue.li_4').then(function (translation) {
        $scope.Business_Automation_Blue_li_4 = translation;
      });
      $translate('Business.Automation.Blue.li_5').then(function (translation) {
        $scope.Business_Automation_Blue_li_5 = translation;
      });
      $translate('Business.Automation.Blue.li_6').then(function (translation) {
        $scope.Business_Automation_Blue_li_6 = translation;
      });
      $translate('Business.Automation.Blue.Title').then(function (translation) {
        $scope.Business_Automation_Blue_Title = translation;
      });
      $translate('Business.Automation.Blue.Description_1').then(function (translation) {
        $scope.Business_Automation_Blue_Description_1 = translation;
      });
      $translate('Business.Automation.Blue.Description_2').then(function (translation) {
        $scope.Business_Automation_Blue_Description_2 = translation;
      });
      $translate('Business.Automation.White.Title').then(function (translation) {
        $scope.Business_Automation_White_Title = translation;
      });
      $translate('Business.Automation.White.Description_1').then(function (translation) {
        $scope.Business_Automation_White_Description_1 = translation;
      });
      $translate('Business.Automation.White.li_1').then(function (translation) {
        $scope.Business_Automation_White_li_1 = translation;
      });
      $translate('Business.Automation.White.li_2').then(function (translation) {
        $scope.Business_Automation_White_li_2 = translation;
      });
      $translate('Business.Automation.White.li_3').then(function (translation) {
        $scope.Business_Automation_White_li_3 = translation;
      });
      $translate('Business.Automation.White.li_4').then(function (translation) {
        $scope.Business_Automation_White_li_4 = translation;
      });
      $translate('Business.Automation.White.li_5').then(function (translation) {
        $scope.Business_Automation_White_li_5 = translation;
      });

      ////// Complex ////////////
      $translate('Business.Complex.Blue.li_1').then(function (translation) {
        $scope.Business_Complex_Blue_li_1 = translation;
      });
      $translate('Business.Complex.Blue.li_2').then(function (translation) {
        $scope.Business_Complex_Blue_li_2 = translation;
      });
      $translate('Business.Complex.Blue.li_3').then(function (translation) {
        $scope.Business_Complex_Blue_li_3 = translation;
      });
      $translate('Business.Complex.Blue.li_4').then(function (translation) {
        $scope.Business_Complex_Blue_li_4 = translation;
      });
      $translate('Business.Complex.Blue.li_5').then(function (translation) {
        $scope.Business_Complex_Blue_li_5 = translation;
      });
      $translate('Business.Complex.Blue.li_6').then(function (translation) {
        $scope.Business_Complex_Blue_li_6 = translation;
      });
      $translate('Business.Complex.Blue.Title').then(function (translation) {
        $scope.Business_Complex_Blue_Title = translation;
      });
      $translate('Business.Complex.Blue.Description_1').then(function (translation) {
        $scope.Business_Complex_Blue_Description_1 = translation;
      });
      $translate('Business.Complex.Blue.Description_2').then(function (translation) {
        $scope.Business_Complex_Blue_Description_2 = translation;
      });
      $translate('Business.Complex.White.Title').then(function (translation) {
        $scope.Business_Complex_White_Title = translation;
      });
      $translate('Business.Complex.White.Description_1').then(function (translation) {
        $scope.Business_Complex_White_Description_1 = translation;
      });
      $translate('Business.Complex.White.li_1').then(function (translation) {
        $scope.Business_Complex_White_li_1 = translation;
      });
      $translate('Business.Complex.White.li_2').then(function (translation) {
        $scope.Business_Complex_White_li_2 = translation;
      });
      $translate('Business.Complex.White.li_3').then(function (translation) {
        $scope.Business_Complex_White_li_3 = translation;
      });
      $translate('Business.Complex.White.li_4').then(function (translation) {
        $scope.Business_Complex_White_li_4 = translation;
      });
      $translate('Business.Complex.White.li_5').then(function (translation) {
        $scope.Business_Complex_White_li_5 = translation;
      });
      $translate('Business.Complex.White.li_6').then(function (translation) {
        $scope.Business_Complex_White_li_6 = translation;
      });
      $translate('Business.Complex.White.li_7').then(function (translation) {
        $scope.Business_Complex_White_li_7 = translation;
      });

      ////////// elDoc ///////////////
      $translate('Business.elDoc.Blue.li_1').then(function (translation) {
        $scope.Business_elDoc_Blue_li_1 = translation;
      });
      $translate('Business.elDoc.Blue.li_2').then(function (translation) {
        $scope.Business_elDoc_Blue_li_2 = translation;
      });
      $translate('Business.elDoc.Blue.li_3').then(function (translation) {
        $scope.Business_elDoc_Blue_li_3 = translation;
      });
      $translate('Business.elDoc.Blue.li_4').then(function (translation) {
        $scope.Business_elDoc_Blue_li_4 = translation;
      });
      $translate('Business.elDoc.Blue.li_5').then(function (translation) {
        $scope.Business_elDoc_Blue_li_5 = translation;
      });
      $translate('Business.elDoc.Blue.li_6').then(function (translation) {
        $scope.Business_elDoc_Blue_li_6 = translation;
      });
      $translate('Business.elDoc.Blue.li_7').then(function (translation) {
        $scope.Business_elDoc_Blue_li_7 = translation;
      });
      $translate('Business.elDoc.Blue.Title').then(function (translation) {
        $scope.Business_elDoc_Blue_Title = translation;
      });
      $translate('Business.elDoc.Blue.Description_1').then(function (translation) {
        $scope.Business_elDoc_Blue_Description_1 = translation;
      });
      $translate('Business.elDoc.Blue.Description_2').then(function (translation) {
        $scope.Business_elDoc_Blue_Description_2 = translation;
      });
      $translate('Business.elDoc.White.Title').then(function (translation) {
        $scope.Business_elDoc_White_Title = translation;
      });
      $translate('Business.elDoc.White.Description_1').then(function (translation) {
        $scope.Business_elDoc_White_Description_1 = translation;
      });
      $translate('Business.elDoc.White.li_1').then(function (translation) {
        $scope.Business_elDoc_White_li_1 = translation;
      });
      $translate('Business.elDoc.White.li_2').then(function (translation) {
        $scope.Business_elDoc_White_li_2 = translation;
      });
      $translate('Business.elDoc.White.li_3').then(function (translation) {
        $scope.Business_elDoc_White_li_3 = translation;
      });
      $translate('Business.elDoc.White.li_4').then(function (translation) {
        $scope.Business_elDoc_White_li_4 = translation;
      });
      $translate('Business.elDoc.White.li_5').then(function (translation) {
        $scope.Business_elDoc_White_li_5 = translation;
      });

    });
    $translate.use($translate.proposedLanguage()).then(function () {});

    function iconActive() {
      var arr = $location.$$path.split('/');
      var n = arr.length-1;
      $scope.state = "."+arr[n];
    }

    iconActive();

    $rootScope.$on('$stateChangeSuccess',
      function(){
        iconActive();
      });
    console.log('business_test');
    console.log($state.params.param);

    if($state.params.param==='business'){
      setTimeout(function () {
        $location.hash('business');
        $anchorScroll();
        $location.hash(''); // clear url
      }, 400)
      $state.params.param = null;
    }

    $scope.Go = function (data) {
      $state.go('root.service.business'+data);
      $scope.state = data;
    };

    $scope.Email = function (data) {
      $uibModal.open({
        backdropClass: 'backdrop',
        backdrop: 'static',
        animation: false,
        size: 'dialog',
        templateUrl: 'views/modals/email.html',
        resolve: {
          dataModal: function () {
            return {
              data: data,
              lang: $translate.proposedLanguage()
            };
          }
        },
        controller: 'EmailCtrl'
      });
    };

  }]);
