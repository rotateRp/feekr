giftMoudle.controller('hangzhouCtrl',['$scope','hangzhouServices','$ionicHistory',function($scope,hangzhouServices,$ionicHistory){
	$scope.hangzhouList = [];
	$scope.likesHangzhou = [];
	$scope.pathCover = [];
	$scope.pathDesc = [];
	$scope.playCover = [];
	$scope.playDesc = [];
	$scope.cityCover = [];
	$scope.cityCover = [];
	
	
	$scope.goBackAction = function (){
		$ionicHistory.goBack();
	}
	
	
	hangzhouServices.getHangZhouData(function(data){
		$scope.hangzhouList = data;
	},function(err){
		console.log(err);
	});
	
	hangzhouServices.getLikesHangZhouData(function(data){
		$scope.likesHangzhou = data;
		console.log($scope.likesHangzhou);
		console.log(121)
		$scope.pathCover = data.path.cover;
		$scope.pathDesc = data.path.desc;
		console.log(22)
		$scope.playCover = data.play.cover;
		$scope.playDesc = data.play.desc;
		console.log(111)
		$scope.cityCover = data.city.cover;
		$scope.cityDesc = data.city.desc;
		
		console.log($scope.pathCover)
		
	},function(err){
		console.log(err);
	});
	

}])