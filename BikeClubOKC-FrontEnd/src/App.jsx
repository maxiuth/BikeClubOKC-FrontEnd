import { Routes, Route } from "react-router";
import Layout from "./layout/Layout.jsx";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";
import GeneralLogin from "./general/GeneralLogin.jsx";
import Events from "./events/Events.jsx";
import EventDetails from "./events/EventDetails.jsx";
import Facilitator from "./facilitator/facilitator.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<GeneralLogin />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/users/volunteers/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
      </Route>
    </Routes>
  );
}
