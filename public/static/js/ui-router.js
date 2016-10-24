// JavaScript Document
var ui_router = angular.module('ui-rounter-box',['ui.router']);
ui_router.config(function($urlRouterProvider,$stateProvider){
	//默认路由
	$urlRouterProvider.otherwise('/');
	//配置
	$stateProvider
	.state('home',{
		url:'/',
		templateUrl:'home.html',
		controller:'mainController'
	}).state('about',{
		url:'/about',
		templateUrl:'about.html',
		controller:'aboutController'
	}).state('blog',{
		url:'/blog',
		templateUrl:'blog.html'
	}).state('blog.content',{
		views:{
			'content':{
				url:'/content',
				templateUrl:'content.html',
				controller:function($scope){
					$scope.message = 'content';
				}
			}
		}
	}).state('blog.list',{
		views:{
			'list':{
				url:'/list',
				templateUrl:'list.html',
				controller:'listController'
			}
		}
	})
});

ui_router.controller('mainController',function($scope){
	$scope.message = 'test';
})

ui_router.controller('aboutController',function($scope){
	$scope.message = '123';
})

ui_router.controller('listController',function($scope){
	$scope.message = 'list';
})