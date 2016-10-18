var giftMoudle = angular.module('gift', [ 'ionic' ]);

giftMoudle.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home', {
		url: '/home',
		views: {
			'home': {
				templateUrl: 'views/home/home.html',
				controller: 'homeCtrl'
			}
		}
	})
	.state('top', {
		url: '/top',
		views: {
			'top': {
				templateUrl: 'views/top/top.html'
			}
		}
	})
	.state('strategy', {
		url: '/strategy',
		views: {
			'strategy': {
				templateUrl: 'views/strategy/strategy.html',
				controller: 'strategyCtrl'
			}
		}
	})
	.state('hangzhou', {
		url: '/strategycity/:id',
		cache:'false', 
		views: {	
			templateUrl: 'views/strategy/hangzhouStrategy.html',
			controller: 'hangzhouCtrl'
			
		}
	})
	.state('me', {
		url: '/me',
		views: {
			'me': {
				templateUrl: 'views/me/me.html'
			}
		}
	});
	
	$urlRouterProvider.otherwise('/home');//路径名字
}])
