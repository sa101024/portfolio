import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
	<footer>
		<div className="footer">
			<a className="footer__link" href="https://github.com/sa101024" target="blank">
				<FontAwesomeIcon icon={ faGithub } />
				<div className="footer__name">/sa101024</div>
			</a>
		</div>
	</footer>
)

export default Footer;
