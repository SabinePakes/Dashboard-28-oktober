import React from 'react'
import {useParams} from 'react-router-dom'
import SelectStudent from './SelectStudent'


 const Student = props => {
  const {username, id} = useParams()
  const {
      chartType,
      difficultyRating,
      enjoymentRating,
      getAssignmentForStudent,
      getStudentNames,
      handleChartSwitches,
      metadata
  } = props

  const studentNames = getStudentNames()

  let student = studentNames.find(student => {
      return student.id === parseInt(id)
  })

  const studentData = metadata.find(row => {
      return student.id === parseInt(row.id)
  })

  let tableData = []
  let keyID = 0
  let lastName = ''


  const urlToStudent = (
      <li>
          <i
              className='active'
            
          >
              {student.name}
          </i>
      </li>
  )

  for (let [key, value] of Object.entries(studentData)) {
      keyID++
      const label = key.charAt(0).toUpperCase() + key.slice(1)
      if (key === 'name') {
          tableData.push(
              <tr key={keyID}>
                  <td>Name</td>
                  <td>
                      {student.name} {value}
                  </td>
              </tr>
          )
          lastName = value
    
      } else if (key !== 'id') {
          tableData.push(
              <tr key={keyID}>
                  <td>{label}</td>
                  <td>{value}</td>
              </tr>
          )
      }
  }

  return (
      <React.Fragment>
          <Student
              id={id}
              nav='Student'
              urlToStudent={urlToStudent}
              username={username}
          />
          <main>
              <header>
                  <h1>
                      {student.name} {lastName}
                  </h1>
              </header>
              <SelectStudent
                  chartType={chartType}
                  difficultyRating={difficultyRating}
                  enjoymentRating={enjoymentRating}
                  getAssignmentForStudent={getAssignmentForStudent}
                  handleChartSwitches={handleChartSwitches}

                  username={username}
              />

              <table className='studentTable'>
                  <thead>
                      <tr className='skip'>
                          <th colSpan='2'>
                              <h2>Student Details</h2>
                          </th>
                      </tr>
                  </thead>
                  <tbody>{tableData}</tbody>
              </table>

             
          </main>
      </React.Fragment>
  )
}
export default Student
