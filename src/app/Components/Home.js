"use client";
import { useEffect } from "react";
import { Box, Container, Typography, Rating, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
const MasterSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: false,
      easing: "ease-out",
    });
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: "#eeebfe",
        py: 4,
        borderRadius: "25px",
        overflow: "hidden",
        width: "98%",
        margin: "20px auto",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ flex: 1, pr: 4 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Ahead app
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 6 }}>
            Master your life <br /> by mastering emotions
          </Typography>

          <Container>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "80%",
                marginLeft: "-20px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  "&:hover": {
                    backgroundColor: "rgb(28, 26, 27)",
                  },
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="https://via.placeholder.com/30"
                    alt="App Store Logo"
                    style={{ marginRight: "10px" }}
                  />

                  <div>
                    <Typography
                      variant="body2"
                      sx={{ color: "white", fontSize: "9px" }}
                    >
                      Download on the
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "white", fontWeight: "bold" }}
                    >
                      App Store
                    </Typography>
                  </div>
                </div>
              </Button>

              <div>
                <Rating name="read-only" value={5} readOnly />
                <Typography component="legend">
                  100+ AppStore reviews
                </Typography>
              </div>
            </div>
          </Container>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img
            data-aos="zoom-in-left"
            src="https://user-images.githubusercontent.com/106812942/261672149-46c88edb-2c33-4c46-a8c2-d8cc9c4db67f.png"
            alt="iPhone"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MasterSection;
