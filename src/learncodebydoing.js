import React from "react";
import { Route, NavLink, Redirect } from "react-router-dom";

class LearnCodeByDoing extends React.Component {
  render() {
    // const { url } = this.props.match;
    return (
      <div className="project-container">
        <h5>Goal</h5>
        <ul>
          <li>
            Create a brand - Learn Code by Doing - that offers a fun and
            straightforward approach to learning how to code, by making actual
            creative and practical products.
          </li>
          <li>
            Hopefully create enough good content that you can generate passive
            income, be your own boss, and work anywhere/anytime...basically have
            ultimate freedom and flexibiliy.
          </li>
          <li>
            Maybe you can even sell/license some of the software that you
            create!
          </li>
          <li>
            Or maybe this could open the door to some great job/freelance
            opportunities.
          </li>
        </ul>
        <h5>Reasoning</h5>
        <ol>
          <li>
            Ikigai - this fits the overlap between what you're good at, what you
            enjoy doing, what the world needs, and how you can make money
            <ul className="italic">
              <li>
                You're good at choosing a simple/practical/creative project,
                boiling concepts down to their simplest form, and communciating
                things in a clear way.
              </li>
              <li>
                You enjoy making something creative, and something that helps
                others.
              </li>
              <li>
                The world needs more straightforward tutorials on actual
                projects.
              </li>
              <li>
                You can make money through courses, while building marketable
                job skills.
              </li>
            </ul>
          </li>
          <li>The Flywheel</li>
          <ul className="italic">
            <li>
              Learn how to code something (something that you're interesting in
              making/using)
            </li>
            <li>
              Create videos/courses/ebooks showing others how to do it, helping
              to both reinforce your learning and help others learn how to make
              it.
            </li>
            <li>
              Market a product to sell (Udemy, Coursera, independent, etc.)
            </li>
          </ul>
          <li>Failproof</li>
          <ul className="italic">
            <li>
              Ultimately, even if you have zero fans or customers, you will
              still improve your coding skills. So this pursuit is failproof.
            </li>
          </ul>
        </ol>
        <h5>Steps</h5>
        <ul>
          <li>
            First get a little more comfortable making new projects (DON'T
            PROCRASTINATE TOO LONG THOUGH!)
          </li>
          <li>
            Then build up simple boilerplate website - LearnCodeByDoing.com, at
            least to iframe your videos
          </li>
          <li>Get a basic logo created, and intro song for YouTube videos</li>
          <li>
            Start making YouTube videos of project (create new YT account -
            tim@LearnCodeByDoing.com
          </li>
          <li>
            Have fun with video production - don't take it too seriously - add
            some personality to it like that bass guy's channel
          </li>
          <li>
            Hopefully you will build up an audience, and then you could either:
          </li>
          <ol>
            <li>Create a Udemy course</li>
            <li>Apply to create a Pluralsight course</li>
            <li>Create and sell your own courses independently</li>
          </ol>
          <li>
            ^I'm learning towards first too, just so those platforms can handle
            the transaction/support side of things.
          </li>
          <li>Eventually I'd like to own all my content though.</li>
        </ul>
        <h5>Projects</h5>
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
          <li>An app using YouTube API</li>
          <li>A selenium automation app</li>
          <li>React Native app</li>
          <li>Python web-scraping app</li>
          <li>Tensorflow app</li>
          <li>Electron app</li>
          <li>ARKit app</li>
        </ol>
        <h5>Brainstorming ideas</h5>
        <ul>
            <li>Quotes app - like Pinterest for quotes</li>
            <li>Things I like app - using AI to generate recommendations across categories</li>
            <li>Hero tiles - collect people you admire, create virtual roundtable</li>
        </ul>
      </div>
    );
  }
}
export default LearnCodeByDoing;
