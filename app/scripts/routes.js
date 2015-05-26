// Configure Routes
weatherApp.config(function ($routeProvider) {
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
    })
    
    .when('/weather', {
        templateUrl: 'views/weather.html',
        controller: 'weatherController'
    })
    
    .when('/weather/:days', {
        templateUrl: 'views/weather.html',
        controller: 'weatherController'
    });
});