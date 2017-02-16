var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import CSS from './App.css';
import { IndexRoute, Link, Router, Route, browserHistory } from 'react-router';
import ReactAudioPlayer from 'react-audio-player';
import SpotifyPlayer from 'react-spotify-player';
import Playlists from './playlists.jsx'
// import StudyMusic from './studymusic.jsx'

var SongPanel = React.createClass({

  // GET THE INITIAL STATE
  getInitialState() {
    return {uris: [], selectedURI: null}
  },

  // WHEN THIS COMPONENT LOADS
  componentDidMount() {

    var that = this;

    $.ajax({
      url: 'https://api.spotify.com/v1/search?q=' + this.props.songprop + '&type=track&limit=50',
      success: function(data) {
        // console.log("Player data:", data)
        
        // console.log(data.tracks.items.map(function(key) {
        //   // return (that.setState({uris: that.state.uris.concat(key.uri)},that));
        //   return key.uri;
        // }))

      }

    })
  },

  render: function() {
      // console.log("URIs: ", this.state.uris)
    
    // PROPERTIES FOR SPOTIFY PLAYER
    const view = 'list'; 
    const theme = 'black';

    const size = {
      width: '98%',
      height: 300,
    };
    //------------------------------

    return (
      <div className="songpaneldiv">

        <center>
        {
          // <iframe src="https://embed.spotify.com/?uri=spotify:user:spotify:playlist:3rgsDhGHZxZ9sB9DQWQfuf" frameborder="0" allowtransparency="true" className="playerframe"></iframe>
        }
        <SpotifyPlayer
          uri="spotify:track:52DpF4yM1cxbEb3OkZVeFb" //{this.state.selectedURI}
          // {
          //   this.state.uris.map(function(key) {
          //     return src={key}
          //   })
          // }
          className="playbox"
          size={size}
          view={view}
          theme={theme}
        />
        </center>

      </div>
    )
  }
})

export default SongPanel;