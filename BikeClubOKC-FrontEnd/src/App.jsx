import { Routes, Route } from "react-router";
import Layout from "./layout/Layout.jsx";
// import Books from "./books/Books.jsx";
// import Book from "./Books.jsx";
// import BookDetails from "./books/BookDetails.jsx";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";
// import Account from "./account/Account.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
      </Route>
    </Routes>
  );
}
