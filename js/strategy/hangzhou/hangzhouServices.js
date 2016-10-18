giftMoudle.service('hangzhouServices',['$http',function($http){
	
	this.getHangZhouData = function (successCallBack,failCallBall){

		$http.get('/feekr/data/hangzhou')
		.success(function(data){
			var newData = data.result.theme;
//			console.log(newData);
			successCallBack(newData);
		})
		.error(function(err){
			console.log(err)
		})
	}
	
	
	this.getLikesHangZhouData = function (successCallBack,failCallBall){

		$http.get('/feekr/data/likesHangzhou')
		.success(function(data){
			var newData = data.result;
//			console.log(newData);
			successCallBack(newData);
		})
		.error(function(err){
			console.log(err)
		})
	}
}])