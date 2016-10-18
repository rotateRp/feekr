giftMoudle.controller('strategyCtrl',['$scope','strategyServices','$timeout','$location','$state','$ionicHistory',function($scope,strategyServices,$timeout,$location,$state,$ionicHistory){

	strategyServices.getCityData(
		function(data){
			$scope.cityData =data;
		},function(err){
			console.log(err)
	});
	
	$scope.selectAction = function(id,name){
		$location.path('/hangzhou/'+id+'/'+name);
//		$state.go('hangzhou');
	}
	
	$scope.backAction = function(){
		$ionicHistory.goBack();
	}
}]);