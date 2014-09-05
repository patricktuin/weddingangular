var app = angular.module('wedding', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.
    	when('/', {
			templateUrl: "templates/home.html",
			controller: "AppCtrl"
		}).
		when('/programma', {
			templateUrl: "templates/programma.html",
			controller: "AppCtrl"
		}).
		when('/locatie', {
			templateUrl: "templates/locatie.html",
			controller: "AppCtrl"
		}).
		when('/ceremoniemeesters', {
			templateUrl: "templates/ceremoniemeesters.html",
			controller: "AppCtrl"
		}).
		when('/gasten', {
			templateUrl: "templates/gasten.html",
			controller: "AppCtrl"
		}).
		when('/fotos', {
			templateUrl: "templates/fotos.html",
			controller: "AppCtrl"
		}).
		when('/kadotips', {
			templateUrl: "templates/kadotips.html",
			controller: "AppCtrl"
		}).
    	when('/overnachten', {
 			templateUrl: 'templates/overnachten.html',
        	controller: 'AddOrderController'
    	});
});

app.controller("AppCtrl", function($scope) {
    $scope.model = {
        message: "This is my app!!!"
    }
});


app.controller("TabController", function() {
	this.tab = 1;

	this.isSet = function(checkTab) {
		return this.tab === checkTab;
	};

	this.setTab = function(setTab) {
		this.tab = setTab;
	};



});