import React from "react";
import '../styles/upsfaq.css'
import { useState } from "react";

const Upsfaq = () => {
    const [clickedIndex, setClickedIndex] = useState(null); // State to track the clicked title

    const [activeSection, setActiveSection] = useState(null); // State to track the active section
    const [expandedIndex, setExpandedIndex] = useState(null); // State to track which FAQ is expanded

    const toggleFaq = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null); // Collapse if the same FAQ is clicked
        } else {
            setExpandedIndex(index); // Expand the clicked FAQ
        }
    };

const faqelement = [
    { id: 1, name: "Shipping and Tracking", },
    { id: 2, name: "Lost or Damaged Packing",},
    { id: 3, name: "Billing", },
    { id: 4, name: "Account and Password", },
    { id: 5, name: "Additional Contacts",  },
]
const faqd1 = [
    {
        question1: "Where's my package?",
        answer:(
            <>
             Tracking your package on UPS.com will give you the most up-to-date information about the status of your shipment. We've recently upgraded our online tracking experience, so now you have access to the same level of detail as our customer service agents. You can also click <strong> Get Updates </strong> while tracking your package to get shipment status alerts sent to you throughout your package's journey. 
            <p className="tracking-p">  <a href="#">  Track a Package </a> </p>
            </>
        )
    },
    {
        question2: "My shipment says “Out for Delivery.” What time will it be delivered?",
        answer: (
            <>
               <p>  Generally, our drivers can deliver as late as 9 p.m. During the holiday season, our drivers may deliver even later.  </p>
               <p> If we are unable to deliver a package that shows a status of out of delivery, we’ll try another delivery on the next business day. </p> 
               <p> Not sure what your tracking status means?{" "}
                <span>
                    <a href="#">Here’s a list of common tracking statuses.</a>
                </span> 
                </p>
            </>
        ),
    },

    {
        question3: "Why hasn’t my driver delivered my package yet?",
        answer: (
            <>
                <p>  If your driver left a UPS Delivery Notice, it's because their first attempt at delivering or picking up your package was unsuccessful. <a href="#">Here’s what to do next with your delivery notice
                    <span class="material-symbols-outlined">open_in_new</span> </a> </p> 
                <p> If they didn't leave a delivery notice, it's because they need more information on how to deliver it. <a href="">You can log into UPS My Choice®</a> to provide them the info they need to get your package to you. 
                </p>
            </>
        )
    },

    {question4:"How do I change a delivery I'm receiving?",
        answer: (
            <>
             <p>  You can make a delivery change to a package by logging in and using UPS My Choice® or make a one-time change as a guest. 
              </p>
              <p> Changing a delivery with UPS My Choice can be done in three easy steps: </p>
             <ol className="faqol">
                <li>  <strong>Open Your Dashboard: </strong> <a href="#">Log into My Choice </a> to view your dashboard. </li>
                <li>
                    <strong> Select Your Package: </strong> Select the package you want to change. If you don't see your package, it may not be eligible for a delivery change. </li>
                <li>
                    <strong> Follow the Prompts: </strong> Reroute your package to a different location or change the delivery date. </li>
               
             </ol>
                <p className="choice"> Don't have My Choice? Make a one-time change by following the steps below. </p>
                <ol className="faqol">
                    <li id="q4li"></li>
                    <li><a href="#"> Track your package. </a></li>
                    <li> Click "Change My Delivery." </li>
                    <li>  Check your email for the temporary passcode that will allow you to make the change. </li>
                </ol>
                <p className="note"> *Sometimes, shippers restrict change delivery options based on package contents. </p>
            </>
        )

    },

    {question5:"How do I change a delivery I’ve sent?",
        answer: (
            <> 
                 <a href="#"> Using UPS Delivery Intercept®, </a> you can request delivery changes for a package you sent before we try and make the first delivery attempt. Delivery intercept offers a few different options to have the delivery updated:
                 <ul className="faqul">
                        <li>Request the package be returned to you. </li>
                        <li> Redirect the package to another address.</li>
                        <li> Reschedule the delivery for another day.</li>
                        <li> Request the package be held for pickup by the recipient.</li>
                 </ul>
                 <p className="note"> Please note: A UPS intercept request can be canceled or changed before it’s been completed. Fees may apply for all types of requests, however, you’ll only be charged if the request is completed.</p>

            </>
            )
    },
    
];
const faqd2 = [
    {question1:"My package says it was delivered, but I can’t find it. Where is it?",
        answer: (
            <>
              <p> Your driver will try to leave your package out of plain sight to protect it.</p>
              <p> Check exterior doors and places like porches, back patios or garages. Also check with anyone who may have picked up your package, like a neighbor.</p>
              <p> If you still can’t find it, you can file a claim for a lost package. </p>
              <p className="tracking-p">   <a href="#"> Open a Missing Package Claim </a> </p>
            </>
        )

    },
    {question2:"What do I do if my package was delivered damaged?",
        answer: (
            <>
                <p> If your package was damaged during its delivery, we encourage starting a damage claim within 30 days of receiving the package in question. </p>
               <p className="tracking-p">  <a href="#"> Open a Damage Claim</a> </p>
            </>
        )

    },
    {question3:"What documents will I need to submit to support my claim?",
        answer: (
            <>
                <p> All claims will require some documentation to help us provide an accurate resolution. </p>
                <p> Items such as receipts, invoices and purchase orders can help identify merchandise. Attaching photos of damaged packages is also encouraged for damage claims. </p>
                <p> Without enough supporting documentation, the processing of your claim could be delayed or denied altogether. </p>
            </>
        )
    },
    {question4: "What does my claims status mean?",
        answer: (
            <>
                <p> Your claim status will be updated as we process your claim. </p>
                <p> Here are the most common statuses you may see: </p>
                <ul className="faqul">
                    <li> Claim Issued: The claim was issued and paperwork was sent to the shipper. If you're the shipper, payment documents are required. Select View Details from the claims dashboard and select upload payment documents.</li>
                    <li>Shipment Inspection Scheduled: UPS has scheduled an inspection of the damaged package. Updates to the inspection status will be on your dashboard as they become available.</li>
                    <li> Claim Reported – Supporting Document(s) Received: Your submitted documents or photos have been successfully uploaded to your claim.</li>
                    <li> Claim Review in Progress: Your claim is being reviewed by our claims department.</li>
                    <li> Claim Not Approved – Insufficient Merchandise Description: UPS needs a detailed merchandise description to complete the investigation. You'll see an icon in the dashboard alerting you that further action needed.</li>
                </ul>
            </>
        )

    },
]
const faqd3 = [
    {question1:"What do I need to enroll in the billing center?",
        answer: (
            <>
                <p> If you already receive invoices from us but are not yet enrolled in the UPS Billing Center, you will need to have an invoice from the last 45 days. As part of enrollment, you will be asked to enter several pieces of information found on the invoice, including: </p>
               <ul className="faqul">
                    <li> Account Number  </li>
                    <li> Invoice Number </li>
                    <li> Amount Due </li>
                    <li> Invoice Date </li>
               </ul>
                
                <p> Make sure to enter each value exactly as shown on the invoice. Once you’ve done so, you will be enrolled and have access to the Billing Center.</p>
                <p> If you do not currently receive invoices from UPS, you will first need to create a UPS.com username and open a payment account. If you already have a username, you can go directly to the open a payment account step.</p>
               <p>  <a href="#"> Enroll Now <span class="material-symbols-outlined">open_in_new</span> </a> </p>
                <p> <a href="#"> Get a UPS.com Username </a> </p>
                <p> <a href="#"> Open a Payment Account </a> </p>
            </>
        )

    },
    {question2:"How do I find and view an invoice?",
        answer: (
            <>
                <p>  Once you've logged into the <a href="#"> Billing Center </a> 
                <a> <span class="material-symbols-outlined">open_in_new</span> </a>
                 and select either My Account Invoices or My Plan Invoices.</p>
                <p> All your details are organized in a table view, with sortable column headers, search functionality, and filtering capabilities to find what you’re looking for.</p>
                Once you've logged into the Billing Center, select either My Account Invoices or My Plan Invoices.
                <p>
                    Use the Search, Filter, and Calendar functions to narrow down your search. Click the column headers to sort by column as well.
                </p>
                <p>
                    To print or download, select the option from the Actions menu in the right-hand column.
                </p>
            </>
        )

    },
    {question3:"Why can’t I pay my bill through the UPS Billing Center?",
        answer: (
            <>
                <p> If you have (A) a 10-digit temporary account number or (B) a Trade Direct invoice, you won’t be able to pay your bill in the Billing Center. </p>
                <p> Please call the number on your invoice to pay your bill over the phone.</p>
            </>
        )

    },
    {
        question4:"I don’t understand a charge on my bill. What do I do?",
        answer: (
            <>
                <p> The most efficient way to dispute charges is by <a href="#"> logging into the Billing Center  </a> <a> <span class="material-symbols-outlined">open_in_new</span> </a> and selecting <a href="#"> Help and Support Center </a> for detailed instructions. </p>
                <p>If you have a paper bill or a 10-digit account number, call the phone number on your invoice. If you don’t have an invoice, call<a href="#">  1-800-811-1648 </a> for domestic billing support or <a href="#"> 1-866-493-7140 </a> for import billing support.</p>
            </>
        )
    },
    
]
const faqd4 = [
    {question1:"Are my UPS username and account the same thing?",
        answer: (
            <>
                <p> Great question! No, your UPS username and UPS account number aren’t the same. </p>
                <p> Your username is your login that will give you access to your customized tracking dashboard and shipment history.</p>
                <p>
                Your account number is a unique six-digit number used to identify your UPS account. </p>
            </>
        )

    },
    {question2:"Do I need a UPS account to ship?",
        answer: (
            <>
                <p> No, you don’t need an account to ship with UPS. You can <a href="#"> create a one-time shipment </a> and pay each time you ship, no questions asked.</p>

                <p> However, with your UPS account you’ll gain access to potential shipping discounts and a more streamlined shipping process with tools like stored payment methods, address books and online billing. </p>
            </>
        )

    },
    {question3:"How do I open a UPS account?",
        answer: (
            <>
                <p> Setting up your UPS account is easy and only takes a few minutes. Just answer a few questions and you'll be off and running.</p>
                <p> Note: you’ll need to be logged in with your username in order to add an account to your UPS profile. Don’t have a username? Not a problem – we’ll help you sign up for one prior to adding your account. </p>
                <p> You can <a href="#"> get started here. </a> </p>
            </>
        )

    },
    {question4:"How do I reset my password or find my username?",
        answer: (
            <>
                <p> To set a new password, enter your username and email address <a href="#"> here </a> and we’ll get you on your way. </p>
                <p> To recover your username, enter your username <a href="#"> here  </a>and we'll send you a reminder.</p>
            </>
        )

    },
]
const faqd5 = [
    {question1:"Customer Service",
        answer: (
            <>
                <p> If you have a non-urgent request, we can dig into it for you.</p>
                <p> Hours: Monday-Friday 6 AM to 1 AM ET, and Saturday 8 AM to 8 PM ET </p>
                <a href="#"> 1-800-742-5877 </a> 
                <p> For the Hearing Impaired </p>
                <a href="#">  1-800-833-0056 </a>
            </>
        )

    },
    {question2:"International Shipping Support",
        answer: (
            <>
                <p> Hours: 24/7 </p>
                <a href="#">  1-800-782-7892 </a>
            </>
        )

    },
    { question3:"Technical Support",
        answer: (
            <>
                <p> Hours: Monday-Friday 8 AM to 8 PM ET
                 </p>
                 <a href="#">  1-800-877-1497 </a>
            </>
        )

    },
    {question4:"Freight Support",
        answer: (
            <>
                <p> Less Than Truckload (more than 150 lbs)
                </p>
                <a href="#">   1-800-333-7400 </a> 
                <p>
                Truckload (more than 10,000 lbs)
                </p>
                <a href="#"> 1-888-682-4652</a> 
                <p> Air Freight (more than 150 lbs) </p>
                <a href="#"> 1-800-443-6379 </a>
                <p> Ocean Freight </p>
                <a href="#"> 1-800-350-8440 </a>
            </>
        )

    },
]


return (
    <div className="faq-container">
     <div className="faq-title">
            {faqelement.map((faq, index) => (
                <div
                    className={`title ${clickedIndex === index ? "clicked" : ""}`} // Add 'clicked' class if this title is clicked
                    key={index}
                    onClick={() => {
                        setActiveSection(faq.id); // Set the active section
                        setClickedIndex(index); // Track the clicked title
                    }}
                >
                    <p className="titleh3">{faq.name}</p>
                </div>
            ))}
        </div>

    <div className="faq-wrap">
        {/* Render faqd1 only when activeSection is 1 */}
        {activeSection === 1 && (
            <div className="faq">
                {faqd1.map((faq, index) => (
                    <div className="faqd1" key={index}>
                        <div
                            className={`fadq1h3 ${expandedIndex === index ? "expanded" : ""}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <p>{faq.question1 || faq.question2 || faq.question3 || faq.question4 || faq.question5}</p>
                            <span className="arrow">
                                {expandedIndex === index ? "▼" : "▲"}
                               
                            </span>
                        </div>
                        <div className={`faqd1p ${expandedIndex === index ? "expanded" : ""}`} >
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        )}

        {/* Render faqd2 only when activeSection is 2 */}
        {activeSection === 2 && (
            <div className="faq">
                {faqd2.map((faq, index) => (
                    <div className="faqd2" key={index}>
                        <div
                            className={`faqd2h3 ${expandedIndex === index ? "expanded" : ""}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <p>{faq.question1 || faq.question2 || faq.question3 || faq.question4 || faq.question5}</p>
                            <span className="arrow">
                                {expandedIndex === index ? "▼" : "▲"}
                            </span>
                        </div>
                        <div className={`faqd2p ${expandedIndex === index ? "expanded" : ""}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        )}

        {/* Render faqd3 only when activeSection is 3 */}
        {activeSection === 3 && (
            <div className="faq">
                {faqd3.map((faq, index) => (
                    <div className="faqd3" key={index}>
                        <div
                            className={`faqd3h3 ${expandedIndex === index ? "expanded" : ""}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <p>{faq.question1 || faq.question2 || faq.question3 || faq.question4 || faq.question5}</p>
                            <span className="arrow">
                                {expandedIndex === index ? "▼" : "▲"}
                            </span>
                        </div>
                        <div className={`faqd3p ${expandedIndex === index ? "expanded" : ""}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        )}

        {/* Render faqd4 only when activeSection is 4 */}
        {activeSection === 4 && (
            <div className="faq">
                {faqd4.map((faq, index) => (
                    <div className="faqd4" key={index}>
                        <div
                            className={`faqd4h3 ${expandedIndex === index ? "expanded" : ""}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <p>{faq.question1 || faq.question2 || faq.question3 || faq.question4 || faq.question5}</p>
                            <span className="arrow">
                                {expandedIndex === index ? "▼" : "▲"}
                            </span>
                        </div>
                        <div className={`faqd4p ${expandedIndex === index ? "expanded" : ""}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        )}

        {/* Render faqd5 only when activeSection is 5 */}
        {activeSection === 5 && (
            <div className="faq">
                {faqd5.map((faq, index) => (
                    <div className="faqd5" key={index}>
                        <div
                            className={`faqd5h3 ${expandedIndex === index ? "expanded" : ""}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <p>{faq.question1 || faq.question2 || faq.question3 || faq.question4 || faq.question5}</p>
                            <span className="arrow">
                                {expandedIndex === index ? "▼" : "▲"}
                            </span>
                        </div>
                        <div className={`faqd5p ${expandedIndex === index ? "expanded" : ""}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
</div>
);
} 
export default Upsfaq;