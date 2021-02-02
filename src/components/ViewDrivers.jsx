import {
  FleetDiv,
  Card5,
  CardContent1,
  CardLink,
  CardLinks,
  CompanyPage,
  Section,
} from "./styles/App";
import { LoggedInNavBar } from "./LoggedInNavBar";
import { SideNavBars } from "./SideNavBars";
import React, { useState } from "react";
import { MainContent } from "./styles/Form";
import { Footer } from "./Footer";

export function ViewDrivers() {
  return (
    <>
      <CompanyPage>
        <SideNavBars />
        <Section>
          <LoggedInNavBar />
          <MainContent>
            <hr style={{ width: "95%", opacity: ".4" }} />
            <h1
              style={{
                textAlign: "center",
                marginTop: "30px",
                fontFamily: "sans-serif",
                fontSize: "35px",
              }}
            >
              View Drivers
            </h1>
            <FleetDiv>
              <Card5>
                <CardContent1>Name:</CardContent1>
                <CardContent1>Email:</CardContent1>
                <CardContent1>Contact Number: </CardContent1>
                <CardContent1>License Number:</CardContent1>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "orange",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DeleteDriver">Remove</CardLink>
                  </button>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DriverTracks">Tracks</CardLink>
                  </button>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DriverReports">Reports</CardLink>
                  </button>
                </CardLinks>
              </Card5>
              <Card5>
                <CardContent1>Name:</CardContent1>
                <CardContent1>Email:</CardContent1>
                <CardContent1>Contact Number: </CardContent1>
                <CardContent1>License Number:</CardContent1>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "orange",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DeleteDriver">Remove</CardLink>
                  </button>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DriverTracks">Tracks</CardLink>
                  </button>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DriverReports">Reports</CardLink>
                  </button>
                </CardLinks>
              </Card5>
              <Card5>
                <CardContent1>Name:</CardContent1>
                <CardContent1>Email:</CardContent1>
                <CardContent1>Contact Number: </CardContent1>
                <CardContent1>License Number:</CardContent1>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "orange",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DeleteDriver">Remove</CardLink>
                  </button>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DriverTracks">Tracks</CardLink>
                  </button>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DriverReports">Reports</CardLink>
                  </button>
                </CardLinks>
              </Card5>
              <Card5>
                <CardContent1>Name:</CardContent1>
                <CardContent1>Email:</CardContent1>
                <CardContent1>Contact Number: </CardContent1>
                <CardContent1>License Number:</CardContent1>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "orange",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DeleteDriver">Remove</CardLink>
                  </button>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DriverTracks">Tracks</CardLink>
                  </button>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DriverReports">Reports</CardLink>
                  </button>
                </CardLinks>
              </Card5>
              <Card5>
                <CardContent1>Name:</CardContent1>
                <CardContent1>Email:</CardContent1>
                <CardContent1>Contact Number: </CardContent1>
                <CardContent1>License Number:</CardContent1>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "orange",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DeleteDriver">Remove</CardLink>
                  </button>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DriverTracks">Tracks</CardLink>
                  </button>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DriverReports">Reports</CardLink>
                  </button>
                </CardLinks>
              </Card5>
              <Card5>
                <CardContent1>Name:</CardContent1>
                <CardContent1>Email:</CardContent1>
                <CardContent1>Contact Number: </CardContent1>
                <CardContent1>License Number:</CardContent1>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "orange",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DeleteDriver">Remove</CardLink>
                  </button>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DriverTracks">Tracks</CardLink>
                  </button>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                      height: "50px",
                    }}
                  >
                    <CardLink to="./DriverReports">Reports</CardLink>
                  </button>
                </CardLinks>
              </Card5>
            </FleetDiv>
          </MainContent>
        </Section>
      </CompanyPage>
      <Footer />
    </>
  );
}
