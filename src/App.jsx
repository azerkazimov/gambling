import { Route, Routes } from "react-router-dom";
import Main from "./views/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import About from "./views/About/About";
import Brand from "./views/Brands/Brand";
import Comission from "./views/Comission/Comission";
import News from "./views/News/News";
import Contact from "./views/Contact/Contact";
import Career from "./views/Career/Career";

function App() {
  return (
    <div className="App">
      <>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/comission" element={<Comission />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </div>
      </>
    </div>
  );
}

export default App;
