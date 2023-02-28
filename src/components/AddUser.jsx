import React, { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

export const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [account, setAccount] = useState("");
  const [client, setClient] = useState("");
  const [manager, setManager] = useState("");
  const [team, setTeam] = useState("");
  // const navigate = useNavigate();

  function addUsers() {
    let accounts = [];
    let user = {
      name: name,
      email: email,
      password: password,
      role: role,
      userid: uniqid(),
      accounts: [
        {
          accountName: account,
          clientName: client,
          manager: manager,
          team: team,
        },
      ],
    };
    console.log(user);

    axios
      .post("http://localhost:5000/api/user/adduser", user)
      .then((res) => {
        Swal.fire("Great", "User has been created succesfully");
        // navigate("/userlist");
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
          <div className="col-sm-6 ">
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
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="account" className="form-label">
                Account Name
              </label>
              <input
                type="text"
                className="form-control"
                value={account}
                onChange={(e) => {
                  setAccount(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="client" className="form-label">
                Client Name
              </label>
              <input
                type="text"
                className="form-control"
                value={client}
                onChange={(e) => {
                  setClient(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="manager" className="form-label">
                Manager
              </label>
              <input
                type="text"
                className="form-control"
                value={manager}
                onChange={(e) => {
                  setManager(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="team" className="form-label">
                Team
              </label>
              <input
                type="text"
                className="form-control"
                value={team}
                onChange={(e) => {
                  setTeam(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <button onClick={addUsers} className="btn btn-success col-sm-4">
          Save User
        </button>
      </div>
    </>
  );
};
