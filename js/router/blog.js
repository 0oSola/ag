(function(){
	var blogApp = angular.module("blogApp");
	blogApp.config(["$stateProvider",function($stateProvider){
		$stateProvider.state("blog",{
			url:"/blog",
			views:{
				"blogBox":{
					templateUrl:"../router/blog.html"
				}
			}
		}).state("blog.detail",{
			url:"/:blogId",
			views:{
				"blogDetail":{   
					templateUrl:"../router/blogDetail.html",
					controller:"detailController"
				}
			}
		}) 
	}])

	//获取传入值
	blogApp.controller("detailController",["$stateParams",function($stateParams){
		console.log($stateParams.blogId);
	}])
})()