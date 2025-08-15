import { Route, Routes } from "react-router-dom";

import { PopupProvider } from './context/PopupContext.jsx';
import Navbar from "./components/Navbar";
import Landing from "./sections/index.jsx";
import Footer from "./components/Footer";
import DevBar from "./components/DevBar";
import PopUp from "./components/PopupContact";



function App() {

  return (
    <div className="app-container">
      <PopupProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing/>} />
        </Routes>
        <PopUp />
        <Footer/>
        <DevBar/>
      </PopupProvider>
    </div>
  )
}

export default App;
