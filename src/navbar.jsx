var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';

var Navi = React.createClass({
  
  componentDidMount() {

  },

  render: function() {
    return (
      <div>
        	
        	<div className="appnav navbar-fixed-top">
        		<div className="container">
		        	
		        	<div className="row">
					  
						  <div className="col-md-4">						  	
						  	<div id="logo"><span className="glyphicon glyphicon-fire"></span></div>
						  </div>
						  
						  <div className="col-md-4">

						  </div>
						  
						  <div className="col-md-4">

						  	<ul className="navul">
						  		<li className="navlistitem">Playlists</li>
						  		<li className="navlistitem">Favorites</li>
						  		<li className="navlistitem">Radio</li>
						  	</ul>

						  </div>

					</div>

				</div>
        	</div>

      </div>
    )
  }
})

export default Navi;