import React from "react";
class App extends React.Component {
  render() {
    return (
      <div>
        <br />
        {/* <h4>About</h4> */}
        <p>I like to create simple, practical applications.</p>
        <p><strong>Specializing in: </strong>JavaScript, HTML, CSS</p>
        <p><strong>Experienced with: </strong>Angular, React, Highcharts</p>
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
      </div>
    );
  }
}
export default App;
