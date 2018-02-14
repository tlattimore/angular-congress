'use strict';

angular.module('congresInfo.services', [])
  .factory('congressSettings', function($window) {
    return {
    	hostName: 'https://www.govtrack.us/api/v2'
    };
  });
