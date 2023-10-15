import React from 'react';
import WorkUsedSkill from './WorkUsedSkill';

class WorkUsedSkills extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const usedSkills = this.props.usedSkills;

    const workUsedSkills = [];
    usedSkills.forEach((usedSkill) => {
      workUsedSkills.push(<WorkUsedSkill usedSkill={usedSkill} />);
    });

    return (
        <div class="work-used-skills">
          {workUsedSkills}
        </div>
    );
  }
}

export default WorkUsedSkills;
