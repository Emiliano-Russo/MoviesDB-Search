import "./App.css";
import { useEffect, useState } from "react";
import CardMovie from "./components/CardMovie/CardMovie";

const axios = require("axios");
const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query="; //+ searchTerm;

function App() {
	const [movies, setMovies] = useState([]);
	const [valueTyped, setValueTyped] = useState("a");

	useEffect(() => {
		setTimeout(() => {
			searchMovie(valueTyped);
		}, 500);
		return () => {
			clearTimeout();
		};
	}, [valueTyped]);

	function searchMovie(searchTerm) {
		if (searchTerm === "") searchTerm = "a";
		const url = urlString + searchTerm;
		console.log("url: " + url);
		axios
			.get(url)
			.then((res) => {
				console.log(res);
				setMovies(res.data.results);
			})
			.catch((error) => {
				console.log("an error ocurred");
				console.log(error);
			});
	}

	return (
		<div className="App">
			<header>
				<h1>MoviesDB</h1>
			</header>
			<input
				type="text"
				onChange={(e) =>
					setValueTyped((prev) => {
						setMovies([]);
						return e.target.value;
					})
				}
				placeholder="Movie Name..."
			/>
			<main id="MoviesContainer">
				{movies.length !== 0 ? (
					movies.map((movie) => {
						return <CardMovie key={movie.id} id={movie.id} img={movie.poster_path} title={movie.title} overview={movie.overview} rating={movie.vote_average} year={movie.release_date} />;
					})
				) : (
					<div className="loader"></div>
				)}
			</main>
		</div>
	);
}

export default App;
