import React from 'react'
import HeroSection from './REUSEABLES/HeroSection'
import FirstImage from '../images/about_our-company_1440.jpg'
import '../styles/OurCompany.css'
import PromoSection from './REUSEABLES/PromoSection'
import SecondaryButton from './REUSEABLES/SecondaryButton'
import JimCasey from '../images/JimCasey.jpg'
import PrimaryButton from './REUSEABLES/PrimaryButton'
import Carol from '../images/CarolABOUTUS2.jpg'
import CarolPfp from '../images/tome-carol-pfp.png'

function OurCompany() {
    return (
        <div style={{ paddingTop: '175px' }}>
            <div className="home-link">
                    <a href="#"> Home </a>
                    <span className="span1"> / </span>    Our Company
                </div >
            <HeroSection
                header='Customer First, People Led, Innovation Driven'
                heroContentHeader='OUR STRATEGY'
                title='Focused on the right strategy'
                description='Customer First is about removing friction. People Led is our employee experience. And Innovation Driven is the value we create for shareowners.'
                bgImage={FirstImage}
                marginLeft='8.5%'
            />
            <ul className='ups-fact-container'>
                <li>
                    <i class="fa-solid fa-user-tie"></i>
                    <h3>~490K</h3>
                    <p>Employees</p>
                </li>
                <li>
                    <i class="fa-solid fa-earth-americas"></i>
                    <h3>200+</h3>
                    <p>Countries & territories served</p>
                </li>
                <li>
                    <i class="fa-solid fa-truck-moving"></i>
                    <h3>22.4M</h3>
                    <p>Packages delivered daily</p>
                </li>
                <li>
                    <i class="fa-solid fa-money-bill"></i>
                    <h3>$91.1B</h3>
                    <p>Total revenue for 2024</p>
                </li>
            </ul>

            <div>
                <PrimaryButton text='View All Fact Sheet' justifySelf='center' />
            </div>
            <div className='promo-section-container'>
                <PromoSection
                    image={JimCasey}
                    category='HISTORY'
                    title='How a $100 loan started it all'
                    description="The story of UPS, the world's largest package delivery company, began more than a century ago with a $100 loan to jumpstart a tiny messenger service."
                    children={<SecondaryButton text='Explore Our History' iconClass='fa-solid fa-chevron-right' justifySelf='flex start' />}
                    imageOrder='1'
                    contentOrder='2'
                />

                <PromoSection
                    image={Carol}
                    category='LEADERSHIP'
                    title='Leading the industry and connecting the world'
                    description="UPS is guided by leaders who constantly inspire us. We believe everyone has the power to make an impact and by serving others, you serve the collective good, moving everyone forward."
                    children={<SecondaryButton text='Meet Our Leadership' iconClass='fa-solid fa-chevron-right' justifySelf='flex start' />}
                    imageOrder='2'
                    contentOrder='1'
                />
            </div>

            <article className='informational-article-section'>
                <div className='article-description'>
                    <h4><i>"UPS is a company with a proud past and an even brighter future. Our values define us. Our culture differentiates us. Our strategy drives us. At UPS we are customer first, people led and innovation driven."</i></h4>
                    <p>- Carol B. Tomé</p>
                </div>
                <img src={CarolPfp} alt="Tom Carol Profile" />
            </article>
        </div>
    )
}

export default OurCompany
