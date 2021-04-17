import React from 'react';
import GitHubImg from '../images/github.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const AboutPage = () => (

	<section>
		<div className="content__container">
			<h2 className="content__title">About</h2>

			<div className="content__widget about">
				<div className="about__github">
					<a className="about__link about__link--top" href="https://github.com/sa101024" target="blank">
						<img className="about__link--img" src={ GitHubImg } alt="github-icon" />
					</a>
					<a className="about__link about__link--bottom" href="https://github.com/sa101024" target="blank">
						<div className="about__link--btn">
							<div className="about__link--btn-text">GitHub</div>
							<FontAwesomeIcon icon={ faGithub } />
						</div>
					</a>
				</div>
				<div className="about__text">
					<p>2019年よりWebシステム開発会社にてプログラマーとして従事。<br/>Javaを使用した開発、テスト、システム改修、マニュアル作成を担当。</p>
					<p>その傍らUdemyやFreeCodeCamp等を利用し、JavaScript / React / Redux / Sass等を独学しています。<br/>Vimを使用。</p>
					<p>このサイトはReact / React Router / Sassを利用し、Netlifyにdeployしています。</p>
				</div>
			</div>
		</div>
	</section>
)

export default AboutPage;
