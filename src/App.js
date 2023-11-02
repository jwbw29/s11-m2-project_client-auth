import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";

function App() {
  return (
    <div className="App">
      <h2>Client Auth Project</h2>
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
