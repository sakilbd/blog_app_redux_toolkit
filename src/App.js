import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import './assets/styles/main.css'
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:blogId" element={<Blog />} />
            </Routes>
          
        </Router>
    );
}

export default App;
