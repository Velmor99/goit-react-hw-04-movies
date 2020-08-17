const fetchForHome = function () {
    return (
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=37e6723ba2b6d898417f004928a3c09b')
        .then((response) => response.json())
    )
    
};

const fetchForMovies = function (query) {
    return (
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=37e6723ba2b6d898417f004928a3c09b&language=en-US&query=${query}&page=1&include_adult=false`
        )
            .then((response) => response.json())
    );
};

const fetchForOneMovie = function (query) {
    return(
        fetch(
            `https://api.themoviedb.org/3/movie/${query}?api_key=37e6723ba2b6d898417f004928a3c09b&language=en-US`
        )
            .then((response) => response.json())
    )
    
}

export default {
    fetchForHome,
    fetchForMovies,
    fetchForOneMovie
}