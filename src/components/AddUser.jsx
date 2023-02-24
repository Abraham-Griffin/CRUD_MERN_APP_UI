import React, { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
import Swal from "sweetalert2";

export const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  function addUsers() {
    let user = {
      name: name,
      email: email,
      password: password,
      role: role,
      userid: uniqid(),
    };
    console.log(user);

    axios
      .post("http://localhost:5000/api/user/adduser", user)
      .then((res) => {
        Swal.fire("Great", "User has been created succesfully");
      })
      .then((err) => console.log(err));
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="mt-4">Create New User</h2>
        </div>
        <div className="row text-center">
          <div className="col-sm-6 offset-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Role
              </label>
              <select
                type="text"
                className="form-select text-center"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="admin">Admin</option>
                <option value="normal">Normal</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button onClick={addUsers} className="btn btn-success">
              Save User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
