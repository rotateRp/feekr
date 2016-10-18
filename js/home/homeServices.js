giftMoudle.service('homeServices',['$http',function($http){

	this.getBannerList = function(successCallBack,failCallBack){
		$http.get('/feekr/data/homeBannerData')
		.success(function(data){
			var newData = data.result.slideItem.map(function(item,index){
				return 	item.thumb;
			});
			successCallBack(newData);
		})
		.error(function(error){
			failCallBack(error);
		})
	}
	
	this.getTodayList = function(successCallBack,failCallBack){
		$http.get('/feekr/data/homeTodayList')
		.success(function(data){
//				console.log(data);
			var todayData = data.result.recommend;
			successCallBack(todayData);
		})
		.error(function(error){
			failCallBack(error);
		})
	}
	
	this.getAgoList = function(successCallBack,failCallBack){
		$http.get('/feekr/data/homeAgoList')
		.success(function(data){
//				console.log(data);
			var agoData = data.result.recommend.ago;
			successCallBack(agoData);
		})
		.error(function(error){
			failCallBack(error);
		})
	}
	
}])