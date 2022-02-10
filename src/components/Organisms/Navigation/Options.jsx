import React from "react";
import { NavLink } from "react-router-dom";

const Options = () => {
  return (
    <>
      <div className="navbar-inner">
        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                <i className="fa fa-home text-info"></i>
                <span className="nav-link-text">Lista de clientes</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Options;
