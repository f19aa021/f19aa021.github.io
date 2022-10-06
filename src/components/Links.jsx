import React from 'react';

class Links extends React.Component {
  render() {
    return (
      <div id="links">
        <div class="icon-btn icon-btn-l" data-title="github/f19aa021を開く">
          <a href="https://github.com/f19aa021/" target="_blank">
            <img src="img/icon-github.png" alt="githubのアイコン" />
          </a>
        </div>
        <div class="icon-btn icon-btn-l" data-title="準備中" id="icon-twitter">
          <a target="_blank">
            <img src="img/icon-twitter.png" alt="twitterのアイコン" />
          </a>
        </div>
        <div class="icon-btn icon-btn-l" data-title="メールアドレスをコピーする" id="icon-mail">
          <a>
            <img src="img/icon-mail.png" alt="mailのアイコン" />
          </a>
        </div>
      </div>
    );
  }
}

export default Links;