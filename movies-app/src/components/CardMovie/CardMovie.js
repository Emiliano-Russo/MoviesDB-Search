import "./CardMovie.css";
import React, { useState } from "react";

function CardMovie(props) {
	const [showOverview, setShowOverview] = useState(false);

	const IMG = "https://image.tmdb.org/t/p/w185" + props.img;

	function viewMovie() {
		const url = "https://www.themoviedb.org/movie/" + props.id;
		var win = window.open(url, "_blank");
		win.focus();
	}

	function hoverHanlder() {
		setShowOverview(true);
	}

	function mouseLeaveHanlder() {
		setShowOverview(false);
	}

	const movie = (
		<React.Fragment>
			<img src={IMG} alt="MovieImg"></img>
			<h3>{props.title}</h3>
		</React.Fragment>
	);

	const overview = <div id="Overview">{props.overview}</div>;

	return (
		<div className="CardMovie" onClick={viewMovie} onMouseOver={hoverHanlder} onMouseLeave={mouseLeaveHanlder}>
			{showOverview ? overview : movie}
			<p id="Rating">{props.rating}/10</p>
			{props.year === undefined ? null : <p id="Year">{props.year.slice(0, 4)}</p>}
		</div>
	);
}

export default CardMovie;
