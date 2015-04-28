describe('Movie list', function(){
	var controller, scope;

	var FirebaseServiceMock;

  	beforeEach(function(){
  		// Lisää moduulisi nimi tähän
    	module('MovieApp');

    	FirebaseServiceMock = (function(){
            var movies = [
                {
                    name: 'Commando',
                    director: 'Mark L. Lester',
                    year: '1985',
                    description: 'A retired elite Black Ops Commando launches a one man war against a group of South American criminals'
                },
                {
                    name: 'Red Dawn',
                    director: 'John Milius',
                    year: '1984',
                    description: 'In mid-western America, a group of teenagers bands together to defend their town, and their country, from invading Soviet forces'
                }
            ];
            
            return {
                addMovie: function(movie){
                    movies.push(movie);
                },
                getMovies: function(){
                    return movies;
                }
            };
        })();

	// Lisää vakoilijat
	spyOn(FirebaseServiceMock, 'getMovies').and.callThrough();

    	// Injektoi toteuttamasi kontrolleri tähän
	    inject(function($controller, $rootScope) {
	      scope = $rootScope.$new();
	      // Muista vaihtaa oikea kontrollerin nimi!
	      controller = $controller('ListMoviesController', {
	        $scope: scope,
	        FirebaseService: FirebaseServiceMock
	      });
	    });
  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/*
  	* Testaa, että Firebasesta (mockilta) saadut elokuvat löytyvät konrollerista
  	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
  	*/ 
	it('should list all movies from the Firebase', function(){
            expect(FirebaseServiceMock.getMovies).toHaveBeenCalled();
            expect(scope.movies[0].name).toBe('Commando');
            expect(scope.movies[0].director).toBe('Mark L. Lester');
            expect(scope.movies[0].year).toBe('1985');
            expect(scope.movies[0].description).toBe('A retired elite Black Ops Commando launches a one man war against a group of South American criminals');
            expect(scope.movies[1].name).toBe('Red Dawn');
            expect(scope.movies[1].director).toBe('John Milius');
            expect(scope.movies[1].year).toBe('1984');
            expect(scope.movies[1].description).toBe('In mid-western America, a group of teenagers bands together to defend their town, and their country, from invading Soviet forces');
        });

	/* 
	* Testaa, että elokuvan pystyy poistamaan Firebasesta.
	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
	*/
	it('should be able to remove a movie', function(){
		expect(true).toBe(false);
	});
});