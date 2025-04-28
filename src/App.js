import React from 'react';
import Timeline from './timeline.js';
class App extends React.Component {
	render() {
		return (
			<div className='flex-container'>
				<span id='about'>
					<strong>About</strong>
					<p>Efficient software engineer and problem solver.</p>
					<p>
						Positive attitude and easy to work with. Always looking
						to learn.
					</p>
					<p>
						Interested in using AI to build better software.
					</p>
					<strong>Skills</strong>
					<br />
					<ul className='skills'>
						<li>AWS</li>
						<li>Python</li>
						<li>JavaScript</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>React</li>
					</ul>
					<ul className='skills'>
						<li>Angular</li>
						<li>Node.js</li>
						<li>SQL</li>
						<li>Tableau</li>
						<li>Highcharts</li>
						<li>Chart.js</li>
					</ul>
					<br />
					<strong>Links</strong>
					<br />
					<span id='portfolio-links'>
						<a
							href='https://github.com/tim-finnigan'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub
						</a>
						<a
							href='https://www.linkedin.com/in/tim-finnigan/'
							target='_blank'
							rel='noopener noreferrer'
						>
							LinkedIn
						</a>
						{/* <a
              href="https://twitter.com/tim_finnigan1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a> */}
						{/* <a>Resume</a> */}
					</span>
					{/* <strong>Email</strong>
					<br />
					<span>tim.finnigan1@gmail.com</span> */}
				</span>
				<Timeline />
			</div>
		);
	}
}
export default App;
