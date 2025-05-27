import React from "react";
import "./Sidebar.css";
import { Grid } from "@mui/material";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import {
  SideBarMenuGeneral,
  SideBarMenuSettings,
  SideBarMenuTools,
} from "../../assets/MocDate/MockJson";

const Sidebar = ({ isSidebarOpen }) => {
  const generalMenuItems = SideBarMenuGeneral();
  const toolsMenuItems = SideBarMenuTools();
  const settingsMenuItems = SideBarMenuSettings();
  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <Grid className="sidebar-header">
        <h2 className="app-name">
          Health
          <span className="app-name-sub">care.</span>
        </h2>
      </Grid>

      <Grid className="lable-text">
        <p className="lable-text-content">General</p>
      </Grid>

      <nav className="sidebar-nav">
        <SidebarMenu menuItems={generalMenuItems} />
      </nav>

      <Grid className="lable-text">
        <p className="lable-text-content">Tools</p>
      </Grid>

      <nav className="sidebar-nav">
        <SidebarMenu menuItems={toolsMenuItems} />
      </nav>

      <Grid className="sidebar-footer">
        <nav className="sidebar-nav">
          <SidebarMenu menuItems={settingsMenuItems} />
        </nav>
      </Grid>
    </aside>
  );
};

export default Sidebar;
