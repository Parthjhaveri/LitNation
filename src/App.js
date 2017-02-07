var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
import Navi from './navbar.jsx'
import Home from './homepage.jsx'

var Parent = React.createClass({
  render: function() {
    return (
      <div>
        <Navi />
        <Home />
      </div>
    )
  }
})

ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);
