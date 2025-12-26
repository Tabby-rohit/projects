
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (<div className='container' style={{ backgroundColor: "#183059" ,minWidth:'100vw',minHeight:'100vh',marginRight:'0px',marginLeft:'0px',padding:'0px'}}>
    <Navbar title="TEXTUTILS" />
    <div className="container">
      
    {/* <Textform heading="Enter text to analyze" /> */}
     <Routes>
  <Route exact path="/" element={<Textform heading="Enter text to analyze" />} />
  <Route exact path="/about" element={<About />} />
</Routes>

    
    </div>
  </div>
  );
}

export default App;
