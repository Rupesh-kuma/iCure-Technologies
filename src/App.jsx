import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/footer';
import Home from './pages/home';
import Services from './pages/services';
import { Route,  Routes } from 'react-router-dom';
import IndustrialCardRepair from './pages/IndustrialCardRepair';
import Contact from './pages/Contact';
import Gallerys from './pages/gallery';
import Ledcdtvrepair from './pages/LedLcdTVRepair';
import Vfddrivesrepair from './pages/VFDDrivesRepair';
import Controlcardsrepair from './pages/Controlcardsrepair';
import Plcrepair from './pages/PLCRepair';
import Iotautomaticservice from './pages/IOTautomaticservice';
import AboutBanner from './pages/About';

function App() {
  
  const routing = [
    { paths: "/", elements: <Home /> },
    { paths: "/about", elements: <AboutBanner /> },
    { paths: "/service", elements: <Services /> },
    { paths: "/industrialcardrepair", elements: <IndustrialCardRepair /> },
    { paths: "/ledcdtvrepair", elements: <Ledcdtvrepair /> },
    { paths: "/vfddrivesrepair", elements: <Vfddrivesrepair /> },
    { paths: "/controlcardsrepair", elements: <Controlcardsrepair /> },
    { paths: "/plcrepair", elements: <Plcrepair /> },
    { paths: "/iotautomaticservice", elements: <Iotautomaticservice /> },
    { paths: "/gallery", elements: <Gallerys /> },
    { paths: "/contact", elements: <Contact /> },
    { paths: "*", elements: <h1>404 Not Found</h1> }
  ];

  return (
    <>
      <Navbar/>
        <Routes>
          {routing.map((rout,i)=>(
            <Route path={rout.paths} element={rout.elements} key={i}/>
          ))}
        </Routes>
        <Footer/>
    </>
  )
}

export default App;
