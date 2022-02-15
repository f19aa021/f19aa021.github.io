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
              <li><span class="year">2019〜</span><span class="lang">Java</span>学校の授業で習得、その延長線上として簡単なAndroidアプリを作成しました。</li>
              <li><span class="year">2019〜</span><span class="lang">HTML/CSS</span>HTML5のセマンティックな記述、CSS3での設計書通りのコーディングが行えます。</li>
              <li><span class="year">2020〜</span><span class="lang">Javascript</span>ES2015以前、以後の記述、Webpack, Bable, React, JQueryなどを扱うことができます。</li>
              <li><span class="year">2020〜</span><span class="lang">Python</span>python3の基本構文からpandas, openpyxl, matplotlib, kerasなどのライブラリが使えます。</li>
              <li><span class="year">2021〜</span><span class="lang">Adobe XD</span>WebサイトやWebアプリのデザインカンプを作成し、開発に役立たせることができます。</li>
            </ul>
          </div>
        </div>
        <div class="introduction-page">
          <div class="introduction-contet fade-up-trigger">
            <h3>その他のツール</h3>
            <ul>
              <li><span class="ui-type">CUI</span>Docker, Git</li>
              <li><span class="ui-type">GUI</span>Visual Studio Code, Slack, Trello, Adobe XD</li>
            </ul>
          </div>
        </div>
        <div class="introduction-page">
          <div class="introduction-contet fade-up-trigger">
            <h3>主な行動</h3>
            <ul>
              <li><span class="year">2019</span>何もわからない状態から、半年で基本情報技術者試験を合格</li>
              <li><span class="year">2020</span>応用情報技術者試験と他5つの試験を並行して勉強、全て合格</li>
              <li><span class="year">2020</span>学校内プログラミングコンテスト100人程の中で7位（言語はJavascript）</li>
              <li><span class="year">2020</span>データ自動収集システムを作成しチーム開発を経験。その後、上毛新聞に掲載</li>
              <li><span class="year">2021</span>Paizaという競プロの問題を解けるサイトにて最高ランクのSランクを獲得（言語はPython）</li>
              <li><span class="year">2021</span>学校案内マップのWebアプリをイチから1人で作成</li>
              <li><span class="year">2022</span>Webアニメーションの勉強と制作物をまとめるため、本ポートフォリオを作成</li>
            </ul>
          </div>    
        </div>
      </div>
    );
  }
}

export default About;