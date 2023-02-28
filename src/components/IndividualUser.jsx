import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const IndividualUser = ({ user, state }) => {
  console.log(state);
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

  function deleteUser(userid) {
    axios
      .post("http://localhost:5000/api/user/deleteuser", {
        userid: userid,
      })
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-3" data-aos="flip-right">
            <ul className="list-group">
              <li className="list-group-item">
                UserId: <strong>{user.userid}</strong>
              </li>
              <li className="list-group-item">
                Role: <strong>{user.role}</strong>
              </li>
              <li className="list-group-item">
                Name: <strong>{user.name}</strong>
              </li>
              <li className="list-group-item">
                Email: <strong>{user.email}</strong>
              </li>
              <li className="list-group-item">
                Password: <strong>{user.password}</strong>
              </li>
              <li className="list-group-item">
                Account: <strong>{user.accounts[0].accountName}</strong>
              </li>
              <li className="list-group-item">
                Client: <strong>{user.accounts[0].clientName}</strong>
              </li>
              <li className="list-group-item">
                Manager: <strong>{user.accounts[0].manager}</strong>
              </li>
              <li className="list-group-item">
                Team: <strong>{user.accounts[0].team}</strong>
              </li>
            </ul>
            {(state == "Super" || state == "admin") && (
              <div>
                <Link to={`/edituser/${user.userid}`}>
                  <li className="btn btn-success">Edit</li>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteUser(user.userid);
                  }}
                >
                  Delete
                </button>
              </div>
            )}

            <hr className="mt-4"></hr>
          </div>
        </div>
      </div>
    </>
  );
};
