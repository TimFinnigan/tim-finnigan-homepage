import React from "react";
import { Route, NavLink } from "react-router-dom";

class Quotes extends React.Component {
  render() {
    // const { url } = this.props.match;
    return (
      <div className="project-container">
        <h3>Quotes</h3>
        <ol>
          <li>"Allow yourself the uncomfortable luxury of changing your mind." - Maria Popova</li>
          <li>"Perfect is the enemy of the good." - Voltaire</li>
          <li>"If you can't describe what you're doing as a process, you don't know what you're doing." - W. Edwards Deming</li>
          <li>"Simplicity is the ultimate sophistication." - Leonardo da Vinci</li>
        </ol>
      </div>
    );
  }
}
export default Quotes;
