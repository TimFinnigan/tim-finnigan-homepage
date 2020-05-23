import React from "react";
import { Route, NavLink } from "react-router-dom";

class Quotes extends React.Component {
  render() {
    // const { url } = this.props.match;
    return (
      <div className="project-container">
        <h3>Quotes</h3>
        <ol>
          <li>
            "Allow yourself the uncomfortable luxury of changing your mind." -
            Maria Popova
          </li>
          <li>"Perfect is the enemy of the good." - Voltaire</li>
          <li>
            "If you can't describe what you're doing as a process, you don't
            know what you're doing." - W. Edwards Deming
          </li>
          <li>
            "Simplicity is the ultimate sophistication." - Leonardo da Vinci
          </li>
          <li>
            "You are, in the way you craft your narrative, kind of crafting your
            character." - Michael Lewis
          </li>
          <li>
            "I think that life would suddenly seem wonderful to us if we were
            threatened to die as you say. Just think of how many projects,
            travels, love affairs, studies, it–our life–hides from us, made
            invisible by our laziness which, certain of a future, delays them
            incessantly. ‘But let all this threaten to become impossible for
            ever, how beautiful it would become again! Ah! If only the cataclysm
            doesn’t happen this time, we won’t miss visiting the new galleries
            of the Louvre, throwing ourselves at the feet of Miss X, making a
            trip to India. ‘The cataclysm doesn’t happen, we don’t do any of it,
            because we find ourselves back in the heart of normal life, where
            negligence deadens desire. And yet we shouldn’t have needed the
            cataclysm to love life today. It would have been enough to think
            that we are humans, and that death may come this evening." - Marcel
            Proust
          </li>
          <li>"We suffer more often in imagination than reality." - Seneca</li>
          <li>
            "The reasonable man adapts himself to the world; the unreasonable
            one persists in trying to adapt the world to himself. Therefore all
            progress depends on the unreasonable man." - George Bernard Shaw
          </li>
          <li>
            "Cultivate a habit of impatience about the things you most want to
            do. Don't wait before climbing that mountain or writing that book or
            visiting your mother. You don't need to be constantly reminding
            yourself why you shouldn't wait. Just don't wait." - Paul Graham
          </li>
          <li>
            "Life is not the number of days you live, it’s the number of days
            you remember." - Unknown
          </li>
          <li>
            "The most difficult thing is the decision to act, the rest is merely
            tenacity. The fears are paper tigers. You can do anything you decide
            to do." - Amelia Earhart
          </li>
        </ol>
      </div>
    );
  }
}
export default Quotes;
