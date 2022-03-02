import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <div class="introduction-page">
          <div class="introduction-contet fade-up-trigger">
            <div id="name">
              <h2>kentaro yamamoto</h2>
            </div>
            <h3>主要スキル</h3>
            <ul>
              <li><span class="year">2019〜</span><span class="lang">Java</span>学校の授業にて習得、Javaの資格を取りつつ、学習の延長線として簡単なAndroidアプリを作成。</li>
              <li><span class="year">2019〜</span><span class="lang">HTML/CSS</span>HTML5のセマンティックな記述、CSS3での柔軟なコーディングが行えます。</li>
              <li><span class="year">2020〜</span><span class="lang">Javascript</span>ES2015以前、以後の記述、Webpack, Bable, React, JQueryなどを扱うことができます。</li>
              <li><span class="year">2020〜</span><span class="lang">Python</span>3系の構文からpandas, openpyxl, matplotlibなどの多様なライブラリが使えます。</li>
              <li><span class="year">2021〜</span><span class="lang">AdobeXD</span>WebサイトやWebアプリを設計し、開発に役立たせることができます。</li>
            </ul>
          </div>
        </div>
        <div class="introduction-page">
          <div class="introduction-contet fade-up-trigger">
            <h3>その他の使えるツール</h3>
            <ul>
              <li><span class="ui-type">CUI</span>Docker, Git</li>
              <li><span class="ui-type">GUI</span>VSCode, Slack, Trello</li>
            </ul>
          </div>
        </div>
        <div class="introduction-page">
          <div class="introduction-contet fade-up-trigger">
            <h3>主な行動</h3>
            <ul>
              <li><span class="year">2019</span>何もわからない状態から猛勉強の末、半年間の期間で基本情報技術者試験を合格</li>
              <li><span class="year">2020</span>基本情報の勉強ノウハウを活かし、応用情報技術者試験と他5つの試験を並行して勉強、全て合格</li>
              <li><span class="year">2020</span>学校内競技プログラミングコンテスト100人程の中で7位（言語はJavascript）</li>
              <li><span class="year">2020</span>データ自動収集システムを作成しチーム開発を経験。その後、上毛新聞に掲載</li>
              <li><span class="year">2021</span>Paizaという競プロの問題を解くサイトにて最高ランクのSランクを獲得（言語はPython）</li>
              <li><span class="year">2021</span>学園祭案内マップのWebアプリを設計から開発、運用まで1人で経験</li>
              <li><span class="year">2022</span>Webアニメーションの勉強と制作物をまとめるため、本ポートフォリオを作成</li>
            </ul>
          </div>    
        </div>
      </div>
    );
  }
}

export default About;