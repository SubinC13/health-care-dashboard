import { Box, Typography, IconButton, Grid, Paper } from "@mui/material";
import { AppointmentDataMock } from "../../assets/MocDate/MockJson";
import ArrowLeft from "../../assets/icons/arrowLeftIcon.svg";
import ArrowRight from "../../assets/icons/arrowRightIcon.svg";
import "./styles.css";

const WeeklyCalendar = () => {
  const days = AppointmentDataMock;
  const selectedDay = 1;
  return (
    <Box sx={{ width: "100%", backgroundColor: "#f5f7ff" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#1b1f4a" }}
          className="weekly-calendar-title"
        >
          October 2021
        </Typography>
        <Box>
          <IconButton>
            <img src={ArrowLeft} alt="Doctor Icon" width={20} height={25} />
          </IconButton>
          <IconButton>
            <img src={ArrowRight} alt="Doctor Icon" width={20} height={25} />
          </IconButton>
        </Box>
      </Box>
      <Grid container justifyContent="space-between">
        {days.map((day, idx) => (
          <Grid key={day.date} item>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 4,
                backgroundColor:
                  idx === selectedDay ? "#e8eaff" : "transparent",
                py: 2,
                textAlign: "center",
                display: "grid",
                gap: "8px",
              }}
              onClick={() => {}}
            >
              <Typography
                variant="subtitle2"
                color="text.secondary"
                className="weekly-calendar-day"
              >
                {day.day}
              </Typography>
              <Typography
                variant="h7"
                sx={{ fontWeight: "bold", mb: 1 }}
                className="weekly-calendar-date"
              >
                {day.date}
              </Typography>
              {day.slots.map((time, i) => (
                <Box
                  key={i}
                  sx={{
                    backgroundColor:
                      day.selected === time
                        ? "#3c43d8"
                        : day.grouped?.includes(time)
                        ? "#d5d9f6"
                        : "transparent",
                    color: day.selected === time ? "#fff" : "#3e3b7c",
                    px: 1.5,
                    py: day.selected === time ? 0.7 : 0.5,
                    borderRadius: 2,
                    my: 0.5,
                    fontSize: "10px",
                    cursor: "pointer",
                    margin: day.selected === time && "0px 5px",
                  }}
                >
                  {time}
                </Box>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeeklyCalendar;
