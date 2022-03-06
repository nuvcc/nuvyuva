import React from 'react'
import Navbar from '../Navbar/index.js'
import {Event, EventContain, EventCard} from './Category.js';
import EventCardDetails from '../EventCardDetails/index.js';

const AnEvent = () => {
  return (
      <EventContain>
        <Navbar />
        <Event>
          <EventCard>
            <EventCardDetails />
          </EventCard>
          <EventCard>
            <EventCardDetails />
          </EventCard>
          <EventCard>
            <EventCardDetails />
          </EventCard>
        </Event>
      </EventContain>
  )
}

export default AnEvent