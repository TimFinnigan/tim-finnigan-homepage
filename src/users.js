import React from "react";
import { Route, NavLink } from "react-router-dom";
const User = ({ match }) => <p>{match.params.id}</p>;
class Users extends React.Component {
  render() {
    const { url } = this.props.match;
    return (
      <div>
        <h1>Users</h1>
        <strong>select a user</strong>
        <ul>
          <li>
            <NavLink class="nav-link" to="/users/1">
              User 1{" "}
            </NavLink>
          </li>
          <li>
            <NavLink class="nav-link" to="/users/2">
              User 2{" "}
            </NavLink>
          </li>
          <li>
            <NavLink class="nav-link" to="/users/3">
              User 3{" "}
            </NavLink>
          </li>
        </ul>
        <Route path="/users/:id" component={User} />
      </div>
    );
  }
}
export default Users;
