import React from "react";
// import { Route, NavLink } from "react-router-dom";

class Todo extends React.Component {
  render() {
    // const { url } = this.props.match;
    return (
      <div>
        <h3>To do</h3>
        <hr />
        <h5>Code practice</h5>
        <ol>
          <li>Finish Interview Cake</li>
          <li>Finish Udemy course</li>
          <li>Sign up and take front-end Udemy course</li>
          <li>Sign up for Pramp and do MANY practice interviews</li>
          <li>Review LC posts to get better sense of what to expect</li>
        </ol>
        <h5>Portfolio</h5>
        <ol>
          <li>Create repo for Mom's site</li>
          <li>Flesh out datashown - add posts</li>
          <li>Convert Five Takeaways to react or angular app</li>
          <li>Outline/write/publish Identity Clarity (see email sent to self 2/23/2020)</li>
          <li>Create/mock-up/flesh out concept for minimalprofile.com</li>
          <ul>
            <li>
              Like Facebook - but stripped of all images/links/groups etc
              Basically users can add categories and interests Then we recommend
              interests to them based on AI
            </li>
          </ul>
          <li>
            Create repo for word-gif (angular) and start with basic Korean
            phrases
          </li>
          <li>Add Google Analytics to all my sites</li>
          <li>Add numbers/quantifiable data to my resume/linked in</li>
        </ol>
        <h5>Skills to learn</h5>
        <ol>
          <li>Python</li>
          <li>Tensor Flow</li>
        </ol>
      </div>
    );
  }
}
export default Todo;
