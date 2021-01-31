import {Link} from 'react-router-dom'
import {NavLink, NavLinks, Logo, LoggedIn , LoggedInNav, SideNavLink, SideNavBarHeader, SideNavBar, LogOutLink} from './styles/App'

export function LoggedInNavBar() {
    return (
        <LoggedIn>
        <SideNavBar>            
            <h1 style={{textAlign: "center", fontFamily: "sans-serif", padding: "30px 0px"}}>Logo</h1>
            <h2 style={{textAlign: "center", fontFamily: "sans-serif", color: "cyan"}}>Dashboard</h2>

            <SideNavBarHeader>Account</SideNavBarHeader>
            <SideNavLink to='/company/companies/:id/edit'>Update Company details</SideNavLink >
            <SideNavLink to='/company/companies/:id/settings'>Settings</SideNavLink >

            <SideNavBarHeader>Drivers</SideNavBarHeader>
            <SideNavLink to='/company/companies/:id/drivers'>View all Drivers</SideNavLink >
            <SideNavLink to='/company/companies/:id/drivers/new'>Add a Driver</SideNavLink >
            <SideNavLink to='/company/companies/:id/drivers/:id/edit'>Edit a driver</SideNavLink >
            <SideNavLink to='/company/companies/:id/drivers/:id'>Remove a Driver</SideNavLink >

            <SideNavBarHeader>Vehicles</SideNavBarHeader>
            <SideNavLink to='/company/companies/:id/vehicles'>View Fleet</SideNavLink >
            <SideNavLink to='/company/companies/:id/vehicles/new'>Add a Vehicle</SideNavLink >
            <SideNavLink to='/company/companies/:id/vehicles/:id/edit'>Edit a Vehicle</SideNavLink >
            <SideNavLink to='/company/companies/:id/vehicles/:id'>Remove Vehicle</SideNavLink >
            <SideNavLink to='company/companies/:id/assign'>Assign Driver to Vehicle</SideNavLink >

            <SideNavBarHeader>Reports</SideNavBarHeader>
            <SideNavLink to='/company/companies/:id/reports'>View Reports</SideNavLink > 

            <SideNavBarHeader></SideNavBarHeader> 
            <LogOutLink to='/'>Log Out</LogOutLink >     
        </SideNavBar>
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


            
    )
}