import './App.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { motion } from 'framer-motion';
import AppHeaderNav from './components/AppHeaderNavigation/appHeaderNav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';

function App() {

  //sets, and returns the background image value
  const [getBg, setBg] = useState(null);

  useEffect(() => {

    // //display the image once fully loaded
    // const backgroundImage = async () => {
    //   try {
    //     const earth = await Axios.get("https://firebasestorage.googleapis.com/v0/b/airglobe-7d703.appspot.com/o/wp4729457-earth-4k-wallpapers.jpg?alt=media&token=3cca653b-205a-4079-aec8-f845a2410885")
    //     return earth;
    //   }
    //   catch (error) {
    //     console.warn(error);
    //   }
    // }

    // //change the backgroundImage value once the image is fully loaded
    // setBg(backgroundImage);

  }, []);

  return (
    <div className='app-content'>
      <Router>

        <AppHeaderNav />

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
  );

}

export default App;
