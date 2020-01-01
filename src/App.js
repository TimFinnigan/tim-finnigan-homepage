import React from "react";
class App extends React.Component {
  render() {
    return (
      <div>
        <br />
        {/* <h4>About</h4> */}
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
        <div class="timeline-wrapper">
          <ul class="timeline">
            {/* <li class="timeline-item current">
              <div class="bold time">2020</div>
              <div class="bold">Seeking new opportunities</div>
            </li> */}
            <li class="timeline-item is-done">
              <div class="bold time">2018</div>
              <div class="bold">Software Engineer at Siemens</div>
              <div>TODO: add more details here...</div>
            </li>
            <li class="timeline-item is-done">
              <div class="bold time">2017</div>
              <div class="bold">Earned Masters Degree</div>
            </li>
            <li class="timeline-item is-done">
              <div class="bold time">2016</div>
              <div class="bold">Data Analyst at Veritiv</div>
            </li>
            <li class="timeline-item is-done">
              <div class="bold time">2015</div>
              <div class="bold">Worked at Startups</div>
            </li>
            <li class="timeline-item is-done">
              <div class="bold time">2013</div>
              <div class="bold">Taught English in Taiwan</div>
            </li>
            <li class="timeline-item is-done">
              <div class="bold time">2012</div>
              <div class="bold">Earned Bachelors Degree</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
