//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import react from "prop-types";

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
			<div className="five">{props.digitFive}</div>
			<div className="four">{props.digitFour}</div>
			<div className="three">{props.digitTree}</div>
			<div className="two">{props.digitTwo}</div>
			<div className="one">{props.digitOne}</div>
		</div>
	);
}
//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
