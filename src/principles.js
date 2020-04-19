import React from "react";
import { Route, NavLink } from "react-router-dom";

class Principles extends React.Component {
  render() {
    // const { url } = this.props.match;
    return (
      <div className="project-container">
        <h3>Principles</h3>
        <ol>
          <li>Decisions</li>
          <ul>
            <li>No “yes.” Either “HELL YEAH!” or “no.”</li>
            <li>
              Or if you had to rank how much you want to do something from 1-10
              but can't choose 7, what would you choose?
            </li>
          </ul>
          <li>Learning</li>
          <ul>
            <li>Always be learning new things every day.</li>
            <li>
              Diversity of formats: books, articles, newsletters, videos,
              podcasts...
            </li>
            <li>Diversity of sources: old, new, popular, obscure...</li>
            <li>
              Prioritize <b>just-in-time</b> information over <b>just-in-case</b> information
            </li>
            <li>
              Follow the Goldilocks Rule
              <ul>
                <li><i>"The Goldilocks Rule states that
              humans experience peak motivation when working on tasks that are
              right on the edge of their current abilities. Not too hard. Not
              too easy."</i></li>
              </ul>
            </li>
          </ul>
          <li>Creating</li>
          <ul>
            <li>Balance learning with creating. Make new things.</li>
            <li>
              Creations could be artistic, entrepreneurial, or just for fun.
            </li>
            <li>Make things that <b>you</b> wish existed in the world.</li>
            <li>Use the Pomodoro technique to alternate focusing and breaks from work.</li>
            <li>Take "little bets" - put things out there when the stakes are low and get quick feedback.</li>
            <li>"The perfect is the enemy of the good." - don't try to make things perfect before putting them out into the world.</li>
          </ul>
          <li>Failproofing</li>
          <ul>
            <li>
              When choosing a new project to pursue, try to make sure it is
              Failproof, meaning that you will benefit from this regardless of
              the outcome
            </li>
            <li>
              For example, pursuing a business idea where the worst case
              scenario is that you will learn new skills.
            </li>
          </ul>
          <li>Playing</li>
          <ul>
            <li>Maintain a playful spirit. Have fun with what you do.</li>
            <li>Play games often. Learn new games regularly.</li>
          </ul>
          <li>Flexibility</li>
          <ul>
            <li>Be open to new ideas and willing to change your mind.</li>
          </ul>
          <li>Relationships</li>
          <ul>
            <li>Make an effort to build relationships with others.</li>
            <li>
              Build connections not just through family and friends, but also
              work, hobbies, sports, etc.
            </li>
          </ul>
          <li>Meditation</li>
          <ul>
            <li>Meditate regularly: both sitting and .</li>
          </ul>
          <li>Health</li>
          <ul>
            <li>Eat homemade food.</li>
            <li>Take walks/hikes outside.</li>
            <li>Stretch and exercise with a focus on strength, balance, and flexibility.</li>
          </ul>
          <li>Gratitude</li>
          <ul>
            <li>Take time every day to recognize what you have to be grateful for.</li>
          </ul>
        </ol>
      </div>
    );
  }
}
export default Principles;
