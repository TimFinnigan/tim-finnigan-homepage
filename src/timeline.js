import React, { Component } from "react";

class Timeline extends Component {
  render() {
    return (
      <div class="timeline-wrapper">
        <ul class="timeline">
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
    );
  }
}

export default Timeline;
