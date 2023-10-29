"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typography } from "@mui/material";
export default function Sound() {
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
        width: "85%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        data-aos="fade-right"
        variant="h4"
        style={{ fontWeight: "bold" }}
      >
        Does this sound is familiar...
      </Typography>

      <div className="container">
        <img
          data-aos="fade-up-left"
          class="sound_farmer"
          style={{ width: "30%" }}
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTBvx0HPeFTSt9XnlmKcHIGBW7jNX_29-_DGng1u9aoPUekQ6jb"
        />
      </div>
    </div>
  );
}
