import React from "react";
import Timeline from "./timeline.js";
class App extends React.Component {
  render() {
    return (
      <div>
        <br />
        <p>I like to create simple, practical applications.</p>
        <p>
          <strong>Specializing in: </strong>JavaScript, Node.js, HTML, CSS
        </p>
        <p>
          <strong>Experienced with: </strong>Angular, React, Highcharts,
          Bootstrap
        </p>
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
        <p>TODO: add Flexbox?</p>
        <p>TODO: fix circle spacing/alignment in timeline below</p>
        <strong>Timeline: </strong>
        <Timeline />
      </div>
    );
  }
}
export default App;
