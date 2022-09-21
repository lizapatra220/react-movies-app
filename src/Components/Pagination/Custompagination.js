import { createTheme, Pagination, ThemeProvider } from "@mui/material";
import React from "react";
const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

const Custompagination = ({ setpage, pagecount = 10 }) => {
  const handler = (page) => {
    setpage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={pagecount}
          variant="outlined"
          color="primary"
          hideNextButton
          hidePrevButton
          onChange={(e) => handler(e.target.textContent)}
        />
      </ThemeProvider>
    </div>
  );
};

export default Custompagination;
