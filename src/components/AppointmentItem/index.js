// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {details, favorite} = props
  const {id, name, date, isFavorite} = details

  const deleting = () => {
    favorite(id)
  }

  const reallyFav = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li>
      <p>{name}</p>
      <p>{format(new Date(date))}</p>
      <button type="button" onClick={deleting}>
        <img src={reallyFav} alt="star" />
      </button>
    </li>
  )
}
export default AppointmentItem
