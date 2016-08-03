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
<<<<<<< HEAD
        controller: 'settingsCtrl'
=======
        controller: 'settings_controller'
>>>>>>> 0e0ce997e2ac896053645e1f987639df900e86a8
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

<<<<<<< HEAD
  .state('tabsController.personalPreferences', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/personalPreferences.html',
        controller: 'personalPreferencesCtrl'
      }
    }
  })
=======
//  .state('tabsController.personalPreferences', {
//    url: '/page6',
//    views: {
//      'tab3': {
//        templateUrl: 'templates/personalPreferences.html',
//        controller: 'personalPreferencesCtrl'
//      }
//    }
//  })
>>>>>>> 0e0ce997e2ac896053645e1f987639df900e86a8

$urlRouterProvider.otherwise('/page1/page2')

  

});