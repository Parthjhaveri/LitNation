var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';

var Footer = React.createClass({

  render: function() {
    return (
      <div className="foot">
        	<center><div id="logofoot"><span className="glyphicon glyphicon-fire"></span></div></center>
        	<center><h2 id="aboutdev"><a href="https://parthjhaveri.github.io/" target="_blank" id="aboutdevlink">About the Developer</a></h2></center>
      </div>
    )
  }
})

export default Footer;