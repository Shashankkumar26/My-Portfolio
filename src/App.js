
import "./App.css";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Experience from './pages/Experience'
import Navbar from './components/navbar'
import Footer from "./components/Footer";
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div>
    <div className="App">
      <Router> 
        <Navbar/>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/projects" element={<Project/>}/>
          <Route path= "/project/:id" element= {<ProjectDisplay/>}/>
          <Route path= "/experience" element={<Experience/>}/>
        </Routes>
      </Router>
    </div>
    <Footer/>
    </div>
   
  );
}

export default App;
