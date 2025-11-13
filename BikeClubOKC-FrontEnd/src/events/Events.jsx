import React from "react";
import useQuery from "../api/useQuery.jsx";
import { Link } from "react-router";

export const eventsHardCoded = [
  {
    id: 1,
    title: "Bike around the lake",
    type: "Biking",
    start_location: "Point A",
    end_location: "Point B",
    date: "2024-06-01",
    start_time: "10:00 AM",
    end_time: "12:00 PM",
  },
  {
    id: 2,
    title: "Bike around the park",
    type: "Biking",
    start_location: "Point B",
    end_location: "Point C",
    date: "2024-07-01",
    start_time: "10:00 AM",
    end_time: "12:00 PM",
  },
  {
    id: 3,
    title: "Bike on the trail",
    type: "Biking",
    start_location: "Point B",
    end_location: "Point D",
    date: "2024-06-027",
    start_time: "10:00 AM",
    end_time: "12:00 PM",
  },
];

export default function Books() {
  // Get list of books from API
  //   const { data: books, loading, error } = useQuery("/books", "books");

  //   if (loading || !books) return <p>Loading...</p>;
  //   if (error) return <p>Error loading books! {error}</p>;

  return (
    <ul>
      {eventsHardCoded.map((event) => (
        <Event event={event} key={event.id} />
      ))}
    </ul>
  );
}

function Event({ event }) {
  return (
    <li>
      {/* <img src={book.coverimage} alt={`Cover for ${book.title}`} />
      <Link to={`books/${book.id}`}>
        <h2>{book.title}</h2>
      </Link>
      <h3>{book.author}</h3>
      <p>{book.description}</p> */}
      <h2>{event.title}</h2>
      <p>Start location: {event.start_location}</p>
      <p>End Location: {event.end_location}</p>
      <p>Date: {event.date}</p>
      <p>Start Time: {event.start_time}</p>
      <p>End Time: {event.end_time}</p>
    </li>
  );
}
