// Write your code here
import './index.css'

const EventItem = props => {
  const {item, buttonClick} = props
  const {imageUrl, name, location, registrationStatus} = item
  const clickButt = () => {
    buttonClick(registrationStatus)
  }

  return (
    <li>
      <button type="button" className="butt" onClick={clickButt}>
        <img src={imageUrl} alt="event" className="img-1" />
      </button>

      <p className="e-head">{name}</p>
      <p className="par">{location}</p>
    </li>
  )
}

export default EventItem
