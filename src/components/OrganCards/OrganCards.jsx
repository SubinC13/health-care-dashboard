import {
  Grid,
  Avatar,
  Typography,
  LinearProgress,
} from "@mui/material";
import "./styles.css";

const OrganCards = ({ organData }) => (
  <Grid
    container
    direction="column"
    spacing={2}
    className="organ-cards-container"
  >
    {organData.map((organ) => (
      <Grid container className="organ-card" key={organ.id}>
        <Grid item size={2}>
          <Avatar className="organ-avatar">{organ.icon}</Avatar>
        </Grid>
        <Grid item size={10} pl={2} alignItems={"center"} display="flex">
          <Typography variant="subtitle1" className="organ-text">
            {organ.name}
          </Typography>
        </Grid>
        <Grid item size={12}>
          <Typography
            variant="caption"
            color="text.secondary"
            className="organ-date"
          >
            Date: {organ.date}
          </Typography>
        </Grid>
        <Grid item size={12}>
          <LinearProgress
            variant="determinate"
            value={organ.progress}
            color={organ.color}
            sx={{
              height: "8px",
              borderRadius: "10px",
              backgroundColor: "#e0e3ec",
              "& .MuiLinearProgress-bar": {
                borderRadius: "10px",
              },
            }}
          />
        </Grid>
      </Grid>
    ))}
  </Grid>
);

export default OrganCards;
