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
    .otherwise({
        redirectTo: '/'
    });;
});