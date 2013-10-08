'use strict';

angular.module('congresInfo.services', [])
  .factory('cmsSettings', function($window) {
    return {
      hostName: 'http://json-generator.appspot.com'
    };
  })
  .factory('congressSettings', function($window) {
    return {
    	hostName: 'http://www.govtrack.us/api/v2'
    };
  });