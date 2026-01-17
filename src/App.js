import React from 'react';
import Timeline from './timeline.js';

class App extends React.Component {
	render() {
		return (
			<div className='flex-container'>
				<div id='about'>
					<strong>About</strong>
					<p>
						A curious and efficient software engineer who enjoys solving problems and working with others. Always learning, always improving, and excited about using AI to build better software.
					</p>

					<strong>Skills</strong>
					<div>
						<ul className='skills'>
							<li>AWS</li>
							<li>Python</li>
							<li>JavaScript</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>React</li>
							<li>Angular</li>
							<li>Node.js</li>
							<li>SQL</li>
							<li>Tableau</li>
							<li>Highcharts</li>
							<li>Chart.js</li>
						</ul>
					</div>

					<strong>Links</strong>
					<div id='portfolio-links'>
						<a
							href='https://www.linkedin.com/in/tim-finnigan/'
							target='_blank'
							rel='noopener noreferrer'
						>
							LinkedIn
						</a>
						<a
							href='https://github.com/tim-finnigan'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub (Work)
						</a>
						<a
							href='https://github.com/TimFinnigan/'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub (Personal)
						</a>
					</div>
				</div>
				<Timeline />
			</div>
		);
	}
}

export default App;
