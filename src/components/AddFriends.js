import React from "react";

const AddFriends = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {};
  return (
    <div>
      <h2>AddFriends</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Friend Name</label>
          <input type="text" placeholder="name" onChange={handleChange} />
        </div>{" "}
        <div>
          <label htmlFor="email">Friend Email</label>
          <input type="text" placeholder="email" onChange={handleChange} />
        </div>
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriends;
