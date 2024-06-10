import {API_TOKEN, API_KEY} from './key.js';

document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = 'https://api.themoviedb.org/3';
    const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'; 
    const moviesContainer = document.getElementById('movies'); 
    const searchBar = document.getElementById('searchBar'); 
    const nextPageButton = document.getElementById('nextPage'); 
    const prevPageButton = document.getElementById('prevPage'); 
    const typeSelect = document.getElementById('typeSelect');

    let allMovies = [];
    let currentPage = 1;
    let currentType = 'movie'; 


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    };

    // Funzione asincrona per eseguire la richiesta fetch e gestire eventuali errori
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

    // Funzione asincrona per caricare i film basati sulla pagina corrente e il tipo di dati
    async function loadMovies() {
        const MOVIES_URL = `${BASE_URL}/${currentType}/popular?language=en-US&page=${currentPage}`;
        const data = await fetchData(MOVIES_URL, options);
        if (data) {
            allMovies = data.results; // Aggiorna l'array dei film
            displayMovies(allMovies, moviesContainer, IMG_BASE_URL); // Visualizza i film nel contenitore
        }
    }

    // Event listener per la barra di ricerca
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMovies = allMovies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        displayMovies(filteredMovies, moviesContainer, IMG_BASE_URL); // Visualizza i film filtrati
    });

    // Event listener per il pulsante della pagina successiva
    nextPageButton.addEventListener('click', () => {
        currentPage++;
        loadMovies(); 
    });

    // Event listener per il pulsante della pagina precedente
    prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            loadMovies(); 
        }
    });

    // Event listener per il selettore del tipo di dati
    typeSelect.addEventListener('change', (e) => {
        currentType = e.target.value;
        currentPage = 1; 
        loadMovies(); 
    });

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

// Faccio una funzione per gestire gli errori e mostrare un messaggio di errore
function handleFetchError(error, container) {
    console.error('Fetch error:', error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Nessun film, riprova più tardi!';
    errorMessage.style.color = 'red';
    container.appendChild(errorMessage); 
}
