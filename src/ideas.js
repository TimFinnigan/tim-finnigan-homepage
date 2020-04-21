import React from "react";
import { Route, NavLink } from "react-router-dom";

class Principles extends React.Component {
  render() {
    // const { url } = this.props.match;
    return (
      <div className="project-container">
        <h3>Ideas</h3>
        <ol>
          <li>
            (the thought here is to record ideas, and they maybe come back to
            them at some point. Because you have a lot of ideas, but you need to
            be deliberate about what you choose to work on)
          </li>
          <li>Scrape /r/AskReddit to get questions, the use Selenium to automate Quora to ask questions.</li>
          <li>Page to analyze YouTube trending (find patterns, like in titles, durations, etc.)</li>
        </ol>
      </div>
    );
  }
}
export default Principles;
