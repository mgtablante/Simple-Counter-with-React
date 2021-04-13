//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div className="container">
			<div className="clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="five">{props.digitFive % 10}</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitTree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitTree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(five, four, three, two, one);

	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitTree={three}
			digitFour={four}
			digitFive={five}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
