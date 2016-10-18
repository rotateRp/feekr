giftMoudle.controller('homeCtrl',['$scope','homeServices','$timeout',function($scope,homeServices,$timeout){
//	$scope.bannerList = [];
	$scope.todayList = [];
	$scope.agoList = [];
	$scope.canLoadMore = true;
	
	homeServices.getBannerList(function(data){
		$scope.bannerlist = data;
	}
	,function(err){
		console.log(err)
	});
	
	
	homeServices.getTodayList(

		function(data){
			$scope.todayList = data;
//			console.log(data);
		},
		function(err){
			console.log(err);
		}
	);
	
	function requestList (flag){
		homeServices.getAgoList(
	
			function(data){
				
//				console.log(data);
				if(flag == 'loadMore'){
					$scope.$broadcast('scroll.infiniteScrollComplete');
					
				}
				$scope.agoList = $scope.agoList.concat(data);
					
			},
			function(err){
				console.log(err);
				if(flag == 'loadMore'){
					$scope.$broadcast('scroll.infiniteScrollComplete');
					$scope.canLoadMore = false;
					$timeout(function(){
						$scope.canLoadMore = true;
					}, 500);
				}
			}
		);
	}
	
	
	
	$scope.loadMore = function(){
		requestList ('loadMore');
	}
}]);