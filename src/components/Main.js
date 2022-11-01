import React, {Component} from 'react';
import StudentDetails from './StudentDetails.js';
import GraphComponent from './GraphComponent.js';
import SelectStudent from './SelectStudent.js';
import students from './data/student-data.js';
import assignments from './data/assignment-data.js';
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


class Main extends Component {
  constructor() {
    super();
    this.state = {
      studentData: students,
      assignmentData: assignments,
      showAllData: true,
    };
    this.handleStudentSelect = this.handleStudentSelect.bind(this);
    this.showAllData = this.showAllData.bind(this);
  }

  handleStudentSelect(event) {
    const selectedStudentNames = Array.from(event.currentTarget.elements)
      .filter((el) => el.checked && el.getAttribute('type') === 'checkbox')
      .map((el) => el.value);
    this.setState((prevState) => {
      const filteredData = assignments.filter((name) =>
        selectedStudentNames.includes(name.student_name)
      );
      const newState = {...prevState, assignmentData: filteredData};
      return newState;
    });
  }

  showAllData() {
    this.setState({showAllData: !this.state.showAllData});
  }

  render() {
    const groupAssignment = this.state.assignmentData.reduce(function (m, d) {
      if (!m[d.assignment_name]) {
        m[d.assignment_name] = {...d, count: 1};
        return m;
      }
      m[d.assignment_name].assignment_level += d.assignment_level;
      m[d.assignment_name].assignment_fun += d.assignment_fun;
      m[d.assignment_name].count += 1;
      return m;
    }, {});

    const averagePerAssignment = Object.keys(groupAssignment).map(function (k) {
      const item = groupAssignment[k];
      return {
        name: item.assignment_name,
        level: item.assignment_level / item.count,
        fun: item.assignment_fun / item.count,
      };
    });
    const assignmentsGrouped = averagePerAssignment.map((item) => item.name);

    const studentLinks = this.state.studentData.map((item) => {
      const studentUrl = '/Student/' + item.first_name;
      return (
        <li key={item.id}>
          <Link to={studentUrl}>{item.first_name}</Link>
        </li>
      );
    });

    return (
      <div className="body-container">
          <ul className="navbar">{studentLinks}</ul>
          <Routes>
            <Route
            element={<StudentDetails
              handleOneStudentSelect={this.handleOneStudentSelect}
              data={assignments}
            />}
            path="/Student/:name">
            </Route>
          </Routes>
     
        {this.state.showAllData ? (
          <div>
            <div className="selectstudents">
              <p>Filter students:</p>
              <form onChange={this.handleStudentSelect}>
                {this.state.studentData.map((student) => (
                  <SelectStudent
                    key={student.id}
                    first_name={student.first_name}
                    last_name={student.last_name}
                  />
                ))}
              </form>
            </div>
            <div className="graphlegend">
              <div className="difficulty-block" />
              <p>Assignment difficulty</p>
              <div className="fun-block" />
              <p>Assignment fun</p>
            </div>
            <GraphComponent
              averageData={averagePerAssignment}
              assignmentNames={assignmentsGrouped}
            />
          </div>
        ) : null}
        <button onClick={() => this.showAllData()}>
          {this.state.showAllData
            ? 'Hide data for all students'
            : 'Show data for all students'}
        </button>
      </div>
    );
  }
}

export default Main;
