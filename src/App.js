import './App.css';
import Gallery from './components/Homepage/1_Gallery';
import States from './components/Homepage/2_States';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Gallery/>
     <States/>
    </div>
  );
}

export default App;
