import React from "react";
import { Button, IconButton, Typography } from "@mui/material";
import { Grid, Box } from "@mui/material";
import "./MainContent.css";
import MainHeader from "../../components/MainContentHeader/Header";
import OrganCards from "../../components/OrganCards/OrganCards";
import ActivityBars from "../../components/ActivityBars/ActivityBars";
import AnatomyCard from "../../components/AnatomyCard/AnatomyCard";
import { activityData, organData } from "../../assets/MocDate/MockJson";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const MainContent = ({ isMobile, showTasksOnly, setShowTasksOnly }) => {
  const organDatas = organData;
  const activityDatas = activityData;
  return (
    <main
      className="main-content"
      style={{ display: isMobile && showTasksOnly ? "none" : "block" }}
    >
      <Box className="main-content-box">
        <MainHeader />
        <div className="container">
          <div className="main">
            <AnatomyCard />
          </div>
          <div className="">
            <OrganCards organData={organDatas} />
            <Grid
              container
              className="details-container"
              mt={1}
              pr={isMobile && 2}
            >
              <IconButton
                onClick={() => {
                  if (isMobile) {
                    setShowTasksOnly(true);
                  }
                }}
                sx={{
                  width: "100%",
                  padding: "0px",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Typography className="details-container-text">
                  Details
                  <ArrowForwardRoundedIcon className="details-container-icon" />
                </Typography>
              </IconButton>
            </Grid>
          </div>
        </div>

        <Box mt={5}>
          <ActivityBars data={activityDatas} />
        </Box>

        <Button
          onClick={() => {
            if (isMobile) {
              setShowTasksOnly(true);
            }
          }}
        ></Button>
      </Box>
    </main>
  );
};

export default MainContent;
