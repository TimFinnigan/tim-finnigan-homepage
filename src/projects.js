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
			{/* <a
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
			</ul> */}
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

const projectGroups = {
	'Chrome Extensions': [
		{
			title: 'Multi AI Prompter',
			description: 'Compare responses from different AI chatbots side-by-side in a convenient split-screen view',
			link: 'https://chromewebstore.google.com/detail/multi-ai-prompter/ofcmkfknkfadepedefhcjamookaefmdh',
			icon: '🤖'
		},
		{
			title: 'Prompt Bank',
			description: 'Save and organize your ChatGPT prompts in an elegant sidebar for quick access',
			link: 'https://chromewebstore.google.com/detail/prompt-bank/kdedonmmhnfdcgdnippppjpcbogfhjic',
			icon: '🏦'
		},
		{
			title: 'Transcript Pro',
			description: 'Instantly search for words and view transcripts in YouTube videos, saving time by jumping directly to content',
			link: 'https://chromewebstore.google.com/detail/transcript-pro/hencphkahebnmpiocnbjeojmpmiafpfc',
			icon: '📝'
		},
		{
			title: 'Link Scraper',
			description: 'An extension that gives you the ability to quickly download every link on a webpage.',
			link: 'https://chrome.google.com/webstore/detail/link-scraper/apdmmebfdjlefbomdafjgbfjipjocdof',
			icon: '🔗'
		},
		{
			title: 'Simple Pomodoro Timer',
			description: 'A simple 25-minute timer to help improve your productivity',
			link: 'https://chrome.google.com/webstore/detail/plfdidllminimcdbbfmapikbbbdjlbna',
			icon: '⏱️'
		}
	],
	'Web Applications': [
		{
			title: 'Color Core',
			description: 'A modern color palette generator and manager for designers and developers',
			link: 'https://timfinnigan.github.io/color-core/',
			icon: '🎨'
		},
		{
			title: 'World Map Quiz',
			description: 'Guessing game to help learn geography with random country selection',
			link: 'https://worldmapquiz.com',
			icon: '🌍'
		},
		{
			title: 'Prompt Spells',
			description: 'An application for writing compelling prompts to use in generative AI applications',
			link: 'https://promptspells.com',
			icon: '✨'
		}
	],
	'Mobile Apps': [
		{
			title: 'Jumbles Daily',
			description: 'Daily word jumbles game that challenges and enhances cognitive skills',
			link: 'https://apps.apple.com/us/app/jumbles-daily/id6478874178',
			icon: '💬'
		},
		{
			title: 'Painting Puzzles',
			description: 'Learn art history while solving beautiful portrait puzzles',
			link: 'https://apps.apple.com/tn/app/painting-puzzles/id6743689185',
			icon: '🧩'
		},
		{
			title: 'Block Road',
			description: 'Fast-paced obstacle avoidance game that tests your reflexes',
			link: 'https://apps.apple.com/tn/app/block-road/id6743721349',
			icon: '🟩'
		}
	],
	'Content & Learning': [
		{
			title: 'Five Takeaways',
			description: 'Highlights key takeaways from influential books on business, self-development, and technology',
			link: 'https://fivetakeaways.com',
			icon: '📚'
		},
		{
			title: 'Learn Code By Doing',
			description: 'A blog featuring code tutorials on web-scraping, APIs, and more',
			link: 'https://learncodebydoing.com',
			icon: '💻'
		},
		{
			title: 'The Frontier',
			description: 'A newsletter covering compelling topics related to Artificial Intelligence',
			link: 'https://www.thefrontier.ai/',
			icon: '🤖'
		}
	]
};

const ProjectCard = ({ project }) => (
	<div className="project-card">
		<div className="project-icon">{project.icon}</div>
		<h3>{project.title}</h3>
		<p>{project.description}</p>
		<a 
			href={project.link} 
			target="_blank" 
			rel="noopener noreferrer" 
			className="project-link"
		>
			View Project →
		</a>
	</div>
);

const ProjectGroup = ({ title, projects }) => (
	<div className="project-group">
		<h2>{title}</h2>
		<div className="project-grid">
			{projects.map((project, index) => (
				<ProjectCard key={index} project={project} />
			))}
		</div>
	</div>
);

class Projects extends React.Component {
	render() {
		// const { url } = this.props.match;
		return (
			<div className="projects-container">
				<h1>Projects</h1>
				{Object.entries(projectGroups).map(([groupTitle, projects]) => (
					<ProjectGroup 
						key={groupTitle} 
						title={groupTitle} 
						projects={projects} 
					/>
				))}
			</div>
		);
	}
}
export default Projects;
