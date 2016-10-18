giftMoudle.controller("jingxunCtrl",['$scope',"jingxunService",function($scope,jingxunService){
	
	jingxunService.getjingxunService(function(data){
		//轮播图
		$scope.bannerList=data.result.slideItem;
		$scope.navList=data.result.category;
		$scope.contentList=data.result.categoryItem;
		$scope.likeImg=data.result.like;
	},function(err){
		console.log("a")
	})


		
}])