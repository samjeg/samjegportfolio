import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import * as serviceWorker from '../serviceWorker';

class About extends React.Component {

	render () {
		return (
			<section className="title_component">
				<h1 className="page_title">
				    About Me
				</h1>
			</section>
			<section className="description_component">
				<h2 className="description_title">
				    Who I am
				</h2>
				<p className="description_intro">
					My name is Sam, I'm training to be a Software Developer, I live London, UK
				</p>
				<p className="description_desc">
					Always working on software project to build my software engineering skills 
					and researching new information about software engineering to expand my current knowlegde   
				</p>
				<p className="description_project">
					My name is Sam, I'm training to be a Software Developer, I live London, UK
				</p>
			</section>
		);
	}
}

export default About;