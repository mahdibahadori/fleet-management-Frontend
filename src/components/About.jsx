import React from 'react'
import {Card3, Card4, AboutImage, AboutCollection, AboutText} from './styles/App'
import {LoggedOutNavbar} from './LoggedOutNavbar'
import {Link} from 'react-router-dom'
// import {Footer} from './Footer'

export function About() {
    return(
        <>
        <div>
             <LoggedOutNavbar />             
        </div>
        <AboutCollection>
            <h3 style={{textAlign: "center", padding: "20px", width: "70%", margin:"0 auto 100px", lineHeight: "30px", fontFamily:'sans-serif', fontSize:'25px',  color:"red"}}>Fleets keep track of the daily expenses and reports made by the drivers, such as fuel expenses, fines, vehicle conditions and much more. </h3>
            <Card3>
                <AboutImage src="" alt=""/>
                <AboutText>After Signing Up as Company, you will be directed to a profile page and just add the company’s details</AboutText>
            </Card3>
            <Card4>
                <AboutText>Add the details for each vechile, and fixed expenses such as insurance costs, registration costs</AboutText>
                <AboutImage src="" alt=""/>
            </Card4>
            <Card3>
                <AboutImage src="" alt=""/>
                <AboutText>The final step for setting-up is adding the drivers. Once the driver is added they will receive an email with link so they can login and starting use Fleets</AboutText>
            </Card3>
            <Card4>
                <AboutText>Everyday before the shift starts each driver will login into Fleets and select the vehicle is going to use, then add the odometer km. Before finishing the shift the drivers will fill up the form which contains fields about
expenses, incidents as well vehicle conditions</AboutText>
                <AboutImage src="" alt=""/>
            </Card4>
            <Card3>
                <AboutImage src="" alt=""/>
                <AboutText>On your dashboard you will be able to get reports for each vehicle, all the daily expenses, any mechanical faults or incidents.</AboutText>
            </Card3>
        <button style={{width:"300px", 
                        margin:"20px auto", 
                        height:"100px", 
                        fontFamily:"sans-serif", 
                        fontSize:"30px", 
                        display:"block",
                        padding:'20px', 
                        backgroundColor:"pink",
                        borderRadius:"15px"}}>
                <Link to='/sign-up' style={{textDecoration:"none"}}>Sign Up Here</Link>
        </button>
        </AboutCollection>
        
        </>
    );
}