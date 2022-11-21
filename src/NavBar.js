import React from "react";
import { NavLink,link } from "react-router-dom";
import "./NavBar.css"
function NavBar(){
    return(
    <>
    <div className="Cmp">
    <NavLink to="./Home" className="Cmp1">Home</NavLink>
    <NavLink to="./Bollywood" className="Cmp1">Bollywood</NavLink>
    <NavLink to="./Technology" className="Cmp1">Technology</NavLink>
    <NavLink to="./Hollywood" className="Cmp1">Hollywood</NavLink>
    <NavLink to="./Fitness" className="Cmp1">Fitness</NavLink>
    <NavLink to="./Food" className="Cmp1">Food</NavLink>
    </div>
    <hr id="h12"/>
    </>
    )
}
export default NavBar;