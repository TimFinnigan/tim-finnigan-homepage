import React, { Component } from "react";

class Timeline extends Component {
  render() {
    return (
      <div className="timeline-wrapper">
        <strong>Timeline</strong>
        <ul className="timeline">
          <li className="timeline-item is-done">
            <div className="bold time">2017-20</div>
            <div className="bold">Software Engineer at Siemens</div>
            {/* <div>TODO: add more details here...</div> */}
          </li>
          <li className="timeline-item is-done">
            <div className="bold time">2017</div>
            <div className="bold">Earned Masters Degree</div>
          </li>
          <li className="timeline-item is-done">
            <div className="bold time">2016</div>
            <div className="bold">Data Analyst at Veritiv</div>
          </li>
          <li className="timeline-item is-done">
            <div className="bold time">2015</div>
            <div className="bold">Worked at Startups</div>
          </li>
          <li className="timeline-item is-done">
            <div className="bold time">2013-14</div>
            <div className="bold">Taught English in Taiwan</div>
          </li>
          <li className="timeline-item is-done">
            <div className="bold time">2012</div>
            <div className="bold">Earned Bachelors Degree</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Timeline;
