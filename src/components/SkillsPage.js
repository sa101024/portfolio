import React from 'react';
import Graph from './Graph';

const SkillsPage = () => {
	return (
		<div className="content__container">
			<h2 className="content__title">Skill Set</h2>
			<div className="content__widget">
				<div className="graph">
				<Graph />
				</div>
			</div>
		</div>
	)
}

export default SkillsPage;
