import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    Redirect,
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import App from './App';
import Projects from './projects';
import Principles from './principles';
import Goals from './goals';
import Ideas from './ideas';
import ProjectPostMortems from './project-post-mortems';
import ProjectFramework from './project-framework';
import Quotes from './quotes';
import LearnCodeByDoing from './learncodebydoing';
import About from './about';
import Todo from './todo';
import Notfound from './notfound';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const routing = (
    <Router>
        <div>
            <h3>Tim Finnigan</h3>
            <h5>Software Engineer</h5>
            <ul className='nav-links'>
                <li>
                    <NavLink exact to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/projects'>Projects</NavLink>
                </li>
                {/* <li>
          <NavLink to="/about">About</NavLink>
        </li> */}
            </ul>
            <Switch>
                <Route exact path='/' component={App} />
                <Redirect
                    exact
                    from='/projects'
                    to='/projects/five-takeaways'
                />
                <Route path='/projects' component={Projects} />
                <Route path='/principles' component={Principles} />
                <Route path='/goals' component={Goals} />
                <Route path='/quotes' component={Quotes} />
                <Route path='/ideas' component={Ideas} />
                <Route
                    path='/project-post-mortems'
                    component={ProjectPostMortems}
                />
                <Route path='/learncodebydoing' component={LearnCodeByDoing} />
                <Route path='/about' component={About} />
                <Route path='/todo' component={Todo} />
                <Route path='/project-framework' component={ProjectFramework} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));
