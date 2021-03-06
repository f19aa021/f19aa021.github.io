import React from 'react';
import Top from './Top';
import About from './About';
import Works from './Works';
import Links from './Links';

class Main extends React.Component {
  render() {
    return (
      <main>
        <div id="cover-img" class="shade-trigger">
          <Top />
          <About />
        </div>
        <Works />
        <Links />
      </main>
    );
  }
}

export default Main;