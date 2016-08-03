// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.controller ("app_controller", function($scope){
    
    $scope.temp = 72;
    $scope.heat = " ";
    $scope.current_temp = 80;
    $scope.warm_temp = document.getElementById("warm");
    
    
    $scope.set_temp = function(){
        switch($scope.heat){
                case "Warm":
                $scope.temp = 99;
                break;
                case "Warmer":
                $scope.temp = 110;
                break;
                case "Hot":
                $scope.temp = 120;
                break;
                case "Steaming":
                $scope.temp = 200;
                break;
                case "Boiling":
                $scope.temp = 212;
                break;   
        }
    }
    
//    $scope.check_temp = function(){
//        if($scope.current_temp > $scope.temp){
//            alert("No temperature lower than current temperature can be set.");   
//        } 
//
//        if(typeof $scope.temp == 'undefined'){
//            alert("Temperature is out of range.");
//        }
//    };
    function check_range(){
        if(typeof $scope.temp == 'undefined'){
            alert("Temperature is out of range.");
        }
    };  
    $scope.check_temp = function(){
        if($scope.current_temp > $scope.temp){
            alert("No temperature lower than current temperature can be set.");   
        }
        check_range();
    };
    
    
    
})