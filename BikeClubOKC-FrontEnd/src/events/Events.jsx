import React from "react";
import useQuery from "../api/useQuery.jsx";
import { Link } from "react-router";
import { eventsHardCoded } from "../api/api.js";

export default function Events() {
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
