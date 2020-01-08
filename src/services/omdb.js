import HttpClient from 'axios'

const Search = function (query) {
    return HttpClient.get('http://www.omdbapi.com/?apikey=b3410783&s=' + query)
}

const Details = function (imdbID) {
    return HttpClient.get('http://www.omdbapi.com/?apikey=b3410783&i=' + imdbID)
}

export default {
    Search, Details
}