import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage';
import AboutUs from './Pages/AboutUs/AboutUs';
import Archive from './Pages/Archive/Archive';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route index element={<Homepage />}/>
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Archive" element={<Archive/>}/>
    </Routes>
    </BrowserRouter>
    {/* <AboutUs/>
    <Homepage/> */}
    </>
  )
};

export default App
