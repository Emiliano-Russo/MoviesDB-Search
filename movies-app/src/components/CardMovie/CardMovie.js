import "./CardMovie.css";

function CardMovie(props) {
	console.log("movie img: " + props.img);
	const IMG = "https://image.tmdb.org/t/p/w185" + props.img;

	function viewMovie() {
		const url = "https://www.themoviedb.org/movie/" + props.id;
		var win = window.open(url, "_blank");
		win.focus();
	}

	return (
		<div className="CardMovie" onClick={viewMovie}>
			<h1>{props.title}</h1>
			<div id="ImgOverview">
				<img src={IMG} alt="MovieImg"></img>
				<p>{props.overview}</p>
			</div>
		</div>
	);
}

export default CardMovie;
