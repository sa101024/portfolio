import React from 'react';
import Apps from './Apps';

const WorksPage = () => {
	return (
		<div className="content__container">
			<h2 className="content__title">Works</h2>
				<div className="content__widget apps">
					<Apps />
				</div>
		</div>
	)
}

export default WorksPage;
