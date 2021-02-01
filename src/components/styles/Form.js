import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 100px auto;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px auto;
`;

export const FormLabel = styled.label`
  font-family: sans-serif;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const FormInput = styled.input`
  height: 50px;
`;

export const SubmitInput = styled.input`
  height: 50px;
  margin: 60px auto;
  width: 40%;
  background-color: blue;
  font-size: 20px;
  color: white;
  border-radius: 15px;
`;

export const MainContent = styled.div`
  margin-top: 61px;
  width: 100%;
  background-color: lightgrey;
`;

export const FormSelect = styled.select`
  height: 50px;
`;
