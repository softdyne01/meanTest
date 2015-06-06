'use strict';

/**
* @namespace mean.theme
* @author 신창현 <softdyne@daum.net>
* @copyright softdyne
*/

/**
* @ngdoc controller
* @name ThemeController
* @description
* 	테마 수정
*/
angular.module('mean.theme')
	.controller('ThemeController', ['$scope', 'Global',
	  function($scope, Global) {
// Original scaffolded code.
      $scope.global = Global;
      $scope.package = {
        name: 'theme'
      };
    }
  ]);
