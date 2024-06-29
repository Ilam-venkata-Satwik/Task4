// src/App.js
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="skills"><Skills /></div>
        <div id="contact"><Contact /></div>
      </main>
    </div>
  );
}

export default App;
