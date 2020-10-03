import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import * as serviceWorker from '../serviceWorker';

class About extends React.Component {

	render () {
		return (
			<div>
				<section className="title_component">
					<h1 className="page_title">
					    About Me
					</h1>
				</section>
				<section className="desc_component">
				    <h2 className="desc_title">
				        Who I am
				    </h2>
					<ul className="desc_list">  
						<li><p>My name is Sam, I'm training to be a Software Developer, I live London, UK</p></li>
	                    <li><p className="desc_desc">
	                            Always working on software project to build my software engineering skills
	                            and researching new information about software engineering to expand my current knowlegde
	                        </p>
	                    </li>
						<li><p>My name is Sam, I'm training to be a Software Developer, I live London, UK</p></li>
					</ul>
				</section>
				<section className="adv_component">
				    <h2 className="adv_title">
				        Why work with me
				    </h2>
					<ul className="adv_list">  
						<li><p>My name is Sam, I'm training to be a Software Developer, I live London, UK</p></li>
	                    <li><p>
	                            Always working on software project to build my software engineering skills
	                            and researching new information about software engineering to expand my current knowlegde
	                        </p>
	                    </li>
					</ul>
				</section>		
			</div>
		);
	}
}

export default About;