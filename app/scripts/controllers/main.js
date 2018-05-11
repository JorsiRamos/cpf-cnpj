'use strict';

/**
 * @ngdoc function
 * @name cpfCnpjApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cpfCnpjApp
 */
angular.module('cpfCnpjApp')
.controller('MainCtrl', function (mock) {
	var $public = this;

	$public.listDomains = mock.mockInit();

	$public.checkDoc = function(docNumber) {
		console.log(docNumber);
	};	

});
