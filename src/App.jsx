import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage';
// import Layout from './Pages/Layout/Layout';
import AboutUs from './Pages/AboutUs/AboutUs';
// import Carousel from './Components/Carousel/Carousel'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route index element={<Homepage />}/>
        <Route path="/AboutUs" element={<AboutUs />} />
    </Routes>
    </BrowserRouter>
    {/* <AboutUs/>
    <Homepage/> */}
    </>
  )
};

export default App
