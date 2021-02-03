import { NavLink, NavLinks, Logo, LoggedIn, LoggedInNav } from "./styles/App";
import { useHistory} from "react-router-dom";


export function LoggedInNavBar() {

  const history = useHistory();

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/login")
  }

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
          <NavLink onClick={logout} to="/">Log Out</NavLink>
        </NavLinks>
      </LoggedInNav>
    </LoggedIn>
  );
}
