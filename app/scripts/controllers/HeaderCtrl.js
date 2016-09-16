/**
 * Created by Anatoli on 16.09.2016.
 */
angular.module('siBelApp')
  .controller('HeaderCtrl',['$scope', function ($scope) {
    $scope.by=false;
    $scope.ru=true;
    $scope.en=false;


    $scope.Start = function(data){
      if(data == 'by'){
        $scope.by=true;
        $scope.ru=false;
        $scope.en=false;
      }else
      if(data == 'ru'){
        $scope.by=false;
        $scope.ru=true;
        $scope.en=false;
      }else
      if(data == 'en'){
        $scope.by=false;
        $scope.ru=false;
        $scope.en=true;
      }
    }
  }]);
