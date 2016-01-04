import React from 'react';
import { Link } from 'react-router'

module.exports = class extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
		      <div>
	        	<div className="alert alert-warning">page 1</div>
	        	<Link to={"/page2"}>page 2</Link>
	        </div>)
	}
}