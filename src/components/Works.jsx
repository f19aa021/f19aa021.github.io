import React from 'react';

class Works extends React.Component {
  render() {
    return (
      <div id="works">
        <div class="work">
          <div class="work-img">
            <img src="./img/work-cidmap1.png" alt="cidmapの作品紹介画像1" />
          </div>
          <div class="work-text">
            <div class="work-name">
              <h2>cidmap</h2>
            </div>
            <div class="work-description">
              <p>
                Web上で動作する学校案内マップ<br />
                現在も公開中であり実際にページを見ることができます。
              </p>
            </div>
            <div class="work-used-skill">
              <p>
                使用技術<br />
                HTML, CSS, Javascript, React, Typescript, Git, GitHubPages, Webpack
              </p>
            </div>
            <div class="work-links">
              <div class="icon-button-s" data-title="open cidmap.com">
                <a href="https://cidmap.com/" target="_blank">
                  <img src="img/icon-link.png" alt="外部リンクのアイコン" />
                </a>
              </div>
              <div class="icon-button-s" data-title="open cidmap repository in github">
                <a href="https://github.com/f19aa021/cidmap/" target="_blank">
                  <img src="img/icon-github.png" alt="githubのアイコン" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="work">
          <div class="work-img">
            <img src="./img/work-tweet_saver1.jpg" alt="tweet_saverの作品紹介画像1" />
          </div>
          <div class="work-text">
            <div class="work-name">
              <h2>tweet_saver</h2>
            </div>
            <div class="work-description">
              <p>
                TwitterAPIを利用した、指定の検索ワードからツイートを自動収集するシステム<br />
                収集したデータはxlsxファイルにして出力することができます。
              </p>
            </div>
            <div class="work-used-skill">
              <p>
                使用技術<br />
                Python3.8(pandas, openpyxl), Git
              </p>
            </div>
            <div class="work-links">
              <div class="icon-button-s" data-title="open tweet_saver repository in github">
                <a href="https://github.com/f19aa021/tweet_saver/" target="_blank">
                  <img src="img/icon-github.png" alt="githubのアイコン" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="work">
          <div class="work-img">
            <img src="./img/work-portfolio1.png" alt="portfolioの作品紹介画像1" />
          </div>
          <div class="work-text">
            <div class="work-name">
              <h2>yamamoto's portfolio</h2>
            </div>
            <div class="work-description">
              <p>
                このポートフォリオサイト。<br />
                作ったものをWebページとしてまとめておく保管庫です。
              </p>
            </div>
            <div class="work-used-skill">
              <p>
                使用技術<br />
                HTML, CSS, Javascript, React, Git, GitHubPages, Webpack, AdobeXD
              </p>
            </div>
            <div class="work-links">
              <div class="icon-button-s" data-title="open f19aa021.github.io">
                <a href="https://f19aa021.github.io/" target="_blank">
                  <img src="img/icon-link.png" alt="外部リンクのアイコン" />
                </a>
              </div>
              <div class="icon-button-s" data-title="open portfolio repository in github">
                <a href="https://github.com/f19aa021/f19aa021.github.io/" target="_blank">
                  <img src="img/icon-github.png" alt="githubのアイコン" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="work">
          <div class="work-img">
            <img src="./img/work-todo1.jpg" alt="todoの作品紹介画像1" />
          </div>
          <div class="work-text">
            <div class="work-name">
              <h2>todo</h2>
            </div>
            <div class="work-description">
              <p>
                Android Studio とJavaの練習で作った、簡単なtodo管理アプリ。<br />
                Android10系で動作確認済みです。
              </p>
            </div>
            <div class="work-used-skill">
              <p>
                使用技術<br />
                Android Studio, Java, XML, Git
              </p>
            </div>
            <div class="work-links">
              <div class="icon-button-s" data-title="open todo repository in github">
                <a href="https://github.com/f19aa021/todo/" target="_blank">
                  <img src="img/icon-github.png" alt="githubのアイコン" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="work">
          <div class="work-img">
            <img src="./img/work-molcar_car_compair1.png" alt="molcar_car_compairの作品紹介画像1" />
          </div>
          <div class="work-text">
            <div class="work-name">
              <h2>molcar_car_compair</h2>
            </div>
            <div class="work-description">
              <p>
                CNN(畳み込みニューラルネットワーク)の画像判定学習モデルを用いた、<br />
                モルカーと車の画像群からモルカーの画像かどうかを比較するプログラム。
              </p>
            </div>
            <div class="work-used-skill">
              <p>
                使用技術<br />
                Google Colaboratory, python3.9(cv2, kerasなど)
              </p>
            </div>
            <div class="work-links">
              <div class="icon-button-s" data-title="open mol_car repository in github">
                <a href="https://github.com/f19aa021/molcar_car_compair/" target="_blank">
                  <img src="img/icon-github.png" alt="githubのアイコン" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="work">
          <div class="work-img">
            <img src="./img/work-acgame1.png" alt="ACゲームの利用記録アプリの作品紹介画像1" />
          </div>
          <div class="work-text">
            <div class="work-name">
              <h2>ACゲームの利用記録アプリ</h2>
            </div>
            <div class="work-description">
              <p>
                ACゲームの利用を、タイムスタンプ、プレイ回数、利用金額で記録するWebアプリ。<br />
                月末日には、その月の総利用金額を集計しメールにて通知することができます。<br />
                ノーコードため、ソースコードはありません。
              </p>
            </div>
            <div class="work-used-skill">
              <p>
                使用技術<br />
                PowerPlatform(PowerApps, PowerAutomatem, SharePoint), Word
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Works;