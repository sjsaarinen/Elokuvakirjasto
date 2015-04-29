MovieApp.controller('ListMoviesController', function($scope, $rootScope, AuthenticationService, FirebaseService){
    $rootScope.userLoggedIn = AuthenticationService.getUserLoggedIn();
    
    $scope.movies = FirebaseService.getMovies();
    
    $scope.removeMovie = function(movie){
        console.log(movie);
        FirebaseService.removeMovie(movie);
    };
});
