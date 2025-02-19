document.addEventListener('DOMContentLoaded', () => {
    const movieInput = document.getElementById('movieInput');
    const addMovieButton = document.getElementById('addMovieButton');
    const movieList = document.getElementById('movieList');
    const movieCount = document.getElementById('movieCount');
    const clearListBtn = document.getElementById('clearListBtn');

    let movies = [];

    addMovieButton.addEventListener('click', () => {
        const movieName = movieInput.value.trim();
        if (movieName !== '') {
            movies.push(movieName);
            movieInput.value = '';
            updateMovieList();
        } else {
            alert('Please enter a movie name!');
        }
    });

    movieList.addEventListener('click', (e) => {
        if (e.target && e.target.nodeName === 'LI') {
            const movieName = e.target.textContent;
            movies = movies.filter(movie => movie !== movieName);
            updateMovieList();
        }
    });

    clearListBtn.addEventListener('click', () => {
        movies = [];
        updateMovieList();
    });

    function updateMovieList() {
        movieList.innerHTML = '';
        movies.forEach(movie => {
            const li = document.createElement('li');
            li.textContent = movie;
            movieList.appendChild(li);
        });
        movieCount.textContent = `Total Movies: ${movies.length}`;
    }
});
