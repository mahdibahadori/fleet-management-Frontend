import React, { useState } from "react";
import {
  Form1,
  FormGroup1,
  FormLabel,
  FormInput,
  SubmitInput1,
} from "./styles/Form";
import { CompanyPage, Section } from "./styles/App";
import { MainContent } from "./styles/Form";
import { LoggedInNavBar } from "./LoggedInNavBar";
import { SideNavBars } from "./SideNavBars";
import { Footer } from "./Footer";

export function EditVehicle() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errMessage, setErrMessage] = useState("");

  // async function onFormSubmit(event) {
  //   event.preventDefault();
  //   const body = {
  //     auth: { email, password },
  //   };
  //   try {
  //     const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     });
  //     if (response.status >= 400) {
  //       throw new Error("incorrect credentials");
  //     } else {
  //       const { jwt } = await response.json();
  //       localStorage.setItem("token", jwt);
  //       history.push("/subscriptions");
  //     }
  //   } catch (err) {
  //     setErrMessage(err.message);
  //   }
  // }
  return (
    <>
      <CompanyPage>
        <SideNavBars />
        <Section>
          <LoggedInNavBar />
          <MainContent>
            <hr style={{ width: "95%", opacity:'.4'}} />
            <h1
              style={{
                textAlign: "center",
                marginTop: "30px",
                fontFamily: "sans-serif",
                fontSize: "35px",
              }}
            >
              Edit Vehicle
            </h1>
            {/* {errMessage && <span>{errMessage}</span>} */}
            <Form1>
              <FormGroup1>
                <FormLabel htmlFor="FleetNumber">Fleet Number</FormLabel>
                <FormInput
                  type="text"
                  name="FleetNumber"
                  id="FleetNumber"
                  placeholder="1"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup1>
              <FormGroup1>
                <FormLabel htmlFor="Make">Make</FormLabel>
                <FormInput
                  type="text"
                  name="Make"
                  id="Make"
                  placeholder="Toyota"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup1>
              <FormGroup1>
                <FormLabel htmlFor="Model">Model</FormLabel>
                <FormInput
                  type="text"
                  name="Model"
                  id="Model"
                  placeholder="Corola"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup1>
              <FormGroup1>
                <FormLabel htmlFor="Year">Year</FormLabel>
                <FormInput
                  type="text"
                  name="Year"
                  id="Year"
                  placeholder="2010"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup1>
              <FormGroup1>
                <FormLabel htmlFor="Color">Color</FormLabel>
                <FormInput
                  type="text"
                  name="Color"
                  id="Color"
                  placeholder="White"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup1>
              <FormGroup1>
                <FormLabel htmlFor="Rego">Rego</FormLabel>
                <FormInput
                  type="text"
                  name="Rego"
                  id="Rego"
                  placeholder="1AB 2CD"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup1>
              <FormGroup1>
                <FormLabel htmlFor="RegoExpiryDate">Rego Expiry Date</FormLabel>
                <FormInput
                  type="date"
                  name="RegoExpiryDate"
                  id="RegoExpiryDate"
                  placeholder="01-03-2021"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup1>
              <FormGroup1>
                <FormLabel htmlFor="RegistrationCost">
                  Registration Cost
                </FormLabel>
                <FormInput
                  type="text"
                  name="RegistrationCost"
                  id="RegistrationCost"
                  placeholder="$300"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup1>
              <FormGroup1>
                <FormLabel htmlFor="InsuranceProvider">
                  Insurance Provider
                </FormLabel>
                <FormInput
                  type="text"
                  name="InsuranceProvider"
                  id="InsuranceProvider"
                  placeholder="Alianz"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup1>
              <FormGroup1>
                <FormLabel htmlFor="InsurancePolicyNumber">
                  Insurance Policy Number
                </FormLabel>
                <FormInput
                  type="text"
                  name="InsurancePolicyNumber"
                  id="InsurancePolicyNumber"
                  placeholder="1ABC2DEF3GHI"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup1>
              <FormGroup1>
                <FormLabel htmlFor="InsuranceExpiryDate">
                  Insurance Expiry Date
                </FormLabel>
                <FormInput
                  type="date"
                  name="InsuranceExpiryDate"
                  id="InsuranceExpiryDate"
                  placeholder="31/12/2021"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup1>
              <FormGroup1>
                <FormLabel htmlFor="InsuranceCost">Insurance Cost</FormLabel>
                <FormInput
                  type="text"
                  name="InsuranceCost"
                  id="InsuranceCost"
                  placeholder="$1200"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup1>
              <SubmitInput1 id="submit" type="submit" value="Submit Changes" />
            </Form1>
          </MainContent>
        </Section>
      </CompanyPage>
      <Footer />
    </>
  );
}
