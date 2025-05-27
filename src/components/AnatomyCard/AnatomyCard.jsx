import { Box, Grid, useMediaQuery } from "@mui/material";
import muscularSystemImg from "../../assets/images/MuscularSystem.png";
import Scanner from "../../assets/icons/scanner.svg";
import ZoomInRoundedIcon from "@mui/icons-material/ZoomInRounded";
import "./styles.css";

const AnatomyCard = () => {
  const isMobile = useMediaQuery("(max-width:1070px)");
  return (
    <Grid>
      <div className="anatomy-container">
        <img src={muscularSystemImg} alt="Anatomy" className="anatomy-image" />

        <div className="zoom-icon">
          <ZoomInRoundedIcon />
        </div>

        {!isMobile && (
          <div className="label heart-label">
            <div>
              <img src={Scanner} alt="Heart Scanner" width={40} height={40} />
            </div>
            <div className="icon red heart-icon">
              <Box>❤️&nbsp;&nbsp;&nbsp;Healthly Heart</Box>
            </div>
          </div>
        )}

        {!isMobile && (
          <div className="label leg-label">
            <div className="leg-lable-icon">
              <Box>🦵&nbsp;&nbsp;&nbsp;Healthly Leg</Box>
            </div>
            <div>
              <img src={Scanner} alt="Heart Scanner" width={40} height={40} />
            </div>
          </div>
        )}
      </div>
    </Grid>
  );
};

export default AnatomyCard;
