import React, { Component } from 'react'
import {
    BrowserRouter as Link
  } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <div>
                 <nav className="navbar navbar-expand-sm navbar-dark " style={{backgroundColor: '#000'}}>
        <Link className="navbar-brand" href="#">Navbar</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <ul className="navbar-nav mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Xem Danh Sach NOTE</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <Link className="dropdown-item" href="#">Action 1</Link>
                <Link className="dropdown-item" href="#">Action 2</Link>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
            </div>
        )
    }
}
