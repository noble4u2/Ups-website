import React, { useState } from "react";
import UpsIcon from "../images/ups-logo.svg";
import "../styles/UpsHomeHeader.css";
import { Link } from "react-router-dom";

function UpsHomeHeader() {
	const [showOsDiv, setShowOsDiv] = useState(false);
	const [showOcDiv, setShowOcDiv] = useState(false);
	const [showOiDiv, setShowOiDiv] = useState(false);
	const [showInvDiv, setShowInvDiv] = useState(false);
	const [showNeDiv, setShowNeDiv] = useState(false);
	const [langSelector, setLangSelector] = useState(false);
	const [showSearchBar, setshowSearchBar] = useState(false);
	const [showNewNav, setShowNewNav] = useState(false);

	const handleOs = () => {
		setShowOsDiv(true);
	};
	const handleOsHide = () => {
		setShowOsDiv(false);
	};

	const handleOc = () => {
		setShowOcDiv(true);
	};
	const handleOcHide = () => {
		setShowOcDiv(false);
	};

	const handleOi = () => {
		setShowOiDiv(true);
	};
	const handleOiHide = () => {
		setShowOiDiv(false);
	};

	const handleInv = () => {
		setShowInvDiv(true);
	};
	const handleInvHide = () => {
		setShowInvDiv(false);
	};

	const handleNe = () => {
		setShowNeDiv(true);
	};
	const handleNeHide = () => {
		setShowNeDiv(false);
	};

	const toggleLangSelector = () => {
		setLangSelector(!langSelector);
	};

	const toggleshowSearchBar = () => {
		setshowSearchBar(!showSearchBar);
	};

	const toggleNewNav = () => {
		setShowNewNav(!showNewNav)
	}

	// Nav bar contents
	const navItem = [
		{
			ID: "ourStories",
			Name: "Our Stories",
			show: handleOs,
			hide: handleOsHide,
			path: '',
		},
		{
			ID: "ourCompany",
			Name: "Our Company",
			show: handleOc,
			hide: handleOcHide,
			path: '/ourCompany',
		},
		{ ID: "ourImpact", Name: "Our Impact", show: handleOi, hide: handleOiHide },
		{
			ID: "investors",
			Name: "Contact Us",
			show: handleInv,
			hide: handleInvHide,
			path: '/contactUs'
		},
		{ ID: "newsroom", Name: "Newsroom", show: handleNe, hide: handleNeHide, path: '/newsRoom' },
	];

	return (
		<header>
			<nav id="mainNav">
				<div className="ups-logo-container">
					<img src={UpsIcon} alt="" />
					<i onClick={toggleNewNav} class="fa-solid fa-bars"></i>
				</div>
				<div id="navItems">
					<ul>
						{navItem.map((items, i) => (
							<li
								key={i}
								id={items.ID}
								onMouseEnter={items.show}
								onMouseLeave={items.hide}
							>
								<Link className="route-links" to={items.path}><span>{items.Name}</span></Link>
							</li>
						))}
					</ul>
					<div id="navItems2">
						<button>
							<span>ups.com</span>
							<i class="fas fa-external-link-alt"></i>
						</button>
						<button>Support</button>
						<button className="englishBtn" onClick={toggleLangSelector}>
							<i class="fa-solid fa-earth-americas"></i> English{" "}
							<i class="fa-solid fa-chevron-down"></i>
						</button>
						<div id="searchBtn" onClick={toggleshowSearchBar}>
							<i class="fa-solid fa-magnifying-glass"></i>
						</div>
					</div>
				</div>
			</nav>

			{/* Nav item drop down when window reduces */}

			{showNewNav && (
				<div className="langModal">
					<div className="overlay" onClick={toggleNewNav}></div>
					<div className="nav-items-new-form">
						<div className="logo-and-cancel-icon">
							<img src={UpsIcon} alt="" />
							<button className="cancel-btn" onClick={toggleNewNav}>
								<i class="fa-solid fa-xmark"></i>
							</button>
						</div>
						<ul>
							{navItem.map((items, i) => (
									<li><Link className="route-links" to={items.path}>
										{items.Name}</Link>
										<span>
											<i class="fa-solid fa-chevron-down"></i>
										</span></li>
							))}
						</ul>
						<div className="navItems2-new">
							<button>
								<span>ups.com</span>
								<i class="fas fa-external-link-alt"></i>
							</button>
							<button>Support</button>
							<button onClick={toggleLangSelector}>
								<i class="fa-solid fa-earth-americas"></i> English{" "}
								<i class="fa-solid fa-chevron-down"></i>
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Our Stories Drop down */}
			{showOsDiv && (
				<div
					onMouseEnter={handleOs}
					onMouseLeave={handleOsHide}
					className={`nav-items-drop-down ${showOsDiv ? "show" : ""}`}
					id="Our-stories-drop-down"
				>
					<h4>OUR STORIES</h4>
					<ul>
						<li>
							Customers First{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							People Led{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							Innovation Driven{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
					</ul>
				</div>
			)}

			{/* Our Company Drop down */}
			{showOcDiv && (
				<div
					onMouseEnter={handleOc}
					onMouseLeave={handleOcHide}
					className={`nav-items-drop-down ${showOcDiv ? "show" : ""}`}
					id="Our-company-drop-down"
				>
					<h4>OUR COMPANY</h4>
					<ul>
						<li>
							Our Strategy{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							Our Culture{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							Global Presence{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							Leadership{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							Our History{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							Great Employer{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							Suppliers{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
					</ul>
				</div>
			)}

			{/* Our Impact Drop down */}
			{showOiDiv && (
				<div
					onMouseEnter={handleOi}
					onMouseLeave={handleOiHide}
					className="nav-items-drop-down"
					id="Our-impact-drop-down"
				>
					<h4>OUR IMPACT</h4>
					<ul>
						<li>
							Sustainability{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							Community{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							Progress Reports and Disclosures{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
					</ul>
				</div>
			)}

			{/* Investors Drop down */}
			{showInvDiv && (
				<div
					onMouseEnter={handleInv}
					onMouseLeave={handleInvHide}
					className="nav-items-drop-down"
					id="investors-drop-down"
				>
					<h4>INVESTORS</h4>
					<ul>
						<li>
							Overview{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							Company Profile{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							Quarterly Earnings and financials{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							News and Events{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							SEC Filings{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							Corporate Governance{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							Sustainability{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							Employee Shareowner Services{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
					</ul>
				</div>
			)}

			{/* Our Company Drop down */}
			{showNeDiv && (
				<div
					onMouseEnter={handleNe}
					onMouseLeave={handleNeHide}
					className="nav-items-drop-down"
					id="newsroom-drop-down"
				>
					<h4>NEWSROOM</h4>
					<ul>
						<li>
							Press Releases{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							Statements{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li>
							Awards and Recognitions{" "}
							<span>
								<i class="fa-solid fa-chevron-right"></i>
							</span>
						</li>
						<li></li>
						<li>
							Media Library{" "}
							<span>
								<i className="fas fa-external-link-alt"></i>
							</span>
						</li>
						<li>
							Ups Brand Assets{" "}
							<span>
								<i className="fas fa-external-link-alt"></i>
							</span>
						</li>
					</ul>
				</div>
			)}

			{/* Language Selector Modal */}
			{langSelector && (
				<div className="langModal">
					<div className="overlay" onClick={toggleLangSelector}></div>
					<div className="langForm">
						<div className="firstDiv">
							<h1>Language Selector</h1>
							<button onClick={toggleLangSelector}>
								<i class="fa-solid fa-xmark"></i>
							</button>
						</div>
						<div className="secondDiv">
							<ul>
								<li>ASIA, OCEANIA & PACIFIC</li>
								<li>
									<a href="#">English</a>
								</li>
								<li>
									<a href="#">繁體中文（台灣）</a>
								</li>
								<li>
									<a href="#">繁體中文（香港）</a>
								</li>
								<li>
									<a href="#">简体中文</a>
								</li>
								<li>
									<a href="#">日本語</a>
								</li>
								<li>
									<a href="#">한국</a>
								</li>
								<li>
									<a href="#">ภาษาไทย</a>
								</li>
								<li>
									<a href="#">Tiếng Việt</a>
								</li>
							</ul>
							<ul>
								<li>CANADA</li>
								<li>
									<a href="">English</a>
								</li>
								<li>
									<a href="">Français</a>
								</li>
							</ul>
							<ul>
								<li>CARIBBEAN, CENTRAL & SOUTH AMERICA</li>
								<li>
									<a href="">English</a>
								</li>
								<li>
									<a href="">Español</a>
								</li>
								<li>
									<a href="">Português do Brasil</a>
								</li>
							</ul>
						</div>
						<div className="thirdDiv">
							<ul>
								<li>EUROPE</li>
								<li>
									<a href="">English</a>
								</li>
								<li>
									<a href="">čeština</a>
								</li>
								<li>
									<a href="">Français</a>
								</li>
								<li>
									<a href="#">Deutsch</a>
								</li>
								<li>
									<a href="#">Polski</a>
								</li>
								<li>
									<a href="#">Nederlands</a>
								</li>
								<li>
									<a href="#">Español</a>
								</li>
								<li>
									<a href="#">Italiano</a>
								</li>
								<li>
									<a href="#">Português</a>
								</li>
								<li>
									<a href="#">Svenska</a>
								</li>
								<li>
									<a href="#">Türkçe</a>
								</li>
							</ul>
							<ul>
								<li>INDIAN SUB-CONTINENT, MIDDLE EAST & AFRICA</li>
								<li>
									<a href="#">English</a>
								</li>
								<li>
									<a href="#">العربية</a>
								</li>
							</ul>
							<ul>
								<li>
									<h4>UNITED STATES</h4>
								</li>
								<li>
									<a href="#">English</a>
								</li>
								<li>
									<a href="#">Español</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			)}

			{showSearchBar && (
				<div className="searchModal">
					<div className="overlay"></div>
					<nav className="searchNav">
						<img src={UpsIcon} alt="" />
						<div className="input-wrapper">
							<i class="fa-solid fa-magnifying-glass"></i>
							<input type="text" placeholder="Search About UPS" />
						</div>
						<button onClick={toggleshowSearchBar}>
							<i class="fa-solid fa-xmark"></i>
						</button>
					</nav>
				</div>
			)}
		</header>
	);
}

export default UpsHomeHeader;
