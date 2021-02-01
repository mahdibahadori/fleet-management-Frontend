import {
  FleetDiv,
  Card,
  CardContent,
  CardLink,
  CardLinks,
  CompanyPage,
  Section,
} from "./styles/App";
import { LoggedInNavBar } from "./LoggedInNavBar";
import { SideNavBars } from "./SideNavBars";
import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  SubmitInput,
  MainContent,
} from "./styles/Form";
import { Link } from "react-router-dom";

export function ViewFleet() {
  return (
    <>
      <CompanyPage>
        <SideNavBars />
        <Section>
          <LoggedInNavBar />
          <MainContent>
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
                <CardContent>Fleet No:1</CardContent>
                <CardContent>Make: </CardContent>
                <CardContent>Model: </CardContent>
                <CardContent>Year: </CardContent>
                <CardContent>Color: </CardContent>
                <CardContent>Rego: </CardContent>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "green",
                      width: "120px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardLink to="./ViewVehicle">View</CardLink>
                  </button>
                  
                </CardLinks>
              </Card>
              <Card>
                <CardContent>Fleet No:2</CardContent>
                <CardContent>Make: </CardContent>
                <CardContent>Model: </CardContent>
                <CardContent>Year: </CardContent>
                <CardContent>Color: </CardContent>
                <CardContent>Rego: </CardContent>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "green",
                      width: "120px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardLink to="./ViewVehicle">View</CardLink>
                  </button>
                  
                </CardLinks>
              </Card>
              <Card>
                <CardContent>Fleet No:3</CardContent>
                <CardContent>Make: </CardContent>
                <CardContent>Model: </CardContent>
                <CardContent>Year: </CardContent>
                <CardContent>Color: </CardContent>
                <CardContent>Rego: </CardContent>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "green",
                      width: "120px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardLink to="./ViewVehicle">View</CardLink>
                  </button>
                  
                </CardLinks>
              </Card>
              <Card>
                <CardContent>Fleet No:4</CardContent>
                <CardContent>Make: </CardContent>
                <CardContent>Model: </CardContent>
                <CardContent>Year: </CardContent>
                <CardContent>Color: </CardContent>
                <CardContent>Rego: </CardContent>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "green",
                      width: "120px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardLink to="./ViewVehicle">View</CardLink>
                  </button>
                  
                </CardLinks>
              </Card>
              <Card>
                <CardContent>Fleet No:5</CardContent>
                <CardContent>Make: </CardContent>
                <CardContent>Model: </CardContent>
                <CardContent>Year: </CardContent>
                <CardContent>Color: </CardContent>
                <CardContent>Rego: </CardContent>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "green",
                      width: "120px",
                      borderRadius: "10px",
                    }}
                  >
                    <CardLink to="./ViewVehicle">View</CardLink>
                  </button>
                  
                </CardLinks>
              </Card>
              <Card>
                <CardContent>Fleet No:6</CardContent>
                <CardContent>Make: </CardContent>
                <CardContent>Model: </CardContent>
                <CardContent>Year: </CardContent>
                <CardContent>Color: </CardContent>
                <CardContent>Rego: </CardContent>
                <CardLinks>
                  <button
                    style={{
                      backgroundColor: "green",
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
