    import { SideNavBar, SideNavBarHeader, SideNavLink, LogOutLink} from './styles/App'


    export function SideNavBars () {

        return (

        <SideNavBar>            
            <h1 style={{textAlign: "center", fontFamily: "sans-serif", padding: "30px 0px"}}>Logo</h1>
            <h2 style={{textAlign: "center", fontFamily: "sans-serif", color: "cyan"}}>Dashboard</h2>

            <SideNavBarHeader>Account</SideNavBarHeader>
            <SideNavLink to='/edit'>Update Company details</SideNavLink >
            <SideNavLink to='/company/:id/settings'>Settings</SideNavLink >

            <SideNavBarHeader>Drivers</SideNavBarHeader>
            <SideNavLink to='/company/:id/drivers'>View all Drivers</SideNavLink >
            <SideNavLink to='/company/:id/drivers/new'>Add a Driver</SideNavLink >
            <SideNavLink to='/company/:id/drivers/:id/edit'>Edit a driver</SideNavLink >
            <SideNavLink to='/company/:id/drivers/:id'>Remove a Driver</SideNavLink >

            <SideNavBarHeader>Vehicles</SideNavBarHeader>
            <SideNavLink to='/company/:id/vehicles'>View Fleet</SideNavLink >
            <SideNavLink to='/company/:id/vehicles/new'>Add a Vehicle</SideNavLink >
            <SideNavLink to='/company/:id/vehicles/:id/edit'>Edit a Vehicle</SideNavLink >
            <SideNavLink to='/company/:id/vehicles/:id'>Remove Vehicle</SideNavLink >
            <SideNavLink to='company/:id/assign'>Assign Driver to Vehicle</SideNavLink >

            <SideNavBarHeader>Reports</SideNavBarHeader>
            <SideNavLink to='/company/:id/reports'>View Reports</SideNavLink > 

            <SideNavBarHeader></SideNavBarHeader> 
            <LogOutLink to='/'>Log Out</LogOutLink >     
        </SideNavBar>

        )

    }