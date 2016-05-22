var React = require('react');
var {Link} = require('react-router');


var Example = (props) => {
		return (
			<div>
				<h1 className="text-center page-title">Examples</h1>
				<p>Here a few example locations to try out:</p>
				<ol>
					<li>
						<Link to="/?location=Tianjin">Tianjin</Link>
					</li>
					<li>
						<Link to="/?location=Hongkong">Hongkong</Link>
					</li>
				</ol>
			</div>
		);
	}

module.exports = Example;