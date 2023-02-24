import logo from "./logo.svg";
import "./App.css";
import { UserList } from "./components/UserList";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";

function App() {
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
              <li className="nav-item dropdown">
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} exact></Route>
          <Route path="/UserList" element={<UserList />} exact></Route>
          <Route path="/adduser" element={<AddUser />} exact></Route>
          <Route path="/edituser/:userid" element={<EditUser />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
