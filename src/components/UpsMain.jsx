import React from "react";
import "../styles/UpsMain.css";
import Biztrip from "../images/biztrips57-rt2-380x280.jpg";
import Paperless from "../images/Paperless25-380x280.jpg";
import GlobalCheckout from "../images/GlobalCheckout1107007-380x280.jpg";
import DeliveringWhatMattersLeft from "../images/delivering-what-matters_left.png"

function UpsMain() {
	return (
		<main className="main1">
			<h1>Moving our world forward by delivering what matters.</h1>
			<section className="section1">
				<div className="firstImg">
					<div>
						<h4>Customer First</h4>
						<h3>UPS Ground Saver and UPS Ground with Freight Pricing</h3>
						<p>
							These products offer customers more options, powered by the trust
							and reliability of UPS
						</p>
						<button className="first-btn">
							Learn more <i class="fa-solid fa-chevron-right"></i>
						</button>
					</div>
				</div>
				<div className="ups-customer-initiatives">
					<div className="content">
						<img src={Biztrip} alt="" />
						<div>
							<h4>Customer First</h4>
							<h3>
								‘Subway Takes’ creator Kareem Rahma teams up with UPS for small
								biz love
							</h3>
							<p>Watch ‘UPS Business Trips’ now!</p>
						</div>
					</div>
					<div className="content">
						<img src={GlobalCheckout} alt="" />
						<div>
							<h4>Customer First</h4>
							<h3>
								UPS Unveils Game-Changing UPS® Global Checkout: No More Surprise
								Import Fees
							</h3>
							<p>
								Available in 43 countries, new service guarantees cost of
								customs fees and duties on international purchases at checkout
							</p>
						</div>
					</div>
					<div className="content">
						<img src={Paperless} alt="" />
						<div>
							<h4>Customer First</h4>
							<h3>
								Exporting with UPS helps small businesses compete with big ones
							</h3>
							<p>Paperless invoices make international shipping easier</p>
						</div>
					</div>
				</div>
				<div className="Visit-all-stories-btn">
					<button className="second-btn">
						View All Stories <i class="fa-solid fa-chevron-right"></i>
					</button>
				</div>
			</section>
			<section className="section2">
				<div className="firstDiv">
					<h4>ABOUT US</h4>
					<h3>Customer First, People Led, Innovation Driven</h3>
					<button className="second-btn">Get to Know Us <i class="fa-solid fa-chevron-right"></i></button>
				</div>
				<div className="secondDiv">
					<ul>
						<li>
							<h4>~490K</h4>
							<p>Employees</p>
						</li>
						<li>
							<h4>200+</h4>
							<p>Countries and territories</p>
						</li>
						<li>
							<h4>22.4M</h4>
							<p>Packages delivered per day</p>
						</li>
						<li>
							<h4>$91.1B</h4>
							<p>Total revenue for 2024</p>
						</li>
						<li>
							<button className="first-btn">View All Fact Sheets <i class="fa-solid fa-chevron-right"></i></button>
						</li>
					</ul>
				</div>
				<div className="thirdDiv">
					<img src={DeliveringWhatMattersLeft} alt="" />
					<div>
						<h4>OUR IMPACT</h4>
						<h3>Every day, around the globe, we are delivering what matters.</h3>
						<p>At UPS, we’re focused on making credible, purposeful changes to adapt and achieve our sustainability goals to help build stronger communities and a healthier environment.. It's about ...</p>
						<button className="second-btn">See Our Impact <i class="fa-solid fa-chevron-right"></i></button>
					</div>
				</div>
			</section>
		</main>
	);
}

export default UpsMain;
