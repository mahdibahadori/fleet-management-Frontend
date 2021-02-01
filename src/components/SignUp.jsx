import React, { useState } from "react";
import { LoggedOutNavbar } from "./LoggedOutNavbar";
import {Form, FormGroup, FormLabel, FormInput, SubmitInput, FormSelect} from "./styles/Form"
import {Footer} from './Footer'

export function SignUp({ history }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function onFormSubmit(event) {
//     event.preventDefault();
//     const body = { user: { email, password } };
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_BACKEND_URL}/sign-up`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(body),
//         }
//       );
//       if (response.status >= 400) {
//         throw new Error("incorrect credentials");
//       } else {
//         const response = await fetch(
//           `${process.env.REACT_APP_BACKEND_URL}/login`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ auth: { email, password } }),
//           }
//         );
//         const { jwt } = await response.json();
//         localStorage.setItem("token", jwt);
//         history.push("/subscriptions");
//       }
//     } catch (err) {
//       console.log(err.message);
//     }
//   }

const letters = ["A", "B", "C", "D"]
  return(
    <>
      <LoggedOutNavbar />
      <h1 style={{textAlign: "center", marginTop:'30px', fontFamily:"sans-serif", fontSize:"35px"}}>Create an account</h1>
      {/* {errMessage && <span>{errMessage}</span>} */}
      <Form>
      <FormGroup>
          <FormLabel htmlFor="FullName">Full Name</FormLabel>
          <FormInput
            type="text"
            name="FullName"
            id="FullName"
            placeholder="John Smith"
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
            placeholder="040 000 000"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup> 
        <FormGroup>
          <FormLabel htmlFor="LicenseNumber">Drivers License Number</FormLabel>
          <FormInput
            type="text"
            name="Drivers License Number"
            id="Drivers License Number"
            placeholder="1212121212"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>    
        <FormGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            type="email"
            name="email"
            id="email"
            placeholder="maicon@email.com"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />          
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>        
        <FormGroup>
          <FormLabel htmlFor="companyName">Company Name</FormLabel>
          <FormSelect
            type="text"
            name="company"
            id="companyName"           
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}           
          >
           {letters.map((letter) => {            
              return (
                <option key={letters.indexOf(letter)} value={letter}>
                  {letter}
                </option>  
              )              
           })}
          </FormSelect>
        </FormGroup>

        <SubmitInput id="submit" type="submit" value="Submit" />
      </Form>
      <Footer />
    </>
    );

}