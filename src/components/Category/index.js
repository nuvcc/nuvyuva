import React from 'react'
import Navbar from '../Navbar/index.js'
import {Event, EventContain} from './Category';

const AnEvent = () => {
  return (
      <EventContain>
        <Navbar />
        <Event></Event>
      </EventContain>
  )
}

export default AnEvent