import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {
  NavBar,
  Home,
  About,
  Projects,
  Skills,
  Blog,
  Education,
  ContactMe,
  Footer,
  NotFound,
} from '../src/components/index';

import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <Analytics />
      <ToastContainer />

      {/* Navbar always visible */}
      <NavBar />

      {/* Page content below navbar */}
      <main className="pt-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
