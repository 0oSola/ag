// JavaScript Document
var scotchApp = angular.module("scotchApp",['ngRoute']);

scotchApp.config(function($routeProvider){
	$routeProvider.when("/",{
		templateUrl:"home.html",
		controller:"mainController"
	}).when("/about",{
		templateUrl:"about.html",
		controller:"aboutController"
	}).when("/contact",{
		templateUrl:"content.html",
		controller:"contentController"
	}).otherwise({redirectTo: '/tabs'});
	
})

scotchApp.controller("mainController",function($scope){
	$scope.message = "test";
});

scotchApp.controller("aboutController",function($scope){
	$scope.message = "about";
})

scotchApp.controller("contentController",function($scope){
	$scope.message = "content!!";
})