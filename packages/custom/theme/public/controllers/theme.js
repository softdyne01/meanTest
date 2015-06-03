'use strict';

/**
* @namespace mean.theme
* @author 신창현
* @copyright softdyne
*/

/**
* @class ThemeController
* @memberOf mean.theme
* @description
* ThemeController 데이터 추가
* 테마 정보 수정
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
