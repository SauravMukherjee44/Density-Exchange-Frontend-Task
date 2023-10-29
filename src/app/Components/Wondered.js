"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typography, Container } from "@mui/material";
import "./Style/Wondered.css";
export default function Wondered() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      mirror: false,
      easing: "ease-out",
    });
  }, []);
  return (
    <div
      style={{
        margin: "80px auto",
        width: "90%",
        borderRadius: "20px",
        height: "100%",
        backgroundColor: "#edf8fe",
        padding: "20px",
      }}
    >
      <Container
        style={{
          marginTop: "40px",
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          Let your friends, family and co-workers (anonymously) rate your social
          skill.
        </Typography>
        <Typography variant="h3" sx={{ marginTop: "20px", fontWeight: "bold" }}>
          Every wondered what others think of you?
        </Typography>
      </Container>

      {/* ------ */}
      <Container
        style={{
          marginTop: "70px",
          textAlign: "center",
        }}
      >
        <div class="timeliner">
          <div class="timeliner-item">
            <div class="timeliner-content" data-aos="zoom-in">
              <img src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-4/256/Number-1-icon.png" />

              <p>Answer question on your social skills</p>
            </div>
          </div>
          <div class="timeliner-item">
            <div class="timeliner-content" data-aos="zoom-in">
              <img src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-4/256/Number-2-icon.png" />

              <p>Let others anonymously answer the same question about you</p>
            </div>
          </div>
          <div class="timeliner-item">
            <div class="timeliner-content" data-aos="zoom-in">
              <img src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-4/256/Number-3-icon.png" />

              <p>
                Find out where you and others see things the same way - and
                where not!
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* ------ */}

      <Container
        style={{
          marginTop: "40px",
          textAlign: "center",
        }}
      >
        <img
          data-aos="zoom-out"
          class="big_img"
          src="https://user-images.githubusercontent.com/106812942/261799919-c150e998-1375-47c9-bf26-b11278fa0965.jpg"
        />
      </Container>
    </div>
  );
}

// https://img.lovepik.com/free-png/20210926/lovepik-little-sun-yellow-cartoon-sun-png-image_401409914_wh1200.png
