import React from "react";
import { Container, Typography, Button, CardMedia } from "@mui/material";

const Footer = () => {
  return (
    <footer style={{ padding: "30px 0" }}>
      <Container>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <CardMedia
            component="img"
            style={{
              width: "60px",
              height: "60px",
              margin: "0 auto",
              borderRadius: "10px",
            }}
            image="https://ih1.redbubble.net/image.973173403.2014/raf,360x360,075,t,fafafa:ca443f4786.jpg"
            alt="Logo"
          />
          <Typography
            style={{ fontWeight: "bold", margin: "10px" }}
            variant="h4"
            color="#6240f1"
          >
            ahead
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "auto",
            marginBottom: "20px",
            marginTop: "30px",
            width: "50%",
          }}
        >
          <Typography
            variant=""
            style={{ margin: "0 20px", fontWeight: "bold" }}
          >
            AugustStraദe 26, 10117 Berlin
          </Typography>
          <Typography
            variant="body2"
            style={{ margin: "0 20px", fontWeight: "bold" }}
          >
            hi@ahead-app.com
          </Typography>
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              padding: "12px 20px",
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
          <Typography
            style={{ marginTop: "40px", fontWeight: "bold" }}
            variant="body2"
            color="text.secondary"
          >
            &#9400; 2022 Ahead app. All rights reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
