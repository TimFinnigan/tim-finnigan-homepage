import React from "react";
import Timeline from "./timeline.js";
class App extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <span id="about">
          <strong>About</strong>
          <p>I like to create simple, practical applications.</p>
          <p>
            I enjoy building interactive dashboards and data visualizations.
          </p>
          <strong>Skills</strong>
          <ul>
            <li>JavaScript/jQuery</li>
            <li>HTML/CSS</li>
            <li>Angular</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Highcharts</li>
          </ul>

          <strong>Links</strong>
          <br />
          <span id="portfolio-links">
            <a
              href="https://github.com/TimFinnigan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tim-finnigan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/tim_finnigan1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            {/* <a>Resume</a> */}
          </span>
          <strong>Email</strong>
          <br />
          <span>tim.finnigan1@gmail.com</span>
        </span>
        <Timeline />
      </div>
    );
  }
}
export default App;
