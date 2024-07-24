import './App.css';
import {Header,Slider,AboutUs, Services, Technicians} from './sections/index'


function App() {
  return (
   <>
   <Header/>
   <Slider/>
   <AboutUs/>
   <Services/>
   <Technicians/>
   <div className='h-96'></div>
   </>
  );
}

export default App;
