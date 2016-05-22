var React = require('react');

var WeatherMessage = (props) => {
	var {temp, location} = props;
	var tempC = Math.round((temp - 32) / 1.8);

	return (
		<div>
			<h3 className="text-center"> It is {tempC}° in {location}</h3>
		</div>
	);	
};

module.exports = WeatherMessage;