import { Box, Typography } from "@mui/material";
import { Grid, styled } from "@mui/system";
import { ActivityBarsData, weekDays } from "../../assets/MocDate/MockJson";
import "./styles.css";

const ActivityBars = () => {
  const data = ActivityBarsData;
  const day = weekDays;

  const Container = styled(Box)(() => ({
    backgroundColor: "#F6F9FC",
    borderRadius: "20px",
    padding: "20px",
    display: "block",
    flexDirection: "column",
  }));

  const ChartWrapper = styled(Box)(() => ({
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: "20px",
    overflowX: "auto",
  }));

  const DayColumn = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
  }));

  const BarGroup = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    height: "120px",
    justifyContent: "flex-end",
  }));

  const Bar = styled(Box)(({ height, color }) => ({
    width: "6px",
    height: `${height}px`,
    backgroundColor: color,
    borderRadius: "3px",
  }));

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" className="activity-title">
          Activity
        </Typography>
        <Typography variant="body2" color="gray" className="activity-subtitle">
          3 appointments this week
        </Typography>
      </Box>

      <ChartWrapper>
        {Object.entries(data).map(([day, bars]) => (
          <DayColumn key={day}>
            <BarGroup>
              {bars.map((bar, i) => (
                <Bar key={i} height={bar.height} color={bar.color} />
              ))}
            </BarGroup>
          </DayColumn>
        ))}
      </ChartWrapper>
      <Grid
        flex={1}
        container
        justifyContent="space-between"
        mt={2}
        pl={2}
        pr={2}
      >
        {day.map((dayName, index) => (
          <Box
            key={index}
            sx={{
              color: "#bbbec6",
              fontWeight: "500",
              marginTop: "10px",
              fontSize: "14px",
            }}
          >
            {dayName}
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default ActivityBars;
