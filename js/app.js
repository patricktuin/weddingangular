var app = angular.module('wedding', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.
    	when('/', {
			templateUrl: "templates/home.html",
			
		}).
		when('/programma', {
			templateUrl: "templates/programma.html",
			// controller: "AppCtrl"
		}).
		when('/locatie', {
			templateUrl: "templates/locatie.html",
			// controller: "AppCtrl"
		}).
		when('/ceremoniemeesters', {
			templateUrl: "templates/ceremoniemeesters.html",
			// controller: "AppCtrl"
		}).
		when('/gasten', {
			templateUrl: "templates/gasten.html",
			// controller: "AppCtrl"
		}).
		when('/fotos', {
			templateUrl: "templates/fotos.html",
			// controller: "AppCtrl"
		}).
		when('/kadotips', {
			templateUrl: "templates/kadotips.html",
			// controller: "AppCtrl"
		}).
		when('/info', {
			templateUrl: "templates/info.html",
			// controller: "AppCtrl"
		}).
    	when('/overnachten', {
 			templateUrl: 'templates/overnachten.html',
        	// controller: 'AddOrderController'
    	});
});

	
app.controller("collapseController", function($rootScope){
	$rootScope.$on('$routeChangeSuccess', function() {
        var toggle = angular.element('.navbar-toggle');
        if (!toggle.hasClass('collapsed')) {
            angular.element('.navbar-collapse').removeClass('in').addClass('collapsed');

        }
	});
});





app.controller("TabController", function() {
	this.tab = 'home';

	this.setTab = function(setTab) {
		this.tab = setTab;
	};

	this.isSet = function(checkTab) {
		return this.tab === checkTab;
	};
});


app.controller("Timer", function() {
	this.tab = 'home';

	this.setTab = function(setTab) {
		this.tab = setTab;
	};

	this.isSet = function(checkTab) {
		return this.tab === checkTab;
	};
});



app.controller("ThumbController", function() {
	this.thumb = 0;

	this.setThumb = function(setThumb) {
		this.thumb = setThumb;
	};

	this.isSet = function(checkThumb) {
		return this.thumb === checkThumb;
	};


// app.controller("gastController", function($scope, $http) {
// 	$scope.gasten= [];
// 	$http.get('../json/gasten.json').success(function(data) { 
// 	    console.log("success!");
// 	    $scope.gasten = data.name;
// 	        console.log(data.name);
// 	    });    
// 	}); 
});


// app.controller('Timer', function($scope) {
//     $scope.timerRunning = true;

//     $scope.startTimer = function (){
//         $scope.$broadcast('timer-start');
//         $scope.timerRunning = true;
//     };

//     $scope.stopTimer = function (){
//         $scope.$broadcast('timer-stop');
//         $scope.timerRunning = false;
//     };

//     $scope.$on('timer-stopped', function (event, data){
//         console.log('Timer Stopped - data = ', data);
//     });
//     MyAppController.$inject = ['$scope'];
// });


