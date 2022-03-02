import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="logo">
          <a href="./">
            <img src="./img/logo.png" alt="ロゴ" />
          </a>
        </div>
        <nav id="navigation">
          <span id="slide-line"></span>
          <ul>
            <li>
              <a href="#about">about</a>    
            </li>
            <li>
              <a href="#works">works</a>
            </li>
            <li>
              <a href="#links">links</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;