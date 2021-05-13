import './App.css';
import Navbar from './components/Navbar/Navbar'
import OnlineBooking from './components/OnlineBooking/OnlineBooking/OnlineBooking'
import { Route,Switch } from "react-router-dom";
import MainHome from './components/Homepage/MainHome';
import OurStory from './components/OurStory/ourStory';
import Register from './components/OnlineBooking/Register/Register';
import Login from './components/OnlineBooking/Login/Login';
import OurProject from './components/OurProject/OurProject';
import UnitList from './components/OurProject/UnitList';
import MainInfo from './components/OurProject/MainInfo';
import Profile from './components/ProfileSettings/Profile';
import TransferForm from './components/OnlineBooking/TranferForm/TransferForm'
import MyAllotments from './components/OnlineBooking/MyAllotments/MyAllotments'
import MyBookings from './components/OnlineBooking/MyBookings/MyBookings';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Switch>
        <Route exact path="/" component={MainHome} />
        <Route exact path="/ourStory" component={OurStory}/>
        <Route exact path="/ourProject" component={OnlineBooking}/>
        <Route exact path="/onlineBooking" component={OurProject}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/unitlist" component={UnitList}/>
        <Route exact path="/maininfo" component={MainInfo}/>
        <Route exact path="/transfer-form" component={TransferForm}/>
        <Route exact path="/my-allotments" component={MyAllotments}/>
        <Route exact path="/my-bookings" component={MyBookings}/>
        <Route exact path="/my-profile" component={Profile}/>
      </Switch>
    </div>
  );
}

export default App;
