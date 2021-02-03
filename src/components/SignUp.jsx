import React, { useState } from "react";
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

export function SignUp({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [userName, setUserName] = useState("");
  const [driverLicenseNumber, setDriverLicenseNumber] = useState("");
  const [driverLicenseExpiry, setDriverLicenseExpiry] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [driverId, setDriverId]= useState("")

  async function onFormSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/sign-up`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user: { email, password } }),
        }
      );
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ auth: { email, password } }),
          }
        );
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        history.push("/login");
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  const letters = ["A", "B", "C", "D"];
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
          <FormLabel htmlFor="driverLicenseNumber">Driver License Number</FormLabel>
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
          <FormLabel htmlFor="driverLicenseExpiry">Driver License Expiry</FormLabel>
          <FormInput
            type="text"
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
            type="date"
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
            value={password}
            onChange={(e) => setDriverId(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="companyName">Company Name</FormLabel>
          <FormSelect
            type="text"
            name="company"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          >
            {letters.map((letter) => {
              return (
                <option key={letters.indexOf(letter)} value={letter}>
                  {letter}
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
