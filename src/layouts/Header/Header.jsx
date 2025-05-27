import React from "react";
import "./Header.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="mobile-header">
      <h2 className="app-name">
        Health
        <span className="app-name-sub">care.</span>
      </h2>
      <button onClick={toggleSidebar} className="mobile-menu-btn">
        <MoreVertIcon className="mobile-menu-icon" />
      </button>
    </div>
  );
};

export default Header;
