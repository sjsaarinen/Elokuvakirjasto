MovieApp.controller('ListMoviesController', function($scope, FirebaseService){
    $scope.movies = FirebaseService.getMovies();
    
    $scope.removeMovie = function(movie){
        console.log(movie);
        FirebaseService.removeMovie(movie);
    };
});
