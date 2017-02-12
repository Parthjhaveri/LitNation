var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import CSS from './App.css';
import { IndexRoute, Link, Router, Route, browserHistory } from 'react-router';

var Playlists = React.createClass({

  // GET THE INITIAL STATE
  getInitialState() {
  	return {tracks: "", artistName: "", artistInfo: [], invalidEntry: ""}
  },
  
  // HANDLE CHANGE
  handleChange(e) {

  var input = e.target.value;
  this.setState({tracks: input})
  // console.log(input)

  },

  // GET THE ARTIST TRACKS BASED ON INPUT
  getTracks() {
  	event.preventDefault();

  	// LOG INPUT TO TEST TO CONSOLE
  	console.log(this.state.tracks)
  	
  	var that = this;
  	var artistInput = this.state.tracks;
  	
  	$.ajax({
  		url: 'https://api.spotify.com/v1/search?q=' + artistInput + ':nas&type=track',
  		success: function(data) {
  			console.log(data.tracks)

  			if (data.tracks.total === 0) {
  				
  				var error = "Invalid entry, try again!";
  				that.setState({invalidEntry: error});
  				console.log(that.state.invalidEntry);
  			}
  		}
  	})

  },

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
						  	
						  	<input type="text" placeholder="Artist name" id="searchartistinput" onChange={this.handleChange}/>
						  	<button id="go" onClick={this.getTracks}>Go</button>

						  	<br/>
						  	<br />
						  	<p id="error">{this.state.invalidEntry}</p>
						  	
					  		<p id="insts">Enter an Artist name and select a song to listen to!</p>
					  	<p id="insts">Filter your selections to get the latest tracks</p>
					  </div>
					  
					  <div className="col-md-6">
					  	<div className="trackstable">

					  	<h1>Artist: </h1>
					  		<center>
					  			<ul className="tracksul">

					  			</ul>
					  		</center>
					  	</div>
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