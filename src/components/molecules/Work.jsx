import React from 'react';

class Work extends React.Component {
  render() {
    let { workName, workDate, workDescription, workUsedSkill, imageFileName, repoName, workLinksList } = this.props.workData;
    
    const sliderContents = [];
    for (let i = 0; i < imageFileName.length; i++) {
      let imageExtension = imageFileName[i].split(".")[1];
      sliderContents.push(
        (imageExtension !== "mp4") ?
          <img src={`./img/${imageFileName[i]}`} alt={`${repoName}の作品紹介画像${i+1}`} /> : 
          <video src={`./img/${imageFileName[i]}`} controls playsinlin ></video>
      );
    }

    const lfCodeToBrTag = (msg) => {
      msg = msg.split('\\n');
      const formattedMsg = msg.map((value, index) => {
        return (index != msg.length-1) ? <>{value}<br /></> : <>{value}</>;
      });
      return <>{formattedMsg}</>;
    }
    workDescription = lfCodeToBrTag(workDescription);
    workUsedSkill = lfCodeToBrTag(workUsedSkill);
    
    const workLinks = [];
    if (workLinksList) {
      workLinksList.forEach(workLink => {
        const { type, url } = workLink;
        if (type == 'link') {
          workLinks.push(
            <div class="icon-btn icon-btn-s" data-title={`${url} を開く`}>
              <a href={`${url}`} target="_blank">
                <img src="img/icon-link.png" alt="外部リンクのアイコン" />
              </a>
            </div>
          );
        } else if (type == 'github') {
          workLinks.push(
            <div class="icon-btn icon-btn-s" data-title={`${repoName} リポジトリを開く`}>
              <a href={`${url}`} target="_blank">
                <img src="img/icon-github.png" alt="githubのアイコン" />
              </a>
            </div>
          );
        }
      });
    }
    return (
      <div class="work">
        <div class="work-img slider">
          <div class="slider-contents">
            {sliderContents}
          </div>
          <div class="prev-button">
            <img src="./img/icon-angle_left.png" alt="左へ" />
          </div>
          <div class="next-button">
            <img src="./img/icon-angle_right.png" alt="右へ" />
          </div>
        </div>
        <div class="work-text">
          <div class="work-name">
            <h2>{workName}</h2>
          </div>
          <div class="work-date">
            <p>
              {workDate}
            </p>
          </div>
          <div class="work-description">
            <p>
              {workDescription}
            </p>
          </div>
          <div class="work-used-skill">
            <p>
              {workUsedSkill}
            </p>
          </div>
          <div class="work-links">
            {workLinks}
          </div>
        </div>
      </div>
    );
  }
}

export default Work;