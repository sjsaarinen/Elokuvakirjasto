MovieApp.controller('FindMoviesController', function ($scope, OmdbService) {
    $scope.movies = '';
    $scope.findMovie = function () {
        OmdbService.findMovie($scope.movieName, $scope.movieYear).success(function (movies) {
            $scope.found = false;
            $scope.notfound = false;
            $scope.movies = '';
            var movies = movies.Search;
            if (movies){
                $scope.found = true;
                $scope.findcount = movies.length;
                $scope.movies = movies;
            } else {
                $scope.notfound = true;
            }
            $scope.movieName = '';
            $scope.movieYear = '';
        });
    };

});