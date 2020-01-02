import React from "react";
import Timeline from "./timeline.js";
class App extends React.Component {
  render() {
    return (
      <div>
        <br />
        <strong>About</strong>
        <p>I like to create simple, practical applications.</p>
        <p>I enjoy building interactive dashboards and data visualizations.</p>
        <p>
          <strong>Skills</strong>
          <ul>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Angular</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Highcharts</li>
          </ul>
        </p>
        <strong>Links</strong>
        <div id="portfolio-links">
          <a
            href="https://github.com/TimFinnigan"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/timfinnigan11/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a>Resume</a>
        </div>
        <br />
        <strong>Timeline </strong>
        <Timeline />
      </div>
    );
  }
}
export default App;
