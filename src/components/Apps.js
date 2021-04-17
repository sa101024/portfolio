import React from 'react';
import TodoAppImg from '../images/todo-app.png';
import TrailerAppImg from '../images/trailer-app.png';

const Apps = () => {

	const apps = [
		{
			url: 'https://gifted-poitras-b3fd86.netlify.app/',
			img: TodoAppImg,
			title: 'Todo List App',
			explan: 'React、Redux-Toolkitを利用したTodoアプリ。redux-localstorage-simpleでlocal storageにデータ保存。レスポンシブ対応済み。Netlifyにdeploy。',
			tools: ['Node.js', 'React', 'Redux-Toolkit', 'redux-localstorage-simple', 'Sass' ]
		},
		{
			url: 'https://modest-bassi-d81214.netlify.app/',
			img: TrailerAppImg,
			title: 'Youtube Trailer Search App',
			explan: 'React、Youtube-APIを利用した映画予告編検索アプリ。レスポンシブ対応済み。Netlifyにdeploy。',
			tools: ['Node.js', 'React', 'Youtube API', 'Sass']
		}
	];
	
	return (
		apps.map((app) => (
			<div className="app">
				<a href={app.url} target="brank" rel="noopener noreferrer">
					<div key={app.url}>
						<img className="app__img" src={app.img} alt="app" />
						<div className="app__text">
							<div className="app__text--title">{app.title}</div>
							<div className="app__text--explan">{app.explan}</div>
							<div className="app__text--tool-list">
								{app.tools.map((tool)=> (
									<div key={tool}>
										<ul>
											<li>
												{tool}
											</li>
										</ul>
									</div>
								))}
							</div>
						</div>
					</div>
				</a>
			</div>
		)
	))
}

export default Apps;
