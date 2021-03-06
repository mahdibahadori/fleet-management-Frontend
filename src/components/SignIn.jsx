import React, { useState } from "react";
import { LoggedOutNavbar } from "./LoggedOutNavbar";
import {
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  SubmitInput,
} from "./styles/Form";
import { Footer } from "./Footer";


export function SignIn({history}) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  let companyId = history.params.companyId

  async function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      auth: { email, password },
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        history.push("/");
      }
      fetch(`${process.env.REACT_APP_BACKEND_URL}/companies/${companyId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (err) {
      setErrMessage(err.message);
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
        Log In
      </h1>
      {errMessage && <span>{errMessage}</span>}
      <Form onSubmit={onFormSubmit}>
        <FormGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            type="email"
            name="email"
            id="email"
            placeholder="maicon@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <SubmitInput id="submit" type="submit" value="Submit" />
      </Form>
      <Footer />
    </>
  );
}
