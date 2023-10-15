import React from 'react';
import WorkUsedSkills from './WorkUsedSkills';
import { TbExternalLink } from "react-icons/tb";
import { BiLogoGithub } from "react-icons/bi";

class Work extends React.Component {
  render() {
    let { workName, createdDate, description, usedSkills, imageFileName, repoName, workLinksList } = this.props.workData;
    
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
    description = lfCodeToBrTag(description);
    
    const workLinks = [];
    if (workLinksList) {
      workLinksList.forEach(workLink => {
        const { type, url } = workLink;
        if (type == 'link') {
          workLinks.push(
            <div class="icon-btn icon-btn-s" data-title={`${url} を開く`}>
              <a href={`${url}`} target="_blank">
                <TbExternalLink size={"16.5px"}/>
              </a>
            </div>
          );
        } else if (type == 'github') {
          workLinks.push(
            <div class="icon-btn icon-btn-s" data-title={`${repoName} リポジトリを開く`}>
              <a href={`${url}`} target="_blank">
                <BiLogoGithub size={"18px"}/>
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
              {createdDate}
            </p>
          </div>
          <div class="work-description">
            <p>
              {description}
            </p>
          </div>
          <WorkUsedSkills usedSkills={usedSkills} />
          <div class="work-links">
            {workLinks}
          </div>
        </div>
      </div>
    );
  }
}

export default Work;