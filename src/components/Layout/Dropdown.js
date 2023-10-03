import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Dropdown.css";
import { serviceDropdown } from "./Navitems";

const Dropdown = () => {
  return (
    <>
      <ul className="services-submenu">
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
