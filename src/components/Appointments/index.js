// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    lists1: [],
    name: '',
    date: '',
    isFavorite: false,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  favorite = id => {
    this.setState(prevState => ({
      lists1: prevState.lists.map(each => {
        if (each.id === id) {
          return {...each, isFavorite: !each.isFavorite}
        }
        return each
      }),
    }))
  }

  onAddDetails = event => {
    event.preventDefault()
    const {name, date} = this.state
    const newContact = {
      id: uuidv4(),
      name,
      date,
      isFavorite: false,
    }

    this.setState(prevState => ({
      lists1: [...prevState.lists1, newContact],
      name: '',
      date: '',
    }))
  }

  render() {
    const {lists1, name, date} = this.state
    return (
      <div>
        <div>
          <h1>Add Appointment</h1>
          <form onSubmit={this.onAddDetails}>
            <label htmlFor="inputname">Title</label>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
              type="text"
              id="inputname"
            />
            <label htmlFor="inputdate">Date</label>
            <input
              type="date"
              className="input"
              value={date}
              onChange={this.onChangeDate}
              id="inputdate"
            />
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            alt="appointments"
          />
        </div>
        <hr />
        <div>
          <h1>Appointments</h1>
          <button type="button">Starred</button>
          <ul>
            {lists1.map(each => (
              <AppointmentItem
                details={each}
                key={each.id}
                favorite={this.favorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
