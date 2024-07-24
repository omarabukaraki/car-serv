import "./App.css";
import {
  Header,
  Footer,
} from "./sections/index";
import {Home,About,ServicesPage, Booking,TechniciansPage,TestimonialPage} from './pages/index';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
           <Routes>
              <Route path="/" element={ <Home/>}/>
              <Route path="/About" element={ <About />}/>
              <Route path="/ServicesPage" element={ <ServicesPage />}/>
              <Route path="/Booking" element={ <Booking/>}/>
              <Route path="/Technicians" element={ <TechniciansPage/>}/>
              <Route path="/Testimonial" element={ <TestimonialPage/>}/>
           </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
