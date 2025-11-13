import { Routes, Route } from "react-router";
import Layout from "./layout/Layout.jsx";
// import Books from "./books/Books.jsx";
// import Book from "./Books.jsx";
// import BookDetails from "./books/BookDetails.jsx";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";
// import Account from "./account/Account.jsx";
import GeneralLogin from "./general/GeneralLogin.jsx";
import Events from "./events/Events.jsx";
import Facilitator from "./facilitator/Facilitator.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<GeneralLogin />} />
        <Route path="/facilitator" element={<Facilitator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
      </Route>
    </Routes>
  );
}
