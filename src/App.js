import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";

function App() {
  return (
    <div className="App">
      <nav>
        <h2 id="title">Friends Database</h2>
        <Link className="link" to="/login">
          Login.
        </Link>
        <Link className="link" to="/friends">
          FriendsList.
        </Link>
        <Link className="link" to="/friends/add">
          Add Friend.
        </Link>
        <Link className="link" to="/logout">
          Logout.
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/friends/add" element={<AddFriends />} />
        <Route path="/logout" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
