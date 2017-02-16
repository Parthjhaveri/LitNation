const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
import CSS from './App.css';
import Navi from './navbar.jsx';
import ReactAudioPlayer from 'react-audio-player';

import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';

var Home = React.createClass({

  // GET THE INITIAL STATE
  getInitialState() {
  	
  	return {albums: [], artists: [], tracks: [], nasPic: "", futurePic: "", migosPic: "", drakePic: "",
  			kendrickPic: "", raePic: "", world: "", futureSng: "", migosSng: "", drakeSng: "", kendrickSng: "",
  			raeSng: ""
  	}

  },

  // CLICK TO PLAY THE NAS SONG
  playNas() {

  	var thatt = this;

  	$.ajax({
  		url: 'https://api.spotify.com/v1/search?q=artist:nas&type=track',
  		success: function(songData) {
  			// console.log(songData.tracks.items[0].preview_url)

  			var worldIsYours = songData.tracks.items[0].preview_url;
  			console.log(worldIsYours)

  			thatt.setState({world: worldIsYours})
  		}
  	})

  },

  // CLICK TO PLAY THE FUTURE SONG
  playFuture() {

  	var thattt = this;

  	$.ajax({
  		url: 'https://api.spotify.com/v1/search?q=artist:future&type=track',
  		success: function(songData) {
  			// console.log(songData.tracks.items[0].preview_url)

  			var futSong = songData.tracks.items[0].preview_url
  			console.log(futSong)

  			thattt.setState({futureSng: futSong})
  		}
  	})

  },

  // CLICK TO PLAY THE FUTURE SONG
  playMigos() {

  	var thatMigos = this;

  	$.ajax({
  		url: 'https://api.spotify.com/v1/search?q=artist:migos&type=track',
  		success: function(songData) {
  			// console.log(songData.tracks.items[0].preview_url)

  			var migosSong = songData.tracks.items[0].preview_url
  			console.log(migosSong)

  			thatMigos.setState({migosSng: migosSong})
  		}
  	})

  },

  // CLICK TO PLAY THE FUTURE SONG
  playDrake() {

  	var thatDrake = this;

  	$.ajax({
  		url: 'https://api.spotify.com/v1/search?q=artist:drake&type=track',
  		success: function(songData) {
  			// console.log(songData.tracks.items[0].preview_url)

  			var drakeSong = songData.tracks.items[0].preview_url
  			console.log(drakeSong)

  			thatDrake.setState({drakeSng: drakeSong})
  		}
  	})

  },

  // CLICK TO PLAY THE FUTURE SONG
  playKend() {

  	var thatKend = this;

  	$.ajax({
  		url: 'https://api.spotify.com/v1/search?q=artist:kendrick&type=track',
  		success: function(songData) {
  			// console.log(songData.tracks.items[0].preview_url)

  			var kendrickSong = songData.tracks.items[0].preview_url
  			console.log(kendrickSong)

  			thatKend.setState({kendrickSng: kendrickSong})
  		}
  	})

  },

  // CLICK TO PLAY THE FUTURE SONG
  playRae() {

  	var thatRae = this;

  	$.ajax({
  		url: 'https://api.spotify.com/v1/search?q=artist:rae&type=track',
  		success: function(songData) {
  			// console.log(songData.tracks.items[0].preview_url)

  			var raeSong = songData.tracks.items[0].preview_url
  			console.log(raeSong)

  			thatRae.setState({raeSng: raeSong})
  		}
  	})

  },
  
  componentDidMount() {

  		// NAVBAR CHANGE COLOR
		window.onscroll = function() {
			myFunction()
		};

		function myFunction() {
		    
		    // IF YOU SCROLL DOWN PAST 500 PX, CHANGE THE NAVBAR TO WHITE
		    if (document.body.scrollTop > 500) {
		        var navbar = document.getElementsByClassName("navi");
		        console.log(navbar)

		        $('.appnav').css({'background-color':'white', 'height':'60px', 'color':'black'})
		        $('.navlistitem').css({'color':'black'})
		        $('#logo').css({'margin-top':'-15px'})
		    } 

		    // IF YOU SCROLL UP , CHANGE IT BACK TO TRANSPARENT
		    else if (document.body.scrollTop < 500) {
		        var navbar = document.getElementsByClassName("navi");
		        console.log(navbar)

		        $('.appnav').css({'background-color':'unset', 'height':'60px', 'color':'white', 'opacity':'inherit'})
		        $('.navlistitem').css({'color':'white'})
		    }	   

		}

		// AJAX CALL TO GET NAS PIC--------------------------------------------------
		var that = this;

	  	$.ajax({
	  		url: 'https://api.spotify.com/v1/search?q=artist:nas&type=album',
	  		success: function(data) {
	  			// console.log(data.albums.items[1].images[1])

	  			const nasCoverPic = data.albums.items[1].images[1].url
	  			// console.log(nasCoverPic)

	  			that.setState({nasPic: nasCoverPic})
	  		}
	  	})
	  	// LOG NAS PIC STATE
	  	// console.log("Nas Picture: ", this.state.nasPic)


		// AJAX CALL TO GET FUTURE PIC--------------------------------------------------
		var that = this;

	  	$.ajax({
	  		url: 'https://api.spotify.com/v1/search?q=artist:future&type=album',
	  		success: function(data) {
	  			// console.log(data.albums.items[1].images[1])

	  			const futureCoverPic = data.albums.items[1].images[1].url
	  			// console.log(futureCoverPic)

	  			that.setState({futurePic: futureCoverPic})
	  		}
	  	})
	  	// LOG NAS PIC STATE
	  	// console.log("Future Picture: ", this.state.futurePic)

	  	// AJAX CALL TO GET MIGOS PIC--------------------------------------------------
		var that = this;

	  	$.ajax({
	  		url: 'https://api.spotify.com/v1/search?q=artist:migos&type=album',
	  		success: function(data) {
	  			// console.log(data.albums.items[1].images[1])

	  			const migosCoverPic = data.albums.items[1].images[1].url
	  			// console.log(migosCoverPic)

	  			that.setState({migosPic: migosCoverPic})
	  		}
	  	})
	  	// LOG NAS PIC STATE
	  	// console.log("Migos Picture: ", this.state.migosPic)


	  	// AJAX CALL TO GET DRAKE PIC--------------------------------------------------
		var that = this;

	  	$.ajax({
	  		url: 'https://api.spotify.com/v1/search?q=artist:drake&type=album',
	  		success: function(data) {
	  			// console.log(data.albums.items[1].images[1])

	  			const drakeCoverPic = data.albums.items[1].images[1].url
	  			// console.log(drakeCoverPic)

	  			that.setState({drakePic: drakeCoverPic})
	  		}
	  	})
	  	// LOG NAS PIC STATE
	  	// console.log("Drake Picture: ", this.state.drakePic)


	  	// AJAX CALL TO GET KENDRICK PIC--------------------------------------------------
		var that = this;

	  	$.ajax({
	  		url: 'https://api.spotify.com/v1/search?q=artist:kendrick&type=album',
	  		success: function(data) {
	  			// console.log(data.albums.items[1].images[1])

	  			const kendrickCoverPic = data.albums.items[1].images[1].url
	  			// console.log(kendrickCoverPic)

	  			that.setState({kendrickPic: kendrickCoverPic})
	  		}
	  	})
	  	// LOG NAS PIC STATE
	  	// console.log("Kendrick Picture: ", this.state.kendrickPic)

	  	// AJAX CALL TO GET RAE SREMMURD PIC--------------------------------------------------
		var that = this;

	  	$.ajax({
	  		url: 'https://api.spotify.com/v1/search?q=artist:rae&type=album',
	  		success: function(data) {
	  			// console.log(data.albums.items[1].images[1])

	  			const raeCoverPic = data.albums.items[1].images[1].url
	  			// console.log(raeCoverPic)

	  			that.setState({raePic: raeCoverPic})
	  		}
	  	})
	  	// LOG NAS PIC STATE
	  	// console.log("Rae Picture: ", this.state.raePic)

  },

  render: function() {
    return (
      <div>

	        	<div className="homepage">

	        			<span class="heading">
	        				<center><strong>Lit</strong><span id="nation">Nation</span></center>
	        			</span>

	        			<center><p id="subheading">A Music App that lets you organize your favorite songs,<br /> stream live Radio and get LAF!</p></center>
	        			
	        			<center>
	        				<button className="login">Playlists</button>
	        				<button className="signup">Study music</button>
	        			</center>

	        			<center><span className="glyphicon glyphicon-menu-down" id="arr"></span></center>
	        	</div>

	        	{
	        		// RED INFO DIV
	        	}

	        	<div className="info" data-aos="fade-right" onLoad={this.componentDidMount}>

	        		{
	        			// http://www.sawyoo.com/postpic/2012/08/vector-iphone-6_305945.png
	        		}

	        		<center>
	        			<p id="infodesc">
	        				Your account. Listen anywhere, for <strong>free!</strong><span className="glyphicon glyphicon-phone" id="cell"></span>
	        			</p>
	        		</center>

	        	</div>

	        	{
	        		// SOME FEATURED
	        	}

	        	<div className="featuredsongs">

	        		<div className="container">
	        			
	        			<center>
	        				
	        				{
	        				    // TOP THREE BOXES-------------------------------
	        				}

					  		<div className="boxleft">
					  			<img src={this.state.nasPic} id="nas" onClick={this.playNas} />
					  		</div>

					  		<div className="boxmiddle">
					  			<img src={this.state.futurePic} id="future" onClick={this.playFuture}/>
					  		</div>
					  
					  		<div className="boxright">
					  			<img src={this.state.migosPic} id="migos" onClick={this.playMigos}/>
					  		</div>

					  		{
					  			// BOTTOM THREE BOXES-------------------------------
					  		}

					  		<div className="boxleft">
					  			<img src={this.state.drakePic} id="drake" onClick={this.playDrake}/>
					  		</div>

					  		<div className="boxmiddle">
					  			<img src={this.state.kendrickPic} id="kendrick" onClick={this.playKend}/>
					  		</div>
					  
					  		<div className="boxright">
					  			<img src={this.state.raePic} id="rae" onClick={this.playRae}/>
					  		</div>
							
	        			</center>

	        		</div>

	        		<ReactAudioPlayer
					  src={this.state.world}
					  autoPlay
					  className="player"
					/>
					<ReactAudioPlayer
					  src={this.state.futureSng}
					  autoPlay
					  className="player"
					/>
					<ReactAudioPlayer
					  src={this.state.migosSng}
					  autoPlay
					  className="player"
					/>
					<ReactAudioPlayer
					  src={this.state.drakeSng}
					  autoPlay
					  className="player"
					/>
					<ReactAudioPlayer
					  src={this.state.kendrickSng}
					  autoPlay
					  className="player"
					/>
					<ReactAudioPlayer
					  src={this.state.raeSng}
					  autoPlay
					  className="player"
					/>

	        	</div>

	        	{
	        		// CREATE YOUR OWN PLAYLISTS
	        	}

	        	<div className="createplaylistdiv">
	        		<center>
	        			<p id="createheading">
	        				Create your own playlists
	        				<br />
	        			</p>
	        				<span className="glyphicon glyphicon-headphones" id="headphones"></span>
	        				<br />
	        				<br />
	        				<div className="row">
							  
							  <div className="col-md-6">
							  	<p id="lefttext">
							  		Find your favorite Artist, get their Albums and create your playlists.
							  		Get all the hottest tracks! 
							  	</p>
							  </div>
							  
							  <div className="col-md-6">
							  	<p id="lefttext">
							  		All you need, is a Spotify account!
							  		<br />
							  		Go to Spotify<a href="https://www.spotify.com/us/">
							  		<i className="fa fa-spotify" aria-hidden="true" id="spotlogo"></i>
							  		</a>
							  	</p>
							  </div>

							</div>

	        		</center>
	        	</div>

      </div>
    )
  }
})

export default Home;


{

	// FUNCTIONALITY PSEUDO-CODE:

	// 1.) ALLOW THE USER TO ENTER AN ARTIST NAME

	// 2.) GO TO SPOTIFY AND GET THOSE ARTISTS, AND GET ALBUMS BY THOSE ARTISTS

	// 3.) GET TRACKS USING THE ALBUMS TRACKS ENDPOINT


}




