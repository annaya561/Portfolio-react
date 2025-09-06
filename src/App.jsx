import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
// import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import MySkills from './Components/MySkills/MySkills';
import Footer from './Components/Footer/Footer';
// import Contact from './Components/Contact/Contact'; // Make sure you have this component

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Hero />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="skills">
                <MySkills />
              </section>

              {/* <section id="services">
                <Services />
              </section> */}

              <section id="mywork">
                <MyWork />
              </section>

              <Footer />
            </>
          }
        />

        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
