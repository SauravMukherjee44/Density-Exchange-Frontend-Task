"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typography } from "@mui/material";
import "./Style/SelfImprove.css";
export default function SelfImprove() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      mirror: false,
      easing: "ease-out",
    });
  }, []);
  return (
    <div
      style={{
        width: "85%",
        margin: "120px auto",
        padding: "30px",
      }}
    >
      <Typography style={{ fontSize: "1.6rem" }} data-aos="fade-right">
        Wrong with self-improvement & how we're fixing it.
      </Typography>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "5px",
          marginBottom: "25px",
        }}
      >
        <Typography
          style={{ fontSize: "3.8rem", fontWeight: "bold" }}
          data-aos="fade-right"
        >
          Self-improvement. Ugh.
        </Typography>

        <div className="container">
          <img
            data-aos="fade-left"
            class="sound_farmer"
            style={{ width: "30%" }}
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTBvx0HPeFTSt9XnlmKcHIGBW7jNX_29-_DGng1u9aoPUekQ6jb"
          />
        </div>
      </div>
      {/* -----Timeline----- */}

      <div class="parent_container">
        <div class="main-container">
          <section id="timeline" class="timeline-outer">
            <div class="container" id="content">
              <div class="row">
                <div class="col s12 m12 l12">
                  <ul class="timeline">
                    <li
                      class="event"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <h3>It is not as easy as 1-2-3</h3>
                      <p>
                        The journey of change may be long, but our session are
                        quick. We get <br />
                        to the point and tell you what you want to know (and
                        nothing else).
                      </p>
                    </li>
                    <li
                      class="event"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <h3>Old habits are harf to break</h3>
                      <p>
                        And bad behaviors die hard Fortunately, we give great,
                        science- <br />
                        backed techniques to use.
                      </p>
                    </li>
                    <li
                      class="event"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <h3>
                        You and your motivation don't have a long <br />
                        term relationship.
                      </h3>
                      <p>
                        Luckly, we can proactively prepare you for the
                        marathone, not just the <br />
                        reace. effective, memorable exerciseswill help you stick
                        goals.
                      </p>
                    </li>
                    <li
                      class="event"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <h3>Book just don't offer practical solutions</h3>
                      <p>
                        This is a small startup that a friend and I created to
                        gain more skills and apply those I had learned while
                        completing my diploma. Since it
                      </p>
                    </li>
                    <li
                      class="event"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <h3>
                        You and your motivation don't have a long <br />
                        term relationship.
                      </h3>
                      <p>
                        Luckly, we can proactively prepare you for the
                        marathone, not just the <br />
                        reace. effective, memorable exerciseswill help you stick
                        goals.
                      </p>
                    </li>
                    <li
                      class="event"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <h3>It is not as easy as 1-2-3</h3>
                      <p>
                        The journey of change may be long, but our session are
                        quick. We get <br />
                        to the point and tell you what you want to know (and
                        nothing else).
                      </p>
                    </li>
                    <li
                      class="event"
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <h3>Old habits are harf to break</h3>
                      <p>
                        And bad behaviors die hard Fortunately, we give great,
                        science- <br />
                        backed techniques to use.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <br />
        </div>
      </div>
    </div>
  );
}
