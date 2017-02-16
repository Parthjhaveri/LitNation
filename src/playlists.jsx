var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import CSS from './App.css';
import { IndexRoute, Link, Router, Route, browserHistory } from 'react-router';
import ReactAudioPlayer from 'react-audio-player';
import SongPanel from './player.jsx'
import SpotifyPlayer from 'react-spotify-player';
// import StudyMusic from './studymusic.jsx'

var Playlists = React.createClass({

  // GET THE INITIAL STATE
  getInitialState() {
  	return {tracks: "", artistName: "", artistInfo: [], invalidEntry: "", keyinfo: [], albumPicture: "", albumName: "", selectedTracks: [], currentTrack: "",
  			spotifyArrayItem: [], thisTrack: "", tracksArray:[{name:"",link:""}], sngid: [], urlArr: [], songUrl: [], songString: []
  			}
  },

  // COMPONENT DID MOUNT
  componentDidMount() {

  // 	// NAVBAR CHANGE COLOR
		// window.onscroll = function() {
		// 	myFunction()
		// };

		// function myFunction() {
		    
		//     // IF YOU SCROLL DOWN PAST 500 PX, CHANGE THE NAVBAR TO WHITE
		//     if (document.body.scrollTop > 500) {
		//         var navbar = document.getElementsByClassName("navi");
		//         console.log(navbar)

		//         $('.appnav').css({'background-color':'white', 'height':'60px', 'color':'black'})
		//         $('.navlistitem').css({'color':'black'})
		//         $('#logo').css({'margin-top':'-15px'})
		//     } 

		//     // IF YOU SCROLL UP , CHANGE IT BACK TO TRANSPARENT
		//     else if (document.body.scrollTop < 500) {
		//         var navbar = document.getElementsByClassName("navi");
		//         console.log(navbar)

		//         $('.appnav').css({'background-color':'unset', 'height':'60px', 'color':'white', 'opacity':'inherit'})
		//         $('.navlistitem').css({'color':'white'})
		//     }	   

		// }

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

  	// console.log(artistInput)

  	
  	// GETS ALL THE TRACKS BASED ON USER INPUT
  	$.ajax({
  		url: 'https://api.spotify.com/v1/search?q=' + artistInput + '&type=track&limit=50',
  		success: function(data) {
  			
  			console.log("The Data that is getting rendered: ", data.tracks.items.map(function(key,val) {
  				// return that.state.artistInfo.concat(key.name)
  				// return (that.setState({artistInfo: that.state.artistInfo.concat(key.name), songString: that.state.songString.concat(key.external_urls.spotify)}));
  				return (that.setState({artistInfo: that.state.artistInfo.concat(key.name), songString: that.state.songString.concat(key.external_urls.spotify)}));		
  			}))

  			// console.log(that.state.artistInfo)
  			console.log("Song string: ", that.state.songString)

  			// FOR IN LOOP TO EXTRACT ALL THE STRINGS ---------------------
  			for (var key in that.state.songString) {
			  if (that.state.songString.hasOwnProperty(key)) {
			    console.log("String keys: ", that.state.songString[key]);
			  }
			}
			// ------------------------------------------------------------

  			// ERROR HANDLING (IF TOTAL ITEMS RETURNED = 0)
  			if (data.tracks.total === 0) {
  				
  				var error = "Invalid entry, try again!";
  				that.setState({invalidEntry: error});
  				// console.log(that.state.invalidEntry);
  			}
  		}
  	})

  	// AJAX CALL TO GET ALBUM PIC
  	$.ajax({
  		url: 'https://api.spotify.com/v1/search?q=' + artistInput + '&type=track',
  		success: function(picdata) {
  			console.log("Pic Data: ", picdata)

  			var albumPic = picdata.tracks.items[0].album.images[0].url
  			that.setState({albumPicture: albumPic})
  			// console.log(that.state.albumPicture)
  		}
  	})

  	// AJAX CALL TO GET ALBUM NAME
  	$.ajax({
  		url: 'https://api.spotify.com/v1/search?q=' + artistInput + '&type=track',
  		success: function(namedata) {
  			// console.log("Name Data: ", namedata.tracks.items[0].album.name)
  			var albName = namedata.tracks.items[0].album.name;
  			that.setState({albumName: albName})
  		}
  	})
  },

  // PLAY SELECTED SONG
  playThisSong() {

  	// var that = this;
  	// var storeSongs = ""

  	// // AJAX CALL TO PLAY SELECTED SONG
  	// $.ajax({
  	// 	url: 'https://api.spotify.com/v1/search?q=' + that.state.tracks + '&type=track&limit=50',
  	// 	success: function(sngdata) {
  	// 		return sngdata.tracks.items.map(function(key) {
  	// 			// console.log(key.external_urls.spotify)
  	// 			console.log(storeSongs.concat(key.external_urls.spotify))
  	// 		})
  	// 	}
  	// })

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
					  		<br/>
					  		<h2 className="titlealb">{this.state.albumName}<span className="glyphicon glyphicon-music" id="musicicon"></span></h2>
					  		<br />
					  		<br />	
					  		<div className="hideimageborder">
					  			<img src={this.state.albumPicture} className="albumpic"/>
					  		</div>
					  </div>
					  
					  <div className="col-md-6">

					  	<SongPanel songprop= {this.tracks}/>

					  	<div className="trackstable">

					  	<h1 className="title">Artist:</h1><h1 id="titlename">{this.state.tracks}</h1>
					  	<hr id="boxhr" />
					  		{
					  			// this.state.spotifyArrayItem.forEach(function(song) {
					  			// 	return this.setState({thisTrack: song})
					  			// })
					  		}
					  		{

					  	// 	<ReactAudioPlayer
								//   src={this.state.tracksArray[0].link}
								//   autoPlay
								//   className="trackplayer"
								// />
					  		}
					  	<h1 className="title">Tracks available: </h1>
					  		<center>
					  			<ul className="tracksul">
					  				{
					  					this.state.artistInfo.map(function (key) {
											return (<li id="songname" key={key}><button className="addtoplaylist">+</button>
											<a id="songlink" href={this.state.songString} target="_blank"><button className="glyphicon glyphicon-play" id="playsong" onClick={this.playThisSong}></button></a>{key}</li>)
										}, this)		
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