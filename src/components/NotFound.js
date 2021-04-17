import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
	const history = useHistory();

	const toHome = () => {
		history.replace('/')	
	}

	return(
		<div>
			<div>
			<h2>404</h2>
			<button
				onClick={toHome}
			>
				Home
			</button>
			</div>
		</div>
	)
}

export default NotFound;
