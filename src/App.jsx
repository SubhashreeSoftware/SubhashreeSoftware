import { BrowserRouter } from 'react-router-dom';
import {About,Aboutme, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, LetsWork } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 '>
        <div className=''>
          <Navbar />
          {/* <Hero /> */}
        <Aboutme /> 
        </div>
        <About /> 
        <Tech />
        <LetsWork />
        <Experience />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App