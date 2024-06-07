import {API_TOKEN, API_KEY} from './key.js';

document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = 'https://api.themoviedb.org/3';
    const MOVIES_URL = `${BASE_URL}/movie/popular?language=en-US&page=1`;
    const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';
    const moviesContainer = document.getElementById('movies');
    const searchBar = document.getElementById('searchBar');

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    };

    let allMovies = [];

    fetch(MOVIES_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            allMovies = data.results;
            displayMovies(allMovies, moviesContainer, IMG_BASE_URL);
        })
        .catch(error => {
            handleFetchError(error, moviesContainer);
        });

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMovies = allMovies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        displayMovies(filteredMovies, moviesContainer, IMG_BASE_URL);
    });
});

function displayMovies(movies, container, imgBaseUrl) {
    container.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('card');

        const movieImg = document.createElement('img');
        movieImg.src = `${imgBaseUrl}${movie.poster_path}`;
        movieImg.alt = movie.title;

        const movieTitle = document.createElement('h2');
        movieTitle.textContent = movie.title;

        const movieOverview = document.createElement('p');
        movieOverview.textContent = movie.overview;

        movieCard.append(movieImg, movieTitle, movieOverview);
        container.appendChild(movieCard);
    });
}

function handleFetchError(error, container) {
    console.error('Fetch error:', error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Nessun film, riprova più tardi!';
    errorMessage.style.color = 'red';
    container.appendChild(errorMessage);
}
