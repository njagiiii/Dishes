import "./index.css";
import Navbar from "./Navbar";
import "./App.css";
import Home from "./Home";
import Menu from "./Menu";
import Featured from "./Featured"
import { Route,Routes } from "react-router-dom";

function App() {
 return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route  path="/menu" element={<Menu />} />
      <Route path="/features" element={<Featured />} />
      <Route path="*" element={<h1>404 not found</h1>} />
     </Routes>
    </div>
    
  );
}

export default App;
