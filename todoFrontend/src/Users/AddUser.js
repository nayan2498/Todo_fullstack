import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/home");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 offet-md-3 border rounded p-4 mt-2 shadow">
          <div className="text-center m-4 fs-3">
            Add User Form
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name:
                </label>
                <input
                  placeholder="Enter Your Name"
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Username:
                </label>
                <input
                  placeholder="Enter Your Username"
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Email:
                </label>
                <input
                  placeholder="Enter Your Email"
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="mx-2 btn btn-outline-primary">
                Submit
              </button>
              <Link to='/home' className="btn btn-outline-danger">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
