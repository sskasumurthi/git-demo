'use strict';

/**
 * @ngdoc overview
 * @name firstJsAppApp
 * @description
 * # firstJsAppApp
 *
 * Main module of the application.
 */
angular
  .module('firstJsAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name firstJsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstJsAppApp
 */
angular.module('firstJsAppApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name firstJsAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the firstJsAppApp
 */
angular.module('firstJsAppApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
