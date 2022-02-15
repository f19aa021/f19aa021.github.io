import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div class="bgextend bgLRextend">
        <div class="bgappear">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;