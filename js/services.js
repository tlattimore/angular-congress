'use strict';

angular.module('congresInfo.services', [])
  .factory('congressSettings', function($window) {
    return {
    	hostName: 'http://www.govtrack.us/api/v2'
    };
  });