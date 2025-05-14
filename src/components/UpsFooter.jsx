import React from 'react'
import '../styles/footer.css'
import TertiaryButton from './REUSEABLES/TertiaryButton'

function UpsFooter() {
    return (
        <footer className='main-footer-container'>
            <div className='footer-first-section'>
                <TertiaryButton text='Newsroom' iconClass='fas fa-external-link-alt' backgroundColor = '#351C15' />
                <TertiaryButton text='Careers' iconClass='fa-solid fa-chevron-right' backgroundColor = '#351C15' />
            </div>
            
            <div className='footer-second-section'>
                <div className='second-section-first-list'>
                    <h4>This Site</h4>
                    <ul>
                        <li>Our Stories</li>
                        <li>Our Company</li>
                        <li>Our Impact</li>
                        <li>Investors</li>
                        <li>Newsroom</li>
                        <li>Support</li>
                        <li>Recognize a UPS Employee</li>
                    </ul>
                </div>
                <div className='second-section-second-list'>
                    <h4>Other UPS Sites</h4>
                    <ul>
                        <li><span>UPS.com</span></li>
                        <li><span>UPSers.com</span></li>
                        <li><span>UPSjobs.com</span></li>
                    </ul>
                </div>
                <div className='second-section-third-list'>
                    <h4>Connect</h4>
                    <button><i class="fa-brands fa-facebook-f"></i></button>
                    <button><i class="fa-brands fa-x-twitter"></i></button>
                    <button><i class="fa-brands fa-instagram"></i></button>
                    <button><i class="fa-brands fa-linkedin-in"></i></button>
                    <button><i class="fa-brands fa-youtube"></i></button>
                </div>
                <div className='second-section-forth-list'>
                    <p>Get news delivered to your inbox.</p>
                    <TertiaryButton text='Subscribe' iconClass='fa-solid fa-chevron-right' backgroundColor = 'rgba(255, 255, 255, 0)' />
                </div>
            </div>
            <div className='footer-third-section'>
                <ul className='third-section-first-list'>
                    <li>Terms of Use</li>
                    <li>Privacy Notice</li>
                    <li>CA Privacy Rights</li>
                    <li>Do Not Sell My Personal Information</li>
                    <li>Cookie Settings</li>
                </ul>
                <small className='third-section-second-list'>
                    Copyright ©1994 - 2025 United Parcel Service of America, Inc. All rights reserved. No longer want to receive email updates? <a href="">Unsubscribe Here</a>
                    To update all other UPS email preferences or unsubscribe from UPS marketing emails, <a href="">click here</a>.
                </small>
            </div>
        </footer>
    )
}

export default UpsFooter
