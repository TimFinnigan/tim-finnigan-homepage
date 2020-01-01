import React from "react";
import { Route, NavLink } from "react-router-dom";
const Project = ({ match }) => <p>{match.params.id}</p>;
class Projects extends React.Component {
  render() {
    const { url } = this.props.match;
    return (
      <div>
        <h4>Projects</h4>
        <strong>Select a Project</strong>
        <ul>
          <li>
            <NavLink to="/projects/datashown">Data Shown</NavLink>
          </li>
          <li>
            <NavLink to="/projects/ganttchartmaker">Gantt Chart Maker</NavLink>
          </li>
          <li>
            <NavLink to="/projects/worldmapquiz4">World Map Quiz</NavLink>
          </li>
        </ul>
        <Route path="/projects/:id" component={Project} />
      </div>
    );
  }
}
export default Projects;
