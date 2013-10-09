'use strict';

angular.module('congresInfo.controllers', [])
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
          $scope.members.push(member);
        }
     });
  });