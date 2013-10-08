'use strict';

angular.module('congresInfo', ['congresInfo.controllers', 'congresInfo.services'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/blog', {templateUrl: '/partials/blog.html', controller: 'BlogController'});
    $routeProvider.when('/congress', {templateUrl: '/partials/congress.html', controller: 'BlogController'});
    $routeProvider.otherwise({templateUrl: '/partials/congress.html', controller: 'CongressList'});
  }])
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);