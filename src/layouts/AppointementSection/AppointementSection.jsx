import React from "react";
import "./AppointementSection.css";
import { AppointmentData } from "../../assets/MocDate/MockJson";
import WeeklyCalendar from "../../components/WeeklyCalendar/WeeklyCalendar";
import AppointmentCards from "../../components/AppointmentCards/AppointmentCards";
import AvatarImage from "../../assets/images/avatar.png";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { IconButton } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

const AppointmentSection = ({ isMobile, showTasksOnly, setShowTasksOnly }) => {
  const appointMentData = AppointmentData;

  return (
    <aside
      className={`third-section ${isMobile && !showTasksOnly ? "hidden" : ""}`}
    >
      <div className="app-container">
        <div className="header">
          <h2>
            {isMobile && (
              <IconButton
                className="header-title-btn"
                onClick={() => setShowTasksOnly(false)}
              >
                <ArrowBackIosNewRoundedIcon className="back-btn-icon" />
                Back
              </IconButton>
            )}
          </h2>
          <div className="header-actions">
            <div className="icon doctor">
              <img src={AvatarImage} alt="Doctor Icon" width={25} height={25} />
            </div>
            <div className="icon add">
              <AddRoundedIcon />
            </div>
          </div>
        </div>

        <WeeklyCalendar currentWeek={appointMentData.currentWeek} />

        <div className="appointments-container">
          <AppointmentCards appointments={appointMentData.appointments} />
          {Object.entries(appointMentData.upcoming).map(([day, data]) => (
            <div className="appointments-container" key={day}>
              <h4 className="appointment-weekdate">On {day}</h4>
              <AppointmentCards appointments={data} showDoctor={false} />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default AppointmentSection;
