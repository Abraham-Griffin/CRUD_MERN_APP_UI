import axios from "axios";
import React, { useEffect, useState } from "react";
import { IndividualUser } from "./IndividualUser";

export const UserList = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/getusers")
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Mapping list on user object
  const usersList = userData.map((user) => {
    return (
      <div>
        <IndividualUser user={user} />
      </div>
    );
  });

  return (
    <>
      <div>
        <h2>Users List</h2>
        {usersList}
      </div>
    </>
  );
};
