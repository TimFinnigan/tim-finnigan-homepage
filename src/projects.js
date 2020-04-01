import React from "react";
import { Route, NavLink } from "react-router-dom";
// const Project = ({ match }) => <p>{match.params.id}</p>;
const Newsletters = ({ match }) => (
  <div className="project-description">
    <a
      href="https://newsletters.best"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
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
const Toolbox = ({ match }) => (
  <div className="project-description">
    <a
      href="https://chrome.google.com/webstore/detail/knlhnhhegdjhedaijoiaholkommidbad"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      https://chrome.google.com/webstore/detail/knlhnhhegdjhedaijoiaholkommidbad
    </a>
    <ul>
      <li>A Chrome extension for easily accessing the best resources for coders</li>
      <li>The bookmarks are sortable and customizable by the user</li>
      <li>Build with HTML5 and jQuery-UI</li>
    </ul>
  </div>
);
const Data = ({ match }) => (
  <div className="project-description">
    <a
      href="https://datashown.com"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      https://datashown.com
    </a>
    <ul>
      <li>Visual essays covering a variety of topics</li>
      <li>Features business analytics and trends</li>
      <li>Built with Angular and Chart.js</li>
    </ul>
    <i>Note: this site is still being developed</i>
  </div>
);
const Gantt = ({ match }) => (
  <div className="project-description">
    <a
      href="https://ganttchartmaker.com"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
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
  <div className="project-description">
    <a
      href="https://worldmapquiz.com"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
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
  <div className="project-description">
    <a
      href="https://fivetakeaways.com"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      https://fivetakeaways.com
    </a>
    <ul>
      <li>Highlights key takeaways from influential books</li>
      <li>
        Book topics cover business, self-development, and technology trends
      </li>
      <li>Built with a CMS, but currently being rewritten in React</li>
    </ul>
  </div>
);

class Projects extends React.Component {
  render() {
    // const { url } = this.props.match;
    return (
      <div className="project-container">
        <strong>Select a Project</strong>
        <br />
        <ul className="nav-links portfolio-nav-links">
          <li>
            <NavLink to="/projects/newsletters">Newsletters.Best</NavLink>
          </li>
          <li>
            <NavLink to="/projects/coderstoolbox">Coder's Toolbox</NavLink>
          </li>
          <li>
            <NavLink to="/projects/ganttchartmaker">Gantt Chart Maker</NavLink>
          </li>
          <li>
            <NavLink to="/projects/worldmapquiz">World Map Quiz</NavLink>
          </li>
          <li>
            <NavLink to="/projects/fivetakeaways">Five Takeaways</NavLink>
          </li>
          <li>
            <NavLink to="/projects/datashown">Data Shown</NavLink>
          </li>
        </ul>
        {/* <Route path="/projects/:id" component={Project} /> */}
        <Route exact path="/projects/newsletters" component={Newsletters} />
        <Route exact path="/projects/coderstoolbox" component={Toolbox} />
        <Route exact path="/projects/ganttchartmaker" component={Gantt} />
        <Route exact path="/projects/worldmapquiz" component={Map} />
        <Route exact path="/projects/fivetakeaways" component={Takeaways} />
        <Route exact path="/projects/datashown" component={Data} />
      </div>
    );
  }
}
export default Projects;
