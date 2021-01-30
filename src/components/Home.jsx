import React from 'react'
import {Link} from 'react-router-dom'
import {LoggedOutNavbar} from './LoggedOutNavbar'
import {HomeImage, HomeCollection, Card1, Card2, CardText, NewLine} from './styles/App'
import {Footer} from './Footer'

export function Home() {

    return( 
    <>
        <div>
            <LoggedOutNavbar /> 
        </div> 
        <HomeCollection>
            <Card1>
                <HomeImage src="" alt=""/>
                <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, et?</CardText>
            </Card1>
            <Card2>
                <HomeImage src="" alt=""/>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, quo!</CardText>
            </Card2>
            <Card1>
                <HomeImage src="" alt=""/>
                <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nisi?</CardText>
            </Card1>
            <Card2>
                <HomeImage src="" alt=""/>
                <CardText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, maxime.</CardText>
            </Card2>
        </HomeCollection> 
        <h1 style={{textAlign: "center", fontFamily: "sans-serif", fontSize:'25px'}}>And Much More...</h1> 
        <NewLine>
            <h1 style={{textAlign: "center", fontFamily: "sans-serif", fontSize:"25px"}}>SIMPLE AND EASY TO USE, LEARN HOW IT WORKS</h1>
            <button style={{width:"200px", marginLeft:"20px", height:"50%", fontFamily:"sans-serif", fontSize:"30px"}}>
                <Link to='/About' style={{textDecoration:"none"}}>Here</Link>
            </button>
        </NewLine>
        <Footer />
        
    </>

   );
}