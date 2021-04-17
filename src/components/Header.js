import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<div className="header">
				<div className="header__container">
					<h1 className="header__title">大岩 智子 / Satoko Oiwa</h1>
					<div className="header__menu">
						<NavLink className="header__menu__title" activeClassName="is-active" exact={true} to="/">About</NavLink>
						<NavLink className="header__menu__title" activeClassName="is-active" to="skills">Skill Set</NavLink>
						<NavLink className="header__menu__title" activeClassName="is-active" to="works">Works</NavLink>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;
