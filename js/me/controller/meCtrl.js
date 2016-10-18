giftMoudle.controller('meCtrl', ['$scope','$ionicModal',"$timeout",'$ionicPopup',function ($scope,$ionicModal,$timeout,$ionicPopup) {
	console.log("a")
	$ionicModal.fromTemplateUrl('login.html',{
		scope:$scope,
		animation:"slide-in-up"
	}).then(function(modal){
		$scope.modal=modal
		
	});
	//$scope.modal.hide();
	// $timeout(function(){

	// 	$scope.modal.show();
	// },500)

//弹窗
	 $scope.iphone = {
               use : '',
               pass : '',         
        };
		
		$scope.add = function(){
			return $scope.iphone.use;
		};

		$scope.add1 = function(){
			return $scope.iphone.pass;
		}

		$scope.$watch($scope.add, function(newValue, oldValue) {
			$scope.use=newValue;
			

		});

		$scope.$watch($scope.add1, function(newValue, oldValue) {
			$scope.pass=newValue;
		});



	 // 触发一个按钮点击，或一些其他目标
	 $scope.submitAtive = function(){
	 	console.log ($scope.use);
	  	if($scope.use==""){
	  		$scope.useName="账号不能为空";
	  		 $scope.submitAtive2();
	  	}else if($scope.pass==""){
	  		$scope.useName="密码不能为空";
	  		 $scope.submitAtive2();
	  	}else{
	  			$scope.modal.hide();
	  	}
	  }	


	  $scope.submitAtive2 = function() {
	  	 // 一个精心制作的自定义弹窗
		   var myPopup = $ionicPopup.show({
		     template: '<div class="tip">{{useName}}</div>',
		      title: '提示',
		     scope: $scope,
		   });
		   myPopup.then(function(res) {
		     console.log('Tapped!', res);
		   });
		   $timeout(function() {
		      myPopup.close(); //由于某种原因3秒后关闭弹出
		   }, 3000);
	  	}
		
}])