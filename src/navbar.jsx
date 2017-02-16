var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
// import StudyMusic from './studymusic.jsx'
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
						  	<Link to="/"><div id="logo"><span className="glyphicon glyphicon-fire"></span></div></Link>
						  </div>
						  
						  <div className="col-md-4">

						  </div>
						  
						  <div className="col-md-4">

						  	<ul className="navul">
						  		<Link to="/playlists"><li className="navlistitem">Playlists</li></Link>
						  		<Link to="/studymusic"><li className="navlistitem">Study music</li></Link>
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