"use client";
import { useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
const wordsData = [
  {
    emoji: "😊",
    definition: "You argue with  a colleague",
    dis: "It is a long established fact that a reader will be distracted by the readable content of a page. ",
    bg: "#d8f2ff",
    co: "black",
  },
  {
    emoji: "🤨",
    definition: "You get promaotion at your work",
    dis: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered .",
    bg: "#eeebfe",
    co: "black",
  },
  {
    emoji: "😣",
    definition: "You argue with  a colleague",
    dis: "It is a long established fact that a reader will be distracted by the readable content of a page. ",
    bg: "#6341ef",
    co: "white",
  },
  {
    emoji: "🙄",
    definition: "You attend a class with partner",
    dis: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered .",
    bg: "#ffefd5",
    co: "black",
  },
];
export default function SmallCard() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      mirror: false,
      easing: "ease-out",
    });
  }, []);
  return (
    <div
      data-aos="fade-left"
      style={{
        width: "95%",
        margin: "50px auto",
        overflowX: "auto",
      }}
    >
      <Grid container spacing={4}>
        {wordsData.map((wordData, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              style={{
                padding: "15px",
                borderRadius: "15px",
                backgroundColor: wordData.bg,
              }}
            >
              <CardContent>
                <Typography
                  style={{ marginBottom: "5px" }}
                  variant="h4"
                  component="div"
                >
                  {wordData.emoji}
                </Typography>
                <Typography
                  style={{ fontWeight: "600", color: wordData.co }}
                  variant="p"
                  color="black"
                >
                  {wordData.definition}
                </Typography>

                <Typography
                  style={{ marginTop: "10px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {wordData.dis}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
