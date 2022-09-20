import { Pagination } from "@mui/material";
import React from "react";

const Custompagination = (page, pagecount = 10) => {
  const handler = () => {
    setpage(page);
    window.scroll(0, 0);
  };
  return (
    <div>
      <Pagination
        count={pagecount}
        onChange={(e) => handler(e.target.textcontent)}
      />
      Custompagination
    </div>
  );
};

export default Custompagination;
