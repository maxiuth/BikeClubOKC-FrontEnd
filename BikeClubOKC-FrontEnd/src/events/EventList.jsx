import React from "react";
import { Link } from "react-router";

export default function EventList({ events }) {
  return (
    <>
      <ul>
        {events.map((event) => (
          <EventListItem key={event.id} event={event} />
        ))}
      </ul>
    </>
  );
}

function EventListItem({ event }) {
  return (
    <li>
      <Link to={"/events/" + event.id}>{event.title}</Link>
    </li>
  );
}
