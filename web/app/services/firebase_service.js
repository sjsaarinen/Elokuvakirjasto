MovieApp.service('FirebaseService', function($firebase){
    var firebaseRef = new Firebase('https://flickering-torch-5600.firebaseio.com/movies');
    var sync = $firebase(firebaseRef);
    var movies = sync.$asArray();

    this.getMovies = function(){
        return movies;
    };
    
    this.addMovie = function(movie){
        movies.$add(movie);
    };
});
