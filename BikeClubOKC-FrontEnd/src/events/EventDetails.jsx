import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { deleteEvent, getEvent } from "../api/events";
import { useAuth } from "../auth/AuthContext";

export default function EventDetails() {
  // const {token} = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const syncEvent = async () => {
      const data = await getEvent(id);
      setEvent(data);
    };
    syncEvent();
  }, [id]);

  const tryDelete = async () => {
    setError(null);
    try {
      await deleteEvent(id);
      navigate("/events");
    } catch (e) {
      setError(e.message);
    }
  };

  console.log(typeof id, id);

  if (!event) return <p>Loading...</p>;

  return (
    <article>
      <h1>{event.title}</h1>
      <p>Type: {event.type}</p>
      <p>Start Location: {event.start_location}</p>
      <p>End Location: {event.end_location}</p>
      <p>Date: {event.date}</p>
      <p>Start Time: {event.start_time}</p>
      <p>End Time: {event.end_time}</p>
      <button onClick={tryDelete}>Delete Event</button>
      {error && <p role="alert">{error}</p>}
    </article>
  );
}
