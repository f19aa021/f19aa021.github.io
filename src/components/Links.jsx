import React from 'react';
import { BiLogoGithub } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { TbMail } from "react-icons/tb";

class Links extends React.Component {
  render() {
    return (
      <div id="links">
        <div class="icon-btn icon-btn-l" data-title="github/f19aa021を開く">
          <a href="https://github.com/f19aa021/" target="_blank">
            <BiLogoGithub/>
          </a>
        </div>
        <div class="icon-btn icon-btn-l" data-title="準備中" id="icon-twitter">
          <a target="_blank">
            <RiTwitterXFill size={"18px"}/>
          </a>
        </div>
        <div class="icon-btn icon-btn-l" data-title="メールアドレスをコピーする" id="icon-mail">
          <a>
            <TbMail/>
          </a>
        </div>
      </div>
    );
  }
}

export default Links;