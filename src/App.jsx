import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./sections/index.jsx";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="app-container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;