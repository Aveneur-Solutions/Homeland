import './App.css';
import Gallery from './components/Homepage/1_Gallery';
import States from './components/Homepage/2_States';
import Navbar from './components/Navbar/Navbar'
import { Route } from "react-router-dom";
import OnlineBooking from './components/OnlineBooking/OnlineBooking/OnlineBooking'

function App() {
  return (
    <div className="App">
     {/* <Navbar/>
     <Gallery/>
     <States/> */}
     <OnlineBooking></OnlineBooking>
    </div>
  );
}

export default App;
