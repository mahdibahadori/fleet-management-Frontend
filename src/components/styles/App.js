import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`  
  margin:0 auto;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoggedIn = styled.div`
  display: flex;
  width: 100%;  
`

export const LoggedInNav = styled.nav`
  display:flex;
  width:75%;
  justify-content:space-between;
  height: 15opx;
  margin-top: 20px;
`

export const SideNavBar = styled.div`
  display:flex;
  flex-direction:column;
  width:25%;
  background-color: grey;
  box-sizing: border-box;
`

export const SideNavBarHeader = styled.h1`
  font-family: sans-serif;
  color: cyan;
  background-color: black;
  padding-left: 20px;
  width: 100%;
  box-sizing: border-box;
`

export const SideNavLink = styled(Link)`
  padding-left: 20px;
  padding-bottom: 10px;
  font-family: sans-serif;
  text-decoration: none;
  font-size: 20px;
  color: lightblue;
`

export const LogOutLink = styled(Link)`
  text-align: center;
  font-family: sans-serif;
  text-decoration: none;
  font-size: 30px;
  margin-bottom: 30px;
  font-weight: bold;
  color: cyan;
`


export const Logo = styled.div`
  display: inline-block;
  width: 100px;
  font-family: sans-serif;
  text-align: center;
  margin-left:150px;
  font-size: 2.5rem;
  margin-top:0;
`

export const SmallLogo = styled.div`
  display: inline-block;
  font-size: 1.3rem;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text_decoration: none;
  text-align: center;

`

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
`

export const HomeImage = styled.img`
  width: 250px;
  height: 250px;
  border: 1px solid lightgrey;
`

export const CardText = styled.h3`
  text-align: center;
  padding: 10px;
  font-family: sans-serif;
  line-height: 40px;
  font-size: 23px;
  color: skyblue;
  
`

export const HomeCollection = styled.div`
  display: flex;
  width: 90%;
  margin: 150px auto 100px;
  justify-content: space-around;
`
export const Card1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`
export const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-top: 150px;
`
export const NewLine = styled.div`
   display: flex;
   height:100px;
   width:80%;
   margin:0 auto;
   justify-content: center;
   align-items:center;
`
 export const AppFooter = styled.div`  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
  height: 150px;
  background-color: lightblue;
`

export const LinkX = styled(Link)`
  margin: 0 40px;
  text-decoration: none;
`

export const AboutCollection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 150px;
  justify-content: space-between;
  margin:100px auto;
`

export const Card3 = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  justify-content: flex-start;
  align-items:center;
  margin: 50px auto;
`

export const Card4 = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  margin:0 auto;
  justify-content: flex-end;  
  margin: 50px auto;
`

export const AboutImage = styled.img`
  width: 20%;
  height: 100%;
  border: 1px solid lightgrey;
`

export const AboutText = styled.div`
 width: 50%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding:0 30px;
 font-family: sans-serif;
 height:300px;
 font-size: 25px;
 line-height:1.4em; 
 color: skyblue;
`
