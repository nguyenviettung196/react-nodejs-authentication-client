import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.styles.css";

class Header extends Component {
	renderLinks() {
		if (this.props.authenticated) {
			return (
				<>
					<Link to="/signout">Sign out</Link>
					<Link to="/feature">Feature page</Link>
				</>
			);
		} else {
			return (
				<div>
					<Link to="/signin">Sign in</Link>
					<Link to="/signup">Sign up</Link>
				</div>
			);
		}
	}
	render() {
		return (
			<div className="header">
				<Link to={"/"}>Redux auth</Link>
				{this.renderLinks()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
