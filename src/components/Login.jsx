import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const styles = {
    centeredDiv: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      height: "100%",
    },
    resetAccount: {
      alignSelf: "center",
      display: "flex",
      flexDirection: "column",
    },
    noAccount: {
      alignSelf: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
    },
  };

  const handleLogin = (e) => {
    let data = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/api/user/login-user", data)
      .then((res) => {
        console.log(res);
        if (
          res.data.role == "Super" ||
          res.data.role == "admin" ||
          res.data.role == "normal"
        ) {
          localStorage.setItem("role", res.data.role);
          history("/userlist", {
            state: { id: res.data.userid },
          });
        } else if (res.data == "notexist") {
          Swal.fire("Oops", "User or Password don't match");
        }
      })
      .then((err) => console.log(err));
  };
  return (
    <>
      <div className="content" style={{ padding: "50px 0px 100px 0px" }}>
        <div className="row d-flex justify-content-center">
          <div className="col-xs-12 col-md-6" style={styles.centeredDiv}>
            <div style={{ width: "60%" }}>
              <div style={{ marginBottom: 24 }}>
                <div
                  style={{
                    fontSize: 38,
                    justifyContent: "center",
                    display: "flex",
                    paddingBottom: 40,
                  }}
                >
                  Log In
                </div>
                <div>
                  <div>
                    <div className="mt-3" style={{ fontSize: 24 }}>
                      Email
                    </div>
                    <div>
                      <input
                        className="form-control"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-4" style={{ fontSize: 24 }}>
                      Password
                    </div>
                    <div>
                      <input
                        className="form-control"
                        value={password}
                        type={"password"}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button className="btn btn-success" onClick={handleLogin}>
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
