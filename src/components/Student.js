import React from 'react'

class Student extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleClickRemove = this.handleClickRemove.bind(this)
    this.state = { isButtonClicked: false }
  }

  handleClick () {
    this.setState({ isButtonClicked: true })
  }

  handleClickRemove () {
    this.setState({ isButtonClicked: false })
  }

  render () {
    const { isButtonClicked } = this.state
    if (isButtonClicked) {
      return (
        <li className='list-item'>
          <p>
            Name:
            <br /> {this.props.first_name} {this.props.last_name}
          </p>
          <p>
            Email:
            <br /> {this.props.email}
          </p>
          <p>
            Phone number: <br />
            {this.props.phone}
          </p>
          <p>
            Age: <br />
            {new Date().getFullYear() - this.props.age}
          </p>
          <button onClick={() => this.handleClickRemove()}>
            Show less info
          </button>
        </li>
      )
    } else {
      return (
        <div className='list-item'>
          <img src={this.props.photo} alt='Student' className='studentimg' />
          <br />
          <p>
            {this.props.first_name} {this.props.last_name}
          </p>
          <br />
          <button onClick={() => this.handleClick()}>Show more info</button>
          <br />
        </div>
      )
    }
  }
}
export default Student
