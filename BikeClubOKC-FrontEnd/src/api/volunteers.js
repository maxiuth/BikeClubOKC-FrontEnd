import { volunteersHC } from "./api.js";

// const API = import.meta.env.VITE_API;

/** Fetches an array of events from the API. */
export async function getVolunteers() {
  return volunteersHC;
}

/** Get a single volunteer based on ID. */
export async function getVolunteer(id) {
  return volunteersHC.find((volunteer) => volunteer.id === id);
}
