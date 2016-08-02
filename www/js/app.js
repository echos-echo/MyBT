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


.controller ("settings_controller", function($scope, Settings){

    //Setting
    $scope.temp_type;
    
    //Personal Preferences
    $scope.personal_warm = 99;
    $scope.personal_warmer;
    $scope.personal_hot;
    $scope.personal_steaming;
    
    $scope.save = function(){
        console.log($scope.personal_warm);
        Settings.warm = $scope.personal_warm;
        console.log(Settings.warm);
        Settings.warmer = $scope.personal_warmer;
        Settings.hot = $scope.personal_hot;
        Settings.steaming = $scope.personal_steaming;
        
    };

})




.controller ("app_controller", function($scope, Settings){
    
    
    
    //Temperature
    $scope.temp = 72;
    $scope.heat = " ";
    $scope.current_temp = 80;

    //    $scope.warm_temp = document.getElementById("warm");    
    
    
    //Setting and Temperature - changes temp in input based on preset value and temp type
    $scope.set_temp = function(){
        console.log(Settings.warm);
        switch($scope.heat){
                case "Warm":
                    $scope.temp = Settings.warm;
                break;
                case "Warmer":
                    $scope.temp = Settings.warmer;
                break;
                case "Hot":
                    $scope.temp = Settings.hot;
                break;
                case "Steaming":
                    $scope.temp = Settings.steaming;
                break;
                case "Boiling":
                    $scope.temp = Settings.boiling;
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
    
    // Temp and Personal Pereferences - checks if user input is within range
    function check_range(){
        if(typeof $scope.temp == 'undefined'){
            alert("Temperature is out of range.");
        }
    };  
    
    // Temp - checks that user input is not lower than current temp
    $scope.check_temp = function(){
        if($scope.current_temp > $scope.temp){
            alert("No temperature lower than current temperature can be set.");   
        }
        check_range();
    };
    

})


.service("Settings", function(){
    /*
    var _temp;
    var _warm = 91;
    var _warmer;
    var _hot;
    var _steaming;
    var _temp_type;
    
    
    
    
    var get_temp = function(temp){
        _temp = temp;
    };
    
    var check_range = function(){
        if(typeof $scope.temp == 'undefined'){
            alert("Temperature is out of range.");
        }
    };
    */
    
    return {
      warm: 99,
      warmer: 110,
      hot: 120,
      steaming:200,
      boiling:212
    };
})