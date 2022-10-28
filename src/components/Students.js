import students from './data/student-data.js';
import Student from './Student.js';
import React, {Component} from 'react';

class Students extends Component {
  constructor() {
    super();
    this.state = {studentData: students};
  }

  render() {
    return (
      <ul className="student-list">
        {this.state.studentData.map((student) => (
          <Student
            key={student.id}
            first_name={student.first_name}
            last_name={student.last_name}
            email={student.email}
            age={student.age}
            phone={student.phone}
            photo={student.photo}
          />
        ))}
      </ul>
    );
  }
}
export default Students