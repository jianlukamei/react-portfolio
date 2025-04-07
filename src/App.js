import React from 'react';

import Navbar from './components/common/navabar';
import About from './pages/about';
import Hero from './pages/hero';
import Projects from './pages/projects';
import './App.css';
// import Skills from './pages/skill';
import Footer from './components/common/footer';
import ApexChart from './pages/skillchart';
// import Component from './pages/skillchart';

function App() {
  return (
    <div className='container-fluid m-0 p-0'>
         <Navbar />
      <Hero/>
      <About />
      <Projects/>
<ApexChart/>
   
     <Footer/>
    </div>
  );
}

export default App;