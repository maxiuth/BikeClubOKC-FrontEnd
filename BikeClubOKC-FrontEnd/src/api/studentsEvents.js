import { studentsEventsHC } from "./api.js";
import { eventsHC } from "./api.js";

// const API = import.meta.env.VITE_API;

/** Fetches an array of events from the API. */
export async function getStudentsEvents() {
  return studentsEventsHC;
}

/** Fetches an event by ID from the API. */
export async function getStudentsEvents(id) {
  for (let event of studentsEventsHC) {
    for (singleEvent of eventsHC) {
      if (event.event_id === singleEvent.id && event.id === id) {
        return event;
      }
    }
  }
}
