import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Menu from "./pages/Menu";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="App">
      {/* <MaterialList/>
      <FormsUi/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
