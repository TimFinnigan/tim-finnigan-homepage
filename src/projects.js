import React from "react";
import { Route, NavLink } from "react-router-dom";
// const Project = ({ match }) => <p>{match.params.id}</p>;
const Data = ({ match }) => (
  <div className="project-description">
    <a
      href="http://datashown.com"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      Data Shown
    </a>
    <ul>
      <li>Visual essays covering a variety of topics</li>
      <li>Features business analytics and trends</li>
      <li>Built using Angular and Chart.js</li>
    </ul>
    <i>Note: this site is still being developed</i>
  </div>
);
const Gantt = ({ match }) => (
  <div className="project-description">
    <a
      href="http://ganttchartmaker.com"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      Gantt Chart Maker
    </a>
    <ul>
      <li>A tool for easily creating Gantt charts</li>
      <li>Helps managers estimate developer schedules</li>
      <li>Built using Highcharts.js</li>
    </ul>
  </div>
);
const Map = ({ match }) => (
  <div className="project-description">
    <a
      href="http://worldmapquiz.com"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      World Map Quiz
    </a>
    <ul>
      <li>Guessing game to help learn geography</li>
      <li>Random country is chosen each time</li>
      <li>Built using Amcharts.js</li>
    </ul>
  </div>
);
const Takeaways = ({ match }) => (
  <div className="project-description">
    <a
      href="http://fivetakeaways.com"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      Five Takeaways
    </a>
    <ul>
      <li>Highlights key takeaways from influential books</li>
      <li>Book topics cover business, self-development, and technology trends</li>
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
        <ul className="nav-links">
          <li>
            <NavLink to="/projects/datashown">Data Shown</NavLink>
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
        </ul>
        {/* <Route path="/projects/:id" component={Project} /> */}
        <Route exact path="/projects/datashown" component={Data} />
        <Route exact path="/projects/ganttchartmaker" component={Gantt} />
        <Route exact path="/projects/worldmapquiz" component={Map} />
        <Route exact path="/projects/fivetakeaways" component={Takeaways} />
      </div>
    );
  }
}
export default Projects;
