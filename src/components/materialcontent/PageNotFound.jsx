import { Typography } from "@mui/material";
import React from "react";

const PageNotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" color="cyan">
        PAGE NOT FOUND
      </Typography>
    </div>
  );
};

export default PageNotFound;
