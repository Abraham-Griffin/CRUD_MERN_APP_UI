import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditUser = () => {
  const params = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/user/getuserdata", {
        userid: params.userid,
      })
      .then((res) => {
        const userData = res.data[0];
        setName(userData.name);
        setEmail(userData.email);
        setPassword(userData.password);
        setRole(userData.role);
      });
  }, []);

  //Update Function
  const editUsers = () => {
    const updateUser = {
      name: name,
      email: email,
      password: password,
      role: role,
      userid: params.userid,
    };
    axios
      .post("http://localhost:5000/api/user/updateuser", updateUser)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        navigate("/");
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="mt-4">Edit User</h2>
        </div>
        <div className="row text-center">
          <div className="col-sm-6 offset-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Role
              </label>
              <select
                disabled
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
            <button onClick={editUsers} className="btn btn-success">
              Edit User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
