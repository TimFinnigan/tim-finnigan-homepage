import React from "react";
import { Route, NavLink } from "react-router-dom";

class Goals extends React.Component {
  render() {
    // const { url } = this.props.match;
    return (
      <div className="project-container">
        <h3>Reasoning</h3>
        <ol>
          <li>
            You learn best by doing (not just watching or reading
            books/tutorials).
          </li>
          <li>
            My goal is to get better at learning how to learn - learning how to
            learn a new skill quickly.
          </li>
          <li>
            And when inspiration hits, you’ll have a list of boilerplate tools
            and repositories at your finger tips to serve as a starting point.
          </li>
        </ol>
        <h3>Goals</h3>
        <ol>
          <li className="strikethrough">Make a Chrome Extension</li>
          <ul>
            <li className="italic">
              Created extensions: Coder's Toolbox, Simple To Do List, Simple
              Pomodoro Timer
            </li>
          </ul>
          <li>Make a VS Code extension</li>
          <ul>
            <li>Something simple, like a line highlighter?</li>
          </ul>
          <li>Single Page App</li>
          <li>Progressive Web App</li>
          <li>React Native app</li>
          <li>Python web-scraping app</li>
          <li>Tensorflow app</li>
          <li>Electron app</li>
          <li>ARKit app</li>
        </ol>
        <h3>Things I want to buy</h3>
        <ol>
          <li>Drone</li>
          <li>3D Printer</li>
          <li>Oculus/VR set</li>
          <li>AR headset</li>
          <li>Tesla</li>
        </ol>
      </div>
    );
  }
}
export default Goals;
