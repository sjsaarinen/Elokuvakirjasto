var MovieApp = angular.module('MovieApp', ['firebase', 'ngRoute']);

MovieApp.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'ListMoviesController',
                templateUrl: 'app/views/listMovies.html'
            })
            .when('/movies', {
                controller: 'ListMoviesController',
                templateUrl: 'app/views/listMovies.html'
            })
            .when('/movies/new', {
                controller: 'AddMovieController',
                templateUrl: 'app/views/addMovie.html',
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            })
            .when('/movies/find', {
                controller: 'FindMoviesController',
                templateUrl: 'app/views/findMovies.html'
            })
            .when('/movies/:key', {
                controller: 'ShowMovieController',
                templateUrl: 'app/views/showMovie.html'
            })
            .when('/movies/:key/edit', {
                controller: 'EditMovieController',
                templateUrl: 'app/views/editMovie.html',
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            })
            .when('/login', {
                controller: 'UserController',
                templateUrl: 'app/views/login.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});

MovieApp.config(['$httpProvider', function ($httpProvider) {
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
    }]);

MovieApp.run(function (AuthenticationService, $rootScope) {
    $rootScope.logOut = function () {
        AuthenticationService.logUserOut();
    };

    $rootScope.userLoggedIn = AuthenticationService.getUserLoggedIn();
});