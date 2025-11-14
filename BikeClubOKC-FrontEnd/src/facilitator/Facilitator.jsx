import React from "react";
import { useState } from "react";
import Events from "../events/Events.jsx";
import { eventsHC } from "../api/api.js";
import "./facilitator.css";

export default function Facilitator() {
  const [events, setEvents] = useState(eventsHardCoded);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    start_location: "",
    end_location: "",
    date: "",
    start_time: "",
    end_time: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldEvent) => ({ ...oldEvent, [name]: value }));
  };

  // Start editing an existing event
  const handleEditClick = (event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      type: event.type,
      start_location: event.start_location,
      end_location: event.end_location,
      date: event.date,
      start_time: event.start_time,
      end_time: event.end_time,
    });
  };

  //Save the edited event
  const handleSave = (e) => {
    e.preventDefault();
    setEvents((prevEvents) =>
      prevEvents.map((ev) =>
        ev.id === editingEvent.id ? { ...ev, ...formData } : ev
      )
    );
    setEditingEvent(null);
    setFormData({
      title: "",
      type: "",
      start_location: "",
      end_location: "",
      date: "",
      start_time: "",
      end_time: "",
    });
  };

  // 6️⃣ Delete an event
  const handleDelete = (id) => {
    setEvents((prevEvents) => prevEvents.filter((ev) => ev.id !== id));
  };

  // Add a new event
  const handleAdd = (e) => {
    e.preventDefault();
    const newEvent = {
      id:
        eventsHardCoded.length > 0
          ? eventsHardCoded[eventsHardCoded.length - 1].id + 1
          : 1,
      ...formData,
    };
    setEvents((prev) => [...prev, newEvent]);
    setFormData({
      title: "",
      type: "",
      start_location: "",
      end_location: "",
      date: "",
      start_time: "",
      end_time: "",
    });
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingEvent(null);
    setFormData({
      title: "",
      type: "",
      start_location: "",
      end_location: "",
      date: "",
      start_time: "",
      end_time: "",
    });
  };

  return (
    <div className="facilitator-container">
      <h2>Facilitator Dashboard</h2>

      {/* EVENT LIST */}
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>Type: {event.type}</p>
            <p>Start Location: {event.start_location}</p>
            <p>End Location: {event.end_location}</p>
            <p>Date: {event.date}</p>
            <p>Start Time: {event.start_time}</p>
            <p>End Time: {event.end_time}</p>

            <button onClick={() => handleEditClick(event)}>Edit</button>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* CREATE NEW EVENT FORM */}
      <form>
        <h3>{editingEvent ? "Edit Event" : "Create New Event"}</h3>

        <label>
          Title:{" "}
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Type:{" "}
          <input
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Start Location:{" "}
          <input
            name="start_location"
            value={formData.start_location}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          End Location:{" "}
          <input
            name="end_location"
            value={formData.end_location}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Date:{" "}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Start Time:{" "}
          <input
            type="time"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          End Time:{" "}
          <input
            type="time"
            name="end_time"
            value={formData.end_time}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="submit" style={{ marginTop: "10px" }}>
          {editingEvent ? "Save Changes" : "Add Event"}
        </button>

        {editingEvent && (
          <button
            type="button"
            onClick={handleCancel}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );

  //   return (
  //     <>
  //       <h1>Facilitator Page</h1>
  //       <Events />
  //     </>
  //   );
}
