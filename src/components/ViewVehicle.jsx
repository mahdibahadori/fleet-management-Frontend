import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { MainContent } from "./styles/Form";
import { LoggedInNavBar } from "./LoggedInNavBar";
import { SideNavBars } from "./SideNavBars";
import {
  CompanyPage,
  Section,
  MainDiv,
  Div1,
  Div2,
  Div3,
  Div4,
  Div5,
  Div6,
  DivText,
} from "./styles/App";
import { Footer } from "./Footer";

export function ViewVehicle() {
  return (
    <>
      <CompanyPage>
        <SideNavBars />
        <Section>
          <LoggedInNavBar />
          <MainContent>
            <MainDiv>
              <Div1>
                <DivText>Fleet No: 1</DivText>
              </Div1>
              <Div2>
                <DivText>Make:</DivText>
                <DivText>Model:</DivText>
                <DivText>Year:</DivText>
                <DivText>Color:</DivText>
              </Div2>
              <Div3>
                <DivText>Rego:</DivText>
                <DivText>Rego Expiry Date:</DivText>
                <DivText>Registration Cost:</DivText>
              </Div3>
              <Div4>
                <DivText>Insurance Provider:</DivText>
                <DivText>Insurance Policy Number:</DivText>
              </Div4>
              <Div5>
                <DivText>Insurance Expiry date:</DivText>
                <DivText>Insurance Cost:</DivText>
              </Div5>
              <Div6>
                <button style={{width:'200px', backgroundColor: "lightgreen", borderRadius: "10px", padding: "20px"}}>
                  <Link to="/EditVehicle" style={{ textDecoration: "none", fontSize:'20px', color:'white'  }}>
                    Edit
                  </Link>
                </button>
                <button style={{width:'200px', backgroundColor: "orange", borderRadius: "10px", padding: "20px"}}>
                  <Link to="/DeleteVehicle" style={{ textDecoration: "none", fontSize:'20px', color:'white'}}>
                    Delete
                  </Link>
                </button>
                <button style={{width:'200px', backgroundColor: "purple", borderRadius: "10px", padding: "20px"}}>
                  <Link to="/VehicleReports" style={{ textDecoration: "none",  fontSize:'20px', color:'white'  }}>
                    Reports
                  </Link>
                </button>
              </Div6>
            </MainDiv>
          </MainContent>
        </Section>
      </CompanyPage>
      <Footer />
    </>
  );
}
