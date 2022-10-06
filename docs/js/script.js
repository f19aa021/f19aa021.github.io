window.addEventListener('DOMContentLoaded', () => {

  // #navigationのアイテムにホバーしたら#slide-lineの移動と.current-itemの付け替え
  const navigation = document.getElementById('navigation');
  const slideLine = document.getElementById('slide-line');

  const navigationListItems = Array.from(navigation.getElementsByTagName('li'));  
  navigationListItems.forEach(navigationListItem => {
    navigationListItem.addEventListener('click', (e) => {
      e.preventDefault();
      
      let currentItem = navigation.getElementsByClassName('current-item')[0];
      (currentItem) ? currentItem.classList.remove('current-item') : null;
      e.target.parentElement.classList.add('current-item');

      // #navigationのアイテムをクリックした時、そのセクションにスムーススクロールで移動する
      const targetHref = e.target.getAttribute('href');
      const targetId = targetHref.replace('#', '');
      const target = document.getElementById(targetId);

      const targetTop = target.getBoundingClientRect().top;
      const pageY = window.pageYOffset;
      const scrollLength = targetTop + pageY;
      
      window.scrollTo({
        top: scrollLength,
        behavior: 'smooth',
      });
    }, false);
    navigationListItem.addEventListener('mouseover', (e) => {
      slideLine.style.width = e.target.clientWidth + 'px';
      slideLine.style.left = e.target.offsetLeft + 'px';
    }, false);
    navigationListItem.addEventListener('mouseleave', (e) => {
      if (!e.target.classList.contains('current-item')) {
        let currentItem = document.getElementsByClassName('current-item')[0];
        if (currentItem) {
          slideLine.style.width = currentItem.clientWidth + 'px';
          slideLine.style.left = currentItem.offsetLeft + 'px';
        } else {
          slideLine.style.width = 0;
          slideLine.style.left = 0;
        }
      }
    }, false);
  });

  // scroll-downをクリックした時a[href="#about"]をクリックした時と同じ挙動をする
  const scrollDown = document.getElementById('scroll-down');
  scrollDown.addEventListener('click', (e) => {
    // #navigation内の.current-itemの移動
    let target = navigation.querySelector('a[href="#about"]').parentElement;
    target.classList.add('current-item');
        
    slideLine.style.width = target.clientWidth + 'px';
    slideLine.style.left = target.offsetLeft + 'px';

    // #aboutのトップへスムーススクロールで移動
    target = document.getElementById('about');

    const targetTop = target.getBoundingClientRect().top;
    const pageY = window.pageYOffset;
    const scrollLength = targetTop + pageY;

    window.scrollTo({
      top: scrollLength,
      behavior: 'smooth',
    });
  }, false);
  
  const fadeUpAnim = () => {
    let fadeUpElements = Array.from(document.getElementsByClassName('fade-up-trigger'));
    
    fadeUpElements.forEach(fadeUpElement => {
      let pageY = window.pageYOffset;
      let elemPos = fadeUpElement.getBoundingClientRect().top;
      let offset = elemPos - pageY;
      let windowHeight = window.innerHeight;

      if (pageY > offset + windowHeight / 2) {
        fadeUpElement.classList.add('fade-up');
      }
    });
  }
  
  const shadeOnAbout = () => {
    let shadeElement = document.getElementsByClassName('shade-trigger')[0];
    if (!shadeElement.classList.contains('shade-on')) {
      shadeElement.classList.remove('shade-off');
      shadeElement.classList.add('shade-on');
    }
  }
  
  const shadeOffAbout = () => {
    let shadeElement = document.getElementsByClassName('shade-trigger')[0];
    if (shadeElement.classList.contains('shade-on') && !shadeElement.classList.contains('shade-off')) {
      shadeElement.classList.remove('shade-on');
      shadeElement.classList.add('shade-off');
    }
  }
  
  // セクションを移動した際、.current-itemを付け替え
  const top = document.getElementById('top');
  const topTop = top.getBoundingClientRect().top;
  const topBottom = topTop + top.clientHeight;
  const about = document.getElementById('about');
  const aboutTop = about.getBoundingClientRect().top;
  const aboutBottom = aboutTop + about.clientHeight;
  const works = document.getElementById('works');
  const worksTop = works.getBoundingClientRect().top;
  const worksBottom = worksTop + works.clientHeight;
  const links = document.getElementById('links');
  const linksTop = links.getBoundingClientRect().top;
  const linksBottom = linksTop + links.clientHeight;
  window.addEventListener('scroll', () => {
    let pageY = window.pageYOffset;
    let currentItem = navigation.getElementsByClassName('current-item')[0];
    // .fade-up-triggerをもつ要素が指定位置でフワッと浮き上がる
    fadeUpAnim();
    if (topTop <= pageY && pageY < topBottom) {
      (currentItem) ? currentItem.classList.remove('current-item') : null;

      slideLine.style.width = 0;
      slideLine.style.left = 0;

      shadeOffAbout();
    } else if (aboutTop <= pageY && pageY < aboutBottom) {
      let target = navigation.querySelector('a[href="#about"]').parentElement;
      if (!target.classList.contains('current-item')) {
        (currentItem) ? currentItem.classList.remove('current-item') : null;
        target.classList.add('current-item');
        
        slideLine.style.width = target.clientWidth + 'px';
        slideLine.style.left = target.offsetLeft + 'px';
      }
      
      // 黒系背景（#top, #about）に来た時headerの色を変える
      let navigationLinks = navigation.querySelectorAll('a');
      navigationLinks.forEach(navigationLink =>{
        navigationLink.style.color = null;
      });

      // #aboutの位置で徐々にディマーがかかる
      shadeOnAbout();
    } else if (worksTop <= pageY && pageY < worksBottom) {
      let target = navigation.querySelector('a[href="#works"]').parentElement;
      if (!target.classList.contains('current-item')) {
        (currentItem) ? currentItem.classList.remove('current-item') : null;
        target.classList.add('current-item');
        
        slideLine.style.width = target.clientWidth + 'px';
        slideLine.style.left = target.offsetLeft + 'px';
      }
      
      // 白系背景（#works, #links）に来た時headerの色を変える
      let navigationLinks = navigation.querySelectorAll('a');
      navigationLinks.forEach(navigationLink =>{
        navigationLink.style.color = '#808080';
      });

      shadeOffAbout();
    } else if (linksTop <= pageY && pageY < linksBottom) {
      let target = navigation.querySelector('a[href="#links"]').parentElement;
      if (!target.classList.contains('current-item')) {
        (currentItem) ? currentItem.classList.remove('current-item') : null;
        target.classList.add('current-item');
        
        slideLine.style.width = target.clientWidth + 'px';
        slideLine.style.left = target.offsetLeft + 'px';
      }

      shadeOffAbout();
    }
  }, false);

  // .icon-buttonにホバーした時、ツールチップを表示
  let tooltip = null; // ツールチップの要素
  let lastTarget = null; // ツールチップ表示元の対象要素

  const iconBtns = document.getElementsByClassName('icon-btn');
  for (let i = 0; i < iconBtns.length; i++) {
    iconBtns[i].addEventListener("mouseenter", function (e) {
      let t = e.target;
      if (t.dataset && t.dataset.title && t.classList.contains('icon-btn')) {
        // ツールチップの準備
        if (!tooltip) {
          tooltip = document.createElement("div");
          tooltip.className = "tooltip";
          document.body.appendChild(tooltip);
        }
        tooltip.textContent = t.dataset.title;
  
        const offsetTop = (function (e) { return e.getBoundingClientRect().top + window.pageYOffset })(t); // 要素のスクリーン上の上座標
        const offsetLeft = (function (e) { return e.getBoundingClientRect().left + window.pageXOffset })(t); // 要素のスクリーン上の左座標
        const tRect = t.getBoundingClientRect(); // 要素の矩形サイズ
        const tooltipRect = tooltip.getBoundingClientRect(); // ツールチップの矩形サイズ
  
        // カーソルを合わせた箇所の上位置に設定
        tooltip.style.top = (offsetTop - tooltipRect.height - 5) + "px";
        if ((offsetLeft - (tooltipRect.width - tRect.width) / 2) >= 0) {
          tooltip.style.left = (offsetLeft - (tooltipRect.width - tRect.width) / 2) + "px";
        } else {
          tooltip.style.left = 2 + "px";
        }
        // 表示クラスをセット
        lastTarget = t;
        tooltip.classList.add("show");
      }
    }, true);
    iconBtns[i].addEventListener("mouseleave", function (e) {
      let t = e.target;
      if (lastTarget && tooltip && t.classList.contains('icon-btn')) {
        tooltip.classList.remove("show");
        lastTarget = null;
      }
    }, true);
  }

  // 画像スライダー
  class imgSlider {
    sliderContents;
    // .slider-contents内の画像の現在何枚目かを保持する変数
    sliderCurPos;
    // .slider-contents内の画像が最大何枚かを保持する定数
    sliderMaxPos;
    prevButton;
    nextButton;
    constructor(slider) {
      this.sliderContents = slider.getElementsByClassName('slider-contents')[0];

      this.sliderCurPos = 1;
      this.sliderMaxPos = this.sliderContents.childElementCount;
      
      this.prevButton = slider.getElementsByClassName('prev-button')[0];
      this.nextButton = slider.getElementsByClassName('next-button')[0];

      this.judgeSlidable();

      this.prevButton.addEventListener('click', () => {
        if (1 < this.sliderCurPos) {
          this.sliderCurPos -= 1;
          this.sliderContents.style.transform = `translateX(-${(this.sliderCurPos-1)*100}%)`;
        }
        this.judgeSlidable();
      }, false);
      
      this.nextButton.addEventListener('click', () => {
        if (this.sliderCurPos < this.sliderMaxPos) {
          this.sliderCurPos += 1;
          this.sliderContents.style.transform = `translateX(-${(this.sliderCurPos-1)*100}%)`;
        }
        this.judgeSlidable();
      }, false);
    }
    judgeSlidable() {
      if (this.sliderCurPos != this.sliderMaxPos) {
        this.nextButton.style.display = 'flex';
      } else {
        this.nextButton.style.display = 'none';
      }
      if (this.sliderCurPos == 1) {
        this.prevButton.style.display = 'none';
      } else {
        this.prevButton.style.display = 'flex';
      }
    }
  }

  let sliders = Array.from(document.getElementsByClassName('slider'));
  sliders.forEach((slider) => {
    new imgSlider(slider);
  });

  // loadされた時とresizeされた時.work-imgの、幅と高さを常に16:9にする
  // 稼働重視、良い方法があれば編集
  const modifWorkImgHeight = () => {
    sliders.forEach((slider) => {
      let workImgWidth = slider.clientWidth;
      slider.style.height = `${workImgWidth / 16 * 9}px`;
    });
  };

  modifWorkImgHeight();
  window.addEventListener('resize', () => {
    modifWorkImgHeight();
  });

  // メールアイコンクリックでメールアドレスをクリップボードにコピーし通知を表示する
  const iconMail = document.getElementById('icon-mail');
  iconMail.addEventListener('click', () => {
    copyTxt('f19aa021@gmail.com');
    setNotice('メールアドレスがコピーされました。');
    sendNotice();
    clearNotice();
  });
  // 引数のテキストをクリップボードにコピーする
  const copyTxt = (txt) => {
    navigator.clipboard.writeText(txt);
  };
  // 通知ボックスに通知メッセージをセットする
  const setNotice = (msg) => {
    const noticeMsg = document.getElementsByClassName('notice-msg')[0];
    if (noticeMsg.childElementCount == 0) {
      const noticeMsgContent = document.createElement("p");
      noticeMsgContent.textContent = msg;
      noticeMsg.appendChild(noticeMsgContent);
    }
  };
  // 通知をスライドさせ表示する4秒後に非表示にする
  const sendNotice = () => {
    const noticeBox = document.getElementsByClassName('notice-box')[0];
    noticeBox.classList.add('send-notice');
    setTimeout(() => {
      noticeBox.classList.remove('send-notice');
    }, 4000);
  };
  // 通知ボックスの通知メッセージをクリアする
  const clearNotice = () => {
    const noticeMsg = document.getElementsByClassName('notice-msg')[0];
    setTimeout(() => {
      noticeMsg.innerHTML = '';
    }, 5000);
  };
});