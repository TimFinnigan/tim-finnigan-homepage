import React from "react";
import { Route, NavLink } from "react-router-dom";
// const Project = ({ match }) => <p>{match.params.id}</p>;
const Data = ({ match }) => <p>This website is currently in progress</p>;
const Gantt = ({ match }) => (
  <a
    href="http://ganttchartmaker.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    Gantt Chart Maker
  </a>
);
const Map = ({ match }) => (
  <a href="http://worldmapquiz.com" target="_blank" rel="noopener noreferrer">
    World Map Quiz
  </a>
);

class Projects extends React.Component {
  render() {
    const { url } = this.props.match;
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
