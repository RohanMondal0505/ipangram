import React from "react";
import "./App.scss";

const App = () => {
	return (
		<div className="container">
			<section className="firstSection">
        <button>Previous Week</button>
        <div className="currentDate">09-03-2023</div>
				<button>Next Week</button>
			</section>
			<section className="secondSection"></section>
			<section className="thirdSection"></section>
		</div>
	);
};

export default App;
