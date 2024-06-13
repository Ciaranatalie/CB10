import { API_TOKEN, API_KEY } from './key.js';

document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = 'https://api.themoviedb.org/3';
    const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';
    const moviesContainer = document.getElementById('movies');
    const searchBar = document.getElementById('searchBar');
    const nextPageButton = document.getElementById('nextPage');
    const prevPageButton = document.getElementById('prevPage');
    const typeSelect = document.getElementById('typeSelect');
    const genreSelect = document.getElementById('genreSelect');

    let allMovies = [];
    let currentPage = 1;
    let currentType = 'movie';
    let currentGenre = '';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    };

    async function fetchData(url, options) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            handleFetchError(error, moviesContainer);
        }
    }

    async function loadMovies() {
        let MOVIES_URL = `${BASE_URL}/${currentType}/popular?language=en-US&page=${currentPage}`;
        if (currentGenre) {
            MOVIES_URL = `${BASE_URL}/discover/${currentType}?with_genres=${currentGenre}&language=en-US&page=${currentPage}`;
        }
        const data = await fetchData(MOVIES_URL, options);
        if (data) {
            allMovies = data.results;
            displayMovies(allMovies, moviesContainer, IMG_BASE_URL);
        }
    }

    async function loadGenres() {
        const GENRE_URL = `${BASE_URL}/genre/${currentType}/list?language=en-US`;
        const data = await fetchData(GENRE_URL, options);
        if (data) {
            const genres = data.genres;
            genreSelect.innerHTML = '<option value="">Seleziona genere</option>'; 
            genres.forEach(genre => {
                const option = document.createElement('option');
                option.value = genre.id;
                option.textContent = genre.name;
                genreSelect.appendChild(option);
            });
        }
    }

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMovies = allMovies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        displayMovies(filteredMovies, moviesContainer, IMG_BASE_URL);
    });

    nextPageButton.addEventListener('click', () => {
        currentPage++;
        loadMovies();
    });

    prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            loadMovies();
        }
    });

    typeSelect.addEventListener('change', (e) => {
        currentType = e.target.value;
        currentPage = 1;
        currentGenre = '';
        genreSelect.innerHTML = '<option value="">Seleziona genere</option>';
        loadGenres();
        loadMovies();
    });

    genreSelect.addEventListener('change', (e) => {
        currentGenre = e.target.value;
        currentPage = 1;
        loadMovies();
    });

    loadGenres();
    loadMovies();
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
