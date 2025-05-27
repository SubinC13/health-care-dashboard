import { useState } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import Sidebar from "./layouts/SideBar/SideBar";
import MainContent from "./layouts/MainContent/MainContent";
import AppointementSection from "./layouts/AppointementSection/AppointementSection";
import Header from "./layouts/Header/Header";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showTasksOnly, setShowTasksOnly] = useState(false);
  const isMobile = useMediaQuery("(max-width:1070px)");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Grid className="root">
        <div className="main-layout">
          {isMobile && <Header toggleSidebar={toggleSidebar} />}

          {isSidebarOpen && (
            <div className="overlay" onClick={toggleSidebar}></div>
          )}

          <Grid container className="main-layout-container">
            <div className="layout-container">
              <Sidebar isSidebarOpen={isSidebarOpen} />
              <MainContent
                isMobile={isMobile}
                showTasksOnly={showTasksOnly}
                setShowTasksOnly={setShowTasksOnly}
              />
              <AppointementSection
                isMobile={isMobile}
                showTasksOnly={showTasksOnly}
                setShowTasksOnly={setShowTasksOnly}
              />
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
}

export default App;
