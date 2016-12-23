"use strict";
/**
 * Created by Anatoli on 16.09.2016.
 */
angular.module('siBelApp')
  .controller('FooterCtrl', [ '$scope', '$state', function ($scope, $state) {

    $scope.Go = function (data) {
      $state.go(data);
    };

  }]);
