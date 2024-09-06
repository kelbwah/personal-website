import { Routes, Route, BrowserRouter } from "react-router-dom";

import Education from "./pages/About/Education";
import Intro from "./pages/About/Intro";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about/intro" element={<Intro />} />
        <Route path="/about/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
