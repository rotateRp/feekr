var giftMoudle = angular.module('gift', [ 'ionic' ]);

giftMoudle.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	
	.state('index',{
		url: '/index',
		abstract:true,  
    	templateUrl: "views/tabs.html"  
	})
	.state('index.home', {
		url: '/home',
		views: {
			'home': {
				templateUrl: 'views/home/home.html',
				controller: 'homeCtrl'
			}
		}
	})
	.state('index.top', {
		url: '/top',
		views: {
			'top': {
				templateUrl: 'views/top/top.html'
			}
		}
	})
	.state('index.strategy', {
		url: '/strategy',
		views: {
			'strategy': {
				templateUrl: 'views/strategy/strategy.html',
				controller: 'strategyCtrl'
			}
		}
	})
	.state('hangzhou', {
		url: '/hangzhou/1001/hangzhou',			
		templateUrl: 'views/strategy/hangzhouStrategy.html',
		controller: 'hangzhouCtrl'
			
		
	})
	.state('index.me', {
		url: '/me',
		views: {
			'me': {
				templateUrl: 'views/me/me.html'
			}
		}
	});
	
	$urlRouterProvider.otherwise('/index/home');//路径名字
}])
