"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import "./Style/WorkWith.css";
export default function WorkWithUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: false,
      easing: "ease-out",
    });
  }, []);
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        backgroundColor: "#f3f1ff",
        display: "flex",
        padding: "30px",
        borderRadius: "25px",
      }}
    >
      <Container
        style={{
          textAlign: "start",
          padding: "60px",
          paddingLeft: "80px",
        }}
      >
        <Typography style={{ fontWeight: "bold" }} variant="h3">
          <Typography
            style={{ fontWeight: "bold" }}
            variant="h3"
            data-aos="fade-right"
          >
            Work with us
          </Typography>
          <Card
            style={{
              marginTop: "50px",
              borderRadius: "20px",
            }}
          >
            <div style={{ marginLeft: "30px", marginTop: "30px" }}>
              <img
                style={{ width: "10%" }}
                src="https://em-content.zobj.net/source/microsoft-teams/364/ghost_1f47b.png"
              />

              <Typography style={{ fontWeight: "bold" }} variant="h4">
                About
              </Typography>

              <Typography
                style={{ fontSize: "1.4rem", color: "grey", marginTop: "10px" }}
              >
                At ahead our goal is to make self- <br />
                improvement fun and lasting. We know there's <br /> a way how to
                make it work. And that's what <br />
                aHead is all about!
              </Typography>
            </div>
            <Card
              style={{
                marginTop: "50px",
                borderRadius: "20px",
                padding: "25px",
                backgroundColor: "#fef7f1",
              }}
            >
              <Typography style={{ fontWeight: "bold" }} variant="h4">
                Products
              </Typography>
              <Typography
                style={{ fontSize: "1.4rem", color: "grey", marginTop: "10px" }}
              >
                At ahead our goal is to make self- <br />
                improvement fun and lasting. We know there's <br /> a way how to
                make it work. And that's what <br />
                aHead is all about!
              </Typography>
            </Card>
          </Card>
        </Typography>
      </Container>
      <Container
        style={{
          textAlign: "end",
          padding: "60px",
          paddingRight: "100px",
        }}
      >
        <Typography
          style={{ fontWeight: "bold", color: "#6240f1" }}
          variant="h3"
          data-aos="fade-left"
        >
          ahead
        </Typography>

        <Box
          style={{
            marginTop: "50px",
          }}
        >
          <Container
            className="scrolling"
            style={{
              textAlign: "center",
              marginLeft: "100px",
              overflowY: "scroll",
              height: "550px",
            }}
          >
            <Card
              style={{
                padding: "10px",
                borderRadius: "15px",
                width: "70%",
                marginTop: "30px",
                textAlign: "start",
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <CardContent>
                <Typography
                  style={{ fontWeight: "600" }}
                  variant="p"
                  color="black"
                >
                  Power through, even when the <br />
                  going gets tough
                </Typography>

                <Typography
                  style={{ marginTop: "10px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  We help you spot and work around <br /> whatever stands in the
                  way, be it bad <br /> habits,fears,etc.
                </Typography>
              </CardContent>
            </Card>

            {/* ----- */}

            <Card
              style={{
                padding: "10px",
                borderRadius: "15px",
                width: "70%",
                marginTop: "30px",
                textAlign: "start",
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <CardContent>
                <Typography
                  style={{ fontWeight: "600" }}
                  variant="p"
                  color="black"
                >
                  Learn more about who you are <br /> and where you want go
                </Typography>

                <Typography
                  style={{ marginTop: "10px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  We ask the right questions to help you <br /> better
                  understand why you do things the <br /> why you do.
                </Typography>
              </CardContent>
            </Card>

            {/* ----- */}
            <Card
              style={{
                padding: "10px",
                borderRadius: "15px",
                width: "70%",
                marginTop: "30px",
                textAlign: "start",
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <CardContent>
                <Typography
                  style={{ fontWeight: "600" }}
                  variant="p"
                  color="black"
                >
                  Power through, even when the <br />
                  going gets tough
                </Typography>

                <Typography
                  style={{ marginTop: "10px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  We help you spot and work around <br /> whatever stands in the
                  way, be it bad <br /> habits,fears,etc.
                </Typography>
              </CardContent>
            </Card>

            {/* ----- */}

            <Card
              style={{
                padding: "10px",
                borderRadius: "15px",
                width: "70%",
                marginTop: "30px",
                textAlign: "start",
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <CardContent>
                <Typography
                  style={{ fontWeight: "600" }}
                  variant="p"
                  color="black"
                >
                  Learn more about who you are <br /> and where you want go
                </Typography>

                <Typography
                  style={{ marginTop: "10px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  We ask the right questions to help you <br /> better
                  understand why you do things the <br /> why you do.
                </Typography>
              </CardContent>
            </Card>

            <Card
              style={{
                padding: "10px",
                borderRadius: "15px",
                width: "70%",
                marginTop: "30px",
                textAlign: "start",
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <CardContent>
                <Typography
                  style={{ fontWeight: "600" }}
                  variant="p"
                  color="black"
                >
                  Power through, even when the <br />
                  going gets tough
                </Typography>

                <Typography
                  style={{ marginTop: "10px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  We help you spot and work around <br /> whatever stands in the
                  way, be it bad <br /> habits,fears,etc.
                </Typography>
              </CardContent>
            </Card>

            {/* ----- */}

            <Card
              style={{
                padding: "10px",
                borderRadius: "15px",
                width: "70%",
                marginTop: "30px",
                textAlign: "start",
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <CardContent>
                <Typography
                  style={{ fontWeight: "600" }}
                  variant="p"
                  color="black"
                >
                  Learn more about who you are <br /> and where you want go
                </Typography>

                <Typography
                  style={{ marginTop: "10px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  We ask the right questions to help you <br /> better
                  understand why you do things the <br /> why you do.
                </Typography>
              </CardContent>
            </Card>

            {/* -- */}
            <Card
              style={{
                padding: "10px",
                borderRadius: "15px",
                width: "70%",
                marginTop: "30px",
                textAlign: "start",
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <CardContent>
                <Typography
                  style={{ fontWeight: "600" }}
                  variant="p"
                  color="black"
                >
                  Power through, even when the <br />
                  going gets tough
                </Typography>

                <Typography
                  style={{ marginTop: "10px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  We help you spot and work around <br /> whatever stands in the
                  way, be it bad <br /> habits,fears,etc.
                </Typography>
              </CardContent>
            </Card>

            {/* ----- */}

            <Card
              style={{
                padding: "10px",
                borderRadius: "15px",
                width: "70%",
                marginTop: "30px",
                textAlign: "start",
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <CardContent>
                <Typography
                  style={{ fontWeight: "600" }}
                  variant="p"
                  color="black"
                >
                  Learn more about who you are <br /> and where you want go
                </Typography>

                <Typography
                  style={{ marginTop: "10px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  We ask the right questions to help you <br /> better
                  understand why you do things the <br /> why you do.
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </Box>
      </Container>
    </div>
  );
}
