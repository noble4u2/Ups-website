import React from 'react'
import FirstImage from '../images/NewsroomFirst.jpg'
import HeroSection from './REUSEABLES/HeroSection'
import PrimaryButton from './REUSEABLES/PrimaryButton'
import PackageCar from '../images/PackageCar.jpg'
import Feeder8 from '../images/Feeder8.jpg'
import Advance from '../images/Advance.jpg'
import ServiceHighlight from './REUSEABLES/ServiceHighlight'
import SecondaryButton from './REUSEABLES/SecondaryButton'
import '../styles/Newsroom.css'

function Newsroom() {
    return (
        <main style={{ paddingTop: '175px' }}>
            <div className="home-link">
                    <a href="#"> Home </a>
                    <span className="span1"> / </span>    Newsroom
                </div >
            <HeroSection
                header='The latest news from UPS'
                heroContentHeader='Financials'
                title='UPS Releases 1Q 2025 Earnings'
                description='UPS announced first-quarter 2025 consolidated revenues of $21.5 billion.'
                bgImage={FirstImage}
                marginLeft='50%'
                children={<PrimaryButton text='Get the Latest' iconClass='fa-solid fa-chevron-right' />}
            />

            <ServiceHighlight
                image1={PackageCar}
                category1='Financials'
                title1='UPS Announces Quarterly Dividend'
                description1='UPS today announced its regular quarterly dividend of $1.64 per share on all outstanding Class A and Class B shares.'

                image2={Advance}
                category2='Our Strategy'
                title2='UPS to Acquire Andlauer Healthcare Group for $1.6 Billion, Strengthening its Global Offerings in Complex Healthcare Logistics'
                description2='Acquisition will Enhance End-to-End Capabilities and Service to Healthcare Customers Needing Temperature-Controlled Logistics Solutions in North America'

                image3={Feeder8}
                category3='Financials'
                title3='UPS To Release First-Quarter 2025 Results On Tuesday, April 29, 2025'
                description3='UPS will announce its 2025 first-quarter results on April 29, 2025, at approximately 6:00 a.m. Eastern Time.'
            />
            <div>
                <SecondaryButton text='View All Stories' iconClass='fa-solid fa-chevron-right' justifySelf = 'center' />
            </div>

            <div className='media-relations-container'>
                <h3>Media Relations</h3>
                <div className='media-relations-content-container'>
                    <div className='media-relations-conent'>
                        <h4>For Reporters and Media Outlets</h4>
                        <p>
                            Journalists on deadlines can easily reach the Media Relations team by phone or email around the globe and around the clock. For urgent press needs, call <a href="#">1-404-828-7123</a> for directions to reach us after-hours.
                        </p>
                        <p>
                            Need a UPS logo? <a href="">Click here</a> to register for access to the UPS Brand Central asset library.
                        </p>
                        <ul>
                            <li>
                                <i class="fa-solid fa-phone"></i>
                                <a href="">1-404-828-7123</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-envelope"></i>
                                <a href="">Media Relations</a>
                            </li>
                            <li>
                                <i class="fa-brands fa-x-twitter"></i>
                                <span>
                                    Follow <a href="">@UPS_News</a> for the latest company news
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className='media-relations-conent'>
                        <h4>For Customers</h4>
                        <p>
                            For service inquires or general questions about UPS, please visit our <a href="#">Help and Support Center</a>.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Newsroom
