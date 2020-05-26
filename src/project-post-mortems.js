import React from "react";
import { Route, NavLink } from "react-router-dom";

class ProjectPostMortems extends React.Component {
  render() {
    // const { url } = this.props.match;
    return (
      <div className="project-container">
        <h3>Goals with this</h3>
        <ul>
          <li>Find patterns in discontinued projects.</li>
          <li>Find patterns in projects you choose to keep doing.</li>
          <li>
            Develop better judgment when it comes to choosing which ideas to do
            next.
          </li>
          <li>
            Remember: it's ok to quit things (see The Dip by Seth Godin) but you
            need to stick with something for a long time in order to master
            it/make meaningful progress.
          </li>
        </ul>
        <h3>Project Post-Mortems</h3>
        <ol>
          <li>Let's Get Random</li>
          <li>Cluster Chat</li>
          <li>Pump Up Videos</li>
          <li>Word Gif</li>
          <li>Block Shelf</li>
          <li>Progress Timeline</li>
          <li>Reddit Chat</li>
          <li>Sport Tweet</li>
          <li>Puddle-Wonderful</li>
          <li>Tableau Mastery</li>
          <li>Tweet Table</li>
          <li>Gantt Chart Maker</li>
          <li>World Map Quiz</li>
          <li>Newsletters.best</li>
        </ol>
        <h3>Ongoing Projects</h3>
        <ol>
          <li>Data Shown</li>
          <li>Five Takeaways</li>
          <li>Two Guys, One Book</li>
          <li>Learn Code by Doing</li>
          <li>Podcast Quotes</li>
        </ol>
      </div>
    );
  }
}
export default ProjectPostMortems;
