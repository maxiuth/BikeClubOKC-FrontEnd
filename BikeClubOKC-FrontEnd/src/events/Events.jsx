import { useEffect, useState } from "react";
import { getEvents } from "../api/events.js";
import EventList from "./EventList.jsx";
import EventForm from "./EventForm.jsx";
import { useAuth } from "../auth/AuthContext";

export default function Events() {
  const [events, setEvents] = useState([]);

  const syncEvents = async () => {
    const data = await getEvents();
    setEvents([...data]);
  };

  useEffect(() => {
    syncEvents();
  }, []);

  return (
    <>
      <h1>Events</h1>
      <EventList events={events} />
      <EventForm syncEvents={syncEvents} />
    </>
  );
}

// function Event({ event }) {
//   return (
//     <li>
//       <h2>{event.title}</h2>
//       <p>Start location: {event.start_location}</p>
//       <p>End Location: {event.end_location}</p>
//       <p>Date: {event.date}</p>
//       <p>Start Time: {event.start_time}</p>
//       <p>End Time: {event.end_time}</p>
//     </li>
//   );
// }
