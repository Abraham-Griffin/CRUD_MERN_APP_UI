import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IndividualUser } from "./IndividualUser";

export const UserList = () => {
  const location = useLocation();
  const [userData, setUserData] = useState([]);
  const { state } = location;
  const userRole = localStorage.getItem("role");
  useEffect(() => {
    if (userRole == "Super" || userRole == "admin") {
      axios
        .get("http://localhost:5000/api/user/getusers")
        .then((res) => {
          setUserData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:5000/api/user/getuserdata", {
          userid: state.id,
        })
        .then((res) => {
          setUserData(res.data);
        });
    }
  }, []);

  //Mapping list on user object
  const usersList = userData.map((user) => {
    return (
      <div>
        <IndividualUser user={user} state={userRole} />
      </div>
    );
  });

  return (
    <>
      <div>
        {userRole == "Super" || userRole == "admin" ? (
          <h2>Users List</h2>
        ) : (
          <h2>User Info</h2>
        )}
        {usersList}
      </div>
    </>
  );
};
