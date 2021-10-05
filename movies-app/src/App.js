import "./App.css";
import { useEffect, useState } from "react";
import CardMovie from "./components/CardMovie/CardMovie";

const axios = require("axios");
const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query="; //+ searchTerm;

function App() {
	let [movies, setMovies] = useState([{ id: "1", poster_src: "https://i.imgur.com/uVtO7J0.jpg", title: "The Avengers", overview: "Eyy si" }]);

	useEffect(() => {
		searchMovie("A");
	}, []);

	function searchMovie(searchTerm) {
		const url = urlString + searchTerm;
		console.log("url: " + url);
		axios
			.get(url)
			.then((res) => {
				console.log("todo joya pa:");
				console.log(res);
				setMovies(res.data.results);
			})
			.catch((error) => {
				console.log("an error ocurred");
			})
			.then(function () {
				console.log("¿...?");
			});
	}

	function handleChange(e) {
		searchMovie(e.target.value);
	}

	return (
		<div className="App">
			<header>
				<p></p>
				<h1>MoviesDB Search</h1>
				<p id="mark">
					{" "}
					<b>
						<i> &lt;p&gt; </i>
					</b>
					Developed by Emiliano Russo{" "}
					<b>
						<i> &lt;/p&gt;</i>
					</b>
				</p>
			</header>
			<input type="text" onChange={handleChange} placeholder="Movie Name..." />
			<main id="MoviesContainer">
				{movies.map((movie) => {
					return <CardMovie key={movie.id} id={movie.id} img={movie.poster_path} title={movie.title} overview={movie.overview} rating={movie.vote_average} year={movie.release_date} />;
				})}
			</main>
		</div>
	);
}

export default App;
