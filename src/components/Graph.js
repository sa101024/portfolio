import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';

const Graph = () => {

	const langs = [
		{title: 'JavaScript', icon: faJs, bar: 150, height: 50},
		{title: 'React', icon: faReact, bar: 180, height: 20},
		{title: 'HTML', icon: faHtml5, bar: 150, height: 50},
		{title: 'CSS', icon: faCss3Alt, bar: 120, height: 80},
		{title: 'Sass', icon: faSass, bar: 150, height: 50},
		{title: 'Java', icon: faJava, bar: 100, height: 100}
	];

	return (
		langs.map((lang) => (
			<div className="graph__module" key={lang.title}>
				<div className="graph__module--bar">
					<div className="graph__module--bar-height" style={{height: lang.bar, top: lang.height }}></div>
				</div>
				<div className="graph__module--title">{lang.title}</div>
				<FontAwesomeIcon className="graph__module--icon" icon={lang.icon} />
			</div>
		)
	))
}

export default Graph;
