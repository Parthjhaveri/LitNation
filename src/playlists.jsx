var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import CSS from './App.css';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';

var Playlists = React.createClass({

  render: function() {
    return (
      <div>
        <div className="playlistscomponent">
           <div className="container">
           		<center>
           			<div className="row">
					  
					  <div className="col-md-6">
					  	<h1 id="searchartist">Search for an Artist</h1>
					  	<br />
					  	<input type="text" placeholder="Artist name" id="searchartistinput" />
					  	<button id="go">Go</button>
					  </div>
					  
					  <div className="col-md-6">

					  </div>

					</div>
           		</center>
           </div>
        </div>	
      </div>
    )
  }
})

export default Playlists;