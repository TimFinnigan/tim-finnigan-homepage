import React from "react";
import { Route, NavLink } from "react-router-dom";

class Ideas extends React.Component {
  render() {
    // const { url } = this.props.match;
    return (
      <div className="project-container">
        <h3>Ideas</h3>
        <ol>
          <li>JavaScript - text to flowchart (example: if X, then Y, etc.)</li>
          <li>
            (the thought here is to record ideas, and they maybe come back to
            them at some point. Because you have a lot of ideas, but you need to
            be deliberate about what you choose to work on)
          </li>
          <li>
            Scrape /r/AskReddit to get questions, the use Selenium to automate
            Quora to ask questions.
          </li>
          <li>
            Page to analyze YouTube trending (find patterns, like in titles,
            durations, etc.)
          </li>
          <li>
            Podcast analysis - example: Tim Ferriss show analyze guests,
            categories, duration, etc. could look at transcripts, isolate
            questions, find repeats, sentiment score, etc.
          </li>
          <li>Chrome extensions</li>
          <ul>
            <li>
              History analyzer - find trends in what kinds of pages you access!
            </li>
            <li>
              Hide music videos from YouTube (or maybe just from the /trending
              page)
            </li>
          </ul>
          <li>Alexa</li>
          <ul>
            <li>Good Pomodoro timer, that tracks them throughout the day</li>
            <li>inspiring quote</li>
            <li>dad joke</li>
            <li>draft kings</li>
            <li>Venmo</li>
          </ul>
          <li>
            Short story - Senior citizen in nursing home is given a robot
            companion, who helps them escape
          </li>
          <li>
            idea - chrome extension - sentiment score tagger - highlight tweets
            as red or green based on negative or positive tweets. option to hide
            (filter out) negative
          </li>
          <li>
            Idea - use Augmented Reality / computer vision to decode
            typefaces...
          </li>
        </ol>
      </div>
    );
  }
}
export default Ideas;
