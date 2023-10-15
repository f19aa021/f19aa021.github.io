import React from 'react';
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaPython , FaJava } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript, BiLogoGit } from "react-icons/bi";
import { SiVite, SiAndroid, SiGooglecolab, SiPowerapps, SiPowerautomate, SiMicrosoftsharepoint, SiAdobexd, SiFigma } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiFileExcel2Line } from "react-icons/ri";
import skillDict from "../../skillDict.json";

class WorkUsedSkill extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const usedSkill = this.props.usedSkill;
    const { styles, ReactIconsName } = skillDict[usedSkill];

    let ReactIconsComponent;
    switch (ReactIconsName) {
      case "FaHtml5": ReactIconsComponent = <FaHtml5/>; break; 
      case "FaCss3Alt": ReactIconsComponent = <FaCss3Alt/>; break; 
      case "FaSass": ReactIconsComponent = <FaSass/>; break; 
      case "BiLogoJavascript": ReactIconsComponent = <BiLogoJavascript/>; break; 
      case "BiLogoTypescript": ReactIconsComponent = <BiLogoTypescript/>; break; 
      case "FaPython": ReactIconsComponent = <FaPython/>; break; 
      case "FaJava": ReactIconsComponent = <FaJava/>; break; 
      case "RiFileExcel2Line": ReactIconsComponent = <RiFileExcel2Line/>; break; 
      case "FaReact": ReactIconsComponent = <FaReact/>; break; 
      case "SiAndroid": ReactIconsComponent = <SiAndroid/>; break; 
      case "SiGooglecolab": ReactIconsComponent = <SiGooglecolab/>; break; 
      case "SiPowerapps": ReactIconsComponent = <SiPowerapps/>; break; 
      case "SiPowerautomate": ReactIconsComponent = <SiPowerautomate/>; break; 
      case "SiMicrosoftsharepoint": ReactIconsComponent = <SiMicrosoftsharepoint/>; break; 
      case "SiVite": ReactIconsComponent = <SiVite/>; break; 
      case "TbBrandNextjs": ReactIconsComponent = <TbBrandNextjs/>; break; 
      case "BiLogoGit": ReactIconsComponent = <BiLogoGit/>; break; 
      case "SiAdobexd": ReactIconsComponent = <SiAdobexd size={"13px"} style={{ transform: "translate(1px,0.3px)" }}/>; break; 
      case "SiFigma": ReactIconsComponent = <SiFigma/>; break; 
    }

    return (
      <div class="work-used-skill">
        <div class="skill-icon">{ReactIconsComponent}</div>
        <div class="skill-name">{usedSkill}</div>
      </div>
    );
  }
}

export default WorkUsedSkill;

