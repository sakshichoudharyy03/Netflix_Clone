// api key from TMDB
const api = "api_key=1cde05e220d36e3423ce52abfba69207";

// base url of the site
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";

const img_url = "https://image.tmdb.org/t/p/w300"; // 185 og netflix ( image size )

// requests for movies data

const requests = {

    fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};


// used to truncate the string
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

//banner
fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())

    .then((data) => {
        console.log(data.results);
        // with every refresh the movie will change

        const setMovie =
            data.results[Math.floor(Math.random() * data.results.length - 1)];
        
        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner-title");
        var banner_desc = document.getElementById("banner-description");

        banner.style.backgroundImage =
            "url(" + banner_url + setMovie.backdrop_path + ")";
        
        banner_desc.innerText = truncate(setMovie.overview, 150);
        // only 150 words to be accepted
        banner_title.innerText = setMovie.name;
        
    })

//movies rows
fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())
    
    .then((data) => {
        const headRow = document.getElementById("headRow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headRow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row-title";
        title.innerHTML = "Netflix Originals";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row-posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            
            const poster = document.createElement("img");
            poster.className = "row-posterLarge";

            var s = movie.name.replace(/\s+/g, "");
            // so that data is replaced one after the other

            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });

    });

// popular
fetch(requests.fetchPopular)
.then((res) => res.json())

.then((data) => {
    const headRow = document.getElementById("headRow");
    const row = document.createElement("div");

    row.className = "row";
    row.classList.add("popularrow");

    headRow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row-title";
    title.innerHTML = "Popular Movies";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row-posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        
        const poster = document.createElement("img");
        poster.className = "row-posterLarge";

        var s = movie.id;
        poster.id = s;
        poster.src = img_url + movie.poster_path;
        row_posters.appendChild(poster);
    });

});
    
// trending
fetch(requests.fetchTrending)
.then((res) => res.json())

.then((data) => {
    const headRow = document.getElementById("headRow");
    const row = document.createElement("div");

    row.className = "row";
    // row.classList.add("netflixrow");

    headRow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row-title";
    title.innerHTML = "Trending Now";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row-posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        
        const poster = document.createElement("img");
        poster.className = "row-posterLarge";

        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.poster_path;
        row_posters.appendChild(poster);
    });

});

// action
fetch(requests.fetchActionMovies)
.then((res) => res.json())

.then((data) => {
    const headRow = document.getElementById("headRow");
    const row = document.createElement("div");

    row.className = "row";
    // row.classList.add("netflixrow");

    headRow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row-title";
    title.innerHTML = "Action Movies";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row-posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        
        const poster = document.createElement("img");
        poster.className = "row-poster";

        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });

});

// comedy
fetch(requests.fetchComedyMovies)
.then((res) => res.json())

.then((data) => {
    const headRow = document.getElementById("headRow");
    const row = document.createElement("div");

    row.className = "row";
    // row.classList.add("netflixrow");

    headRow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row-title";
    title.innerHTML = "Comedy Movies";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row-posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row-poster";

        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });

});

// Horror
fetch(requests.fetchHorrorMovies)
.then((res) => res.json())

.then((data) => {
    const headRow = document.getElementById("headRow");
    const row = document.createElement("div");

    row.className = "row";
    // row.classList.add("netflixrow");

    headRow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row-title";
    title.innerHTML = "Horror Movies";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row-posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        
        const poster = document.createElement("img");
        poster.className = "row-poster";

        var s2 = movie.id;
        // so that data is replaced one after the other

        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });

});

// Romance
fetch(requests.fetchRomanceMovies)
.then((res) => res.json())

.then((data) => {
    const headRow = document.getElementById("headRow");
    const row = document.createElement("div");

    row.className = "row";
    // row.classList.add("netflixrow");

    headRow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row-title";
    title.innerHTML = "Romance Movies";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row-posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        
        const poster = document.createElement("img");
        poster.className = "row-poster";

        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });

});

// Documentaries
fetch(requests.fetchDocumentaries)
.then((res) => res.json())

.then((data) => {
    const headRow = document.getElementById("headRow");
    const row = document.createElement("div");

    row.className = "row";
    // row.classList.add("netflixrow");

    headRow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row-title";
    title.innerHTML = "Documentaries";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row-posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
        
        const poster = document.createElement("img");
        poster.className = "row-posterLarge";

        var s2 = movie.id;
        // so that data is replaced one after the other

        poster.id = s2;
        poster.src = img_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    });

});