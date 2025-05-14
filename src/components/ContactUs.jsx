import React from "react";
import '../styles/upscontactus.css'
import myacct from '../images/myacct.png';
import shipping from '../images/shipping.png';
import tracking from '../images/tracking.png';
import claims from '../images/claims.png';
import Upsfaq from "../components/Upsfaq";
import PrimaryButton from "./REUSEABLES/PrimaryButton";
const ContactUs = () => {
    return (
        <div className="news-room" style={{ paddingTop: '150px' }}>
            <div className="news">
                <div className="home-link">
                    <a href="#"> Home </a>
                    <span className="span1"> / </span>    Contact Us
                </div >

                <div className="help">
                    <h1 className="h1-1"> Help and Support Center </h1>
                    <div className="yellowl"> </div>
                </div>

                <div className="card-1">

                    <div className="card">

                        <div className="card-img">
                            <img src={tracking} alt="" className="img-1" />
                            <h2> Tracking </h2>
                        </div>
                        <div className="card-text">

                            <p> Understanding Tracking Status &gt; </p>
                            <p> Delivery Notice &gt; </p>
                            <p> Missed Package Delivery &gt; </p>
                        </div>
                        <PrimaryButton text='Get Tracking Help' iconClass='fa-solid fa-chevron-right' justifySelf='center' />
                    </div>
                    <div className="card">

                        <div className="card-img">
                            <img src={shipping} alt="" className="img-1" />
                            <h2> Shipping </h2>
                        </div>
                        <div className="card-text">

                            <p> Shipping Cost Estimator &gt; </p>
                            <p> International Shipping &gt; </p>
                            <p> Domestic Shipping &gt; </p>
                            <p> Freight Shipping &gt; </p>
                            <p> Packaging and Shipping Supplies &gt; </p>
                        </div>
                        <PrimaryButton text='Get Shipping Help' iconClass='fa-solid fa-chevron-right' justifySelf='center' />
                    </div>
                    <div className="card">

                        <div className="card-img">
                            <img src={tracking} alt="" className="img-1" />
                            <h2> Delivery Changes</h2>
                        </div>
                        <div className="card-text">

                            <p> Change Delivery &gt; </p>
                            <p> Deliver to New Address &gt; </p>
                            <p> Schedule a Pickup &gt; </p>
                            <p> Delivery Preferences &gt; </p>
                            <p> Issue with my Delivery &gt; </p>
                        </div>
                        <PrimaryButton text='Get My Choice Help' iconClass='fa-solid fa-chevron-right' justifySelf='center' />
                    </div>

                </div>


            </div>

            <div className="card-2">
                {/* <div className="curvy"> </div> */}

                <div className="cardd">
                    <div className="card-img">
                        <img src={claims} alt="" className="img-1" />
                        <h2> Claims </h2>
                    </div>

                    <div className="card-text">
                        <p> File a Claim &gt; </p>
                        <p>Check My Claims &gt; </p>
                    </div>
                    <PrimaryButton text='Get Claims Help' iconClass='fa-solid fa-chevron-right' justifySelf='center' />
                </div>

                <div className="cardd">
                    <div className="card-img">
                        <img src={myacct} alt="" className="img-1" />
                        <h2> My Accounts  </h2>
                    </div>
                    <div className="card-text">
                        <p> Manage Billing and Invoice &gt; </p>
                        <p> Manage your UPS Profile &gt; </p>
                        <p> Sign up for My Choice &gt; </p>
                    </div>
                    <PrimaryButton text='Get My Account Help' iconClass='fa-solid fa-chevron-right' justifySelf='center' />
                </div>
            </div>
            <div className="chat-wrapper">
                <div className="chat-box">
                    <div className="chat-header">Need Help? Get Quick Answers</div>
                    <div className="chat-content">
                        <div className="ups-black"> </div>
                        <div className="chat-body">

                            <p className="chat-text">
                                Hi, I'm the UPS Virtual Assistant. Ask a question or type your tracking number so I can help.
                            </p>
                            <p className="chat-disclaimer">
                                <em>
                                    By chatting, you consent to the chats being recorded, used, and shared by us and our service providers according to our <a href="#">Privacy Notice</a> and <a href="#">Cookies Policy</a>.
                                </em>
                            </p>
                            <span className="chat-time">08:08 AM</span>
                        </div>
                    </div>
                    <div className="chat-input">
                        <input type="text" placeholder="Start typing here..." />
                        <button></button>
                    </div>
                </div>
            </div>
            <div className="faq-wrapper">

                <div className="faq-box">
                    <h2> FAQ </h2>
                    <div className="faq-yellow"> </div>
                </div>

            </div>

            <Upsfaq />

            <div className="support">
                <h2> Support Resources</h2>
                <div className="support-yellow"> </div>
            </div>
            <div className="support-box">
                <div className="support-card">
                    <div className="support-text"> <p> Tracking Support <span>&#x25B6;</span></p> </div>
                    <div className="support-text"> <p> Shipping Support <span>&#x25B6;</span> </p> </div>
                    <div className="support-text"> <p> File a claim <span>&#x25B6;</span></p> </div>
                </div>
                <div className="support-card2">
                    <div className="support-text2"><p>  Pay My Bills <span>&#x25B6;</span>  </p></div>
                    <div className="support-text2"> <p>  International Shipping Guide <span>&#x25B6;</span> </p>  </div>
                    <div className="support-text2"> <p> UPS My Choice <span>&#x25B6;</span> </p> </div>
                </div>
            </div>
        </div>




    );
}
export default ContactUs;