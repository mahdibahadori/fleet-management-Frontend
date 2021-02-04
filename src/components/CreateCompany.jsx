import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  SubmitInput,
} from "./styles/Form";
import { LoggedOutNavbar } from "./LoggedOutNavbar";
import { Footer } from "./Footer";
import { useHistory } from 'react-router-dom'

export function CreateCompany() {
  let history = useHistory();
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [managerName, setManagerName] = useState("");
  const [abn, setAbn] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [website, setWebsite] = useState("");

  async function onFormSubmit(e) {
    try {
      e.preventDefault();
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/companies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"         
        },
        body: JSON.stringify({
          company: {
            company_name: companyName,
            email: email,
            manager_name: managerName,
            abn: abn,
            street_address: streetAddress,
            suburb: suburb,
            state: state,
            contact_number: contactNumber,
            website: website,
          },
        }),
      });
      // redirect_to
      history.push("/sign-up");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <div>
        <LoggedOutNavbar />
      </div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontFamily: "sans-serif",
          fontSize: "35px",
        }}
      >
        Create your comapny
      </h1>

      <Form onSubmit={onFormSubmit}>
        <FormGroup>
          <FormLabel htmlFor="CompanyName">Company Name</FormLabel>
          <FormInput
            type="text"
            name="CompanyName"
            id="CompanyName"
            placeholder="maicon co."
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="Email">Email</FormLabel>
          <FormInput
            type="Email"
            name="Email"
            id="Email"
            placeholder="maicon@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="ManagerName">Manager Name</FormLabel>
          <FormInput
            type="text"
            name="ManagerName"
            id="ManagerName"
            placeholder="Maicon Miranda"
            value={managerName}
            onChange={(e) => setManagerName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="ABN">ABN</FormLabel>
          <FormInput
            type="text"
            name="ABN"
            id="ABN"
            placeholder="1234567890"
            value={abn}
            onChange={(e) => setAbn(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="StreetAddress">Street Address</FormLabel>
          <FormInput
            type="text"
            name="StreetAddress"
            id="StreetAddress"
            placeholder="1 Spencer Street"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="Suburb">Suburb</FormLabel>
          <FormInput
            type="text"
            name="Suburb"
            id="Suburb"
            placeholder="Melbourne"
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="State">State</FormLabel>
          <FormInput
            type="text"
            name="State"
            id="State"
            placeholder="Victoria"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="ContactNumber">Contact Number</FormLabel>
          <FormInput
            type="text"
            name="ContactNumber"
            id="ContactNumber"
            placeholder="(+61) 111 111 111"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="Website">Website</FormLabel>
          <FormInput
            type="text"
            name="CWebsite"
            id="CWebsite"
            placeholder="https://www.maiconco.com.au"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </FormGroup>
        <SubmitInput
          id="submit"
          type="submit"
          value="Submit"
          style={{ width: "20%" }}
        />
      </Form>
      <Footer />
    </>
  );
}
