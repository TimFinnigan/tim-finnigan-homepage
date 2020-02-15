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
      <li>Built using Angular</li>
    </ul>
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
        <li>Built using Highcharts</li>
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
      <li>A game where users try to guess countrys</li>
      <li>Built using Amcharts library</li>
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
        </ul>
        {/* <Route path="/projects/:id" component={Project} /> */}
        <Route exact path="/projects/datashown" component={Data} />
        <Route exact path="/projects/ganttchartmaker" component={Gantt} />
        <Route exact path="/projects/worldmapquiz" component={Map} />
      </div>
    );
  }
}
export default Projects;
