MovieApp.controller('EditMovieController', function($scope, $location, FirebaseService, $routeParams){
    FirebaseService.getMovie($routeParams.key, function(data){
        $scope.movie = data;
    });
    $scope.saveMovie = function(){
        if($scope.movie.name != '' && $scope.movie.director != "" && $scope.movie.year != '' && $scope.movie.description != ''){
            FirebaseService.editMovie($scope.movie);
        }
        $location.path('/movies/' + $routeParams.key);
    };
});

