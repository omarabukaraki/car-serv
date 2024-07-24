import './App.css';
import {Header,Slider,AboutUs, Services, Technicians, Testimonial} from './sections/index'


function App() {
  return (
   <>
   <Header/>
   <Slider/>
   <AboutUs/>
   <Services/>
   <Technicians/>
   <Testimonial/>
   <div className='h-96'></div>
   </>
  );
}

export default App;
