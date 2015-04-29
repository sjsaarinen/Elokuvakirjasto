var MovieApp = angular.module('MovieApp', ['firebase', 'ngRoute']);

MovieApp.config(function($routeProvider){
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
        templateUrl: 'app/views/addMovie.html'
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
        templateUrl: 'app/views/editMovie.html'
    })
    .otherwise({
        redirectTo: '/'
    });;
});

MovieApp.config(['$httpProvider', function($httpProvider) {
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);