import {
  SideNavBar,
  SideNavBarHeader,
  SideNavLink,
  LogOutLink,
} from "./styles/App";

export function SideNavBars() {
  return (
    <SideNavBar>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          padding: "30px 0px",
        }}
      >
        Logo
      </h1>
      <h2
        style={{ textAlign: "center", fontFamily: "sans-serif", color: "cyan" }}
      >
        Dashboard
      </h2>

      <SideNavBarHeader>Account</SideNavBarHeader>
      <SideNavLink to="/edit">Update Company details</SideNavLink>
      <SideNavLink to="/company/:id/settings">Settings</SideNavLink>

      <SideNavBarHeader>Drivers</SideNavBarHeader>
      <SideNavLink to="ViewDrivers">View all Drivers</SideNavLink>
      {/* <SideNavLink to="/EditDriver">Edit a driver</SideNavLink> */}
      {/* <SideNavLink to="/RemoveDriver">Remove a Driver</SideNavLink> */}

      <SideNavBarHeader>Vehicles</SideNavBarHeader>
      <SideNavLink to="/ViewFleet">View Fleet</SideNavLink>
      <SideNavLink to="/AddVehicle">Add a Vehicle</SideNavLink>
      {/* <SideNavLink to="/EditVehicle">
        Edit a Vehicle
      </SideNavLink> */}
      
      <SideNavLink to="company/:id/assign">
        Assign Driver to Vehicle
      </SideNavLink>

      <SideNavBarHeader>Reports</SideNavBarHeader>
      <SideNavLink to="/company/:id/reports">View Reports</SideNavLink>

      <SideNavBarHeader></SideNavBarHeader>
      <LogOutLink to="/">Log Out</LogOutLink>
    </SideNavBar>
  );
}
