import React, { FunctionComponent } from 'react'
import { NavLink } from "react-router-dom";

interface Props {

}

export const Header: FunctionComponent<Props> = () => {

    const Loginbutton= () =>{

        const count : boolean = false;
        
        if(count ==! true){
            return <div> 
                <button ><NavLink className="btn" to="/signout">logout</NavLink></button>      
            </div>
        }
        else{
            return <div>  
                    <button ><NavLink className="btn" to="/signin">login</NavLink></button>
                    
                </div>
        }
    
    }

    return (
        <>
            <header className="header">

                <div id="menu-btn" className="fas fa-bars"></div>

                <NavLink className="logo" to="/"> Bike<span>Book</span></NavLink>



                <nav className="navbar">
                    <NavLink  to="/">Home</NavLink>
                    <NavLink  to="/rentbike">Rent Bikes</NavLink>
                    <a href="#services">Testimonial</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div id="login-btn">
                    <Loginbutton/>
                
                </div>

            </header> 
        </>
    )
}
