'use strict';

angular.module('congresInfo', ['congresInfo.controllers', 'congresInfo.services'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({templateUrl: 'partials/congress.html', controller: 'CongressList'});
  }])
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);