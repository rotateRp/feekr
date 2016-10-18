giftMoudle.service('strategyServices',['$http',function($http){
	var listData = [ ];
	
	
	
	this.getCityData = function (successCallBack,failCallBall){

		$http.get('/feekr/data/cityData')
		.success(function(data){
			listData = data.result.city;
			console.log(listData);
			successCallBack(listData);
		})
		.error(function(err){
			console.log(err)
		})
	}
	
	
	
//	this.getCityDataById = function(id,name){
//		var newArr = listData.filter(function(item, index){
//			return item.id == id? true : false;
//		})
//		console.log(newArr);
//		return newArr[0];
//	}
//	
	
}])