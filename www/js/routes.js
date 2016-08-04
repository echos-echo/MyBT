angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.temperature', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/temperature.html',
        controller: 'temperatureCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settings_controller'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.suggestions', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/suggestions.html',
        controller: 'suggestionsCtrl'
      }
    }
  })

//  .state('tabsController.personalPreferences', {
//    url: '/page6',
//    views: {
//      'tab3': {
//        templateUrl: 'templates/personalPreferences.html',
//        controller: 'personalPreferencesCtrl'
//      }
//    }
//  })

$urlRouterProvider.otherwise('/page1/page2')

  

});