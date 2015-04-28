MovieApp.controller('ShowMovieController', function($scope, FirebaseService, $routeParams){
    $scope.moviekey = $routeParams.key;
    FirebaseService.getMovie($routeParams.key, function(data){
        $scope.movie = data;
    });
});