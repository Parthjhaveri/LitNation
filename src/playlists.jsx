var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import CSS from './App.css';
import { IndexRoute, Link, Router, Route, browserHistory } from 'react-router';
import ReactAudioPlayer from 'react-audio-player';

var Playlists = React.createClass({

  // GET THE INITIAL STATE
  getInitialState() {
  	return {tracks: "", artistName: "", artistInfo: [], invalidEntry: "", keyinfo: []}
  },
  
  // HANDLE CHANGE
  handleChange(e) {

  var input = e.target.value.toUpperCase();
  this.setState({tracks: input})
  // console.log(input)

  },

  // GET THE ARTIST TRACKS BASED ON INPUT
  getTracks(event) {
  	event.preventDefault();

  	// LOG INPUT TO TEST TO CONSOLE
  	// console.log(this.state.tracks)
  	
  	var that = this;
  	var artistInput = this.state.tracks;

  	console.log(artistInput)

  	
  	// GETS ALL THE TRACKS BASED ON USER INPUT
  	$.ajax({
  		url: 'https://api.spotify.com/v1/search?q=' + artistInput + '&type=track',
  		success: function(data) {
  			
  			console.log("The Data that is getting rendered: ", data.tracks.items.map(function(key,val) {
  				// return that.state.artistInfo.concat(key.name)
  				return (that.setState({artistInfo: that.state.artistInfo.concat(key.name)}));
  			}))

  			// console.log(that.state.artistInfo)

  			// ERROR HANDLING (IF TOTAL ITEMS RETURNED = 0)
  			if (data.tracks.total === 0) {
  				
  				var error = "Invalid entry, try again!";
  				that.setState({invalidEntry: error});
  				// console.log(that.state.invalidEntry);
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

							<p id="insts">Enter an Artist name and select a song to listen to!
					  		<br />Filter your selections to get the latest tracks!
					  	</p>
					  </div>
					  
					  <div className="col-md-6">
					  	<div className="trackstable">

					  	<h1 className="title">Artist:</h1><h1 id="titlename">{this.state.tracks}</h1>
					  	<hr id="boxhr" />
					  		<ReactAudioPlayer
								  src={null}
								  autoPlay
								  className="trackplayer"
								/>
					  	<h1 className="title">Tracks available: </h1>
					  		<center>
					  			<ul className="tracksul">
					  				{
					  					this.state.artistInfo.map(function (key,val) {
											return (<li id="songname" key={key} value={val}><span className="addtoplaylist">+</span>
											<span className="glyphicon glyphicon-play" id="playsong"></span> {key}</li>)
										})		
					  				}
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