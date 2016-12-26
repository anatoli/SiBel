/**
 * Created by Anatoliy Arinovich on 30.11.2016.
 */
/**
 * Created by Anatoliy Arinovich on 18.11.2016.
 */
'use strict';
angular.module('siBelApp')
  .controller('ImplementationCtrl',[
    '$scope',
    '$uibModal',
    '$state',
    '$translate',
    '$rootScope',
    '$location',
    function ($scope, $uibModal, $state, $translate, $rootScope) {
      $rootScope.$on('$translateChangeSuccess', function () {

        /////// filter  //////////////
        $translate('Implementation.Filter_btn_1').then(function (translation) {
          $scope.Implementation_Filter_btn_1 = translation;
        });
        $translate('Implementation.Filter_btn_2').then(function (translation) {
          $scope.Implementation_Filter_btn_2 = translation;
        });
        $translate('Implementation.Filter_btn_3').then(function (translation) {
          $scope.Implementation_Filter_btn_3 = translation;
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

      });
      $translate.use($translate.proposedLanguage()).then(function () {});



      // function iconActive() {
      //   var arr = $location.$$path.split('/');
      //   var n = arr.length-1;
      //   // if(arr[n]=== 'it'){
      //   //   $state.go('root.service.it.audit');
      //   //   $scope.state='.audit';
      //   // }else {
      //   $scope.state = "."+arr[n];
      //   // }
      // }



      // iconActive();

      // $rootScope.$on('$stateChangeSuccess',
      //   function(){
      //     iconActive();
      //   });

      $scope.Go = function (data) {
        $state.go('root.service'+data);

      };
      $scope.state = 'all';

      $scope.Filter = function (data) {
        if( $scope.state === data){
          $scope.state = 'all';
        }else{
          $scope.state = data;
        }
      };

      $scope.DetailsOpen = function (data) {
        $scope.first= false;
        $scope.second= false;
        $scope.third = false;
        $scope.fourth = false;
        $scope.fifth = false;
        $scope.sixth = false;
        $scope.seventh = false;
        $scope.eighth = false;
        $scope.ninth = false;
        if(data==='first'){
          $scope.first= !$scope.first;
        }else if(data==='second'){
          $scope.second= !$scope.second;
        }else if(data==='third') {
          $scope.third = !$scope.third;
        }else if(data==='fourth') {
          $scope.fourth = !$scope.fourth;
        }else if(data==='fifth') {
          $scope.fifth = !$scope.fifth;
        }else if(data==='sixth') {
          $scope.sixth = !$scope.sixth;
        }else if(data==='seventh') {
          $scope.seventh = !$scope.seventh;
        }else if(data==='eighth') {
          $scope.eighth = !$scope.eighth;
        }else if(data==='ninth') {
          $scope.ninth = !$scope.ninth;
        }
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
