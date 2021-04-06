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


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Switch>
        <Route exact path="/" component={MainHome} />
        <Route exact path="/ourStory" component={OurStory}/>
        <Route exact path="/ourProject" component={OurProject}/>
        <Route exact path="/onlineBooking" component={OnlineBooking}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/unitlist" component={UnitList}/>
      </Switch>
    </div>
  );
}

export default App;
