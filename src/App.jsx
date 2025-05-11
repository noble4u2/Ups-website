import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react'
import UpsHomeHeader from './components/UpsHomeHeader'
import UpsMain from './components/UpsMain'
import ContactUs from './components/ContactUs'
import Newsroom from './components/Newsroom'
import OurCompany from './components/OurCompany'
function App() {


  return (
    <>
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
    </>
  )
}

export default App
