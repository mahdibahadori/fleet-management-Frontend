import React, { useState, useEffect } from "react";
import { LoggedOutNavbar } from "./LoggedOutNavbar";
import {
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  SubmitInput,
  FormSelect,
} from "./styles/Form";
import { Footer } from "./Footer";
import { useHistory } from "react-router-dom";

export function SignUp() {
  const history = useHistory();
  const [companies, setCompanies] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [driverLicenseNumber, setDriverLicenseNumber] = useState("");
  const [driverLicenseExpiry, setDriverLicenseExpiry] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState(null);
  const [driverId, setDriverId] = useState("");

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/companies`);
    const companies = await data.json();
    setCompanies(companies);
    console.log(companies);
  };

  function companyFinder(e) {
    setCompanyId(e.target.id);
  }

  async function onFormSubmit(event) {
    event.preventDefault();
    console.log(companyId);

    try {      

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/sign-up`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              email: email,
              password: password,
              user_name: userName,
              driver_license_number: driverLicenseNumber,
              driver_license_expiry: driverLicenseExpiry,
              company_name: companyName, // console.log(companyId)
              driver_id: driverId,
              company_id: companyId,
            },
          }),
        }
      );

      console.log(response);
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        history.push("/login");
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <LoggedOutNavbar />
      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontFamily: "sans-serif",
          fontSize: "35px",
        }}
      >
        Create an account
      </h1>
      <Form onSubmit={onFormSubmit}>
        <FormGroup>
          <FormLabel htmlFor="userName">Username</FormLabel>
          <FormInput
            type="text"
            name="userName"
            id="userName"
            placeholder="John Smith"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="driverLicenseNumber">
            Driver License Number
          </FormLabel>
          <FormInput
            type="text"
            name="driverLicenseNumber"
            id="driverLicenseNumber"
            placeholder="040 000 000"
            value={driverLicenseNumber}
            onChange={(e) => setDriverLicenseNumber(e.target.value)}
          />
        </FormGroup>
        <FormGroup>          
          <FormLabel htmlFor="driverLicenseExpiry">
            Driver License Expiry
          </FormLabel>
          <FormInput
            type="date"
            name="driverLicenseExpiry"
            id="driverLicenseExpiry"
            placeholder="1212121212"
            value={driverLicenseExpiry}
            onChange={(e) => setDriverLicenseExpiry(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            type="text"
            name="email"
            id="email"
            placeholder="maicon@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="passwordDigest">Password</FormLabel>
          <FormInput
            type="password"
            name="passwordDigest"
            id="passwordDigest"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="driverId">Driver ID</FormLabel>
          <FormInput
            type="text"
            name="driverId"
            id="driverId"
            placeholder="111-11-1111"
            value={driverId}
            onChange={(e) => setDriverId(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="companyName">Company Name</FormLabel>
          <FormSelect
            name="company"
            id="companyName"
            value={companyName}
            onChange={(e) => {
              const index = e.target.selectedIndex;
              const optionElement = e.target.childNodes[index];
              const id = optionElement.getAttribute("id");

              setCompanyName(e.target.value);
              setCompanyId(id);
            }}
          >
            {companies.map((company) => {
              return (
                <option
                  key={company.id}
                  value={company.company_name}
                  id={company.id}
                >
                  {company.company_name}
                </option>
              );
            })}
          </FormSelect>
        </FormGroup>

        <SubmitInput id="submit" type="submit" value="Submit" />
      </Form>
      <Footer />
    </>
  );
}
