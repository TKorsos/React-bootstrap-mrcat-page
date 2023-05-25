import React from "react";

export default function Navbar({themeColor, setThemeColor}) {

    const handleChange = () => {
      themeColor === "light" ? setThemeColor("dark") : setThemeColor("light")
    }

    return <nav className="navbar navbar-expand-lg bg-primary bg-gradient px-lg-5" id="root">
    <div className="container">
      <div className="form-check form-switch navbar-brand switch-width">
        <input type="checkbox" className="form-check-input bg-secondary" role="switch" id="switch" onClick={handleChange} />
        <label htmlFor="switch" className="form-check-label">{ themeColor === "light" ? "Dark" : "Light" }</label>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#prologue">Prologue</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cards">Cards</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#content-text">Content Text</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#form">Messaget</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Family
            </a>
            <ul className="dropdown-menu text-bg-primary m-0">
              <li><a className="dropdown-item" href="#">Cat 1</a></li>
              <li><a className="dropdown-item" href="#">Cat 2</a></li>
              <li><a className="dropdown-item" href="#">Cat 3</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}