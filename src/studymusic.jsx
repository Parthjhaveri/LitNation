var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import CSS from './App.css';
import { IndexRoute, Link, Router, Route, browserHistory } from 'react-router';
// import ReactAudioPlayer from 'react-audio-player';

var StudyMusic = React.createClass({
  render:function() {
    return (
      <div className="studymusicdiv">
      {
        // IFRAME FOR STUDY MUSIC LINK:
        // http://streaming64.radionomy.com/JamendoLounge?lang=en-US%2cen%3bq%3d0.8%2cnb%3bq%3d0.6%2cnl%3bq%3d0.4
      }
        <center>
          <p id="studyheading">STUDYING AND CODING MUSIC</p>
          <iframe src="http://streaming64.radionomy.com/JamendoLounge?lang=en-US%2cen%3bq%3d0.8%2cnb%3bq%3d0.6%2cnl%3bq%3d0.4" className="radioframe">
          </iframe>
          <p id="studyheadinglive">Live stream...</p>
        </center>
      </div>
    )
  }
})

export default StudyMusic;