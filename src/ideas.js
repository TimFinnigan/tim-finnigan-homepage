import React from "react";
import { Route, NavLink } from "react-router-dom";

class Ideas extends React.Component {
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
          <li>History analyzer - find trends in what kinds of pages you access!</li>
          <li>Alexa</li>
          <ul>
              <li>Good Pomodoro timer, that tracks them throughout the day</li>
              <li>inspiring quote</li>
              <li>dad joke</li>
              <li>draft kings</li>
              <li>Venmo</li>
          </ul>
        </ol>
      </div>
    );
  }
}
export default Ideas;
