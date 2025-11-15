import React, { useState } from "react";
import { createEvent } from "../api/events.js";
import { eventsHC } from "../api/api.js";

export default function EventForm({ syncEvents }) {
  const [error, setError] = useState(null);

  const tryCreateEvent = async (e) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.target);

    const event = {
      id: eventsHC.length + 1,
      title: formData.get("title"),
      type: formData.get("type"),
      start_location: formData.get("start_location"),
      end_location: formData.get("end_location"),
      date: formData.get("date"),
      start_time: formData.get("start_time"),
      end_time: formData.get("end_time"),
    };

    try {
      createEvent(event);
      syncEvents();
      e.target.reset();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h2>Create a new event for your school</h2>

      <form onSubmit={tryCreateEvent}>
        <label>
          Title
          <input type="text" name="title" required />
        </label>

        <label>
          Type
          <select name="type">
            <option value="">Select type</option>
            <option value="Biking">Biking</option>
            <option value="Workshop">Workshop</option>
            <option value="Event">Event</option>
          </select>
        </label>

        <label>
          Start Location
          <input type="text" name="start_location" required />
        </label>

        <label>
          End Location
          <input type="text" name="end_location" required />
        </label>

        <label>
          Date
          <input type="date" name="date" required />
        </label>

        <label>
          Start Time
          <input type="time" name="start_time" required />
        </label>

        <label>
          End Time
          <input type="time" name="end_time" required />
        </label>

        <button type="submit">Create Event</button>
      </form>

      {error && <p role="alert">{error}</p>}
    </>
  );
}
