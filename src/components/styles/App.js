import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  margin: 0 auto;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoggedIn = styled.div`
  display: flex;
  width: 100%;
`;

export const LoggedInNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  margin-top: 20px;
`;

export const SideNavBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: grey;
  box-sizing: border-box;
`;

export const SideNavBarHeader = styled.h1`
  font-family: sans-serif;
  color: cyan;
  background-color: black;
  padding-left: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const SideNavLink = styled(Link)`
  padding-left: 20px;
  padding-bottom: 10px;
  font-family: sans-serif;
  text-decoration: none;
  font-size: 20px;
  color: lightblue;
`;

export const LogOutLink = styled(Link)`
  text-align: center;
  font-family: sans-serif;
  text-decoration: none;
  font-size: 30px;
  margin-bottom: 30px;
  font-weight: bold;
  color: cyan;
`;

export const Logo = styled.div`
  display: inline-block;
  width: 100px;
  font-family: sans-serif;
  text-align: center;
  margin-left: 150px;
  font-size: 2.5rem;
  margin-top: 0;
`;

export const SmallLogo = styled.div`
  display: inline-block;
  font-size: 1.3rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text_decoration: none;
  text-align: center;
`;

export const NavLink = styled(Link)`
  margin-right: 40px;
  height: 60px;
  color: crimson;
  font-family: sans-serif;
  text-decoration: none;
  font-size: 30px;
`;

export const NavLinks = styled.div`
  margin-right: 150px;
`;

export const HomeImage = styled.img`
  width: 250px;
  height: 250px;
  border: 1px solid lightgrey;
`;

export const CardText = styled.h3`
  text-align: center;
  padding: 10px;
  font-family: sans-serif;
  line-height: 40px;
  font-size: 23px;
  color: skyblue;
`;

export const HomeCollection = styled.div`
  display: flex;
  width: 90%;
  margin: 150px auto 100px;
  justify-content: space-around;
`;
export const Card1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;
export const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-top: 150px;
`;
export const NewLine = styled.div`
  display: flex;
  height: 100px;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
export const AppFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 150px;
  background-color: lightblue;
`;

export const LinkX = styled(Link)`
  margin: 0 40px;
  text-decoration: none;
`;

export const AboutCollection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 150px;
  justify-content: space-between;
  margin: 100px auto;
`;

export const Card3 = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  margin: 50px auto;
`;

export const Card4 = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  justify-content: flex-end;
  margin: 50px auto;
`;

export const AboutImage = styled.img`
  width: 20%;
  height: 100%;
  border: 1px solid lightgrey;
`;

export const AboutText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  font-family: sans-serif;
  height: 300px;
  font-size: 25px;
  line-height: 1.4em;
  color: skyblue;
`;
export const CompanyPage = styled.div`
  display: flex;
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  align-items: center;
`;

export const FleetDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  overflow-y: scroll;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 350px;
  border: 1px solid grey;
  border-radius: 30px;
  margin: 40px 0;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 20px;
  box-shadow:   1px 3px 10px grey;
`;


export const Card5 = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 250px;
  border: 1px solid grey;
  border-radius: 30px;
  margin: 30px 0;
  justify-content: flex-start;
  align-items: flex-start;
  padding:20px 0px;
  box-shadow:   1px 3px 10px grey;
`;


export const CardContent1 = styled.div`
  width: 80%;
  text-align: left;
  margin: 0 auto;
  font-family: sans-serif;
  font-size: 22px;
  margin-top: 10px;
`;


export const CardLinks = styled.div`
  display: flex;
  width: 90%;
  height: 50px;
  margin: 40px auto;
  justify-content: space-evenly;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: white;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-evenly;
  width: 90%;
  margin: 0 auto;
  padding-left: 60px;
  height: 650px;
  box-sizing: border-box;  
  border-radius: 20px;  
  box-shadow:   2px 3px 7px grey;
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid gray;
  margin-right:70px;
  
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const Div4 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const Div5 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const Div6 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 50px;
  
`;

export const DivText = styled.h2`
  font-family: sans-serif;
  color: blue;
  margin-right: 80px;
  font-weight: 300;
`;
