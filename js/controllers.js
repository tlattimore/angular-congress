'use strict';

angular.module('congresInfo.controllers', [])
  .controller('BlogController', function($scope, $http, cmsSettings) {
    $scope.articles = [];
    $http.jsonp(cmsSettings.hostName + '/j/cvCCwnpQde', {
      params: {
        callback: 'JSON_CALLBACK'
      }
    })
      .success(function (data) {
        if (data.articles.length) {
          for (var i = 0; i < data.articles.length; i++) {
            var article = data.articles[i].article;
            var date = new Date(article.created * 1000);
            article.created = date.getDay() + '/'  + date.getMonth() + '/'  + date.getFullYear();
            $scope.articles.push(article);
          }
        }
      });
  })
  .controller('CongressList', function($scope, $http, congressSettings) {
    $scope.members = [];
    $http.jsonp(congressSettings.hostName + '/role?current=true&format=jsonp', {
      params: {
        callback: 'JSON_CALLBACK'
      }
    })
      .success(function (data) {
        for (var i = 0; i < data.objects.length; i++) {
          var member = data.objects[i];
          console.log(member);
          $scope.members.push(member);
        }
      });
  });