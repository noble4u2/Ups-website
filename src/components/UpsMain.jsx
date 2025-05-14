import React from "react";
import "../styles/UpsMain.css";
import Biztrip from "../images/biztrips57-rt2-380x280.jpg";
import Paperless from "../images/Paperless25-380x280.jpg";
import GlobalCheckout from "../images/GlobalCheckout1107007-380x280.jpg";
import DeliveringWhatMattersLeft from "../images/delivering-what-matters_left.png"
import HeroSection from "./REUSEABLES/HeroSection";
import FirstImage from '../images/FirstImage.jpg'
import ServiceHighlight from "./REUSEABLES/ServiceHighlight";
import SecondaryButton from "./REUSEABLES/SecondaryButton";
import PromoSection from "./REUSEABLES/PromoSection";
import PrimaryButton from "./REUSEABLES/PrimaryButton";

function UpsMain() {
	return (
		<main className="main1" style={{ paddingTop: '175px' }}>
			<div className="home-link">
				<a href="#"> Home </a>
				<span className="span1"> / </span>    Our Stories
			</div >
			<HeroSection
				header='Moving our world forward by delivering what matters.'
				heroContentHeader='Customer First'
				title='UPS Ground Saver and UPS Ground with Freight Pricing'
				description='These products offer customers more options, powered by the trust and reliability of UPS'
				marginLeft='8.5%'
				bgImage={FirstImage}
				children={<PrimaryButton text='Learn More' iconClass='fa-solid fa-chevron-right' justifySelf='flex-start' />}
			/>

			<ServiceHighlight
				image1={Biztrip}
				category1='Customer First'
				title1='‘Subway Takes’ creator Kareem Rahma teams up with UPS for small biz love'
				description1='Watch ‘UPS Business Trips’ now!'

				image2={GlobalCheckout}
				category2='Customer First'
				title2='UPS Unveils Game-Changing UPS® Global Checkout: No More Surprise Import Fees'
				description2='Available in 43 countries, new service guarantees cost of customs fees and 	duties on international purchases at checkout'

				image3={Paperless}
				category3='Customer First'
				title3='UPS Unveils Game-Changing UPS® Global Checkout: No More Surprise Import Fees'
				description3='Paperless invoices make international shipping easier'
			/>
			<div className="Visit-all-stories-btn">
				<SecondaryButton text='View All Stories' iconClass='fa-solid fa-chevron-right' />
			</div>

			<section className="section2">
				<div className="firstDiv">
					<h4>ABOUT US</h4>
					<h3>Customer First, People Led, Innovation Driven</h3>
					<SecondaryButton text='Get to Know Us' iconClass='fa-solid fa-chevron-right' justifySelf='flex-start' />
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
							<PrimaryButton text='View All Facts Sheet' iconClass='fa-solid fa-chevron-right' />
						</li>
					</ul>
				</div>

				<PromoSection
					image={DeliveringWhatMattersLeft}
					category='OUR IMPACT'
					title='Every day, around the globe, we are delivering what matters.'
					description="At UPS, we’re focused on making credible, purposeful changes to adapt and achieve our sustainability goals to help build stronger communities and a healthier environment.. It's about ..."
					children={<SecondaryButton text='See Our Impact' iconClass='fa-solid fa-chevron-right' justifySelf='flex-start' />}
					imageOrder='1'
					contentOrder='2'
				/>
			</section>
		</main>
	);
}

export default UpsMain;
