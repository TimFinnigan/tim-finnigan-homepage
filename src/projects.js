import React, { useState } from 'react';

const allProjects = [
	{
		title: 'Multi AI Prompter',
		description: 'Compare responses from different AI chatbots side-by-side',
		link: 'https://chromewebstore.google.com/detail/multi-ai-prompter/ofcmkfknkfadepedefhcjamookaefmdh',
		tags: ['Chrome', 'AI', 'Productivity'],
		icon: 'fa-solid fa-robot'
	},
	{
		title: 'Prompt Bank',
		description: 'Save and organize ChatGPT prompts for quick access',
		link: 'https://chromewebstore.google.com/detail/prompt-bank/kdedonmmhnfdcgdnippppjpcbogfhjic',
		tags: ['Chrome', 'AI', 'Productivity'],
		icon: 'fa-solid fa-database'
	},
	{
		title: 'Transcript Pro',
		description: 'Search words in YouTube transcripts and jump to content',
		link: 'https://chromewebstore.google.com/detail/transcript-pro/hencphkahebnmpiocnbjeojmpmiafpfc',
		tags: ['Chrome', 'Productivity', 'YouTube'],
		icon: 'fa-solid fa-closed-captioning'
	},
	{
		title: 'Link Scraper',
		description: 'Quickly download every link on a webpage',
		link: 'https://chrome.google.com/webstore/detail/link-scraper/apdmmebfdjlefbomdafjgbfjipjocdof',
		tags: ['Chrome', 'Utility'],
		icon: 'fa-solid fa-link'
	},
	{
		title: 'Simple Pomodoro Timer',
		description: '25-minute timer to improve productivity',
		link: 'https://chrome.google.com/webstore/detail/plfdidllminimcdbbfmapikbbbdjlbna',
		tags: ['Chrome', 'Productivity'],
		icon: 'fa-solid fa-clock'
	},
	{
		title: 'Trip to PDF',
		description: 'Convert your trip itineraries into beautiful PDF documents',
		link: 'https://trip-to-pdf.streamlit.app/',
		tags: ['Web App', 'Utility', 'Travel'],
		icon: 'fa-solid fa-file-pdf'
	},
	{
		title: 'Vibe Films',
		description: 'Discover films based on your mood and preferences',
		link: 'https://timfinnigan.github.io/vibe-films/',
		tags: ['Web App', 'Entertainment', 'AI'],
		icon: 'fa-solid fa-film'
	},
	{
		title: 'Color Core',
		description: 'Modern color palette generator for designers',
		link: 'https://timfinnigan.github.io/color-core/',
		tags: ['Web App', 'Design', 'React'],
		icon: 'fa-solid fa-palette'
	},
	{
		title: 'Prompt Spells',
		description: 'Write compelling prompts for generative AI',
		link: 'https://timfinnigan.github.io/prompt-spells/',
		tags: ['Web App', 'AI', 'React'],
		icon: 'fa-solid fa-wand-magic-sparkles'
	},
	{
		title: 'Drum Looper',
		description: 'Create and play drum beats with customizable patterns',
		link: 'https://timfinnigan.github.io/drum-looper-v2/',
		tags: ['Web App', 'Music', 'React'],
		icon: 'fa-solid fa-drum'
	},
	{
		title: 'World Map Quiz',
		description: 'Geography guessing game with random countries',
		link: 'https://timfinnigan.github.io/world-map-quiz/',
		tags: ['Web App', 'Education', 'Game'],
		icon: 'fa-solid fa-globe'
	},
	{
		title: 'Jumbles Daily',
		description: 'Daily word jumbles to enhance cognitive skills',
		link: 'https://apps.apple.com/us/app/jumbles-daily/id6478874178',
		tags: ['iOS', 'Game', 'Education'],
		icon: 'fa-solid fa-font'
	},
	{
		title: 'Painting Puzzles',
		description: 'Learn art history through portrait puzzles',
		link: 'https://apps.apple.com/tn/app/painting-puzzles/id6743689185',
		tags: ['iOS', 'Game', 'Art'],
		icon: 'fa-solid fa-palette'
	},
	{
		title: 'Block Road',
		description: 'Fast-paced obstacle avoidance game',
		link: 'https://apps.apple.com/tn/app/block-road/id6743721349',
		tags: ['iOS', 'Game'],
		icon: 'fa-solid fa-road'
	},
	{
		title: 'Pod Gems',
		description: 'Newsletter sharing insights from podcasts',
		link: 'https://www.podgems.com/',
		tags: ['Newsletter', 'Content'],
		icon: 'fa-solid fa-microphone'
	},
	{
		title: 'Five Takeaways',
		description: 'Key takeaways from influential books',
		link: 'https://fivetakeaways.com',
		tags: ['Web App', 'Content', 'React'],
		icon: 'fa-solid fa-book'
	},
	{
		title: 'Learn Code By Doing',
		description: 'Code tutorials on web-scraping and APIs',
		link: 'https://learncodebydoing.com',
		tags: ['Blog', 'Education', 'React'],
		icon: 'fa-solid fa-code'
	},
	{
		title: 'The Frontier',
		description: 'Newsletter covering AI developments',
		link: 'https://www.thefrontier.ai/',
		tags: ['Newsletter', 'AI', 'Content'],
		icon: 'fa-solid fa-rocket'
	}
];

const ProjectCard = ({ project }) => (
	<a 
		href={project.link} 
		target="_blank" 
		rel="noopener noreferrer" 
		className="project-card-link"
	>
		<div className="project-card-minimal">
			<div className="project-card-content">
				<h3 className="project-title">
					<i className={`${project.icon} project-icon`}></i>
					{project.title}
				</h3>
				<p className="project-description">{project.description}</p>
			</div>
			<div className="project-tags">
				{project.tags.map((tag, index) => (
					<span key={index} className="project-tag">{tag}</span>
				))}
			</div>
		</div>
	</a>
);

const Projects = () => {
	const [selectedTags, setSelectedTags] = useState([]);

	// Get all unique tags
	const allTags = [...new Set(allProjects.flatMap(project => project.tags))].sort();

	// Filter projects based on selected tags
	const filteredProjects = selectedTags.length === 0 
		? allProjects 
		: allProjects.filter(project => 
			selectedTags.some(tag => project.tags.includes(tag))
		);

	const toggleTag = (tag) => {
		setSelectedTags(prev => 
			prev.includes(tag) 
				? prev.filter(t => t !== tag)
				: [...prev, tag]
		);
	};

	const clearFilters = () => {
		setSelectedTags([]);
	};

	return (
		<div className="projects-container-minimal">
			<h1 className="projects-title">Projects</h1>
			
			<div className="project-filters">
				<div className="filter-tags">
					{allTags.map((tag, index) => (
						<button
							key={index}
							className={`filter-tag ${selectedTags.includes(tag) ? 'active' : ''}`}
							onClick={() => toggleTag(tag)}
						>
							{tag}
						</button>
					))}
				</div>
				{selectedTags.length > 0 && (
					<button className="clear-filters" onClick={clearFilters}>
						Clear filters
					</button>
				)}
			</div>

			<div className="projects-count">
				{filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
			</div>

			<div className="projects-grid-minimal">
				{filteredProjects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
