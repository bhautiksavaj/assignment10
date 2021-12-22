import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions";
// import useHistory from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      alert("Please add a username");
      return;
    }
    dispatch(login(username));
  };

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <div>
          <h1>login</h1>
          <div className="form-control">
            <label>username</label>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <button
            type="submit"
            style={{ backgroundColor: "green" }}
            className="btn"
          >
            login
          </button>
        </div>
      </form>
    </>
  );
};
