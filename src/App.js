import './App.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { motion } from 'framer-motion';
import AppHeaderNav from './components/AppHeaderNavigation/appHeaderNav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import SharedContent from './sharedContent';

function App() {

  const [isHeaderActive, setHeaderActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);
  }, []);

  const handleScrollEvent = () => {
    if (window.scrollY > 0) {
      setHeaderActive(true);
    }
    else if (window.scrollY === 0) {
      setHeaderActive(false);
    }
    else {
      setHeaderActive(false);
    }
  }

  return (
    <SharedContent>
      <div className='app-content'>
        <Router>

          <AppHeaderNav scrolled={isHeaderActive} />

          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="about" element={""} />
            </Route>
            {/* <Route path="/" element={About} /> */}
            {/* <Route path="/" element={FunFacts} /> */}
            {/* <Route path="/" element={Resources} /> */}
            {/* <Route path="/" element={Contact} /> */}
          </Routes>
        </Router>
      </div>
    </SharedContent>
  );

}

export default App;
