import {
  FleetDiv,
  Card,
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

export function ViewFleet() {
  return (
    <>
      <CompanyPage>
        <SideNavBars />
        <Section>
          <LoggedInNavBar />
          <MainContent>
            <hr style={{ width: "95%" }} />
            <h1
              style={{
                textAlign: "center",
                marginTop: "30px",
                fontFamily: "sans-serif",
                fontSize: "35px",
              }}
            >
              View Fleet
            </h1>
            <FleetDiv>
              <Card>
                <CardContent1>Fleet No:1</CardContent1>
                <CardContent1>Make: </CardContent1>
                <CardContent1>Model: </CardContent1>
                <CardContent1>Year: </CardContent1>
                <CardContent1>Color: </CardContent1>
                <CardContent1>Rego: </CardContent1>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardLink to="./ViewVehicle">View</CardLink>
                  </button>
                </CardLinks>
              </Card>
              <Card>
                <CardContent1>Fleet No:2</CardContent1>
                <CardContent1>Make: </CardContent1>
                <CardContent1>Model: </CardContent1>
                <CardContent1>Year: </CardContent1>
                <CardContent1>Color: </CardContent1>
                <CardContent1>Rego: </CardContent1>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardLink to="./ViewVehicle">View</CardLink>
                  </button>
                </CardLinks>
              </Card>
              <Card>
                <CardContent1>Fleet No:3</CardContent1>
                <CardContent1>Make: </CardContent1>
                <CardContent1>Model: </CardContent1>
                <CardContent1>Year: </CardContent1>
                <CardContent1>Color: </CardContent1>
                <CardContent1>Rego: </CardContent1>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardLink to="./ViewVehicle">View</CardLink>
                  </button>
                </CardLinks>
              </Card>
              <Card>
                <CardContent1>Fleet No:4</CardContent1>
                <CardContent1>Make: </CardContent1>
                <CardContent1>Model: </CardContent1>
                <CardContent1>Year: </CardContent1>
                <CardContent1>Color: </CardContent1>
                <CardContent1>Rego: </CardContent1>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardLink to="./ViewVehicle">View</CardLink>
                  </button>
                </CardLinks>
              </Card>
              <Card>
                <CardContent1>Fleet No:5</CardContent1>
                <CardContent1>Make: </CardContent1>
                <CardContent1>Model: </CardContent1>
                <CardContent1>Year: </CardContent1>
                <CardContent1>Color: </CardContent1>
                <CardContent1>Rego: </CardContent1>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardLink to="./ViewVehicle">View</CardLink>
                  </button>
                </CardLinks>
              </Card>
              <Card>
                <CardContent1>Fleet No:6</CardContent1>
                <CardContent1>Make: </CardContent1>
                <CardContent1>Model: </CardContent1>
                <CardContent1>Year: </CardContent1>
                <CardContent1>Color: </CardContent1>
                <CardContent1>Rego: </CardContent1>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      width: "120px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardLink to="./ViewVehicle">View</CardLink>
                  </button>
                </CardLinks>
              </Card>
            </FleetDiv>
          </MainContent>
        </Section>
      </CompanyPage>
    </>
  );
}
