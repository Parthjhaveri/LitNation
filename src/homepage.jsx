var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
import CSS from './App.css';
import Navi from './navbar.jsx';

import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';

var Home = React.createClass({
  
  componentDidMount() {

		window.onscroll = function() {
			myFunction()
		};

		function myFunction() {
		    
		    // IF YOU SCROLL DOWN PAST 500 PX, CHANGE THE NAVBAR TO WHITE
		    if (document.body.scrollTop > 500) {
		        var navbar = document.getElementsByClassName("navi");
		        console.log(navbar)

		        $('.appnav').css({'background-color':'white', 'height':'80px', 'color':'black', 'opacity':'0.9'})
		        $('.navlistitem').css({'color':'black'})
		    } 

		    // IF YOU SCROLL UP, CHANGE IT BACK TO TRANSPARENT
		    else if (document.body.scrollTop < 500) {
		        var navbar = document.getElementsByClassName("navi");
		        console.log(navbar)

		        $('.appnav').css({'background-color':'unset', 'height':'80px', 'color':'white', 'opacity':'inherit'})
		        $('.navlistitem').css({'color':'white'})
		    }	   

		}

		// return navbar;
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
	        				<button className="login">Login</button>
	        				<button className="signup">Sign up</button>
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
	        				
					  		<div className="boxleft">

					  		</div>
					  
					  
					  		<div className="boxright">

					  		</div>

					  		<div className="boxleft">

					  		</div>
					  
					  
					  		<div className="boxright">

					  		</div>
							
	        			</center>

	        		</div>

	        	</div>

      </div>
    )
  }
})

export default Home;