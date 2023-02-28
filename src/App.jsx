import logo from "./logo.svg";
import "./App.css";
import { UserList } from "./components/UserList";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "./components/Login";
import { useEffect, useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const userRole = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    userRole ? setIsLogged(true) : setIsLogged(false);
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            CRUD MERN APP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="adduser">
                  Add User
                </a>
              </li>
              {!isLogged ? (
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Log In
                  </a>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    My Account
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="userlist">
                        User List
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={handleLogout}>
                        Log Out
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} exact></Route>
        <Route path="/userlist" element={<UserList />} exact></Route>
        <Route path="/adduser" element={<AddUser />} exact></Route>
        <Route path="/edituser/:userid" element={<EditUser />} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
