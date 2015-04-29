describe('Edit movie', function () {
    var controller, scope;

    var FirebaseServiceMock, RouteParamsMock;

    beforeEach(function () {
        // Lisää moduulisi nimi tähän
        module('MovieApp');

        FirebaseServiceMock = (function () {
            return {
                // Toteuta FirebaseServicen mockatut metodit tähän
                getMovie: function (key, done) {
                    if (key == 'abc123') {
                        done({
                            name: 'The Toxic Avenger',
                            director: 'Michael Herz',
                            year: 1984,
                            description: 'Tromaville has a monstrous new hero.'
                        });
                    } else {
                        done(null);
                    }
                },
                editMovie: function(movie){
                    
                }
            };
        })();

        RouteParamsMock = (function () {
            return {
                key: 'abc123'
            };
        })();

        // Lisää vakoilijat
        spyOn(FirebaseServiceMock, 'getMovie').and.callThrough();
        spyOn(FirebaseServiceMock, 'editMovie').and.callThrough();

        // Injektoi toteuttamasi kontrolleri tähän
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            // Muista vaihtaa oikea kontrollerin nimi!
            controller = $controller('EditMovieController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock,
                $routeParams: RouteParamsMock
            });
        });
    });

    /*
     * Testaa alla esitettyjä toimintoja kontrollerissasi
     */

    /*
     * Testaa, että muokkauslomakkeen tiedot täytetään muokattavan elokuvan tiedoilla.
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should fill the edit form with the current information about the movie', function () {
        expect(FirebaseServiceMock.getMovie).toHaveBeenCalled();
        expect(scope.movie.name).toBe('The Toxic Avenger');
        expect(scope.movie.director).toBe('Michael Herz');
        expect(scope.movie.year).toBe(1984);
        expect(scope.movie.description).toBe('Tromaville has a monstrous new hero.');
    });

    /* 
     * Testaa, että käyttäjä pystyy muokkaamaan elokuvaa, jos tiedot ovat oikeat
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should be able to edit a movie by its name, director, release date and description', function () {
        scope.movie.name = 'Radioactive Avenger';
        scope.saveMovie(scope.movie);
        expect(FirebaseServiceMock.editMovie).toHaveBeenCalled();
    });

    /*
     * Testaa, ettei käyttäjä pysty muokkaaman elokuvaa, jos tiedot eivät ole oikeat
     * Testaa myös, että Firebasea käyttävästä palvelusta ei kutsuta muokkaus-funktiota,
     * käyttämällä not.toBeCalled-oletusta.
     */
    it('should not be able to edit a movie if its name, director, release date or description is empty', function () {
        scope.movie.name = '';
        scope.saveMovie(scope.movie);
        expect(FirebaseServiceMock.editMovie).not.toHaveBeenCalled();
        scope.movie.name = 'foobar';
        scope.movie.director = '';
        scope.saveMovie(scope.movie);
        expect(FirebaseServiceMock.editMovie).not.toHaveBeenCalled();
        scope.movie.name = 'foobar';
        scope.movie.director = 'foobar';
        scope.movie.year = '';
        scope.saveMovie(scope.movie);
        expect(FirebaseServiceMock.editMovie).not.toHaveBeenCalled();
        scope.movie.name = 'foobar';
        scope.movie.director = 'foobar';
        scope.movie.year = 1234;
        scope.movie.description = '';
        scope.saveMovie(scope.movie);
        expect(FirebaseServiceMock.editMovie).not.toHaveBeenCalled();
    });
});