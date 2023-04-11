import { BrowserRouter } from 'react-router-dom';
import { About, Eyes, AnimCursor, Particles, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

const App = () => {
  return (
    <BrowserRouter style={{ backgroundColor: 'black' }}>
      <AnimCursor />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
      </div>
      <div className='relative z-0 '>

        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', margin: '10px' }}>
          <About />
        </div>

        {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} className='container'>
          <div className='col-sm-4 col-xs-12'>
            <h3 className='h1text3'>Have a </h3>
          </div>
          <div className='col-sm-4 col-xs-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='h1text2'>L</h3>
            <Eyes />
            <h3 className='h1text2'>k</h3>
          </div>
          <div className='col-sm-4 col-xs-12'>
            <h3 className='h1text3'>at my works </h3>
          </div>
        </div> */}

        <Works />
        {/*  <Experience />
        <Tech />
        <Feedbacks />
        <div className='relative z-0'>
        <Contact />
    <Particles />
        <StarsCanvas />
        </div> */}

      </div>
    </BrowserRouter>
  )
}

export default App
