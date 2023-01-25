import React from 'react';
import { Route, NavLink } from 'react-router-dom';
// const Project = ({ match }) => <p>{match.params.id}</p>;
const Newsletters = ({ match }) => (
	<div className='project-description'>
		<a
			href='https://newsletters.best'
			target='_blank'
			rel='noopener noreferrer'
			className='project-link'
		>
			https://newsletters.best
		</a>
		<ul>
			<li>A curated list of the best online newsletters</li>
			<li>Features a responsive table with dynamic filtering</li>
			<li>Built with React</li>
		</ul>
	</div>
);
const Chrome = ({ match }) => (
	<>
		<div className='project-description'>
			<a
				href='https://chrome.google.com/webstore/detail/link-scraper/apdmmebfdjlefbomdafjgbfjipjocdof'
				target='_blank'
				rel='noopener noreferrer'
				className='project-link'
			>
				Link Scraper
			</a>
			<ul>
				<li>
					An extension that gives you the ability to quickly download
					every link on a webpage.
				</li>
			</ul>
			<a
				href='https://chrome.google.com/webstore/detail/hellcneecepjkpoflpdbbeijjkjklepk'
				target='_blank'
				rel='noopener noreferrer'
				className='project-link'
			>
				Minimalist Stack Overflow
			</a>
			<ul>
				<li>
					A minimalist theme to show a clean and simple version of
					Stack Overflow
				</li>
			</ul>
			<a
				href='https://chrome.google.com/webstore/detail/plfdidllminimcdbbfmapikbbbdjlbna'
				target='_blank'
				rel='noopener noreferrer'
				className='project-link'
			>
				Simple Pomodoro Timer
			</a>
			<ul>
				<li>
					A simple 25-minute timer to help improve your productivity
				</li>
			</ul>
			{/* <a
				href='https://chrome.google.com/webstore/detail/gmgpkfaklkchpfbihfligkdgigjicgbc'
				target='_blank'
				rel='noopener noreferrer'
				className='project-link'
			>
				Simple To Do List
			</a>
			<ul>
				<li>
					A customizable and sortable to do list for tracking tasks in
					your browser
				</li>
			</ul> */}
			{/* <a
				href='https://chrome.google.com/webstore/detail/knlhnhhegdjhedaijoiaholkommidbad'
				target='_blank'
				rel='noopener noreferrer'
				className='project-link'
			>
				Coder's Toolbox
			</a>
			<ul>
				<li>
					An extension to help easily access the best resources for
					coders
				</li>
			</ul> */}
		</div>
	</>
);
const Data = ({ match }) => (
	<div className='project-description'>
		<a
			href='https://datashown.com'
			target='_blank'
			rel='noopener noreferrer'
			className='project-link'
		>
			https://datashown.com
		</a>
		<ul>
			<li>Visual essays covering a variety of topics</li>
			<li>Features business analytics and trends</li>
			<li>Built with Angular and Chart.js</li>
		</ul>
	</div>
);
const Gantt = ({ match }) => (
	<div className='project-description'>
		<a
			href='https://ganttchartmaker.com'
			target='_blank'
			rel='noopener noreferrer'
			className='project-link'
		>
			https://ganttchartmaker.com
		</a>
		<ul>
			<li>A tool for easily creating Gantt charts</li>
			<li>Helps managers estimate developer schedules</li>
			<li>Built with Highcharts.js</li>
		</ul>
	</div>
);
const Map = ({ match }) => (
	<div className='project-description'>
		<a
			href='https://worldmapquiz.com'
			target='_blank'
			rel='noopener noreferrer'
			className='project-link'
		>
			https://worldmapquiz.com
		</a>
		<ul>
			<li>Guessing game to help learn geography</li>
			<li>Random country is chosen each time</li>
			<li>Built with Amcharts.js</li>
		</ul>
	</div>
);
const Takeaways = ({ match }) => (
	<div className='project-description'>
		<a
			href='https://fivetakeaways.com'
			target='_blank'
			rel='noopener noreferrer'
			className='project-link'
		>
			https://fivetakeaways.com
		</a>
		<ul>
			<li>Highlights key takeaways from influential books</li>
			<li>
				Includes book topics such as business, self-development, and
				technology
			</li>
			<li>Built with React</li>
		</ul>
	</div>
);

const LearnCodeByDoing = ({ match }) => (
	<div className='project-description'>
		<a
			href='https://learncodebydoing.com'
			target='_blank'
			rel='noopener noreferrer'
			className='project-link'
		>
			https://learncodebydoing.com
		</a>
		<ul>
			<li>A blog featuring code tutorials on various topics</li>
			<li>Posts focus on areas such as web-scraping and APIs</li>
			<li>Built with React</li>
		</ul>
	</div>
);

const Frontier = ({ match }) => (
	<div className='project-description'>
		<a
			href='https://www.thefrontier.ai/'
			target='_blank'
			rel='noopener noreferrer'
			className='project-link'
		>
			https://thefrontier.ai
		</a>
		<ul>
			<li>
				A newsletter covering compelling topics related to Artificial
				Intelligence
			</li>
			<li>
				Synthesizes various insights and media into different themes
				covering AI developments
			</li>
			<li>Built with Substack</li>
		</ul>
	</div>
);

const PromptSpells = ({ match }) => (
	<div className='project-description'>
		<a
			href='https://promptspells.com/'
			target='_blank'
			rel='noopener noreferrer'
			className='project-link'
		>
			https://promptspells.com
		</a>
		<ul>
			<li>
				An application for writing compelling prompts to use in
				generative AI applications
			</li>
			<li>
				Various artistic elements are combined to create powerful
				visuals
			</li>
			<li>Built with React</li>
		</ul>
	</div>
);

class Projects extends React.Component {
	render() {
		// const { url } = this.props.match;
		return (
			<div className='project-container'>
				<strong>Select a Project</strong>
				<br />
				<ul className='nav-links portfolio-nav-links'>
					<li>
						<NavLink to='/projects/prompt-spells'>
							Prompt Spells
						</NavLink>
					</li>
					<li>
						<NavLink to='/projects/the-frontier'>
							The Frontier
						</NavLink>
					</li>
					<li>
						<NavLink to='/projects/learn-code-by-doing'>
							Learn Code By Doing
						</NavLink>
					</li>
					<li>
						<NavLink to='/projects/five-takeaways'>
							Five Takeaways
						</NavLink>
					</li>
					{/* <li>
						<NavLink to='/projects/gantt-chart-maker'>
							Gantt Chart Maker
						</NavLink>
					</li> */}
					<li>
						<NavLink to='/projects/world-map-quiz'>
							World Map Quiz
						</NavLink>
					</li>

					{/* <li>
            <NavLink to='/projects/data-shown'>Data Shown</NavLink>
          </li> */}
					{/* <li>
                        <NavLink to='/projects/newsletters-best'>
                            Newsletters.Best
                        </NavLink>
                    </li> */}
					<li>
						<NavLink to='/projects/chrome-extensions'>
							Chrome Extensions
						</NavLink>
					</li>
				</ul>
				{/* <Route path="/projects/:id" component={Project} /> */}
				<Route
					exact
					path='/projects/newsletters-best'
					component={Newsletters}
				/>
				<Route
					exact
					path='/projects/chrome-extensions'
					component={Chrome}
				/>
				{/* <Route
					exact
					path='/projects/gantt-chart-maker'
					component={Gantt}
				/> */}
				<Route exact path='/projects/world-map-quiz' component={Map} />
				<Route
					exact
					path='/projects/learn-code-by-doing'
					component={LearnCodeByDoing}
				/>
				<Route
					exact
					path='/projects/five-takeaways'
					component={Takeaways}
				/>
				<Route
					exact
					path='/projects/the-frontier'
					component={Frontier}
				/>
				<Route
					exact
					path='/projects/prompt-spells'
					component={PromptSpells}
				/>
				{/* <Route exact path='/projects/data-shown' component={Data} /> */}
			</div>
		);
	}
}
export default Projects;
