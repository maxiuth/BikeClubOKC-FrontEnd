export const eventsHC = [
  {
    id: 101,
    title: "Bike around the lake",
    type: "Biking",
    start_location: "Point A",
    end_location: "Point B",
    date: "2024-06-01",
    start_time: "10:00 AM",
    end_time: "12:00 PM",
  },
  {
    id: 202,
    title: "Bike around the park",
    type: "Workshop",
    start_location: "Point B",
    end_location: "Point C",
    date: "2024-07-01",
    start_time: "10:00 AM",
    end_time: "12:00 PM",
  },
  {
    id: 303,
    title: "Bike on the trail",
    type: "Event",
    start_location: "Point B",
    end_location: "Point D",
    date: "2024-06-027",
    start_time: "10:00 AM",
    end_time: "12:00 PM",
  },
];

export const volunteersHC = [
  {
    id: 1,
    first_name: "Alice",
    last_name: "Nguyen",
    email: "alice.nguyen@example.com",
    phone: "555-123-4567",
    interest: true,
    Facilitator: false,
    prefered_school: "Lincoln High School",
    flexible: true,
    background_check: true,
  },
  {
    id: 2,
    first_name: "Marcus",
    last_name: "Lee",
    email: "marcus.lee@example.com",
    phone: "555-987-6543",
    interest: false,
    Facilitator: true,
    prefered_school: "Roosevelt Middle School",
    flexible: false,
    background_check: true,
  },
  {
    id: 3,
    first_name: "Sophia",
    last_name: "Ramirez",
    email: "sophia.ramirez@example.com",
    phone: "555-222-3344",
    interest: true,
    Facilitator: true,
    prefered_school: "Jefferson Elementary",
    flexible: true,
    background_check: false,
  },
  {
    id: 4,
    first_name: "David",
    last_name: "Kim",
    email: "david.kim@example.com",
    phone: "555-444-8899",
    interest: false,
    Facilitator: false,
    prefered_school: "Kingston Charter School",
    flexible: true,
    background_check: true,
  },
  {
    id: 5,
    first_name: "Jasmine",
    last_name: "Patel",
    email: "jasmine.patel@example.com",
    phone: "555-777-2211",
    interest: true,
    Facilitator: false,
    prefered_school: "Central High School",
    flexible: false,
    background_check: false,
  },
];

export const schoolsHC = [
  {
    id: 1,
    name: "Evergreen Elementary",
    day: "Monday",
    Volunteer_ID: 1, // overlaps (Alice)
  },
  {
    id: 2,
    name: "Maple Ridge Middle School",
    day: "Wednesday",
    Volunteer_ID: 3, // overlaps (Sophia)
  },
  {
    id: 3,
    name: "Riverbend High School",
    day: "Friday",
    Volunteer_ID: 5, // overlaps (Jasmine)
  },
  {
    id: 4,
    name: "Cedarview Charter School",
    day: "Tuesday",
    Volunteer_ID: 7, // non-overlapping (volunteer does NOT exist in main list)
  },
];

export const studentsEventsHC = [
  {
    id: 1,
    students_id: 1, // Aiden
    events_id: 101, // overlaps: STEM Workshop also used by others
  },
  {
    id: 2,
    students_id: 2, // Bella
    events_id: 101, // overlaps again
  },
  {
    id: 3,
    students_id: 3, // Carlos
    events_id: 202, // overlap with next
  },
  {
    id: 4,
    students_id: 4, // Diana
    events_id: 202, // overlapping
  },
  {
    id: 5,
    students_id: 5, // Ethan
    events_id: 303, // non-overlap (unique event)
  },
];

//============ Summary (for references) ============
const volunteers = [
  { id: 1, name: "Alice Nguyen" },
  { id: 2, name: "Marcus Lee" },
  { id: 3, name: "Sophia Tran" },
  { id: 4, name: "David Kim" },
  { id: 5, name: "Jasmine Patel" },
];

const students = [
  { id: 1, name: "Aiden" },
  { id: 2, name: "Bella" },
  { id: 3, name: "Carlos" },
  { id: 4, name: "Diana" },
  { id: 5, name: "Ethan" },
];

const events = [
  { id: 101, title: "STEM Workshop" },
  { id: 202, title: "Career Fair" },
  { id: 303, title: "Robotics Expo" },
];
