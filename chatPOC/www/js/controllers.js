angular.module('starter.controllers', [])


.controller('LoginCtrl', function($scope, $ionicModal, $state){
  console.log("At login page");
  
  $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope
}).then(function (modal) {
    $scope.modal = modal;
});

$scope.createUser = function (user) {

}

$scope.signIn = function () {
    $state.go('tab.rooms');
}
  
})



.controller('DashCtrl', function($scope) {})

.controller('RoomsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('RoomChatCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('InfoCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
