import React from 'react'
import './sidebar.scss'
import { Link } from 'gatsby'


//https://therichpost.com/reactjs-responsive-sidebar-template-free/

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'

import $ from 'jquery';

class Sidebar extends React.Component {
	componentDidMount() {

		// Sidebar Toggle Menu Click
		$("#menu-toggle").on("click", function (e) {
			$("#navwrapper").toggleClass("toggled");
		});

	}


	render() {
		return (
			<div className="d-flex" id="navwrapper">
				<div id="sidebar-wrapper">
					<div className="sidebar-heading">Weed Wāhine </div>
					<div className="list-group list-group-flush ">
						<ul>
							<li className="navigationItem">
								<Link className="navigationLink" to="/">Home</Link>
							</li>
							<li className="navigationItem">
								<Link className="navigationLink" to="/blog/">Learn</Link>
								<ul>
									<li> <Link className="navigationLink" to="/weed/">Weed</Link> </li>
									<li> <Link className="navigationLink" to="/sex/">Sex</Link> </li>
									<li> <Link className="navigationLink" to="/education/">Education</Link> </li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<nav className="navbar navbar-light">
					<button className="navbar-toggler" id="menu-toggle" type="button" >
						<span className="navbar-toggler-icon"></span>
					</button>
				</nav>
			</div>
		)
	}
}

export default Sidebar