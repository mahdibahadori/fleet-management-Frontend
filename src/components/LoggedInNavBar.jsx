import { NavLink, NavLinks, Logo, LoggedIn, LoggedInNav } from "./styles/App";
// import {SideNavBars} from './SideNavBars'

export function LoggedInNavBar() {
  return (
    <LoggedIn>
      {/* <SideNavBars /> */}
      <LoggedInNav>
        <Logo>
          <h1>Logo</h1>
        </Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Company">My Dashboard</NavLink>
          <NavLink to="/login">Sign Up</NavLink>
        </NavLinks>
      </LoggedInNav>
    </LoggedIn>
  );
}
