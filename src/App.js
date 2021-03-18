import './App.css';
import Gallery from './components/Homepage/1_Gallery';
import States from './components/Homepage/2_States';
import Navbar from './components/Navbar/Navbar'
import { Route } from "react-router-dom";
import Login from './components/OnlineBooking/Login/Login'

function App() {
  return (
    <div className="App">
     {/* <Navbar/>
     <Gallery/>
     <States/> */}
     <Login></Login>
    </div>
  );
}

export default App;
