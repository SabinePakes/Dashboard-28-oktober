import React, {useState} from 'react';
import GraphComponent from './GraphComponent';
import {useParams} from 'react-router-dom';

function StudentDetails(props) {
  const params = useParams();
  const filteredAssignments = props.data
    .filter((item) => params.name === item.student_name)
    .map(function (obj) {
      return {
        name: obj.assignment_name,
        level: obj.assignment_level,
        fun: obj.assignment_fun,
      };
    });

  const [content, showContent] = useState(true);

  return (
    <div>
      {content ? (
        <div>
          <h2>Student: {params.name}</h2> Difficulty and fun level per
          assignment for {params.name}:
          <div className="graphlegend">
            <div className="difficulty-block" />
            <p>Assignment difficulty</p>
            <div className="fun-block" />
            <p>Assignment fun</p>
          </div>
          <GraphComponent averageData={filteredAssignments} />
        </div>
      ) : null}
      <button
        onClick={() => {
          showContent((content) => !content);
        }}
      >
        {content ? (
          <span>Hide data for {params.name}</span>
        ) : (
          <span>Show data for {params.name}</span>
        )}
      </button>
      <hr />
    </div>
  );
}

export default StudentDetails;
