import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Banner from './containers/Banner/Banner';
import Navigation from './containers/Navigation/Navigation';
import About from './containers/About/About';
import Skills from './containers/Skills/Skills';
import Portfolio from './containers/Portfolio/Portfolio';
import Contact from './containers/Contact/Contact';

class App extends Component {
  render () {    
    return (
      <Layout>
        <Navigation />
        <Banner />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </Layout>
    );
  }
}

export default App;
