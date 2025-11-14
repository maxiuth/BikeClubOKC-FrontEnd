import { eventsHC } from "./api.js";

// const API = import.meta.env.VITE_API;

/** Fetches an array of events from the API. */
export async function getEvents() {
  //   try {
  //     const response = await fetch(API + "/activities");
  //     const result = await response.json();
  //     return result;
  //   } catch (e) {
  //     console.error(e);
  //     return [];
  //   }

  return eventsHC;
}

/** Fetches an event by ID from the API. */
export async function getEvent(id) {
  //   try {
  //     const response = await fetch(API + "/activities/" + id);
  //     const result = await response.json();
  //     return result;
  //   } catch (e) {
  //     console.error(e);
  //     return null;
  //   }
  return eventsHC.find((event) => event.id === id);
}

/**
 * Sends a new event to the API to be created.
 * A valid token is required.
 */
// export async function createEvent(token, event) {
//   if (!token) {
//     throw Error("You must be signed in to create an event.");
//   }

//   const response = await fetch(API + "/activities", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//     body: JSON.stringify(activity),
//   });

//   if (!response.ok) {
//     const result = await response.json();
//     throw Error(result.message);
//   }
// }

export async function createEvent(event) {
  eventsHC.push(event);
}

/**
 * Requests the API to delete the activity with the given ID.
 * A valid token is required.
 */
// export async function deleteEvent(token, id) {
//   if (!token) {
//     throw Error("You must be signed in to delete an activity.");
//   }

//   const response = await fetch(API + "/activities/" + id, {
//     method: "DELETE",
//     headers: { Authorization: "Bearer " + token },
//   });

//   if (!response.ok) {
//     const result = await response.json();
//     throw Error(result.message);
//   }
// }

export function deleteEvent(id) {
  const index = eventsHC.findIndex((event) => event.id === id);
  if (index !== -1) {
    eventsHC.splice(index, 1); // remove 1 item at index
  }
}
