var app = angular.module('wedding', []);

app.controller("TabController", function() {
	this.tab = 1;

	this.isSet = function(checkTab) {
		return this.tab === checkTab;
	};

	this.setTab = function(setTab) {
		this.tab = setTab;
	};
});