import React from 'react';
import Work from './molecules/Work';
import worksData from '../worksData.json';

class Works extends React.Component {
  render() {
    const works = [];
    worksData.forEach(workData => {
      works.push(
        <Work workData={workData} />
      );
    });
    return (
      <div id="works">
        {works}
      </div>
    );
  }
}

export default Works;