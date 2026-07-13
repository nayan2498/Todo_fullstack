import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const cancel = () => {
    setUserId("");
    setPassword("");
  };

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      userId: userId,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/loginuser",
        data,
      );
      if (response.data) {
        navigate('/home');
      } else {
        alert("failed");
      }
    } catch {
      console.error(Error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 offet-md-3 border rounded p-4 mt-2 shadow">
          <div className="text-center m-4 fs-3">
            Login Form
            <form onSubmit={submit}>
              <div className="mb-3">
                <label htmlFor="userID" className="form-label">
                  UserId:
                </label>
                <input
                  placeholder="Enter Your UserId"
                  type="email"
                  className="form-control"
                  name="userId"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label">
                  Password:
                </label>
                <input
                  placeholder="Enter Your Password"
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="mx-2 btn btn-outline-primary">
                Login
              </button>
              <Link to="/register" className="mx-2 btn btn-outline-secondary">
                Register
              </Link>
              <button onClick={cancel} className="btn btn-outline-danger">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
