import './App.css';
import Gallery from './components/Homepage/1_Gallery';
import States from './components/Homepage/2_States';
import Navbar from './components/Navbar/Navbar'
import { Route } from "react-router-dom";
import Register from './components/OnlineBooking/Register/Register'

function App() {
  return (
    <div className="App">
     {/* <Navbar/>
     <Gallery/>
     <States/> */}
     <Register></Register>
    </div>
  );
}

export default App;
