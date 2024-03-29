import React from "react";
import './nav.css'

const Nav = ({navProperties}) => {
	return(
		<div className="nav-outer">
			<div className="nav-inner">
				<div className="nav-logo">
					<h4 className="nav-logo-heading">{navProperties.name}</h4>
				</div>
				<div className="nav-features">
					
				</div>
			</div>
		</div>
	);
}

export default Nav;