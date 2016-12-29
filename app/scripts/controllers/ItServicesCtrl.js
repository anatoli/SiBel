/**
 * Created by Anatoliy Arinovich on 18.11.2016.
 */
'use strict';
angular.module('siBelApp')
  .controller('ItServicesCtrl',[
    '$scope',
    '$uibModal',
    '$state',
    '$translate',
    '$rootScope',
    '$location',
    '$anchorScroll',
    function ($scope, $uibModal, $state, $translate, $rootScope, $location, $anchorScroll ) {
    $rootScope.$on('$translateChangeSuccess', function () {
      /////// Slider ////////
      $translate('SLIDER.BTN_2').then(function (translation) {
        $scope.SLIDER_BTN_2 = translation;
      });
      $translate('IT.Slider.Title').then(function (translation) {
        $scope.IT_Slider_Title = translation;
      });
      $translate('IT.Slider.Description').then(function (translation) {
        $scope.IT_Slider_Description = translation;
      });
      ///////// icons /////////
      $translate('IT.Icon.Title').then(function (translation) {
        $scope.IT_Icon_Title = translation;
      });
      $translate('IT.Icon.icon_1_title').then(function (translation) {
        $scope.IT_Icon_icon_1_title = translation;
      });
      $translate('IT.Icon.icon_1_description').then(function (translation) {
        $scope.IT_Icon_icon_1_description = translation;
      });
      $translate('IT.Icon.icon_1_btn').then(function (translation) {
        $scope.IT_Icon_icon_1_btn = translation;
      });
      $translate('IT.Icon.icon_2_title').then(function (translation) {
        $scope.IT_Icon_icon_2_title = translation;
      });
      $translate('IT.Icon.icon_2_description').then(function (translation) {
        $scope.IT_Icon_icon_2_description = translation;
      });
      $translate('IT.Icon.icon_2_btn').then(function (translation) {
        $scope.IT_Icon_icon_2_btn = translation;
      });
      $translate('IT.Icon.icon_3_title').then(function (translation) {
        $scope.IT_Icon_icon_3_title = translation;
      });
      $translate('IT.Icon.icon_3_description').then(function (translation) {
        $scope.IT_Icon_icon_3_description = translation;
      });
      $translate('IT.Icon.icon_3_btn').then(function (translation) {
        $scope.IT_Icon_icon_3_btn = translation;
      });
      ///////audit ///////////
      $translate('IT.Audit.Blue.Title').then(function (translation) {
        $scope.IT_Audit_Blue_Title = translation;
      });
      $translate('IT.Audit.Blue.Description_1').then(function (translation) {
        $scope.IT_Audit_Blue_Description_1 = translation;
      });
      $translate('IT.Audit.Blue.Description_2').then(function (translation) {
        $scope.IT_Audit_Blue_Description_2 = translation;
      });
      $translate('IT.Audit.Blue.li_1').then(function (translation) {
        $scope.IT_Audit_Blue_li_1 = translation;
      });
      $translate('IT.Audit.Blue.li_2').then(function (translation) {
        $scope.IT_Audit_Blue_li_2 = translation;
      });
      $translate('IT.Audit.Blue.li_3').then(function (translation) {
        $scope.IT_Audit_Blue_li_3 = translation;
      });
      $translate('IT.Audit.White.Title').then(function (translation) {
        $scope.IT_Audit_White_Title = translation;
      });
      $translate('IT.Audit.White.Description_1').then(function (translation) {
        $scope.IT_Audit_White_Description_1 = translation;
      });
      $translate('IT.Audit.White.Description_2').then(function (translation) {
        $scope.IT_Audit_White_Description_2 = translation;
      });
      $translate('IT.Audit.White.li_1').then(function (translation) {
        $scope.IT_Audit_White_li_1 = translation;
      });
      $translate('IT.Audit.White.li_2').then(function (translation) {
        $scope.IT_Audit_White_li_2 = translation;
      });
      $translate('IT.Audit.White.li_3').then(function (translation) {
        $scope.IT_Audit_White_li_3 = translation;
      });
      $translate('IT.Audit.White.li_4').then(function (translation) {
        $scope.IT_Audit_White_li_4 = translation;
      });
      $translate('IT.Audit.White.li_5').then(function (translation) {
        $scope.IT_Audit_White_li_5 = translation;
      });
      $translate('IT.Audit.White.li_6').then(function (translation) {
        $scope.IT_Audit_White_li_6 = translation;
      });

      ///////infra ///////////
      $translate('IT.Infra.Blue.Title').then(function (translation) {
        $scope.IT_Infra_Blue_Title = translation;
      });
      $translate('IT.Infra.Blue.Description_1').then(function (translation) {
        $scope.IT_Infra_Blue_Description_1 = translation;
      });
      $translate('IT.Infra.Blue.Description_2').then(function (translation) {
        $scope.IT_Infra_Blue_Description_2 = translation;
      });
      $translate('IT.Infra.Blue.Description_3').then(function (translation) {
        $scope.IT_Infra_Blue_Description_3 = translation;
      });

      $translate('IT.Infra.White.Title').then(function (translation) {
        $scope.IT_Infra_White_Title = translation;
      });
      $translate('IT.Infra.White.Description_1').then(function (translation) {
        $scope.IT_Infra_White_Description_1 = translation;
      });
      $translate('IT.Infra.White.Description_2').then(function (translation) {
        $scope.IT_Infra_White_Description_2 = translation;
      });
      $translate('IT.Infra.White.Description_3').then(function (translation) {
        $scope.IT_Infra_White_Description_3 = translation;
      });
      $translate('IT.Infra.White.li_1_1').then(function (translation) {
        $scope.IT_Infra_White_li_1_1 = translation;
      });
      $translate('IT.Infra.White.li_1_2').then(function (translation) {
        $scope.IT_Infra_White_li_1_2 = translation;
      });
      $translate('IT.Infra.White.li_1_3').then(function (translation) {
        $scope.IT_Infra_White_li_1_3 = translation;
      });
      $translate('IT.Infra.White.li_1_4').then(function (translation) {
        $scope.IT_Infra_White_li_1_4 = translation;
      });
      $translate('IT.Infra.White.li_2_1').then(function (translation) {
        $scope.IT_Infra_White_li_2_1 = translation;
      });
      $translate('IT.Infra.White.li_2_2').then(function (translation) {
        $scope.IT_Infra_White_li_2_2 = translation;
      });
      $translate('IT.Infra.White.li_2_3').then(function (translation) {
        $scope.IT_Infra_White_li_2_3 = translation;
      });
      $translate('IT.Infra.Accordion.Title').then(function (translation) {
        $scope.IT_Infra_Accordion_Title  = translation;
      });
      ///////engineer ///////////
      $translate('IT.Engineer.Blue.Title').then(function (translation) {
        $scope.IT_Engineer_Blue_Title = translation;
      });
      $translate('IT.Engineer.Blue.Description_1').then(function (translation) {
        $scope.IT_Engineer_Blue_Description_1 = translation;
      });
      $translate('IT.Engineer.Blue.Description_2_1').then(function (translation) {
        $scope.IT_Engineer_Blue_Description_2_1 = translation;
      });
      $translate('IT.Engineer.Blue.Description_2_2').then(function (translation) {
        $scope.IT_Engineer_Blue_Description_2_2 = translation;
      });
      $translate('IT.Engineer.White.Description_1').then(function (translation) {
        $scope.IT_Engineer_White_Description_1 = translation;
      });
      $translate('IT.Engineer.White.Description_2').then(function (translation) {
        $scope.IT_Engineer_White_Description_2 = translation;
      });
      $translate('IT.Engineer.White.li_1').then(function (translation) {
        $scope.IT_Engineer_White_li_1 = translation;
      });
      $translate('IT.Engineer.White.li_2').then(function (translation) {
        $scope.IT_Engineer_White_li_2 = translation;
      });
      $translate('IT.Engineer.White.li_3').then(function (translation) {
        $scope.IT_Engineer_White_li_3 = translation;
      });
      $translate('IT.Engineer.White.li_4').then(function (translation) {
        $scope.IT_Engineer_White_li_4 = translation;
      });
      $translate('IT.Engineer.White.li_5').then(function (translation) {
        $scope.IT_Engineer_White_li_5 = translation;
      });
      $translate('IT.Engineer.White.li_5').then(function (translation) {
        $scope.IT_Engineer_White_li_5 = translation;
      });
      $translate('IT.Engineer.White.li_6').then(function (translation) {
        $scope.IT_Engineer_White_li_6 = translation;
      });
      $translate('IT.Engineer.White.li_7').then(function (translation) {
        $scope.IT_Engineer_White_li_7 = translation;
      });
      $translate('IT.Engineer.White.li_8').then(function (translation) {
        $scope.IT_Engineer_White_li_8 = translation;
      });
      $translate('IT.Engineer.White.li_9').then(function (translation) {
        $scope.IT_Engineer_White_li_9 = translation;
      });
      $translate('IT.Engineer.Accordion.Title').then(function (translation) {
        $scope.IT_Engineer_Accordion_Title  = translation;
      });
      /////// example_audit ////////////
      $translate('IT.Implementation.OrangeTitle_1').then(function (translation) {
        $scope.IT_Implementation_OrangeTitle_1 = translation;
      });
      $translate('IT.Implementation.Project_1.Title_1').then(function (translation) {
        $scope.Implementation_Project_1_Title_1 = translation;
      });
      $translate('IT.Audit.Accordion.Title').then(function (translation) {
        $scope.IT_Audit_Accordion_Title  = translation;
      });
      ////// All  ////////////////

      $translate('Ideas.Btn_1').then(function (translation) {
        $scope.Ideas_Btn_1 = translation;
      });
      $translate('Implementation.All.Title_1').then(function (translation) {
        $scope.Implementation_All_Title_1 = translation;
      });
      $translate('Implementation.All.Title_2').then(function (translation) {
        $scope.Implementation_All_Title_2 = translation;
      });
      $translate('Implementation.All.Title_3_1').then(function (translation) {
        $scope.Implementation_All_Title_3_1 = translation;
      });
      $translate('Implementation.All.Title_3_2').then(function (translation) {
        $scope.Implementation_All_Title_3_2 = translation;
      });
      $translate('Implementation.All.Title_4').then(function (translation) {
        $scope.Implementation_All_Title_4 = translation;
      });
      $translate('Implementation.All.Title_5').then(function (translation) {
        $scope.Implementation_All_Title_5 = translation;
      });

      //////// Project_1 ///////
      $translate('Implementation.Project_1.Title_1').then(function (translation) {
        $scope.Implementation_Project_1_Title_1 = translation;
      });
      $translate('Implementation.Project_1.Client').then(function (translation) {
        $scope.Implementation_Project_1_Client = translation;
      });
      $translate('Implementation.Project_1.Description_1').then(function (translation) {
        $scope.Implementation_Project_1_Description_1 = translation;
      });
      $translate('Implementation.Project_1.Description_2').then(function (translation) {
        $scope.Implementation_Project_1_Description_2 = translation;
      });
      $translate('Implementation.Project_1.Description_3').then(function (translation) {
        $scope.Implementation_Project_1_Description_3 = translation;
      });
      $translate('Implementation.Project_1.Description_4').then(function (translation) {
        $scope.Implementation_Project_1_Description_4 = translation;
      });
      $translate('Implementation.Project_1.li_1').then(function (translation) {
        $scope.Implementation_Project_1_li_1 = translation;
      });
      $translate('Implementation.Project_1.li_2').then(function (translation) {
        $scope.Implementation_Project_1_li_2 = translation;
      });
      $translate('Implementation.Project_1.li_3').then(function (translation) {
        $scope.Implementation_Project_1_li_3 = translation;
      });
      $translate('Implementation.Project_1.li_4').then(function (translation) {
        $scope.Implementation_Project_1_li_4 = translation;
      });
      $translate('Implementation.Project_1.li_5').then(function (translation) {
        $scope.Implementation_Project_1_li_5 = translation;
      });

      //////// Project_2 ///////
      $translate('Implementation.Project_2.Title_1').then(function (translation) {
        $scope.Implementation_Project_2_Title_1 = translation;
      });
      $translate('Implementation.Project_2.Client').then(function (translation) {
        $scope.Implementation_Project_2_Client = translation;
      });
      $translate('Implementation.Project_2.Description_1').then(function (translation) {
        $scope.Implementation_Project_2_Description_1 = translation;
      });
      $translate('Implementation.Project_2.Description_2').then(function (translation) {
        $scope.Implementation_Project_2_Description_2 = translation;
      });
      $translate('Implementation.Project_2.Description_3').then(function (translation) {
        $scope.Implementation_Project_2_Description_3 = translation;
      });
      $translate('Implementation.Project_2.Description_4').then(function (translation) {
        $scope.Implementation_Project_2_Description_4 = translation;
      });
      $translate('Implementation.Project_2.li_1').then(function (translation) {
        $scope.Implementation_Project_2_li_1 = translation;
      });
      $translate('Implementation.Project_2.li_2').then(function (translation) {
        $scope.Implementation_Project_2_li_2 = translation;
      });
      $translate('Implementation.Project_2.li_3').then(function (translation) {
        $scope.Implementation_Project_2_li_3 = translation;
      });
      $translate('Implementation.Project_2.li_4').then(function (translation) {
        $scope.Implementation_Project_2_li_4 = translation;
      });
      $translate('Implementation.Project_2.li_5').then(function (translation) {
        $scope.Implementation_Project_2_li_5 = translation;
      });
      $translate('Implementation.Project_2.li_6').then(function (translation) {
        $scope.Implementation_Project_2_li_6 = translation;
      });
      //////// Project_3 ///////
      $translate('Implementation.Project_3.Title_1').then(function (translation) {
        $scope.Implementation_Project_3_Title_1 = translation;
      });
      $translate('Implementation.Project_3.Client').then(function (translation) {
        $scope.Implementation_Project_3_Client = translation;
      });
      $translate('Implementation.Project_3.Description_1').then(function (translation) {
        $scope.Implementation_Project_3_Description_1 = translation;
      });
      $translate('Implementation.Project_2.Description_2').then(function (translation) {
        $scope.Implementation_Project_3_Description_2 = translation;
      });
      $translate('Implementation.Project_3.Description_3').then(function (translation) {
        $scope.Implementation_Project_3_Description_3 = translation;
      });
      $translate('Implementation.Project_3.Description_4').then(function (translation) {
        $scope.Implementation_Project_3_Description_4 = translation;
      });
      $translate('Implementation.Project_3.li_1').then(function (translation) {
        $scope.Implementation_Project_3_li_1 = translation;
      });
      $translate('Implementation.Project_3.li_2').then(function (translation) {
        $scope.Implementation_Project_3_li_2 = translation;
      });
      $translate('Implementation.Project_3.li_2_1').then(function (translation) {
        $scope.Implementation_Project_3_li_2_1 = translation;
      });
      $translate('Implementation.Project_3.li_2_2').then(function (translation) {
        $scope.Implementation_Project_3_li_2_2 = translation;
      });
      $translate('Implementation.Project_3.li_2_3').then(function (translation) {
        $scope.Implementation_Project_3_li_2_3 = translation;
      });
      $translate('Implementation.Project_3.li_2_4').then(function (translation) {
        $scope.Implementation_Project_3_li_2_4 = translation;
      });
      $translate('Implementation.Project_3.li_2_5').then(function (translation) {
        $scope.Implementation_Project_3_li_2_5 = translation;
      });
      $translate('Implementation.Project_3.li_2_6').then(function (translation) {
        $scope.Implementation_Project_3_li_2_6 = translation;
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
      console.log('it_test');
      console.log($state.params.param);
      if($state.params.param==='it'){
        setTimeout(function () {
          $location.hash('it');
          $anchorScroll();
          $location.hash(''); // clear url
        }, 400)
      }

      $scope.Go = function (data) {
        $state.go('root.service.it'+data);
        $scope.state = data;
      };

      $scope.DopStateGo = function (data) {
        $state.go('root.service'+data);
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
