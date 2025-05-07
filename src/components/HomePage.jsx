import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react'
import UpsHomeHeader from './UpsHomeHeader'
import UpsMain from './UpsMain'
import ContactUs from './ContactUs'
import Newsroom from './Newsroom'
import OurCompany from './OurCompany'

function HomePage() {
    return (
        <div>
            <Router>
                <UpsHomeHeader />
                <Routes>
                    <Route path='/' element = {<UpsMain />} />
                    <Route path='/contactUs' element = {<ContactUs />} />
                    <Route path='/newsRoom' element = {<Newsroom />} />
                    <Route path='/ourCompany' element = {<OurCompany />} />
                </Routes>
            </Router>
        </div>
    )
}

export default HomePage
