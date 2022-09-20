import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        mode: "dark",
      },
    })
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movie");
    else if (value === 2) navigate("/tvseries");
    else if (value === 3) navigate("/search");
  }, [value, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#2d313a",
          position: "fixed",
          bottom: 0,
          zIndex: 100,
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Trending"
            icon={<WhatshotIcon />}
          />
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Movie"
            icon={<MovieIcon />}
          />
          <BottomNavigationAction
            style={{ color: "white" }}
            label="TvSeries"
            icon={<TvIcon />}
          />

          <BottomNavigationAction
            style={{ color: "white" }}
            label="Search"
            icon={<SearchIcon />}
          />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}
