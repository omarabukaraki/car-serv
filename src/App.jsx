import './App.css';
import {Header,Slider,AboutUs, Services} from './sections/index'


function App() {
  return (
   <>
   <Header/>
   <Slider/>
   <AboutUs/>
   <Services/>
   <div className='h-96'></div>
   </>
  );
}

export default App;
