import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddFriends = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:9000/api/friends", form, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        navigate("/friends");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <h2>AddFriends</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Friend Name</label>
          <input
            type="text"
            placeholder="name"
            id="name"
            onChange={handleChange}
          />
        </div>{" "}
        <div>
          <label htmlFor="email">Friend Email</label>
          <input
            type="text"
            placeholder="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriends;
