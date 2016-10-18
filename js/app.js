var giftMoudle = angular.module('gift', [ 'ionic' ]);

giftMoudle.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('main', {
		url: '/main',
		templateUrl: 'views/main.html',
				
	})
	.state('main.home', {
		url: '/home',
		views: {
			'home': {
				templateUrl: 'views/home/home.html'
			}
		}
	})
	.state('main.top', {
		url: '/top',
		views: {
			'top': {
				templateUrl: 'views/top/top.html',
				controller:"jingxunCtrl"
			}
		}
	})
	.state('main.category', {
		url: '/category',
		views: {
			'category': {
				templateUrl: 'views/category/category.html'
			}
		}
	})
	.state('main.me', {
		url: '/me',
		views: {
			'me': {
				templateUrl: 'views/me/me.html',
				controller:"meCtrl"
			}
		}
	})
	.state("user",{
		url:"/user",
		templateUrl:"views/me/user.html"
		
	})
	
	$urlRouterProvider.otherwise('/main/home');//路径名字
}])
