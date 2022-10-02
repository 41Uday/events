// Write your code here
import {Component} from 'react'

import './index.css'

const registrationStatus = {
  initial: 'INITIAL',
  register: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  closed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  noActiveEvent = () => (
    <div className="bg-ac-cont">
      <p className="hed-ac">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  getRegistered = () => (
    <div className="bg-ac-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="r-img"
      />
      <h1 className="hed-ac">You have already registered for the event</h1>
    </div>
  )

  getRegister = () => (
    <div className="bg-ac-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="r-img-2"
      />
      <p className="r-para">
        A live performance brings so much to your relationship with dance.{' '}
        <br /> Seeing dance live can often make you fall totally in love with
        this beautiful art form.
      </p>
      <button type="button" className="r-butt">
        Register Here
      </button>
    </div>
  )

  getClosed = () => (
    <div className="bg-ac-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="r-img-3"
      />
      <h1 className="r-hed-2">Registrations Are Closed Now!</h1>
      <p className="r-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  render() {
    const {item} = this.props
    switch (item) {
      case registrationStatus.initial:
        return this.noActiveEvent()
      case registrationStatus.register:
        return this.getRegistered()
      case registrationStatus.yetToRegister:
        return this.getRegister()
      case registrationStatus.closed:
        return this.getClosed()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
