import React from 'react';

class Links extends React.Component {
  render() {
    return (
      <div id="links">
        <div class="icon-button-l" data-title="open github/f19aa021">
          <a href="https://github.com/f19aa021/" target="_blank">
            <img src="img/icon-github.png" alt="githubのアイコン" />
          </a>
        </div>
        <div class="icon-button-l" data-title="準備中">
          <a target="_blank">
            <img src="img/icon-twitter.png" alt="twitterのアイコン" />
          </a>
        </div>
        <div class="icon-button-l" data-title="mail to f19aa021">
          <a href="mailto:f19aa021@gmail.com">
            <img src="img/icon-mail.png" alt="mailのアイコン" />
          </a>
        </div>
      </div>
    );
  }
}

export default Links;