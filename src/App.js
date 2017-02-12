var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
import Navi from './navbar.jsx'
import Home from './homepage.jsx'
import Foot from './footer.jsx'
import Playlists from './playlists.jsx'

{
	// CLIEND ID = 04b9165d42db466790a2e0ba5f9566e0

	// CLIENT SECRET = f95870b9aa7641ffa22c4640f4ab69e8
}

var Parent = React.createClass({

  render: function() {
    return (
      <div>
        <Navi />
        {this.props.children}
        <Foot />
      </div>
    )
  }
})

// ReactDOM.render(
//   <Parent />,
//   document.getElementById('root')
// );

// THIS IS WHERE WE WILL RENDER EVERYTHING-----------------------------------------------------------------------------------
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Parent}>
      <IndexRoute component={Home} />
      <Route path='/playlists' component={Playlists} />
    </Route>
  </Router>,
  document.getElementById('root')
);

