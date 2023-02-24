import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const IndividualUser = ({ user }) => {
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
              <li className="list-group-item">{user.userid}</li>
              <li className="list-group-item">{user.role}</li>
              <li className="list-group-item">{user.name}</li>
              <li className="list-group-item">{user.email}</li>
              <li className="list-group-item">{user.password}</li>
            </ul>
            <Link to={`/edituser/${user.userid}`}>
              <li className="btn btn-success">Edit</li>
            </Link>
            &nbsp;
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteUser(user.userid);
              }}
            >
              Delete
            </button>
            <hr className="mt-4"></hr>
          </div>
        </div>
      </div>
    </>
  );
};
