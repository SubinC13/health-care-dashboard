import { Grid, IconButton, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "../../assets/icons/searchIcon.svg";
import NotificationIcon from "../../assets/icons/notificationIcon.svg";
import styles from "./styles";

const MainHeader = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      mb={3}
      mt={3}
      sx={styles?.searchBar}
    >
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search"
        value={""}
        onChange={() => {}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img
                src={SearchIcon}
                alt="Search Icon"
                style={{ width: 20, height: 20 }}
              />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => {}}>
                <img
                  src={NotificationIcon}
                  alt="Search Icon"
                  style={{ width: 20, height: 20 }}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default MainHeader;
