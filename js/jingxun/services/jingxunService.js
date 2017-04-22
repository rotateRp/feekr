giftMoudle.service('jingxunService', ["$http",function ($http) {



	//轮播图
	this.getjingxunService=function(successCallback,failCallback){
		$http.get("/feekr/data/hh")
		.success(function(data){
			console.log(data)
			successCallback(data);
		})
		.error(function(eer){
			/* Act on the event */
			console.log(err)
		});
	}
	console.log("a")
}])