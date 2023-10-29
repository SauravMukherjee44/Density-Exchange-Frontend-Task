import React from "react";
import { Typography, Box, Grid } from "@mui/material";

export default function EqBeast() {
  return (
    <div
      style={{
        marginBottom: "24px",
        width: "90%",
        margin: "55px auto",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        gap: "25px",
        flexWrap: "wrap",
      }}
    >
      <Box
        elevation={3}
        style={{
          flex: "1",
          marginBottom: "16px",
          padding: "20px",

          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" style={{ fontWeight: "bold" }} component="div">
          Be the best you <br /> with EQ
        </Typography>
      </Box>

      <Box
        elevation={3}
        style={{
          flex: "1",
          marginBottom: "16px",
          padding: "20px",

          backgroundColor: "white",
        }}
      >
        <Typography variant="h5">
          Not having your own emotions <br /> under control might be holding
          <br /> you back.
        </Typography>
      </Box>

      <Box
        elevation={3}
        style={{
          flex: "1",
          marginBottom: "16px",
          padding: "20px",
          backgroundColor: "white",
        }}
      >
        <Typography variant="h5">
          Addinationally, not understanding
          <br /> those of others stops you from <br /> beign parent, friend you
          can be.
        </Typography>
      </Box>
    </div>
  );
}
