MovieApp.controller('AddMovieController', function($scope, $location, currentAuth, FirebaseService){
    if(!currentAuth){
        $location.path('/login');
    }
    $scope.movies = FirebaseService.getMovies();
    $scope.movieName = '';
    $scope.movieDirector = '';
    $scope.movieYear = '';
    $scope.movieDescription = '';
    
    $scope.addMovie = function(){
        if($scope.movieName != '' && $scope.movieDirector != "" && $scope.movieYear != '' && $scope.movieDescription != '') 
        FirebaseService.addMovie({
            name: $scope.movieName,
            director: $scope.movieDirector,
            year: $scope.movieYear,
            description: $scope.movieDescription
        });
        $scope.movieName = '';
        $scope.movieDirector = '';
        $scope.movieYear = '';
        $scope.movieDescription = '';
        $location.path('/movies');
    };
});
