import Home from "./pages/home";
import "./app.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error"
import Services from "./pages/Services";

function App() {
    // the app component whill always hold the list of pages and maybe if required some component
    // LIST OF PAGES
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/"  element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/service" element={<Services />}/>
                    
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/*" element= {<Error/>}/>
                </Routes>
                <Footer/>
            </Router>
            
        </>
    );
}

export default App;
