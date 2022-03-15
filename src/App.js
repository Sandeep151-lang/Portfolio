import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/Homepage/Homepage'
//import Skills from './components/Skills/Skills'
import Navbar from './component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Interest from './components/Interest/Achievements/Interest'
import Certificate from './components/Certificate/Certificate'
import About from './components/About/About'
import Skilled from './components/Skills/Skilled'
import Footer from './components/Footer/Footer'
//import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/skill" component={Skilled} />
          <Route path="/projects" component={Projects} />
          <Route path="/certificate" component={Certificate} />
          <Route path="/interest" component={Interest} />
          <Route path="/contact" component={Contact} />
          <Route path="/About" component={About} />
        </Switch>
        <Footer />
        {/*  */}
        {/* <Inter<HomePage />
        <Skills />
        <Projects />
        <Certificate />est /> */}
        {/* <Contact /> */}
      </Router>
    </>
  )
}

export default App
