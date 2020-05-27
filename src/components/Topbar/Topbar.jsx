import React from 'react';

import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";
import './Topbar.scss';

const Topbar = () => {
	return (
		<header className="topbar" data-testid="topbar">
			<div className="container">
				<div className="topbar__logo">
					<LogoSvg alt="Logo Instagram" />
				</div>
			</div>
		</header>
	);
}

export default Topbar;
