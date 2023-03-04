import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Blog from "./pages/Blog.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
