import React, { useState } from "react";
import {Form, FormGroup, FormLabel, FormInput, SubmitInput, MainContent} from "./styles/Form"
import {LoggedInNavBar} from './LoggedInNavBar'
import {SideNavBars} from './SideNavBars'
import {CompanyPage, Section} from './styles/App'
import {Footer} from './Footer'

export function EditCompany() {    
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
    return(
    <>
      
      <CompanyPage>
        <SideNavBars />
        <Section>
            <LoggedInNavBar />
        <MainContent>
      <h1 style={{textAlign: "center", marginTop:'30px', fontFamily:"sans-serif", fontSize:"35px"}}>Update your company details</h1>
      {/* {errMessage && <span>{errMessage}</span>} */}
      <Form>
        <FormGroup>
          <FormLabel htmlFor="CompanyName">Company Name</FormLabel>
          <FormInput
            type="text"
            name="CompanyName"
            id="CompanyName"
            placeholder="maicon co."
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="Email">Email</FormLabel>
          <FormInput
            type="Email"
            name="Email"
            id="Email"
            placeholder="maicon@email.com"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="ManagerName">Manager Name</FormLabel>
          <FormInput
            type="text"
            name="ManagerName"
            id="ManagerName"
            placeholder="Maicon Miranda"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="ABN">ABN</FormLabel>
          <FormInput
            type="text"
            name="ABN"
            id="ABN"
            placeholder="1234567890"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="StreetAddress">Street Address</FormLabel>
          <FormInput
            type="text"
            name="StreetAddress"
            id="StreetAddress"
            placeholder="1 Spencer Street"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="Suburb">Suburb</FormLabel>
          <FormInput
            type="text"
            name="Suburb"
            id="Suburb"
            placeholder="Melbourne"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>        
        <FormGroup>
          <FormLabel htmlFor="State">State</FormLabel>
          <FormInput
            type="text"
            name="State"
            id="State"
            placeholder="Victoria"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="ContactNumber">Contact Number</FormLabel>
          <FormInput
            type="text"
            name="ContactNumber"
            id="ContactNumber"
            placeholder="(+61) 111 111 111"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="Website">Website</FormLabel>
          <FormInput
            type="text"
            name="CWebsite"
            id="CWebsite"
            placeholder="https://www.maiconco.com.au"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <SubmitInput id="submit" type="submit" value="Submit Changes" />
      </Form>
      </MainContent>
      </Section>         
        </CompanyPage>      
      <Footer />
    </>
    )
    
}